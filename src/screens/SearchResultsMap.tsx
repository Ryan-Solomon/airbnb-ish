import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  FlatList,
  useWindowDimensions,
  ViewToken,
  Text,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styled from 'styled-components/native';
import { MarkerComponent } from '../components/Marker';
import { PostCarousel } from '../components/PostCarousel';
import { listPosts } from '../graphql/queries';
import { TPost } from '../types/appTypes';
import { TStatus } from './SearchResults';

type TViewableItemsCB = (info: {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}) => void;

export const SearchResultsMap = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const windowWidth = useWindowDimensions().width;
  const flatListRef = useRef<FlatList<TPost>>();
  const [feedData, setFeedData] = React.useState<TPost[]>([]);
  const [status, setStatus] = React.useState<TStatus>('pending');
  const mapRef = useRef<MapView | null>(null);
  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewChanged = useRef<TViewableItemsCB>(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedId || !flatListRef) return;
    const idx = feedData.findIndex((item) => item.id === selectedId);
    flatListRef?.current?.scrollToIndex({ index: idx });

    const selectedPlace = feedData[idx];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    mapRef?.current?.animateToRegion(region);
  }, [selectedId]);

  React.useEffect(() => {
    const getPosts = async () => {
      setStatus('pending');
      try {
        const res = (await API.graphql(graphqlOperation(listPosts))) as any;
        const data = res.data.listPosts.items as TPost[];
        setFeedData(data);
        setStatus('fulfilled');
      } catch (e) {
        console.log(e.message);
        setStatus('error');
      }
    };

    getPosts();
  }, []);

  if (status === 'pending') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading..</Text>
      </View>
    );
  }

  if (status === 'error') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  const setSelected = (id: string) => {
    setSelectedId(id);
  };
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <MapView
        ref={mapRef}
        style={{ width: '100%', height: '100%' }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3915637,
          longitude: -16.6291304,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
      >
        {feedData.map((place) => (
          <MarkerComponent
            isSelected={place.id === selectedId}
            onPress={setSelected}
            key={place.id}
            mark={place}
          />
        ))}
      </MapView>
      <PostCarouselContainer>
        <FlatList
          // @ts-ignore
          ref={flatListRef}
          snapToInterval={windowWidth - 100}
          snapToAlignment='center'
          decelerationRate='fast'
          data={feedData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PostCarousel post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </PostCarouselContainer>
    </View>
  );
};

const PostCarouselContainer = styled.View`
  position: absolute;
  bottom: 0;
`;

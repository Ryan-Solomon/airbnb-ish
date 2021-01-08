import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TSearchData } from '../../assets/data/search';

type TProps = {
  searchData: TSearchData;
};

export const LocationCard: FC<TProps> = ({ searchData }) => {
  return <SContainer></SContainer>;
};

const SContainer = styled.View``;

// Finish search data component

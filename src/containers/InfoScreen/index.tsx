import React, { useContext } from 'react';
import { TagInfo } from '../../components/TagInfo';
import { Favorite } from '../../components/Favorite';
import { TagsContext } from '../../pages/Home';
import './index.css';

interface IInfoScreen {}

export const InfoScreen = ({}: IInfoScreen) => {
  const { isFavoriteMode } = useContext(TagsContext);
  return <div className="info-screen">{isFavoriteMode ? <Favorite /> : <TagInfo />}</div>;
};

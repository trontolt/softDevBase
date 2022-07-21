import React, { useContext } from 'react';
import { TagInfo } from '../../components/TagInfo';
import { Favorite } from '../../components/Favorite';
import { TagsContext } from '../../pages/Home';
import './index.css';

interface IInfoScreen {}

export const InfoScreen = ({}: IInfoScreen) => {
  const { homeValues } = useContext(TagsContext);
  const { isFavoriteMode, selectedTag } = homeValues;
  return (
    <div className="info-screen">
      {isFavoriteMode ? <Favorite /> : <TagInfo tagId={selectedTag} />}
    </div>
  );
};

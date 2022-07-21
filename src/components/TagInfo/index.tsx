import React from 'react';
import { tagsData } from '../../constants/tagsData';
import './index.css';

export const TagInfo = ({ tagId }: { tagId: number }) => {
  const getTagInfo = () => tagsData.find((tag) => tag.id === tagId);
  const { title, definition, shortInfo, additionalInfo } = getTagInfo();

  return (
    <div className="tag-info">
      <h3>{title}</h3>
      <section className="info--section">{definition}</section>
      <section>{shortInfo}</section>
      <section>{additionalInfo}</section>
    </div>
  );
};

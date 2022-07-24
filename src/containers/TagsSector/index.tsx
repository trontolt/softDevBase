import React, { useContext } from 'react';
import { Tag } from '../../components/Tag';
import { tagsData } from '../../constants/tagsData';
import { TagsContext } from '../../pages/Home';
import './index.css';

export const TagsSector = () => {
  const { homeValues, changeHomeValues } = useContext(TagsContext);
  const selectTag = (id: number) => {
    changeHomeValues({ selectedTag: id });
  };
  const renderTags = () =>
    tagsData.map((tagData) => {
      if (tagData.topicId === homeValues.selectedCategory) {
        const { id } = tagData;
        return <Tag key={id} tagData={tagData} selectTag={selectTag} />;
      }
      return null;
    });
  return <div className="tags-sector">{renderTags()}</div>;
};

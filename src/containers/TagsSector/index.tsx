import React, { useContext } from 'react';
import { Tag } from '../../components/Tag';
import { tagsData } from '../../constants/tagsData';
import { TagsContext } from '../../pages/Home';
import './index.css';

export const TagsSector = () => {
  const { homeValues } = useContext(TagsContext);
  const renderTags = () =>
    tagsData.map((tagData) => {
      if (tagData.topicId === homeValues.selectedCategory) {
        return <Tag key={tagData.id} tagData={tagData} />;
      }
      return null;
    });
  return <div className="tags-sector">{renderTags()}</div>;
};

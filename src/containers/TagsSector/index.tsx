import React from 'react';
import { Tag } from '../../components/Tag';
import { tagsData } from '../../constants/tagsData';
import './index.css';

export const TagsSector = () => {
  const renderTags = () => tagsData.map((tagData) => <Tag tagData={tagData} />);
  return <div className="tags-sector">{renderTags()}</div>;
};

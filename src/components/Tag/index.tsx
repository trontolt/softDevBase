import React from 'react';
import { ITag } from '../../interfaces/tags';
import './index.css';

export const Tag = ({ tagData }: { tagData: ITag }) => {
  return <div className="tag">{tagData.title}</div>;
};

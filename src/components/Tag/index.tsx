import React from 'react';
import './index.css';

export interface ITag {
  title: string;
  definition: string;
  shortInfo: string;
  additionalInfo: string | HTMLTemplateElement;
  topicId: number;
}

export interface ITopic {
  id: number;
  name: string;
  additionalInfo: string;
}

export const Tag = ({ tagData }: { tagData: ITag }) => {
  return <div className="tag">{tagData.title}</div>;
};

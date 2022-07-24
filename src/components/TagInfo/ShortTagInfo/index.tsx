import React from 'react';
import { ITag } from '../../../interfaces/tags';
import '../index.css';

type IShortTagInfo = Omit<ITag, 'id' | 'additionalInfo' | 'topicId'>;

export const ShortTagInfo = ({ title, definition, shortInfo }: IShortTagInfo) => (
  <>
    <h3>{title}</h3>
    <section className="info--section">{definition}</section>
    <section dangerouslySetInnerHTML={{ __html: shortInfo }}></section>
  </>
);

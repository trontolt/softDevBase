import React, { useEffect } from 'react';
import { ITag } from '../../interfaces/tags';
import './index.css';

export const Tag = ({ tagData, selectTag }: { tagData: ITag; selectTag: any }) => {
  const { id, title } = tagData;
  return (
    <div className="tag" onClick={() => selectTag(id)}>
      {title}
    </div>
  );
};

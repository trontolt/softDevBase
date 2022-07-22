import React from 'react';
import { ITag } from '../../../interfaces/tags';
import { ShortTagInfo } from '../../TagInfo/ShortTagInfo';
import './index.css';

export const ShortModalModeScreen = ({ selectedTag }: { selectedTag: ITag }) => {
  return (
    <div className="short-modal-screen">
      <ShortTagInfo
        title={selectedTag.title}
        definition={selectedTag.definition}
        shortInfo={selectedTag.shortInfo}
      />
    </div>
  );
};

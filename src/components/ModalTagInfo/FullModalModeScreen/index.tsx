import React from 'react';
import { ITag } from '../../../interfaces/tags';
import { ShortTagInfo } from '../../TagInfo/ShortTagInfo';
import './index.css';

export const FullModalModeScreen = ({ selectedTag }: { selectedTag: ITag }) => {
  return (
    <div className="full-modal-screen">
      <ShortTagInfo
        title={selectedTag.title}
        definition={selectedTag.definition}
        shortInfo={selectedTag.shortInfo}
      />
      <hr />
      <section dangerouslySetInnerHTML={{ __html: selectedTag.additionalInfo as string }}></section>
    </div>
  );
};

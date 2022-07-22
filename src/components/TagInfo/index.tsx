import React, { useState } from 'react';
import { tagsData } from '../../constants/tagsData';
import { ModalMode, ModalTagInfo } from '../ModalTagInfo';
import { ShortTagInfo } from './ShortTagInfo';

import './index.css';

export const TagInfo = ({ tagId }: { tagId: number }) => {
  const [isModalInfoOpen, setModalInfoOpen] = useState(false);
  const [infoMode, setInfoMode] = useState(ModalMode.shortInfo);
  const selectedTag = tagsData.find((tag) => tag.id === tagId);
  const { title, definition, shortInfo } = selectedTag;
  const openTagModal = () => setModalInfoOpen(true);

  const closeTagModal = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setModalInfoOpen(false);
  };

  return (
    <div className="tag-info" onClick={openTagModal}>
      <ShortTagInfo title={title} definition={definition} shortInfo={shortInfo} />
      {isModalInfoOpen && (
        <ModalTagInfo
          mode={infoMode}
          changeMode={setInfoMode}
          closeModal={closeTagModal}
          selectedTag={selectedTag}
        />
      )}
    </div>
  );
};

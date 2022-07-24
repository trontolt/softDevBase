import React from 'react';
import { ShortModalModeScreen } from './ShortModalModeScreen';
import { FullModalModeScreen } from './FullModalModeScreen';
import './index.css';
import { ITag } from '../../interfaces/tags';

export enum ModalMode {
  shortInfo = 0,
  fullInfo = 1
}
interface IModalTagInfo {
  mode: ModalMode;
  closeModal: (e: React.SyntheticEvent) => void;
  changeMode: React.Dispatch<React.SetStateAction<ModalMode>>;
  selectedTag: ITag;
}

export const ModalTagInfo = ({ mode, changeMode, closeModal, selectedTag }: IModalTagInfo) => {
  const setShortMode = () => {
    changeMode(ModalMode.shortInfo);
  };
  const setFullMode = () => {
    changeMode(ModalMode.fullInfo);
  };

  return (
    <div className="modal-tag-info">
      <div className="modal-tag-info--inner">
        <div className="modal-tag-info--header">
          <div className="header--tab-mode">
            <button className="modal-tag-info--btn" onClick={setShortMode}>
              Short mode
            </button>
            <button className="modal-tag-info--btn" onClick={setFullMode}>
              Full mode
            </button>
          </div>
          <button className="header--close-btn" onClick={closeModal}>
            X
          </button>
        </div>
        {mode === ModalMode.shortInfo ? (
          <ShortModalModeScreen selectedTag={selectedTag} />
        ) : (
          <FullModalModeScreen selectedTag={selectedTag} />
        )}
      </div>
    </div>
  );
};

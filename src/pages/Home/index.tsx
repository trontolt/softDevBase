import React, { createContext, useState } from 'react';
import { HeaderHome } from '../../components/HeaderHome';
import { Aside } from '../../containers/Aside';
import { InfoScreen } from '../../containers/InfoScreen';
import { TagsSector } from '../../containers/TagsSector';
import { DescriptionType } from '../../constants/enums';

import './index.css';

const defaultState = {
  selectedCategory: 0 as number,
  selectedTag: 0 as number,
  isDescriptionModalOpen: false as boolean,
  isFavoriteMode: false,
  descriptionModalType: DescriptionType.shortDescription as DescriptionType
};
type IHomeState = typeof defaultState;
type IStateValue<T> = {
  [Key in keyof T]: T[Key];
};

export const TagsContext = createContext(null);

export const Home = () => {
  const [homeValues, setHomeValues] = useState<IHomeState>(defaultState);
  const changeHomeValues = (homeValue: IStateValue<IHomeState>) => {
    setHomeValues({ ...homeValues, ...homeValue });
  };

  return (
    <TagsContext.Provider
      value={{
        homeValues,
        changeHomeValues
      }}>
      <div className="home">
        <HeaderHome />
        <div className="home--body">
          <Aside />
          <div className="body--right-side">
            <InfoScreen />
            <TagsSector />
          </div>
        </div>
      </div>
    </TagsContext.Provider>
  );
};

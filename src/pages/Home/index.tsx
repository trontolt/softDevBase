import React, { createContext, useState } from 'react';
import { HeaderHome } from '../../components/HeaderHome';
import { DescriptionType } from '../../constants/enums';
import './index.css';

const defaultState = {
  selectedCategory: null as null | number,
  selectedTag: null as null | number,
  isDescriptionModalOpen: false as boolean,
  descriptionModalType: DescriptionType.shortDescription as DescriptionType
};
type IHomeState = typeof defaultState;
type IStateValue<T> = {
  [Key in keyof T]: T[Key];
};

export const Home = () => {
  const TagsContext = createContext(null);
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
        <div className="home--body">home--body</div>
      </div>
    </TagsContext.Provider>
  );
};

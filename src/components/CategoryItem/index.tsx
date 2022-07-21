import React from 'react';
import { ITopic } from '../../interfaces/tags';
import './index.css';

export interface ICategoryItem {
  category: ITopic;
  setCategoryId: (id: number) => void;
  selectedCategoryId: number | null;
}

export const CategoryItem = ({ category, setCategoryId, selectedCategoryId }: ICategoryItem) => {
  const { id, name } = category;
  const isSelectedStyle = selectedCategoryId === id && 'selected';
  return (
    <li className={`category-item ${isSelectedStyle}`} onClick={() => setCategoryId(id)}>
      {name}
    </li>
  );
};

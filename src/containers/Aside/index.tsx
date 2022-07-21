import React, { useContext } from 'react';
import { TagsContext } from '../../pages/Home';
import { CategoryItem } from '../../components/CategoryItem';
import { topicsData } from '../../constants/topicsData';
import { tagsData } from '../../constants/tagsData';
import './index.css';

export const Aside = () => {
  const { homeValues, changeHomeValues } = useContext(TagsContext);

  const getFirstTagIdFromCategory = (id: number) => {
    const firstTag = tagsData.find((tag) => tag.topicId === id);
    return firstTag.id;
  };
  const changeCategory = (id: number) =>
    changeHomeValues({ selectedCategory: id, selectedTag: getFirstTagIdFromCategory(id) });

  const renderCategories = () => (
    <ol>
      {topicsData.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          setCategoryId={changeCategory}
          selectedCategoryId={homeValues.selectedCategory}
        />
      ))}
    </ol>
  );
  return (
    <aside className="aside">
      <h4>Categories</h4>
      {renderCategories()}
    </aside>
  );
};

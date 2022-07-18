import React, { useContext } from 'react';
import { TagsContext } from '../../pages/Home';
import './index.css';

export const Aside = () => {
  const { homeValues, changeHomeValues } = useContext(TagsContext);
  return (
    <aside className="aside">
      <h4>Epcot Center</h4>
      <p>
        Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
        international pavilions, award-winning fireworks and seasonal special events.
      </p>
    </aside>
  );
};

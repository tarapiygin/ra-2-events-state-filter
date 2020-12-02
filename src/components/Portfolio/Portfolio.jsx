import React, { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';

export default function Portfolio(props) {
  const [state, setFilter] = useState({ projects: props.projects, selectedFilter: 'All' });
  const onSelectFilter = (filter) => {
    setFilter((prev) => {
      const selectedFilter = filter.target.innerText;
      const projects = selectedFilter === 'All' ? props.projects : props.projects.filter(p => p.category === selectedFilter);
      return { selectedFilter, projects };
    });
  }

  return (
    <div className='portfolio'>
      <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={state.selectedFilter}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={state.projects} />
    </div>
  )
}
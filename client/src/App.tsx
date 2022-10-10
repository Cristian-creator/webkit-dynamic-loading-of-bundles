import React from 'react';
import './App.css';
import ComponentsSwitcher from './components/ComponentsSwitcher/ComponentsSwitcher';
import { ModuleValueType } from './interfaces/Modules';
import config from './config';

function App() {
  const { moduleParamValues } = config;

  // get modules parameter
  const searchString = window.location.search;
  const modulesParam = new URLSearchParams(searchString).get('modules')?.split(',');

  // validate params values
  const filteredModulesParam = modulesParam?.filter((moduleValue) => {
    const moduleValueExists = !!moduleParamValues.filter((val) => val === moduleValue)?.length;

    return moduleValueExists;
  }) as ModuleValueType[];

  const validatedModulesParam = filteredModulesParam?.join(',');

  return (
    <div className="App">
      <ComponentsSwitcher modules={ validatedModulesParam } />
    </div>
  );
}

export default App;

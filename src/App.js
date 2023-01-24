import React, { createContext } from 'react';
import ChildA from './components/ChildA';

// in contex api ther are three things create, provider, consumer
// step 1 - create provider 
//step 2 - import context (nameContext, genderContext, salaryContext)
//step 3 - 
export const nameContext = createContext();
export const genderContext = createContext();
export const salaryContext = createContext();

const App = () => {
  const name = "akshay";
  const gender = "male";
  const salary = 1_00_000;
  return (
    <div>
      <nameContext.Provider value={name}>
        <genderContext.Provider value={gender}>
          <salaryContext.Provider value={salary}>
            <ChildA />
          </salaryContext.Provider>
        </genderContext.Provider>
      </nameContext.Provider>
    </div>
  )
}

export default App;

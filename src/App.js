import React, { useState } from 'react';
import { LangContext } from './Context.js';
import LanguageSelector from './Components/LanguageSelector.js';
import Page from './Components/Page.js';

const App = (props) => {
  const [ lang, setLang ] = useState(localStorage.getItem("lang") || "en");
  document.documentElement.setAttribute("lang", lang);

  return (
    <LangContext.Provider value={[ lang, setLang]}>
      <Page />  
      <LanguageSelector />
    </LangContext.Provider>
  )
}

export default App;

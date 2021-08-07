import React, { useContext } from 'react';
import { LangContext } from '../Context';

const LanguageSelector = (props) => {
  
  const [ lang, setLang ] = useContext(LangContext);

  let handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
  }

  return (
    <select defaultValue={lang==='en'? 'en': 'mm'} onChange={handleChange}>
      <option value="en"> English </option>
      <option value="mm"> Myanmar </option>
    </select>
  )
}
export default LanguageSelector;
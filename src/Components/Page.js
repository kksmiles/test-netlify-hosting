import React from 'react';
import { content } from '../Content/login.js';
import { LangContext } from '../Context.js';

const Page = (props) => {

  const [ lang ] = React.useContext(LangContext);

  return (
    <div>
      <h1> {content[lang]['title']} </h1>
      <p> {content[lang]['paragraph']} </p>
      <p> Hello Steven </p>
    </div>
  )
}
export default Page;

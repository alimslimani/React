import React from 'react';
import ReactDom from 'react-dom';
import AuthorQuiz from './AuthorQuiz';

it('renders without crashing', ()=>{
  const div = document.createElement('div');
  ReactDom.unmountComponentAtNode(div);
});

import React from 'react';
import './style.css';
import SampleComponent from './SampleComponent';
import {Todo} from './Todo';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* <SampleComponent bgColor="red" a={10} b={20} border="dotted"/>
      <SampleComponent bgColor="blue" a={44} b={28} border="solid"/>
      <SampleComponent bgColor="purple" a={454} b={445}border="dashed" />
      <SampleComponent bgColor="yellow" a={4545} b={4551} /> */}
      <Todo/>
    </div>
  );
}

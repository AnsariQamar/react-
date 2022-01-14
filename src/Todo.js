import React, { useState } from 'react';

export function Todo() {
  let [arr, setArr] = useState([]);
  let [text, setText] = useState('');
  let add = () => {
    if (text !== '') {
      setArr([...arr, text]), setText('');
    }
  };
  console.log('render hua');
  return (
    <div>
      <input
        type="text"
        placeholder="Add some Text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={add}>Add</button>
      <div>
        Todos:
        {arr.map(function (ele) {
          return <p>{ele}</p>;
        })}
      </div>
    </div>
  );
}

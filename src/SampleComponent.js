import React from 'react';

export default function SampleComponen({ bgColor, a, b, border }) {
  let styleObj = {
    backgroundColor: bgColor,
  };
  let br = {
    border: border,
  };
  let obj = {
    name: 'Ansari Qamar',
  };

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arr2 = [
    <p>1</p>,
    <p>2</p>,
    <p>3</p>,
    <p>4</p>,
    <p>5</p>,
    <p>6</p>,
    <p>7</p>,
    <p>8</p>,
    <p>9</p>,
  ];

  return (
    <>
      <div style={styleObj}>Heading</div>
      <div>Value of a is:{a}</div>
      <div>Value of b is:{b}</div>
      <div>
        sum of {a} and {b} is:{a + b}
      </div>
      <div>
        Multiplication of {a} and {b} is: {a * b};
      </div>
      <p>Object is not Valid:{obj.name}</p>
      <p> But array is: {arr}</p>
      <p> But array Obect is :{arr2}</p>
      <hr style={br} />
    </>
  );
}

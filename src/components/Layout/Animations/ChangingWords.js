import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    opacity: 0;
    transform:translateY(-50%);
  }
  2% {
    opacity: 1;
    transform:translateY(0);
  }
  18% {
    opacity: 1;
    transform:translateY(0px);
  }
  20% {
    opacity: 0;
    transform:translateY(50px);
  }
  100% {
    opacity: 0;
    transform: translateY(50px)
  }
`;

const animationChilds = (i, duration) =>
  `
    &:nth-child(${i + 1}) {
      animation-delay: ${duration * 2}s;
    }
  `;
const getAnimation = length => {
  let str = '';
  for (let index = 0; index < length; index += 1) {
    str += animationChilds(index, index);
  }
  return str;
};

const ChangingWord = ({ words }) => {
  const [length, setLength] = useState(Number);
  const [arr, setArr] = useState([]);


  useEffect(() => {
    setArr(words);
  }, [words]);

  useEffect(() => {
    setLength(arr.length);
  }, [arr]);

  const AnimationWrapper = styled.div`
    position: relative;
    padding: 20px 0;
    span {
      font-size: 19px;
      position: absolute;
      top: 0;
      overflow: hidden;
      animation: ${animate} ${length * 2}s linear infinite;
      opacity: 0;
      ${getAnimation(length)}
    }
  `;

  return (
    <AnimationWrapper>
      {arr.map(item => (
        <span key={item.id}>{item.name}</span>
      ))}
    </AnimationWrapper>
  );
};

ChangingWord.propTypes = {
  words: PropTypes.array.isRequired,
};

export default ChangingWord;

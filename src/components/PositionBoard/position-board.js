import React from 'react';
import styled from 'styled-components';

const Board = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Square = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  width: 25%;
`;

const PositionBoard = ({ coords: {x, y} = { x: 0, y: 0 }}) => (
  <Board>
    <Square>X1</Square>
    <Square>{x}</Square>
    <Square>Y</Square>
    <Square>{y}</Square>
  </Board>
);

export default PositionBoard;

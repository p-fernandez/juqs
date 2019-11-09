import React, {
  useRef,
} from 'react';
import styled from 'styled-components';

import useMouseRightClick from '../../hooks/use-mouse-right-click';

const Circle = styled.div`
  background-color: red;
  border: 1px solid black;
  border-radius: 50%;
  height: 10px;
  left: ${props => props.x - 5 }px;
  position: absolute;
  top: ${props => props.y - 5 }px;
  width: 10px;

  :hover {
    background-color: white;
    border: 1px solid black;
		cursor: pointer;
    z-index: 9999;
	}
`;

const Point = ({ hash, x, y }) => {
  const ref = useRef();
  const clicked = useMouseRightClick(ref);
  console.log(clicked);
  
  return (
    <Circle ref={ref}
      key={hash}
      x={x}
      y={y}
    />);
};

export default Point;

import React, {
  useEffect,
  useRef,
} from 'react';
import styled from 'styled-components';

import useFetch from '../../hooks/use-fetch';
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

const Point = ({ id, x, y }) => {
  const ref = useRef();
  const clicked = useMouseRightClick(ref);

  useEffect(() => {
    if (clicked) {
     const options = {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      };
      useFetch(`http://localhost:8080/api/points/${id}`, options);
    }
  }, [clicked, id]);
  
  return (
    <Circle ref={ref}
      key={id}
      x={x}
      y={y}
    />);
};

export default Point;

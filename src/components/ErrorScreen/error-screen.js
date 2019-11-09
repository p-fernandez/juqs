import React from 'react';
import styled from 'styled-components';

const Detail = styled.div`
  color: maroon;
  font-size: 10rem;
  font-style: italic;
  font-weight: bold;
`;

const StatusCode = styled.div`
  color: red;
  font-size: 10rem;
  font-weight: bold;
`;

const Screen = styled.div`
  border: 20px solid red;
  height: 100vh;
  width: 100%;
`;

const ErrorScreen = ({ error }) => {
  const { errors: [first] } = error; 
  const { detail, statusCode } = first;
  return (
    <Screen>
      <StatusCode>
        {statusCode}
      </StatusCode>
      <Detail>
        {detail}
      </Detail>
    </Screen>
  );
};

export default ErrorScreen;

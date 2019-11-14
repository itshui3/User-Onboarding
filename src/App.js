import React from 'react';
import styled from 'styled-components';

import './App.css';

import {Jumbotron} from 'reactstrap';

import InputForm from './components/Form';

const FlexJumbotron = styled(Jumbotron)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <FlexJumbotron>
      <h1>This is a form</h1>
      <InputForm>

      </InputForm>
    </FlexJumbotron>
  );
}

export default App;

import React, {useState} from 'react';
import styled from 'styled-components';
import {Route} from 'react-router-dom';

import './App.css';

import {Jumbotron} from 'reactstrap';

import InputForm from './components/Form';
import ShowUsers from './components/ShowUsers';

const FlexJumbotron = styled(Jumbotron)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {

  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState();

  return (
    <FlexJumbotron>
      <h1>This is a form</h1>
      <Route path="/" render={props => <InputForm {...props} setUsers={setUsers} users={users} status={status} />} />
      <Route path="/" render={props => <ShowUsers {...props} users={users} />} />
    </FlexJumbotron>
  );
}

export default App;

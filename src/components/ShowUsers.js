import React, {useState} from 'react';

import {Card, CardBody, CardTitle, CardText} from 'reactstrap';

const ShowUsers = ({users}) => {

  return (
    users.map(user => (
      <Card key={user.id}>
        <CardTitle>{user.name}</CardTitle>
        <CardBody>
          <CardText>{user.email}</CardText>
          <CardText>{user.password}</CardText>
          {
            user.tos
              ? <CardText>Agreed with ToS</CardText>
              : <CardText>Is a rebel</CardText>
          }
        </CardBody>
      </Card>
    ))
  )
}

export default ShowUsers;

// name, email, password, tos
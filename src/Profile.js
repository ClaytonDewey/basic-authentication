import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import Container from './Container';

const Profile = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Container>
          <h1>Profile</h1>
          <h2>{user.username}</h2>
          <h3>Email: {user.email}</h3>
          <h4>Phone: {user.phone_number}</h4>
          <button onClick={signOut}>Sign Out</button>
        </Container>
      )}
    </Authenticator>
  );
};

export default Profile;

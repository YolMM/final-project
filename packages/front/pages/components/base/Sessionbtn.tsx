import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { ALink, Button } from '../style/Style';

export const Sessionbtn = () => {
  const { user } = useUser();

  let sessionButton;
  if (user) {
    sessionButton = (
      <ALink href="/api/auth/logout">
        <Button type="button">Log out</Button>
      </ALink>
    );
  } else {
    sessionButton = (
      <ALink href="/api/auth/login">
        <Button type="button">Log in</Button>
      </ALink>
    );
  }

  return (
    <div>{sessionButton}</div>
  );
};

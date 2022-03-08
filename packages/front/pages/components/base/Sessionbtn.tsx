import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export const Sessionbtn = () => {
  const { user } = useUser();

  let sessionButton;
  if (user) {
    sessionButton = (
      <Link href="/api/auth/logout">
        <button type="button">Log out</button>
      </Link>
    );
  } else {
    sessionButton = (
      <Link href="/api/auth/login">
        <button type="button">Log in</button>
      </Link>
    );
  }

  return (
    <div>{sessionButton}</div>
  );
};

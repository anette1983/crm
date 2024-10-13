import MagicButton from '@/app/components/magic-button';
import React from 'react';
import Header from '@/app/components/header';

export interface Props {}

function Page({}: Props) {
  return (
    <>
      <Header>Dashboard</Header>
      <MagicButton />
    </>
  );
}

export default Page;

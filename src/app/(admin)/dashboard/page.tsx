import MagicButton from '@/app/components/magic-button';
import React from 'react';

export interface Props {}

function Page({}: Props) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagicButton />
    </main>
  );
}

export default Page;

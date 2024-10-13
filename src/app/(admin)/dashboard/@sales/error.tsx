'use client';
import Button from '@/app/components/button';
import React from 'react';

type Props = {
  reset: () => void;
};

function ErrorComponent({ reset }: Props) {
  return (
    <>
      <div>Unexpected error inside sales slot</div>
      <Button onClick={() => reset()}>Try again</Button>
    </>
  );
}

export default ErrorComponent;

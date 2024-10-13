import React from 'react';
import Sidebar from '../components/sidebar';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}

export default Layout;

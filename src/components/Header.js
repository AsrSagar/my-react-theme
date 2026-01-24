import React from 'react';
import MobileMenu from './headerSection/MobileMenu/MobileMenu';
import TopBar from './headerSection/TopBar/Topbar';
import NavBar from './headerSection/NavBar/NavBar';

export default function Header() {
  return (
    <>
      <MobileMenu />
      <TopBar />
      <NavBar />
    </>
  );
}

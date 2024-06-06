import React from 'react'
import { Outlet } from "react-router-dom";
import { Nav } from './Nav';

export const Layout = () => {
  return (
    <div className='px-20'>
    <Nav/>
    <main>
      <Outlet/>
    </main>
  </div>
)
}

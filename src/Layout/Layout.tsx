import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-64px)]" >
        <Outlet />
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Nav,
  Header,
  Link,
  Logo,
  LogoLink,
  LogoText,
  LogoSpan,
} from "./Layout/Layout.styled";

export default function Layout() {
  return (
    <>
      <Header>
        <LogoLink to="/">
          <Logo />
          <LogoText>
            Movies <LogoSpan>API</LogoSpan>
          </LogoText>
        </LogoLink>

        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
      </main>
    </>
  );
}

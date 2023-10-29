import { Outlet } from "react-router-dom";
import { Suspense } from "react";
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
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

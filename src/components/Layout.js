import { Outlet } from "react-router-dom";
import {
  Nav,
  Header,
  Link,
  Logo,
  LogoLink,
  LogoText,
  LogoSpan,
} from "./Layout/Layout.styled";
import { Suspense } from "react";

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
        <Suspense fallback={"Loading page..."}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

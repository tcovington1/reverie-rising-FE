import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

const Logo = styled.h1`

/* margin-left: 2rem; */
/* position: relative; */
z-index: 2;
  a {
    color: var(--revPurple);
    font-size: 2.5rem;
  }
`;

const HeaderStyled = styled.header`
  text-align: center;
  .bar {
    /* display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center; */
  }
`;

export default function Header() {
  return <HeaderStyled>
    <div className="bar">
      <Logo>
        <Link href="/">
          Reverie Rising
        </Link>
      </Logo>
    </div>
    {/* <div className="sub-bar">
    <p>Search</p>
    </div> */}
    <Nav />
  </HeaderStyled>
}
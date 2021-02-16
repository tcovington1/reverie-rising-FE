import Link from 'next/link';
import styled from 'styled-components'

const NavStyles = styled.nav`
  background-color: var(--gray);
    padding: 1rem 0;
`;

export default function Nav() {
  return <NavStyles>
    <Link href="/">HOME</Link>
    <Link href="/blog">BLOG</Link>
    <Link href="/resources">RESOURCES</Link>
    <Link href="/about">ABOUT</Link>
    <Link href="/work">WORK WITH ME</Link>
    <Link href="/products">PRODUCTS</Link>
  </NavStyles>
}
import Link from 'next/link';

export default function Nav() {
  return <nav>
    <Link href="/">HOME</Link>
    <Link href="/blog">BLOG</Link>
    <Link href="/resources">RESOURCES</Link>
    <Link href="/about">ABOUT</Link>
    <Link href="/work">WORK WITH ME</Link>
  </nav>
}
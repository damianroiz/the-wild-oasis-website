import Link from 'next/link';
import Logo from './_components/Logo';

export default function Page() {
  return (
    <div>
      <Logo />
      <h1>The wild oasis. Welcome to paradise</h1>
      <Link href="/cabins">explore luxury cabins</Link>
    </div>
  );
}

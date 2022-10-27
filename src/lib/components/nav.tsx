import Link from 'next/link';

const Nav = () => {
  return (
    <div style={{ border: '2px solid #eee', padding: '2rem' }}>
       <div style={{ display: 'inline', marginLeft: '2rem' }}>
        <Link href='/'>
          Home
        </Link>
      </div>
      <div style={{ display: 'inline', marginLeft: '2rem' }}>
        <Link href='/csr'>
          CSR
        </Link>
      </div>
      <div style={{ display: 'inline', marginLeft: '2rem' }}>
        <Link href='/ssr'>
          SSR
        </Link>
      </div>
    </div>
  );
};
export default Nav;

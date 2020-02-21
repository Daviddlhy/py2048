import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header: React.FC = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
  </div>
);

export default Header;

import React from 'react';
import Link from 'next/link';

class Header extends React.Component {

  render () {
    
    return (
      <>
      <Link href="/"><a style={{'fontSize':'30px'}}>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/portfolio"><a>Portfolio</a></Link>
      <Link href="/blog"><a>Blog</a></Link>
      <Link href="/cv"><a>CV</a></Link>
      {/* <style jsx>{`
      a {font-size: 20px;}
      .customClass {
        color: red;
      }
        `}</style> */}
      </>
    )
  }

}

export default Header;
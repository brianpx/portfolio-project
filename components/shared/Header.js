import React from 'react';
import Link from 'next/link';
import '../../styles/main.scss';

class Header extends React.Component {

  render () {
    const title = this.props.title;
    return (
      <>
      <a>{title}</a>
      {this.props.children}
      <p className='customClass'>I am styled p element</p>
      <p className='customClassFromFile'>I am styled p element</p>
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
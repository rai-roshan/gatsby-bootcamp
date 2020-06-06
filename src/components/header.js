import React from 'react';
import { Link , graphql , useStaticQuery } from 'gatsby';

import headerStyle from './header.module.scss';

const Header = ()=>{

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata{
        title
      }
    }
  }`);

  return(
    <header className={ headerStyle.header }>
      <h1>
          <Link to='/' 
          className={ headerStyle.title }>
            { data.site.siteMetadata.title }
          </Link>
      </h1>
      <ul className={ headerStyle.nav }>
        <li >
          <Link className={ headerStyle.navItem } activeClassName={ headerStyle.activeNavItem } to="/">Home</Link>
        </li>
        <li >
          <Link className={ headerStyle.navItem } activeClassName={ headerStyle.activeNavItem } to="/blog">Blog</Link>
        </li>
        <li >
          <Link className={ headerStyle.navItem } activeClassName={ headerStyle.activeNavItem } to="/contact">Contact</Link>
        </li>
        <li >
          <Link className={ headerStyle.navItem } activeClassName={ headerStyle.activeNavItem } to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>MenuBuilder</title>
        <link rel='canonical' href='https://menubuilder.com/'/>
      </Helmet>
      <Link to='/'>
        <h1 className={`${style.logo} ${style.no_print}`}>Carta dei vini Maker</h1>
      </Link>
    </header>
  )
}

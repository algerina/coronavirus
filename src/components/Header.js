import React from 'react';
import { BsGear, BsMic } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <header className="bg-black-90  w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
        <Link
          to={{
            pathname: '/Home',
          }}
        >
          {' '}
          <IoIosArrowBack />
          {' '}
        </Link>
        <span className="link dim white dib mr6" href="#" title="year">Coranavirus Tracker</span>
        <span className="link dim white dib mr3" href="#" title="mic">
          {' '}
          <BsMic />
          {' '}
        </span>
        <span className="link dim white dib mr10" href="#" title="parameters">
          {' '}
          <BsGear />
          {' '}
        </span>
      </nav>
    </header>
  </div>
);

export default Header;

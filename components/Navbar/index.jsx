'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavLink from '../NavLink';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from "js-cookie";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(Cookies.get('token'));
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/signin');
  };

  return (
    <nav className='container navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid'>
        <Link href='/' className='navbar-brand'>
          <img src='/images/logo.svg' alt='semina' />
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div
            className={`navbar-nav ${pathname !== '/signin' ? 'mx-auto' : 'ms-auto'} my-3 my-lg-0`}
          >
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/browse'>Browse</NavLink>
            <NavLink href='/stories'>Stories</NavLink>
            <NavLink href='/about'>About</NavLink>
          </div>

          {pathname !== '/signin' && (
            <>
              {token ? (
                <div className='navbar-nav ms-auto'>
                  <div className='nav-item dropdown d-flex flex-column flex-lg-row align-items-lg-center authenticated gap-3'>
                    <span className='text-light d-none d-lg-block'>
                      Hello, Shayna M
                    </span>

                    <Link
                      href='#'
                      className='nav-link dropdown-toggle mx-0 d-none d-lg-block'
                      id='navbarDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >

                      <img src='/images/avatar.png' alt='avatar' width='60' />

                    </Link>

                    <Link
                      data-bs-toggle='collapse'
                      href='#collapseExample'
                      role='button'
                      aria-expanded='false'
                      aria-controls='collapseExample'
                      className='d-block d-lg-none dropdown-toggle text-light text-decoration-none'
                    >
                      <img src='/images/avatar.png' alt='avatar' width='60' />
                    </Link>

                    <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                      <li>
                        <Link href='/dashboard' className='dropdown-item'>
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link href='#' className='dropdown-item'>
                          Settings
                        </Link>
                      </li>
                      <li>
                        <Link href='#' className='dropdown-item'>
                          Rewards
                        </Link>
                      </li>
                      <li onClick={handleLogout} className='dropdown-item'>
                        Sign Out
                      </li>
                    </ul>

                    <div className='collapse' id='collapseExample'>
                      <ul className='list-group'>
                        <li>
                          <Link href='/dashboard' className='list-group-item'>
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link href='#' className='list-group-item'>
                            Settings
                          </Link>
                        </li>
                        <li>
                          <Link href='#' className='list-group-item'>
                            Rewards
                          </Link>
                        </li>
                        <li onClick={handleLogout}>
                          <div className='list-group-item'>Sign Out</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='d-grid'>
                  <Link href='/signin' className='btn-navy'>
                    Sign In
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

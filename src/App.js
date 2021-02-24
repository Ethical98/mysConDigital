import React, { useEffect, useState } from 'react';
import './App.css';
import image from './images/logo.jpg';

const App = () => {
  const [goingDown, setGoingDown] = useState(false);
  useEffect(() => {
    const resizeNavbar = () => {
      const distanceY =
          window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 100,
        headerEl = document.getElementById('navbar'),
        navText = document.getElementById('link');
      if (distanceY > shrinkOn) {
        setGoingDown(true);
        navText.classList.add('changed');
        headerEl.classList.add('resize');
      } else {
        setGoingDown(false);
        navText.classList.remove('changed');
        headerEl.classList.remove('resize');
      }
    };
    window.addEventListener('scroll', resizeNavbar);
    return () => {
      window.removeEventListener('scroll', resizeNavbar);
    };
  }, [goingDown]);

  return (
    <div>
      <div className='container-fluid bg '>
        <nav id='navbar' className='navbar navbar-expand-lg  fixed-top '>
          <div className='container'>
            <a className='navbar-brand' href='#'>
              <img src={image} alt='' width='50' height='auto' />
            </a>
            <div></div>

            <ul id='link' className='nav navbar-nav navbar-right'>
              <li className='dropdown nav-item dropbtn' data-toggle='dropdown'>
                <a className='nav-link' href='#'>
                  <b>Business</b>
                </a>
                <div
                  class='dropdown-menu fade-down'
                  aria-labelledby='dropdownMenuLink'
                >
                  <a class='dropdown-item' href='#'>
                    Action
                  </a>
                  <a class='dropdown-item' href='#'>
                    Another action
                  </a>
                  <a class='dropdown-item' href='#'>
                    Something else here
                  </a>
                </div>
              </li>

              <li className='dropdown nav-item dropbtn' data-toggle='dropdown'>
                <a className='nav-link' href='#'>
                  <b id='text1' className='link-text'>
                    Industries
                  </b>
                  <div
                    class='dropdown-menu fade-up'
                    aria-labelledby='dropdownMenuLink'
                  >
                    <a class='dropdown-item' href='#'>
                      Action
                    </a>
                    <a class='dropdown-item' href='#'>
                      Another action
                    </a>
                    <a class='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
                </a>
              </li>
              <li className='dropdown nav-item dropbtn' data-toggle='dropdown'>
                <a className='nav-link' href='#'>
                  <b id='text2' className='link-text'>
                    Knowledge Center
                  </b>
                </a>
                <div
                  class='dropdown-menu fade-up'
                  aria-labelledby='dropdownMenuLink'
                >
                  <a class='dropdown-item' href='#'>
                    Action
                  </a>
                  <a class='dropdown-item' href='#'>
                    Another action
                  </a>
                  <a class='dropdown-item' href='#'>
                    Something else here
                  </a>
                </div>
              </li>
              <li className='dropdown nav-item dropbtn' data-toggle='dropdown'>
                <a className='nav-link' href='#'>
                  <b id='text3' className='link-text'>
                    Career
                  </b>
                </a>
                <div
                  class='dropdown-menu fade-up '
                  aria-labelledby='dropdownMenuLink'
                >
                  <a class='dropdown-item' href='#'>
                    Action
                  </a>
                  <a class='dropdown-item' href='#'>
                    Another action
                  </a>
                  <a class='dropdown-item' href='#'>
                    Something else here
                  </a>
                </div>
              </li>
              <li className='dropdown nav-item dropbtn' data-toggle='dropdown'>
                <a className='nav-link' href='#'>
                  <b>Company</b>
                </a>
                <div
                  class='dropdown-menu fade-up'
                  aria-labelledby='dropdownMenuLink'
                >
                  <a class='dropdown-item' href='#'>
                    Action
                  </a>
                  <a class='dropdown-item' href='#'>
                    Another action
                  </a>
                  <a class='dropdown-item' href='#'>
                    Something else here
                  </a>
                </div>
              </li>
              <li className='nav-item'>
                <button className='btn btn-primary nav-link' href='#'>
                  <span id='text5' className='link-text'>
                    Sign Up
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default App;

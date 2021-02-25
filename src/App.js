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
        <nav
          id='navbar'
          className='navbar navbar-expand-lg fixed-top '
        >
          <div className='container'>
            <a className='navbar-brand' href='#'>
              <img src={image} alt='' width='50' height='auto' />
            </a>
            <button
              class='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#link'
              aria-controls='link'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div collapse navbar-collapse id='link'>
              <ul className=' navbar-nav'>
                <li
                  className='dropdown nav-item dropbtn'
                  data-toggle='dropdown'
                >
                  <a className='nav-link' href='#'>
                    <b>Business</b>
                  </a>
                  <div
                    className='dropdown-menu fade-down'
                    aria-labelledby='dropdownMenuLink'
                  >
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
                </li>

                <li
                  className='dropdown nav-item dropbtn'
                  data-toggle='dropdown'
                >
                  <a className='nav-link' href='#'>
                    <b id='text1' className='link-text'>
                      Industries
                    </b>
                    <div
                      className='dropdown-menu fade-up'
                      aria-labelledby='dropdownMenuLink'
                    >
                      <a className='dropdown-item' href='#'>
                        Action
                      </a>
                      <a className='dropdown-item' href='#'>
                        Another action
                      </a>
                      <a className='dropdown-item' href='#'>
                        Something else here
                      </a>
                    </div>
                  </a>
                </li>
                <li
                  className='dropdown nav-item dropbtn'
                  data-toggle='dropdown'
                >
                  <a className='nav-link' href='#'>
                    <b id='text2' className='link-text'>
                      Knowledge Center
                    </b>
                  </a>
                  <div
                    className='dropdown-menu fade-up'
                    aria-labelledby='dropdownMenuLink'
                  >
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
                </li>
                <li
                  className='dropdown nav-item dropbtn'
                  data-toggle='dropdown'
                >
                  <a className='nav-link' href='#'>
                    <b id='text3' className='link-text'>
                      Career
                    </b>
                  </a>
                  <div
                    className='dropdown-menu fade-up '
                    aria-labelledby='dropdownMenuLink'
                  >
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
                </li>
                <li
                  className='dropdown nav-item dropbtn'
                  data-toggle='dropdown'
                >
                  <a className='nav-link' href='#'>
                    <b>Company</b>
                  </a>
                  <div
                    className='dropdown-menu fade-up'
                    aria-labelledby='dropdownMenuLink'
                  >
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                    <a className='dropdown-item' href='#'>
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
          </div>
        </nav>
        <div className='title'>
          <span>
            MysCon Digital
            <br />
          </span>

          <p className='tagline'>Intelligent recruitment starts with us</p>
        </div>
        <div className='buttons'>
          <button type='button' className='btn btn-success btn-lg btn_1'>
            Country1
          </button>
          <button type='button' className='btn btn-success btn-lg btn_2'>
            Country2
          </button>
        </div>
      </div>
      <section className='container section_2'>
        Who We Are? <br />
        <p>
          No matter how out-of-the-world your business idea is, you still cannot
          achieve any of that without a committed and talented team. At
          ScaleneWorks, we promise to provide you with not just the best talent
          but also the one that’s customized and fit specifically for your
          company.
          <br /> Started in 2010, we are one of the fastest evolving Recruiting
          Process Redesigning and Outsourcing organization which has expanded to
          both global and domestic staffing services, aiming to be an
          international company in no time. Today, Scalene is managing Talent
          Acquisition processes for some marquee, global brands and has already
          marked our presence through growth & sustainability.
          <br /> We formulated customization into three parameters and used
          Scalene as a metaphor for the three different sided and angled
          triangle. The three sides are Process Maturity, People Capacity and
          Technology Adoption and the percentage mix determined by the angles
          are Quality, Cost and Effort. Our core competency being excelling in
          100% customized solution is exactly why you should swear by us when it
          comes to any and all recruitment requirements in your company.
        </p>
      </section>
      <div className='container section_3'>
        What We Do?
        <br />
        <button type='button' className='btn btn-primary btn-lg'>
          Company Profile
        </button>
      </div>
    </div>
  );
};

export default App;

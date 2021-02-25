import React, { useEffect, useState } from 'react';
import image from './images/logo.jpg';
import hr from './images/hr.jpg';
import ceo from './images/ceo.jpg';
import ceo2 from './images/ceo2.jpg';

import './Test.css';
const Test = () => {
  const [goingDown, setGoingDown] = useState(false);
  useEffect(() => {
    const resizeNavbar = () => {
      const distanceY =
          window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 100,
        headerEl = document.getElementById('navbar'),
        navText = document.getElementById('right-nav');
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
      <section className='section1'>
        <nav id='navbar' class='navbar navbar-expand-lg fixed-top'>
          <div class='container'>
            <a class='navbar-brand' href='#'>
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
            <div class='collapse navbar-collapse' id='link'>
              <ul id='right-nav' className='navbar-nav ms-auto mb-2 mb-lg-0 '>
                <li className='nav-item dropdown'>
                  <a
                    class='nav-link '
                    href='#'
                    id='navbarScrollingDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <b>Business</b>
                  </a>
                  <ul
                    class='dropdown-menu'
                    aria-labelledby='navbarScrollingDropdown'
                  >
                    <li>
                      <a class='dropdown-item' href='#'>
                        Action
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class='dropdown-divider' />
                    </li>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link' href='#'>
                    <b>Industries</b>
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link' href='#'>
                    <b>Knowledge Center</b>
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link' href='#'>
                    <b>Career</b>
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link' href='#'>
                    <b>Company</b>
                  </a>
                </li>
                <li className='nav-item'>
                  <button className='btn btn-primary' href='#'>
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='text_title'>
          MysCon Digital
          <p className='tagline'>Intelligent recruitment starts with us</p>
        </div>
        <div class='country_buttons'>
          <button type='button' className='btn btn-primary btn-lg btn_1'>
            Country1
          </button>
          <button type='button' className='btn btn-primary btn-lg btn_2'>
            Country2
          </button>
        </div>
      </section>
      <section className='container section2'>
        Who We Are
        <p>
          No matter how out-of-the-world your business idea is, you still cannot
          achieve any of that without a committed and talented team. At
          ScaleneWorks, we promise to provide you with not just the best talent
          but also the one that’s customized and fit specifically for your
          company. <br />
          <br />
          Started in 2010, we are one of the fastest evolving Recruiting Process
          Redesigning and Outsourcing organization which has expanded to both
          global and domestic staffing services, aiming to be an international
          company in no time. Today, Scalene is managing Talent Acquisition
          processes for some marquee, global brands and has already marked our
          presence through growth & sustainability.
          <br />
          <br />
          We formulated customization into three parameters and used Scalene as
          a metaphor for the three different sided and angled triangle. The
          three sides are Process Maturity, People Capacity and Technology
          Adoption and the percentage mix determined by the angles are Quality,
          Cost and Effort. Our core competency being excelling in 100%
          customized solution is exactly why you should swear by us when it
          comes to any and all recruitment requirements in your company.
        </p>
      </section>
      <section className='container-fluid section3'>
        What We Do
        <p className='sectionText'>
          Why Pick Us
          <br />
          <button type='button' className='btn btn-primary btn-md btn_3'>
            Company Profile
          </button>
        </p>
      </section>
      <section className='container section4'>
        White Paper
        <div className='row'>
          <div className='card'>
            <img src={hr} class='card-img-top'></img>
            <div className='card-title'>
              HR Analytics MysConDigital Behavioral Modeling to Predict Renege
            </div>
          </div>
          <div className='card'>
            <img src={ceo} class='card-img-top'></img>
            <div className='card-title'>MysConDigital: HR analytics</div>
          </div>
          <div className='card'>
            <img src={ceo2} class='card-img-top'></img>
            <div className='card-body'>
              <div className='card-title'>
                Structuring the Recruitment Department
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;

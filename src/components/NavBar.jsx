import styled from 'styled-components'
import logo from '../assets/logo.png'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
  return (
    <Wrapper>
      <div className='nav'>
        <div className='nav-logo'>
          <a id='hero' href='#'>
            <img src={logo} alt='logo' />
            <span>ASA7UR</span>
          </a>
        </div>
        <button type='button' className='nav-toggle'>
          <FaBars />
        </button>
        <ul className='nav-links'>
          <li id='about-me' className='link'>
            <a href='#'>About Me</a>
          </li>
          <li id='services' className='link'>
            <a href='#'>Services</a>
          </li>
          <li id='portfolio' className='link'>
            <a href='#'>Portfolio</a>
          </li>
          <li id='contact-me' className='link'>
            <a href='#'>Contact Me</a>
          </li>
          {/* <li className="language"><a href="#">EN</a></li> */}
        </ul>
      </div>
    </Wrapper>
  )
}

export default NavBar

const Wrapper = styled.nav`
  background-color: var(--backgroundColor);
  overflow: hidden;
  position: sticky;
  z-index: 999;
  top: 0;
  border-bottom: var(--border);

  .nav {
    max-width: var(--max-width);
    padding: 1rem 1.5rem;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
  }

  .nav-logo a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
  }

  .nav-logo img {
    max-height: 25px;
  }

  .nav-logo span {
    color: var(--textColor);
    font-size: 1rem;
    transition: var(--transition);
  }

  .nav-logo span:hover {
    color: var(--primary-500);
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--textColor);
    cursor: pointer;
    transition: var(--transition);
    svg {
      font-size: 1.5rem;
    }
  }

  .nav-toggle:hover {
    color: var(--primary-500);
  }

  .nav-links {
    display: none;
  }

  .link a {
    color: var(--textColor);
    position: relative;
    transition: all 0.3s ease;
    padding-bottom: 0.5rem;
  }

  @media (min-width: 800px) {
    .nav {
      padding: 1rem 2rem;
    }
    .nav-logo img {
      max-height: 30px;
    }

    .nav-logo span {
      font-size: 1.3rem;
    }

    .nav-toggle {
      display: none;
    }

    .nav-links {
      list-style: none;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 3rem;
    }

    .link a:hover {
      color: var(--primary-500);
    }

    .link a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 25%;
      width: 50%;
      height: 2px;
      background-color: transparent;
      transition: all 0.3s ease;
    }

    .link a:hover::after {
      background-color: var(--primary-500);
    }
  }

  @media (max-width: 460px) {
    .nav {
      padding: 1rem 1.5rem;
    }

    .nav-logo img {
      max-height: 20px;
    }

    .nav-logo span {
      font-size: 1rem;
    }
  }
`

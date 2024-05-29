import styled from 'styled-components'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <Wrapper>
      <div className='content'>
        <div className='socials'>
          <a href='https://www.instagram.com/asa7ur/' target='_blank'>
            <FaInstagram className='logo' />
          </a>
          <a href='https://github.com/asa7ur' target='_blank'>
            <FaGithub className='logo' />
          </a>
          <a
            href='https://www.linkedin.com/in/garik-asatryan-077a07275/'
            target='_blank'
          >
            <FaLinkedin className='logo' />
          </a>
        </div>
        <p>© {new Date().getFullYear()} ASA7UR, All Rights Reserved.</p>
      </div>
    </Wrapper>
  )
}
export default Footer

const Wrapper = styled.footer`
  background-color: var(--backgroundColor);
  border-top: var(--border);

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 1rem;
    .socials {
      font-size: 2.5rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      padding-bottom: 1rem;
      .logo {
        color: var(--textColor);
        transition: var(--transition);
        &:hover {
          color: var(--primary-500);
        }
      }
    }
    p {
      color: var(--primary-500);
    }
  }

  @media (max-width: 768px) {
    .content {
      padding: 1rem;
      .socials {
        padding: 0;
        font-size: 2rem;
      }
    }
  }
`

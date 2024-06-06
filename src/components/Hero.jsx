import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import heroBcg from '../assets/heroBcg.jpg';
import cv from '../assets/cv.pdf';

const Hero = () => {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current;
    const button = buttonRef.current;
    const image = imageRef.current

    // Set initial states
    gsap.set([title, button, image], { opacity: 0});

    // Animate the title and button
    gsap.to([title, button, image], {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5, // Adjust the delay as needed
      stagger: 0.2, // Adjust the stagger for a staggered effect
    });
  }, []);

  return (
    <Wrapper id='hero'>
      <div className='section section-center'>
        <div className='content'>
          <div className='title' ref={titleRef}>
            <h3>Hi!</h3>
            <h1>
              I'm <span>Garik</span>
            </h1>
            <h5>Freelance Web Developer & Designer</h5>
          </div>
          <a href={cv} download='Garik_CV'>
            <button ref={buttonRef}>Download CV</button>
          </a>
        </div>
        <div className='image'>
          <img src={heroBcg} alt='hero background' ref={imageRef} />
        </div>
      </div>
    </Wrapper>
  )
};
export default Hero

const Wrapper = styled.header`
  background-color: var(--grey-950);
  height: calc(100vh - 3rem);

  .title {
    opacity: 0;
    h1 {
      text-transform: uppercase;
      color: var(--grey-100);
    }
    h3 {
      text-transform: uppercase;
      color: var(--grey-100);
    }
    h5 {
      text-transform: uppercase;
      color: var(--grey-100);
    }
    span {
      text-transform: uppercase;
      background: var(--gradient);
      background-clip: text;
      color: transparent;
    }
  }

  button {
    opacity: 0;
    padding: var(--padding);
    margin-top: 1.2rem;
    background-color: var(--grey-900);
    color: var(--textColor);
    border: var(--border);
    border-radius: var(--radius);
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.4s linear;
    &:hover {
      color: var(--primary-500);
      background: var(--grey-200);
    }
  }

  .image img {
    opacity: 0;
    max-height: 70vh;
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    .title {
      h1 {
        font-size: 4rem;
      }

      h3 {
        font-size: 2rem;
      }

      h5 {
        font-size: 1.5rem;
      }
    }

    button {
      font-size: 1.2rem;
      margin-top: 2rem;
    }

    .image img {
      max-height: 90vh;
      max-width: var(--fixed-width);
    }
  }

  @media (max-width: 800px) {
    .content {
      margin: 20vh auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .title {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .image img {
      display: none;
    }
  }
`

import styled from 'styled-components'
import heroBcg from '../assets/heroBcg.jpg'

const Hero = () => {
  return (
    <Wrapper id='hero'>
      <div className='section section-center'>
        <div className='content'>
          <div className='title'>
            <h3>Hi!</h3>
            <h1>
              I'm <span>Garik</span>
            </h1>
            <h4>Freelance Web Developer & Designer</h4>
          </div>
          <button>Download CV</button>
        </div>
        <div className='image'>
          <img src={heroBcg} />
        </div>
      </div>
    </Wrapper>
  )
}
export default Hero

const Wrapper = styled.header`
  background-color: var(--grey-950);
  height: calc(100vh - 3rem);
  .title {
    h1 {
      font-size: 3rem;
      text-transform: uppercase;
      color: var(--grey-100);
    }
    h3 {
      font-size: 1.5rem;
      text-transform: uppercase;
      color: var(--grey-100);
    }
    h4 {
      font-size: 1.2rem;
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
    padding: var(--padding);
    margin-top: 2rem;
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

      h4 {
        font-size: 1.5rem;
      }
    }

    button {
      font-size: 1.2rem;
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

  @media (max-width: 460px) {
    .title {
      h1 {
        font-size: 2.5rem;
      }
      
      h3 {
        font-size: 1.5rem;
      }

      h4 {
        font-size: 0.875rem;
      }
    }

    button {
      font-size: 0.875rem;
    }
  }
`

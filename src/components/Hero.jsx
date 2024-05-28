import styled from 'styled-components'
import heroBcg from '../assets/heroBcg.jpg'

const Hero = () => {
  return (
    <Wrapper>
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

  .section {
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .title h1 {
    font-size: 3rem;
    text-transform: uppercase;
    color: var(--grey-100);
  }

  .title h3 {
    font-size: 1.5rem;
    color: var(--grey-100);
    text-transform: uppercase;
  }

  .title h4 {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: var(--grey-100);
  }

  .title span {
    background: linear-gradient(to right, #de4848, #ffcece);
    background-clip: text;
    color: transparent;
  }

  button {
    padding: 1rem 1.5rem;
    margin-top: 2rem;
    background-color: var(--grey-900);
    color: var(--grey-100);
    border-radius: 20px;
    font-size: 1.2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    border-color: var(--border-color-hover);
  }

  .image img {
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    .title h1 {
      font-size: 4rem;
    }

    .title h3 {
      font-size: 2rem;
    }

    .title h4 {
      font-size: 1.5rem;
    }

    .image img {
      max-width: 480px;
    }
  }

  @media (max-width: 768px) {
    .content {
      margin: 7rem auto;
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
    .title h1 {
      font-size: 2.5rem;
    }

    .title h3 {
      font-size: 1.5rem;
    }

    .title h4 {
      font-size: 1rem;
    }

    .image img {
      max-width: 480px;
    }
  }
`

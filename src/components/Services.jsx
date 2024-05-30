import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return (
    <Wrapper id='services'>
      <h1>Services</h1>
      <div className='section'>
        <div className='services'>
          {services.map((service) => {
            const { id, image, title, description } = service
            return (
              <div className='service' key={id}>
                <img src={image} />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default Services

const Wrapper = styled.section`
  background-color: var(--grey-900);
  border-bottom: var(--border);

  h1 {
    text-align: center;
    padding-bottom: 2rem;
    text-transform: uppercase;
    background: linear-gradient(to right, #ff0000, #fff);
    background-clip: text;
    color: transparent;
  }

  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }

  .service {
    background-color: var(--grey-800);
    color: var(--textColor);
    border: var(--border);
    padding: 1.5rem;
    border-radius: 3px;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    &:hover {
      box-shadow: none;
    }
    img {
      height: 75px;
    }
  }

  @media (max-width: 768px) {
    .services {
      grid-template-columns: repeat(1, 1fr);
      max-width: var(--fixed-width);
      margin: 0 auto;
    }
  }

  @media (max-width: 460px) {
    .services {
      grid-template-columns: repeat(1, 1fr);
      max-width: var(--fixed-width);
      margin: 0 auto;
    }

    .service {
      padding: 1rem;
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      &:hover {
        box-shadow: none;
      }
      img {
        height: 50px;
      }
      p {
        font-size: 0.75rem;
      }
    }
  }
`

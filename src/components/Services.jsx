import styled from 'styled-components'
import { services } from '../utils/constants'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const serviceRefs = useRef([])

  useEffect(() => {
    serviceRefs.current.forEach((service, index) => {
      gsap.fromTo(
        service,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: service,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  return (
    <Wrapper id='services'>
      <h1>Services</h1>
      <div className='section'>
        <div className='services'>
          {services.map((service, index) => {
            const { id, image, title, description } = service
            return (
              <div
                className={`service service-${id}`}
                key={id}
                ref={(el) => (serviceRefs.current[index] = el)}
              >
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
    opacity: 0;
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

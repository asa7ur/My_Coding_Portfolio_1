import styled from 'styled-components'
import { FaGithub, FaLink } from 'react-icons/fa'
import { projects } from '../utils/constants'

const Portfolio = () => {
  return (
    <Wrapper>
      <h1>Portfolio</h1>
      <div className='section'>
        <div className='projects'>
          {projects.map((project) => {
            const { id, image, title, github, web } = project
            return (
              <div className='project' key={id}>
                <img src={image} alt={title} />
                <div className='info'>
                  <h2>{title}</h2>
                  <div className='links'>
                    <a href={github} target='_blank'>
                      <FaGithub />
                    </a>
                    <a href={web} target='_blank'>
                      <FaLink />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default Portfolio

const Wrapper = styled.section`
  background-color: var(--grey-800);

  h1 {
    font-size: 3rem;
    text-align: center;
    padding-bottom: 2rem;
    text-transform: uppercase;
    background: linear-gradient(to right, #ff0000, #fff);
    background-clip: text;
    color: transparent;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }

  .project {
    background-color: var(--grey-900);
    color: var(--textColor);
    border: var(--border);
    padding: 1.5rem;
    border-radius: 3px;
    height: auto;
    box-shadow: var(--shadow-4);
    transition: var(--transition);
  }

  .project:hover {
    box-shadow: none;
  }

  .project img {
    max-width: 100%;
  }

  .project h2 {
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  .project .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5rem;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .project .info a {
    font-size: 1.5rem;
    color: var(--textColor);
  }

  @media (max-width: 768px) {
    .projects {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      gap: 2rem;
    }

    .project {
      padding: 1rem;
    }

    .project .info h2,
    .project .info a {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 460px) {
  }
`

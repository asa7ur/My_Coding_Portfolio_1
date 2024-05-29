import styled from 'styled-components'
import image from '../assets/img.jpg'
import { skills, personal_info } from '../utils/constants'

const AboutMe = () => {
  return (
    <Wrapper id='about-me'>
      <h1>About Me</h1>
      <div className='section'>
        <img src={image} />
        <div className='container'>
          <h2>Personal Info</h2>
          <div className='info'>
            {personal_info.map((info) => {
              const { id, label, value } = info
              return (
                <div className='info-item' key={id}>
                  <h4 className='info-label'>{label}</h4>
                  <span>{value}</span>
                </div>
              )
            })}
          </div>
          <h2>Skills</h2>
          <div className='skills'>
            {skills.map((skill) => {
              const {id, value} = skill
              return (
                <div className='skill' key={id}>
                  <h4>{value}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default AboutMe

const Wrapper = styled.section`
  background-color: var(--grey-800);
  border-top: var(--border);
  border-bottom: var(--border);

  h1 {
    font-size: 3rem;
    text-align: center;
    padding-bottom: 2rem;
    text-transform: uppercase;
    background: linear-gradient(to right, #ff0000, #fff);
    background-clip: text;
    color: transparent;
  }

  img {
    max-width: 400px;
    border: var(--border);
  }

  .container {
    color: var(--textColor);
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      text-align: center;
      padding: 1rem;
      text-transform: uppercase;
    }

    .info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    
    .info-item,
    .skills .skill {
      padding: var(--padding);
      margin: 0.75rem;
      border: var(--border);
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }

    .skills {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .skills .skill h4,
    .info-label {
      color: var(--primary-500);
      font-weight: bold;
      user-select: none;
    }
  }

@media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
      padding-bottom: 1rem;
    }

    .section {
      display: flex;
      flex-direction: column;
    }

    img {
      max-width: 200px;
    }
  }
`

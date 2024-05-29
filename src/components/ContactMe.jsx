import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'

const ContactMe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await axios.post('/api/email', {
        name,
        email,
        subject,
        message,
      })

      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setResult('Message sent successfully!')
    } catch (error) {
      setResult(error.response.data)
    } finally {
      setIsLoading(false)
      setTimeout(() => {
        setResult('')
      }, 3000)
    }
  }

  return (
    <Wrapper id='contact-me'>
      <h1>Contact Me</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-section'>
          <div className='form-group'>
            <input
              type='text'
              className='user_name'
              id='name'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <input
              type='email'
              className='user_email'
              id='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='subject'
            id='subject'
            placeholder='Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <textarea
            id='message'
            className='message'
            spellCheck='false'
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className='form-group result-container'>
          <button type='submit' className='submit-btn'>
            {isLoading ? <span className='sending'></span> : 'Send Message'}
          </button>
          {result && (
            <div className='result' style={{ opacity: 1 }}>
              {result}
            </div>
          )}
        </div>
      </form>
    </Wrapper>
  )
}

export default ContactMe

const Wrapper = styled.section`
  h1 {
    font-size: 3rem;
    text-align: center;
    padding-bottom: 2rem;
    text-transform: uppercase;
    background: linear-gradient(to right, #ff0000, #fff);
    background-clip: text;
    color: transparent;
  }

  .form {
    margin: 0 auto;
    width: 600px;
    max-width: 80vw;
  }

  .form-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10vw;
  }

  .form-group {
    input,
    textarea {
      font-size: 1rem;
      width: 100%;
      padding: 0.7rem 1rem;
      margin-bottom: 1rem;
      background-color: var(--grey-900);
      color: var(--textColor);
      border: var(--border);
      border-radius: 10px;
    }

    textarea {
      font-family: var(--bodyFont);
      height: 150px;
      resize: none;
    }

    textarea::placeholder {
      font-family: var(--bodyFont);
    }

    button {
      padding: var(--padding);
      background-color: var(--grey-900);
      color: var(--textColor);
      border: var(--border);
      border-radius: 10px;
      font-size: 1rem;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.4s linear;
      &:hover {
        color: var(--primary-500);
        background: var(--grey-200);
      }
    }
  }

  .result-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    .result {
      opacity: 0;
      transition: all 0.3s ease;
      color: var(--textColor);
    }
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .sending {
    display: inline-block;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    border: 3px solid #ccc;
    border-top-color: var(--primary-500);
    animation: spinner 0.6s linear infinite;
  }
`

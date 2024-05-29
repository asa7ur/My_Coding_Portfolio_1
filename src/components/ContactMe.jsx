import styled from 'styled-components'

const ContactMe = () => {
  return (
    <Wrapper>
      <h1>Contact Me</h1>
        <form className='form'>
          <div className='form-section'>
            <div className='form-group'>
              <input
                type='text'
                className='user_name'
                id='name'
                placeholder='Name'
              />
            </div>

            <div className='form-group'>
              <input
                type='email'
                className='user_email'
                id='email'
                placeholder='Email'
              />
            </div>
          </div>

          <div className='form-group'>
            <input
              type='text'
              className='subject'
              id='subject'
              placeholder='Subject'
            />
          </div>

          <div className='form-group'>
            <textarea
              id='message'
              className='message'
              spellCheck='false'
              placeholder='Message'
            ></textarea>
          </div>

          <div className='form-group result-container'>
            <button type='submit' className='submit-btn'>
              Send
            </button>
            <p className='result'>Email sent successfully!</p>
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

  .form{
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

  .form-group input,
  .form-group textarea {
    font-size: 1rem;
    width: 100%;
    padding: 0.7rem 1rem;
    margin-bottom: 1rem;
    background-color: var(--grey-900);
    color: var(--textColor);
    border: var(--border);
    border-radius: 10px;
  }

  .form-group textarea {
    font-family: var(--bodyFont);
    height: 150px;
    resize: none;
  }

  .form-group textarea::placeholder {
    font-family: var(--bodyFont);
  }

  .form-group button {
    padding: var(--padding);
    background-color: var(--grey-900);
    color: var(--textColor);
    border: var(--border);
    border-radius: 10px;
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.4s linear;
  }

  .form-group button:hover {
    box-shadow: none;
  }

  .result-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }

  .result-container p {
    opacity: 0;
    transition: all 0.3s ease;
    color: var(--textColor);
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

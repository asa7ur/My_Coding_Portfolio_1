import styled from 'styled-components'
import { AlertTriangle } from 'lucide-react'

const Maintenance = () => {
  return (
    <Wrapper>
      <div className='box'>
        <AlertTriangle className='icon' />
        <h1 className='title'>Estamos en mantenimiento</h1>
        <p className='message'>Volveremos pronto.</p>
        <p className='footer'>Gracias por tu paciencia.</p>
      </div>
    </Wrapper>
  )
}

export default Maintenance

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #111827;
  color: #f9fafb;

  .box {
    background: #1f2937;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  .icon {
    width: 64px;
    height: 64px;
    color: #fbbf24;
    margin-bottom: 16px;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .message {
    font-size: 18px;
    color: #d1d5db;
    margin-bottom: 16px;
  }

  .footer {
    font-size: 14px;
    color: #9ca3af;
  }
`

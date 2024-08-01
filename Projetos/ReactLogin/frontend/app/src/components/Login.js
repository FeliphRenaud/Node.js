import { useState } from 'react'
import axios from 'axios'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password);
    
    try {
      const response = await axios.post('http://localhost:3000/login',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-type': 'application/json' }
        }
      )
    } catch (error) {
      if (!error?.response) {
        setError('Error ao acessar o servidor')
      } else if (error.response.status == 401) {
        setError('Usuario ou senha invalidos')
      }
      
    }  
  
  }


  return (
    <div className='login-form-wrap'>
          <h2>Login</h2>
          <form
            action=""
            className='login-form'>
        <input
          type="email"
          name='email'
          placeholder='e-mail'
          required
          onChange={(e)=> setEmail(e.target.value)}
        />
        <input
          type="password"
          name='password'
          placeholder='password'
          required
          onChange={(e)=> setPassword(e.target.value)}
        />
            
        <button
          type='submit'
          className='btn-login'
          onClick={(e) => {handleLogin(e)}}
          
          >LOGIN</button>

      </form>
      <p>{error}</p>
        </div>
  );
}

export default Login;
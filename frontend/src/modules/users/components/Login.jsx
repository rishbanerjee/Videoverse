import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { apiClient } from '../../../shared/services/api-client';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const [message, setMessage] = useState('');
  const emailRef = React.useRef();
  const pwdRef = React.useRef();
  const navigate = useNavigate(); 

  const doLogin = async () => {
    const userInfo = {
      email: emailRef.current.value,
      password: pwdRef.current.value,
    };

    try {
      const response = await apiClient.post(process.env.REACT_APP_LOGIN, userInfo);
      setMessage(response.data.message);
      if(response.status===200){
      navigate('/'); 
     }
     else{
      setMessage("Invalid User ID or password")
     }

    } catch (err) {
      setMessage('Login Failed');
      console.log('Error Login ', err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Sign in
        </Typography>
        {/* <Typography variant="body2" align="center" gutterBottom> */}
          
        {/* </Typography>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          size="large"
          sx={{ mb: 2 }}
        >
          Continue with Google
        </Button> */}
        {/* <Typography variant="body2" align="center" gutterBottom>
          — or —
        </Typography> */}
        <form>
          <TextField
            inputRef={emailRef}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            inputRef={pwdRef}
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            onClick={doLogin}
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary" align="center">
          {message}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
        New? <Link to="/register">Create an account</Link>
      </Typography>
      </div>
    </Container>
  );
};
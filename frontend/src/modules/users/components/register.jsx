import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Link } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { apiClient } from '../../../shared/services/api-client';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      dark: '#135ea9',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: '400px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
}));

const StyledForm = styled('form')({
  width: '100%',
  marginTop: '16px',
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '16px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const Register = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const emailRef = React.useRef();
  const passRef = React.useRef();
  const nameRef = React.useRef();
  const phoneRef = React.useRef();

  const doRegister = async () => {
    const userInfo = {
      email: emailRef.current.value,
      password: passRef.current.value,
      name: nameRef.current.value,
      phone: phoneRef.current.value,
    };

    try {
      const response = await apiClient.post('http://localhost:1231/register', userInfo);
      setMessage(response.data.message);
      console.log('Response is', response);
      navigate('/login');
    } catch (err) {
      setMessage('Register failed');
      console.log('error', err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <StyledPaper elevation={3}>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Register
          </Typography>
          <StyledForm>
            <TextField inputRef={emailRef} variant="outlined" margin="normal" fullWidth label="Email" />
            <TextField inputRef={passRef} variant="outlined" margin="normal" fullWidth label="Password" type="password" />
            <TextField inputRef={nameRef} variant="outlined" margin="normal" fullWidth label="Name" />
            <TextField inputRef={phoneRef} variant="outlined" margin="normal" fullWidth label="Phone" />
            <StyledButton onClick={doRegister} fullWidth variant="contained">
              Register
            </StyledButton>
            <Typography variant="body2" color="textSecondary" align="center">
              Already have an account? <StyledLink href="/login">Log in</StyledLink>
            </Typography>
          </StyledForm>
        </StyledPaper>
      </StyledContainer>
    </ThemeProvider>
  );
};

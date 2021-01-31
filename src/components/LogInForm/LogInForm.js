import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/authorization/authorization-operations';
import {
  getLogInPending,
  getLogInError,
} from '../../redux/authorization/authorization-selectors';

export default function SignIn() {
  const dispatch = useDispatch();
  const pending = useSelector(getLogInPending);
  const error = useSelector(getLogInError);

  const { control, handleSubmit, reset, errors } = useForm();
  // eslint-disable-next-line no-useless-escape
  const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const userLogIn = ({ email, password }) => {
    const user = {
      email,
      password,
    };

    dispatch(logIn(user));
    reset({
      email: '',
      password: '',
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            width: '100%', // Fix IE11 issue.
            mt: 1,
          }}
          onSubmit={handleSubmit(userLogIn)}
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: emailRegExp,
            }}
            render={({ value, onChange }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ value, onChange }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={value}
                onChange={onChange}
              />
            )}
          />

          {pending ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled
            >
              <CircularProgress size={24} />
              <CircularProgress size={24} color="secondary" />
            </Button>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          )}

          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {errors.email?.type === 'required' && (
        <Alert severity="error">Email Address is required!</Alert>
      )}
      {errors.email?.type === 'pattern' && (
        <Alert severity="error">Email Address is not valid!</Alert>
      )}

      {errors.password && <Alert severity="error">Password is required!</Alert>}

      {error && (
        <Snackbar
          open={Boolean(error)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={3000}
        >
          <Alert severity="error">Something go wrong!</Alert>
        </Snackbar>
      )}
    </Container>
  );
}

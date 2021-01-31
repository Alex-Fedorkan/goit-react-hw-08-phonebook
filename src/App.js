import { useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import { getIsFetchingCurrentUser } from './redux/authorization/authorization-selectors';
import { fetchCurrentUser } from './redux/authorization/authorization-operations';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const RegisterForm = lazy(() =>
  import(
    './components/RegisterForm/RegisterForm' /* webpackChunkName: "register-form" */
  ),
);
const LogInForm = lazy(() =>
  import(
    './components/LogInForm/LogInForm' /* webpackChunkName: "log-in-form" */
  ),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-view" */),
);

const App = () => {
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CircularProgress size={60} />
          <CircularProgress size={60} color="secondary" />
        </Box>
      ) : (
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <PublicRoute path="/" exact restricted redirectTo="/contacts">
              <RegisterForm />
            </PublicRoute>

            <PublicRoute path="/register" restricted redirectTo="/contacts">
              <RegisterForm />
            </PublicRoute>

            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LogInForm />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>

            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      )}
    </>
  );
};

export default App;

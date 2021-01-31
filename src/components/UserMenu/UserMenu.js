import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/authorization/authorization-operations';
import {
  getLogOutPending,
  getUserEmail,
} from '../../redux/authorization/authorization-selectors';
import { Box, Typography, Button, CircularProgress } from '@material-ui/core';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const pending = useSelector(getLogOutPending);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography color="textPrimary" sx={{ marginRight: 5 }}>
        {email}
      </Typography>
      {pending ? (
        <Button onClick={() => dispatch(logOut())} disabled>
          <CircularProgress size={24} color="secondary" />
        </Button>
      ) : (
        <Button color="inherit" onClick={() => dispatch(logOut())}>
          Exit
        </Button>
      )}
    </Box>
  );
};

export default UserMenu;

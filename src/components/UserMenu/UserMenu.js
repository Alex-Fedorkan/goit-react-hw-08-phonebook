import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/authorization/authorization-operations';
import { getUserEmail } from '../../redux/authorization/authorization-selectors';
import Button from '@material-ui/core/Button';
import { Box, Typography } from '@material-ui/core';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography color="textPrimary" sx={{ marginRight: 5 }}>
        {email}
      </Typography>
      <Button color="inherit" onClick={() => dispatch(logOut())}>
        Exit
      </Button>
    </Box>
  );
};

export default UserMenu;

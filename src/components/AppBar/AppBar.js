import { makeStyles } from '@material-ui/core/styles';
import UserMenu from '../UserMenu/UserMenu';
import { Container, Typography, Toolbar, AppBar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const ApplicationBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h3" className={classes.title} component="div">
              Contacts
            </Typography>
            <UserMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default ApplicationBar;

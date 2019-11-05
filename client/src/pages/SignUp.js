import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedSelects from '../components/BirthDate'; 
import API from '../utils/API';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Korgi Inc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  // Styling
  const classes = useStyles();
  // React Hook states
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [zipCode, setZipCode] = useState("");
  let [date, setDate] = useState("");
  // useState for date of birth information

  const saveUser = (firstName, lastName, email, password, zipCode, date) => {
    let userData = [
      firstName,
      lastName,
      email,
      password,
      zipCode,
      date
    ];
    console.log(userData);

    // Save userData
  }

  const handleSubmit = event => {
    event.preventDefault();
    let canMakeUser = true;
    // Run saveUser if any credentials don't match previous users
    API.getUsers().then(res => {
      let users = res.data;
      users.map(user => {
        if(email === user.email) {
          canMakeUser = false;        
        }
      });
      if(canMakeUser) {
        console.log("User can be created");
        saveUser(firstName, lastName, email, password, zipCode, date);
      } else {
        alert("Email is already in use. Please use another email address.");
        console.log("Email is already in use")
      }
    });
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} Validate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              autoComplete="fname"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              autoComplete="lname"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              autoFocus
            />
              <TextField
                 variant="outlined"
                 required
                 fullWidth
                 id="email"
                 label="Email Address"
                 name="email"
                 value={email}
                 autoComplete="email"
                 onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <TextField
                variant="outlined"
                required
                fullWidth
                name="zipCode"
                label="Zip Code"
                value={zipCode}
                onChange={e => setZipCode(e.target.value)}
            />

            
<CustomizedSelects onChange={e => setDate(e.target.value)}/>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // onSubmit={() => {
              //   handleSubmit();
              // }}
            >
              Join
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignUp; 

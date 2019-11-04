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
import BirthDate from '../components/BirthDate'; 

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

// VALIDATION FOR EMAIL

// useInput function
const useInput = (name, defaultValue) => {
  // set up the state for the inputs value prop and set it to the default value
  const [value, setValue] = useState(defaultValue);
  //set up state for the inputs error prop
  const [error, setError] = useState(null);
 
  // set up the event handler for onChange event
  function handleChange(e) {
    // set the state no matter what
    setValue(e.target.value);
    // cancel any error
    setError(null);
  }
 
  // set up event handler for onBlur, if value is not set, setError to true
  function handleBlur() {
    if(!value) return 
    setError(true)
  }
 
  // return object 
  return {
      name,
      value,
      onChange: handleChange,
      onBlur: handleBlur,
      error
  };
 }

// useSubmit function 
const useSubmit = (inputs, success) => {
  // set up the state for the inputs causing errors
  const [errorItems, setErrorItems] = useState(null);
 
  // handle submit
  function handleSubmit(e) {
    e.preventDefault(); //prevent page refresh
    //validate every input (in case there was no blur event)
    const errorItems = inputs.filter(input => !input.validate());
    //persist the error items to state
    setErrorItems(errorItems);
    // if no errors, call success with name, value pairs as parameter
    if (errorItems && errorItems.length === 0) {
      success &&
        success(
          inputs.map(({ props: { name, value } }) => ({
            name,
            value
          }))
        );
    } 
  }
 
  return {
    props: {
      onSubmit: handleSubmit
    },
    errorItems
  };
 }

// regular expression constants for validation
const validations = {
// eslint-disable-next-line
Email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

// SignUp function 
const SignUp = () => {
  // uses of hooks to bring classes style sheet in 
  const classes = useStyles();

  // our custom validation function, which the hook calls back to
  function handleValidation(value, regex) {
    if (value && regex && value.match(regex)) return true; 
    return false; 
  }

  const Email = useInput('Email', '', handleValidation, validations.Email); 

  // the data we're going to submit, just using a standard useState hook to display

  // the data we're going to submit destructed 
  const [data, setData] = useState(null); 

  const handleSuccess = (data) => {
   // we're just setting the state here, but typically this would
   // be sent to the server for further validation and persistence
   setData(data); 

  }

  const submit = useSubmit([Email], handleSuccess);
  //the custom hook that is called onSubmit, taking our two input hooks return values
  //as parameters, this means the state from the two inputs is available to this hook
  // our render method, which displays our form, text fields with error labels
  // hooked up to the custom hooks, it also renders data that has been successfully
  // validated by the form

  // React Hook states
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [zipCode, setZipCode] = useState("");

  const saveUserInfo = () => {
    let userData = [
      firstName = this.firstName,
      lastName = this.lastName,
      email = this.email,
      password = this.password,
      zipCode = this.zipCode,
    ];
    console.log(userData);
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
          <form className={classes.form} Validate>
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

            
      <BirthDate/>

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
              onSubmit={() => {
                saveUserInfo();
              }}
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

// email validation for material-ui react hooks
// https://www.nearform.com/blog/forget-everything-you-learned-about-react-hooks-rock/

// We name the function useInput.  The convention use[CustomHookName] is suggested by the react team when creating custom hooks for linting purposes.
// The function creates two state variables and corresponding mutators for the components value and error state
// It then creates handlers for onChange and onBlur, onChange to set the value, and onBlur to validate
// Finally, we return an object with everything set up

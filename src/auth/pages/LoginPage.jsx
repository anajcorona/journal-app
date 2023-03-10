import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RounterLink } from 'react-router-dom'; 
import { useForm } from "../../hooks/useForm";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";

const formData = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch( startLoginWithEmailPassword({email, password}) );
  }

  const onGoogleSignIn =  (event) => {
    console.log('Gooogleeee', email, password);
    dispatch( startGoogleSignIn());
  }

  return (
        <AuthLayout title="Login">
          <form 
            onSubmit={ onSubmit } 
            className="animate__animated animate__fadeIn animate__faster"
            aria-label="submit-form"
          >
            <Grid container>
              <Grid item xs={ 12 } sx={{mt: 2}}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder="correo@google.com" 
                  fullWidth
                  name="email"
                  value={email}
                  onChange={onInputChange}            
                  />
              </Grid>

              <Grid item xs={ 12 } sx={{mt: 2}}>
                <TextField
                  label="Constraseña"
                  type="password"
                  placeholder="Contraseña" 
                  fullWidth   
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  inputProps={{
                    'data-testid': 'password'
                  }}
                  />
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }} >
                <Grid 
                  item 
                  xs={ 12 }
                  display={ !!errorMessage ? '' : 'none'}
                  >
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button 
                    type="submit" 
                    variant='contained' 
                    fullWidth
                    disabled={isAuthenticating}
                    // onClick={ () => dispatch( getPokemons(page) )}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button
                    disabled={isAuthenticating}
                    variant='contained' 
                    fullWidth
                    aria-label="google-btn"
                    onClick={onGoogleSignIn}
                  >
                    <Google />
                    <Typography sx={{ ml:1 }}> Google </Typography>
                  </Button>
                </Grid>
              </Grid>


              <Grid container direction='row' justifyContent='end' >
                <Link component={ RounterLink } color='inherit' to='/auth/register'>
                  Crear una cuenta
                </Link>
              </Grid>


            </Grid>
          </form>
        </AuthLayout>
      
  )
}

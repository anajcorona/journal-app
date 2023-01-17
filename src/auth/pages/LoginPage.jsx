import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link as RounterLink } from 'react-router-dom'; 
import { useForm } from "../../hooks/useForm";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {

   const dispatch = useDispatch();
   const { email, password, onInputChange, formState } = useForm({
    email: 'anacorona@gmail.com',
    password: '123456',
   });

   const onSubmit = (event) => {
    event.preventDefault();
    console.log('lalala', email, password);
    dispatch( checkingAuthentication());
   }

   const onGoogleSignIn =  (event) => {
    console.log('Gooogleeee', email, password);
    dispatch( startGoogleSignIn());

   }


  return (
        <AuthLayout title="Login">
          <form onSubmit={ onSubmit }>
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
                  />
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }} >
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button type="submit" variant='contained' fullWidth
                  
                    // onClick={ () => dispatch( getPokemons(page) )}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button 
                    variant='contained' 
                    fullWidth
                    onClick={onGoogleSignIn}
                  >
                    <Google />
                    <Typography sx={{ ml:1 }}> Google </Typography>
                  </Button>
                </Grid>
              </Grid>


              <Grid container direction='row' justifyContent='end' >
                <Link component={ RounterLink } color='inherit' to='/auth/register'>
                  Crearuna cuenta
                </Link>
              </Grid>


            </Grid>
          </form>
        </AuthLayout>
      
  )
}

import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RounterLink } from 'react-router-dom'; 
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
        <AuthLayout title="Login">
          <form>
            <Grid container>
              <Grid item xs={ 12 } sx={{mt: 2}}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder="correo@google.com" 
                  fullWidth                 
                  />
              </Grid>

              <Grid item xs={ 12 } sx={{mt: 2}}>
                <TextField
                  label="Constraseña"
                  type="password"
                  placeholder="Contraseña" 
                  fullWidth                 
                  />
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }} >
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button variant='contained' fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button variant='contained' fullWidth>
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

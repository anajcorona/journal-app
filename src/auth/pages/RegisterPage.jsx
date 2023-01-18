import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link as RounterLink } from 'react-router-dom'; 
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";

const formData = {
  email: 'anacorona@gmail.com',
  password: '123456',
  displayName: 'Ana Corona'
};

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener un @'],
  password: [(value) => value.length >= 6, 'El password debe de tener más de 6b letras'],
  displayName: [(value) => value.length >= 1 , 'El nombre es obligatorio'],

};

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid     
  } = useForm(formData, formValidations);

  console.log(displayNameValid)

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    console.log(formState)
  }

  return (
        <AuthLayout title="Crear Cuenta">
          <h1>Form valid {isFormValid ? 'Válido' : 'Incorrecto'}</h1>
          <form onSubmit={onSubmit}>
            <Grid container>
              <Grid item xs={ 12 } sx={{mt: 2}}>
                <TextField
                  label="Nombre completo"
                  type="text"
                  placeholder="Nombre completo" 
                  fullWidth      
                  name="displayName"
                  value={displayName}
                  onChange={onInputChange } 
                  error={ !!displayNameValid && formSubmitted }
                  helperText={displayNameValid}         
                  />
              </Grid>

              <Grid item xs={ 12 } sx={{mt: 2}}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder="correo@google.com" 
                  fullWidth
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  error={ !!emailValid && formSubmitted }
                  helperText={emailValid}             
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
                  onChange={onInputChange }  
                  error={ !!passwordValid && formSubmitted }
                  helperText={passwordValid}               
                  />
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }} >
                <Grid item xs={ 12 }>
                  <Button type='submit' variant='contained' fullWidth>
                    Crear cuenta
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end' >
                <Typography sx={{ mr:1 }}> ¿Ya tienes cuenta?</Typography>
                <Link component={RounterLink} color='inherit' to='/auth/login'>
                  Ingresar
                </Link>
              </Grid>

            </Grid>
          </form>
        </AuthLayout>
  )
}

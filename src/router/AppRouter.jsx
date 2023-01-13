import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JorunalRoutes } from './JorunalRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/auth/*' element={ <AuthRoutes />}/>
        <Route path='/*' element={ <JorunalRoutes />} />
    </Routes>
  )
}

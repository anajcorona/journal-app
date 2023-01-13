import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalPage } from '../journal/pages/JournalPage';

export const JorunalRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <JournalPage /> }/>
        <Route path='/*' element={ <Navigate to="/" /> }/>
    </Routes>
  )
}
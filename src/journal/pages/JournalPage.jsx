import { AddOutlined, Start } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { starNewNote } from '../../store/journal';
import { ImageGallery } from '../components';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views';
import { NothingSelectedView } from '../views/NothingSelectedView';

export const JournalPage = () => {

  const { isSaving, active } = useSelector(state => state.journal);
  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(starNewNote());
  }

  return (
    <JournalLayout>
      {
        (!!active) ? <NoteView /> : <NothingSelectedView />
      }
       <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'next.main',
          ':hover': { backgroundColor: 'secondary.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
       <AddOutlined sx={{ fontSize:30 }} /> 
      </IconButton>
    </JournalLayout>
  )
}

import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { ImageGallery } from '../components';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views';
import { NothingSelectedView } from '../views/NothingSelectedView';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant='h1'> kjnckjadvkj dfkjnv fdkj dfjf jf dj dks sj slkjnvlkem k jk </Typography>
       */}

       <NothingSelectedView />

       <IconButton
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
       {/* <NoteView /> */}
       {/* <ImageGallery /> */}
    </JournalLayout>
  )
}

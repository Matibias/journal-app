import { Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quidem. Molestias nisi corporis explicabo? Non, minima cupiditate quis id, incidunt nihil corrupti odio nulla accusantium, quaerat nemo aspernatur voluptate dolores.</Typography> */}
   
      {/* <NothingSelectedView /> */}
      <NoteView />

    </ JournalLayout>
  )
}

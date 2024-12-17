import React from 'react'
import { Link} from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction='row' sx={{gap: '20px'}}ml='10px'>
        <Button sx={{color:'white', backgroundColor: 'rgb(255, 186, 186)', borderRadius:'25px'}}>
           {exercise.bodyPart}
        </Button>

        <Button sx={{color:'white', backgroundColor: 'rgb(234, 230, 107)', borderRadius:'25px'}}>
           {exercise.target}
        </Button>



      </Stack>

      <Typography sx={{color:'black', fontSize:'20px', fontWeight: '700', textTransform:'capitalize' }} pb='20px' ml='10px'>
        {exercise.name}
      </Typography>

    </Link>
  )
}

export default ExerciseCard

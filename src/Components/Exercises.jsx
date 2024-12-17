import React, { useEffect } from 'react'


import { Box, Stack, Typography} from '@mui/material'
import Pagination from '@mui/material/Pagination';
import ExerciseCard from './ExerciseCard'
import { useState } from 'react';

import {  exerciseOptions, fetchData} from '../Utils/FetchData';


const Exercises = ({exercises, setExercises, bodyPart}) => {

  

  useEffect(() =>{
    const fetchExerciseData = async () => {
      let exerciseData = []

      if (bodyPart === 'all'){
        exerciseData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises?limit=900',
          exerciseOptions);
      }else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=900`,
          exerciseOptions);
      }
      setExercises(exerciseData)
    }

    fetchExerciseData()
  }, [bodyPart])

  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.length > 0 ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) : [];


  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1000, behavior: 'smooth' });
  };
  
  return (
    <Box p='20px' sx={{
      mt: {lg: '110px', sm: '50px', xm:'30px'}
    }}
    
  >
      <Typography variant='h4' mb='30px' ml='30px'>Showing Results</Typography>

      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center"
      >
        {currentExercises.map((exercise, index) =>(
            <ExerciseCard key={index} exercise={exercise} />
        ))}

      </Stack>

      <Stack sx={{ mt: { lg: '114px', sm: '90px',xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
      
      
    </Box>
  )
}

export default Exercises

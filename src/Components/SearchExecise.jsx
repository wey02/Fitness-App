import React from 'react'

import { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography} from '@mui/material'
import { fetchData, exerciseOptions } from '../Utils/FetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExecise = ({setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  console.log('body parts'+ bodyParts)

  useEffect(() => {

    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])

    }

    fetchExerciseData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises?limit=900',
        exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  

  return (
    <Stack 
      justifyContent='center'
      alignItems='center'
      mt = {{lg:'160px', sm:'120px' ,xm:'100px'}}
    >
      <Typography
        mb = '40px'
        fontWeight='700'
        textAlign='center'        
          sx = {{ fontSize: {lg: '70px', sm: '30px', xs:'25px'}}}
      >Awesome Exercises You <br/> Should Know</Typography>
      <Box position='relative'>
        <TextField
            sx = {{

              width: {lg: '1000px', sm: '700px', xs: '300px'},
              
            }}
            value={search}
            onChange={e => setSearch(e.target.value.toLowerCase())}
            placeholder='Search Exercises'
            
            
        />

        <Button className= 'search-btn'position='absolute' 
            sx= {{
              bgcolor: '#ff2526',
              color: '#fff',
              height: '56px',
              width: {lg: '80px', sm: '80px' },
              position: 'absolute',
              right: 0

            }}
            onClick={handleSearch}
        
        >Search</Button>

      </Box >
      <Box sx= {{position: 'relative', width: '100%', p: '0 60px'}}>
           <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
        
    </Stack>
  )
}

export default SearchExecise

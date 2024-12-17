import React from 'react'

import { Box } from '@mui/material'
import { useState } from 'react'

import Exercises from '../Components/Exercises'
import SearchExecise from '../Components/SearchExecise'
import HeroBanner from '../Components/HeroBanner'

import '../App.css'

const Home = () => {

  const [bodyPart, setBodyPart] = useState([])
  const [exercises, setExercises] = useState([])
  //console.log('exercises ' + exercises)
  

  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner/>
      <SearchExecise  setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises  exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home

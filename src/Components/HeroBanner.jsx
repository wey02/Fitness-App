import React from 'react'

import { Box, Typography, Stack, Button} from '@mui/material'
//import '../App.css'

import Banner from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box 
        sx={ { mt: {lg: '212px', xs: '70px'}, ml: { sm: '50px'}}}
        position='relative' 
        p='20px'
    >
        <Typography color='#FA2625' 
        fontWeight='700' fontSize='26px'

         >
            Fitness Club
        </Typography>
        <Typography color='#3A1212' 
        fontWeight='700' sx={{ fontSize: {lg: '44px', xs: '40px'}}}

         >
            Sweat, Smile, <br /> and Repeat
        </Typography>
        <Typography color='#3A1212' 
         fontSize='22px'
            lineHeight='35px'
            mb='3px'
         >
            Check out the most effective exercises
        </Typography>

        <Button variant='contained'
            color='error'
        >
            EXPLORE EXERCISES
        </Button>
        <Typography fontSize='100px' color='#FA2625' sx={{opacity: 1, display:{lg: "block", xs: "none"}}} >Exercise</Typography>
        
        <img src={Banner} className='hero-banner-img' alt='banner'/>
    </Box>
  )
}

export default HeroBanner

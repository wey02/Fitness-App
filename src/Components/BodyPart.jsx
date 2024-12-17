import React from 'react'
import { Stack, Typography } from '@mui/material'
import icon from '../assets/icons/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
        type='Button'
        justifyContent='center'
        alignItems='center'
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2526' : '',
            backgroundColor: '#fff',
           
            height: '210px',
            gap: '40px'

        }}
        
        onClick={() =>{
          setBodyPart(item)
          window.scrollTo({top: '1400', left: 100, behavior: 'smooth'})
        }}



    >
            <img src={icon} style={{width:'40px', height: '40px'}}/>
            <Typography fontSize='24px' fontWeight='700' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart

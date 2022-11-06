import React, { useState } from 'react'
import {Box,Stack,Typography} from '@mui/material'
import {SideBar,Videos} from './index'
import { useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromApi'


const Feed = () => {
  const [videos, setVideos] = useState(null)
  const [selectedCategory,setSelectedCategory]=useState('New')

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
   
    }, [selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx: "column", md: "row" }}} >
      <Box sx={{height:{sx:'auto',md:"92vh"},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          <Typography className='copyright' variant='body2' sx={{mx:1.5,color:'#fff'}}>
             Copyright © 2022 Ahadi Media
          </Typography>
      </Box>
      <Box p={2} sx={{overflowX:'auto',height:'90vh',flex:2}}>
        <Typography ariant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{color: "#FC1503"}}>videos</span>
        </Typography>
          <Videos videos={videos}/>
      </Box>


    </Stack>
  )
}

export default Feed
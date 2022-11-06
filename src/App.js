import './App.css';
import { Box } from '@mui/material';
import {Route,Routes} from 'react-router-dom'

import{Navbar,Feed,VideoDetail,SearchFeed,Footer,ChannelDetail} from './components/index'
function App() {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
        <Navbar/>
        <Routes>
             <Route exact path='/' element={<Feed />} />
             <Route path='/video/:id' element={<VideoDetail />} />
             <Route path='/channel/:id' element={<ChannelDetail />} />
             <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
        <Footer/>
    </Box>
  );
}

export default App;

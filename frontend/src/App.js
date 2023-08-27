
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
import { Register } from "./modules/users/components/register";
import {Login} from "./modules/users/components/Login";
const Home = () => {
  return (
    
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Routes>
    
  );
};

const App = () => (
  <>

<BrowserRouter>
  
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
      
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  {/* <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>  */}
  </>
  );






export default App;

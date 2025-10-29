import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Feed from './pages/Feed';
import Messages from './pages/Messages';
import ChatBox from './pages/ChatBox';
import Connections from './pages/Connections';
import Discover from './pages/Discover';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>}>
          <Route index element={<Feed></Feed>} />
          <Route path='messages' element={<Messages></Messages>} />
          <Route path='messages/:userId' element={<ChatBox></ChatBox>} />
          <Route path='connections' element={<Connections></Connections>} />
          <Route path='discover' element={<Discover></Discover>} />
          <Route path='profile' element={<Profile></Profile>} />
          <Route path='profile/:profileId' element={<Profile></Profile>} />
          <Route path='create-post' element={<CreatePost></CreatePost>} />


        </Route >
      </Routes >

    </>
  );
};

export default App;
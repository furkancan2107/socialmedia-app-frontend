import React, { useEffect, useState } from 'react';
import { Avatar, ButtonBase, Card, CardHeader } from '@mui/material';
import { getMessages } from '../api/server';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MessagePage from './MessagePage';


const UserList = ({ name, user }) => {
  const { username, id } = user;
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [msgPage, setMsgPage] = useState(false);


  const msgPageOn =() => {
    setMsgPage(true);
  };
  const msgPageClose=() => {
    setMsgPage(false);
  }
  
  
  return (
    <>
     
{msgPage ? <MessagePage sender={name} receiver={user.username} close={msgPageClose}></MessagePage> :  <Card
        style={{
          backgroundColor: '#000000',
          color: 'white',
        }}
        sx={{
          flexDirection: 'row',
          display: 'flow-root',
          marginTop: 4,
          marginBottom: 4,
          marginRight: 18,
          marginLeft: 18,
          maxWidth: '75%',
        }}
      >
        <ButtonBase onClick={msgPageOn}>
          <CardHeader avatar={<Avatar>{user.username.charAt(0)}</Avatar>} title={user.username} />
        </ButtonBase>
        
      </Card>}
    </>
  );
};

export default UserList;

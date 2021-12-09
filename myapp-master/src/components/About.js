import { getImageListItemBarUtilityClass } from '@mui/material';
import React,{useState,useEffect} from 'react'

import './css/about.css'
import user1 from './images/user1.png'


export default function About() {


  const axios = require('axios');

    let userdetail =localStorage.getItem('email')
    userdetail= JSON.parse(userdetail)
    console.log(userdetail)
 // const getdetail = async ()=>{
   // const  email=req.body.email;
  //   try{
  //     const userdata = await axios.get(`http://localhost:5042/getUser/abc@gmail.com`)
  //     setuserdetail(userdata.data)
      
  //   }catch(e){
  //     console.log(e);
  //   }
  // }

  // useEffect(()=>{
  //   getdetail();
  // },[]);

 return (
    <div className="wrapper">
      <div className="container">
        <div className="profile-head">
          <img src={user1} alt="lamp" className="profile-img"/>
        </div>
      

        <div className="user-detail">
          <p><label>UserId: </label><span>{userdetail.logdata.userId}</span></p>
          <p><label>Userame: </label><span>{userdetail.logdata.username}</span></p>
          <p><label>Email: </label><span>{userdetail.logdata.email}</span></p>
          <p><label>Phone Number: </label><span>{userdetail.logdata.phoneNumber}</span></p>
        </div>
        
      </div>
        
    </div>
  )
}
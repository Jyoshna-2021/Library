  import React,{useState,useEffect} from 'react'
  import './css/book.css'
  import './css/transaction.css';
  
 const Transaction = ()=>{
   const axios = require('axios');
   const[booktranscation,setbooktranscation]=useState([]);


  let userdetails= localStorage.getItem('email')
  userdetails= JSON.parse(userdetails)
  
 const getbookTransaction = async()=>{
   try{
     const transdata = await axios.get(`http://localhost:5043/transcation/${userdetails.logdata.userId}`);
 //console.log(data.data);
 setbooktranscation(transdata.data);
 }catch(e){
   console.log(e);
 }
 };
 useEffect(()=>{
   getbookTransaction();
 },[]);
 const renewrow =(UserId,BookId) =>{
   axios.put(`http://localhost:5043/transcation/${UserId}/${BookId}` ,{
//     setbooktranscation(
//       booktranscation.filter((item) => {
//         return item.BookId != BookId;
//       })
//     );
   })
  }

//  const renewrow =(UserId,BookId) =>{
//    axios.put(`http://localhost:5043/transcation/${UserId}/${BookId}`).then((response) => {
//     setbooktranscation(booktranscation.map((item)=>{
//       return item.UserId==UserId ?{UserId}
//     })
// //       booktranscation.filter((item) => {
// //         return item.BookId != BookId;
// //       })
//      );
//    })
//   }

 const deleterow = (BookId,UserId) => {
  axios.delete(`http://localhost:5043/transcation/${BookId}/${UserId}`).then((response) => {
    setbooktranscation(
      booktranscation.filter((item) => {
        return item.BookId != BookId;
      })
    );
  });

  axios.put(`http://localhost:5043/books/${BookId}`,{
        })
  
}
   return(
  <div className="transaction">
      <h2>Transaction details</h2>
      <table id="heading" className="tscTable">
      <thead>
       <tr>
          <th>TranscationId</th>
          <th> UserId</th>
          <th> BookId </th>
          <th>BookName</th>
          <th>IssueDate</th>
           <th>duedate</th>
          <th>renewdate</th>
          <th>return</th>
          <th>renew</th>
        </tr>
      </thead>
      <tbody>
      {booktranscation.map((item)=>{
      return(
        <tr>
           <td>{item.TranscationId}</td>
           <td>{item.UserId} </td>
            <td>{item.BookId} </td>
            <td>{item.BookName} </td>
            <td>{item.IssueDate}</td>
            <td> {item.duedate}</td>
            <td> {item.renewdate}</td>
            <td> <button onClick={()=>{deleterow(item.BookId,item.UserId);}}>return</button></td>
            <td> <button onClick={()=>{renewrow(item.UserId,item.BookId);}}>renew</button></td>
        </tr>)
        })}
        </tbody>
      </table>
      </div>
      
   );
};
 
  
 
 export default Transaction;
 
 

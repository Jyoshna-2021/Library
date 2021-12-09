const { QueryTypes } = require('sequelize')
const  db=require('../models');
const {usertable,transcationdetails,Bookdetails}=require ("../models");
var gettranscation = async (req, resp)=> {
    try{
        const UserId = req.params.UserId;
        const gettranscations= await transcationdetails.findAll({where:{UserId:UserId}});
        return resp.status(200).json(gettranscations)
    
    }catch(e){
        console.log(e) 
        return resp.status(500).send(e);
    }

}
var posttranscation= async(req,resp)=>{
    const {UserId,BookId,BookName,IssueDate,duedate,renewdate}=req.body;
    try{
        const validation=await transcationdetails.findOne({where:{UserId:UserId,BookId:BookId}})
        if(validation === null){
        console.log(validation)
        const posttranscations= await transcationdetails.create( {UserId,BookId,BookName,IssueDate,duedate,renewdate});
        return resp.status(200).json(posttranscations)}
    }
    catch(e){
        return resp.status(500).json({"message":e})
    }
 
 }
 var deleteBook = async (req, resp)=> {
   // const userid = req.params.UserId;
    const Bookid = req.params.BookId;
    const userid = req.params.UserId;
    try{
        const vBook = await transcationdetails.findOne({where: {BookId: Bookid,UserId:userid}});
        //console.log(vBook);
        await vBook.destroy();
        return resp.status(200).end();
    }catch(e){
        return resp.status(500).json({"message": e});
    }
}
 var upadteduedate=async(req,resp)=>{
    const UserId = req.params.UserId;
    const BookId = req.params.BookId;
    try{
    //const bookupdate = await transcationdetails.findOne({where: {UserId:UserId,BookId:BookId}});
   
        const duedate= await db.sequelize.query(`UPDATE transcationdetails SET duedate= date_add(renewdate,INTERVAL 16 DAY) WHERE UserId= ${UserId} AND BookId=${BookId}`);

          //  await bookupdate.save();
    
        return resp.status(200).json(duedate);
     }catch(e){
         console.log(e);
         return resp.status(500).json({"message": e});
     }

}


 module.exports = {gettranscation,posttranscation,deleteBook,upadteduedate}

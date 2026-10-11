import { createContext } from "react";
import { useState } from "react";

const StudentContext=createContext()


const Studentcontext=(data)=>{
    const[studentList,setStudentList]=useState([
        {
            id:1,
            Name:"Akilan",
            RollNumber:"20bcs101",
            Department:"Bsc Computer Science",
            isFavourite:false
        },
        {
            id:2,
            RollNumber:"20bcs102",
            Name:"Karthik",
            Department:"Bsc Computer Science",
            isFavourite:false
        },
        {
            id:3,
            RollNumber:"20bcs103",
            Name:"Sanmuga",
            Department:"Bsc Computer Science",
            isFavourite:false
        },
        {
            id:4,
            RollNumber:"20bcs104",
            Name:"Selva",
            Department:"Bsc Computer Science",
            isFavourite:false
        },
        {
            id:5,
            RollNumber:"20bcs105",
            Name:"Rajesh",
            Department:"Bsc Computer Science",
            isFavourite:false
        },
        {
            id:6,
            RollNumber:"20bcs106",
            Name:"Krithika",
            Department:"Bsc Computer Science", 
            isFavourite:false
        },
         {
            id:7,
            RollNumber:"20bcs107",
            Name:"Divya",
            Department:"Bsc Computer Science", 
            isFavourite:false
        },
         {
            id:8,
            RollNumber:"20bcs108",
            Name:"Ananya",
            Department:"Bsc Computer Science", 
            isFavourite:false
        },
         {
            id:9,
            RollNumber:"20bcs109",
            Name:"Ankitha",
            Department:"Bsc Computer Science", 
            isFavourite:false
        },
         {
            id:10,
            RollNumber:"20bcs110",
            Name:"Preethy",
            Department:"Bsc Computer Science", 
            isFavourite:false
        }
    ])
    return(
        <StudentContext.Provider value={{studentList,setStudentList}}>
            {data.children}
        </StudentContext.Provider>
    )
}
export default Studentcontext;
export {StudentContext}
import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate=useNavigate()

    const { studentList, setStudentList } = useContext(StudentContext)
    const [eName, setEName] = useState("")
    const [eRollno, setERollno] = useState("")
    const [eDept, setEDept] = useState("")
    const handleName = (evt) => {
        setEName(evt.target.value)
    }
    const handleRollNo = (evt) => {
        setERollno(evt.target.value)
    }
    const handleDept = (evt) => {
        setEDept(evt.target.value)
    }
    const handleAdd = () => {
        if (eName.trim() === "" || eRollno.trim() === "" || eDept.trim() === "") {
            alert("Registration is incomplete.All fields are required")
            return
        }
        const alreadyExists=studentList.some((item)=>item.Name.toLowerCase()===eName.trim().toLowerCase()||item.RollNumber.toLowerCase()===eRollno.trim().toLowerCase())
        if(alreadyExists){
            alert("Already Registered! Name or Roll Number already exists.")
            return
        }
        setStudentList([...studentList,{id:studentList.length+1,RollNumber:eRollno,Name:eName,Department:eDept}])
        alert("Student Registered Successfully!")
        navigate('/')
    }
    return (
        <div className="min-h-[100dvh] overflow-hidden bg-[#d6c4fa] flex items-center justify-center p-3 sm:p-10">
            <div className="mx-auto bg-[#E6E6FA] w-full max-w-md rounded-2xl shadow-lg border border-[#C4B5FD] p-4 sm:p-8">
                <h1 className="text-3xl font-bold text-[#4C1D95]">Hey Hi 👋</h1>
                <p className="text-[#334155] mt-2 mb-6">Register a new student</p>
                <div className="flex flex-col gap-3 sm:gap-5">
                    <label className="text-sm font-semibold text-[#4C1D95]">Student Name</label>
                    <input type="text" required placeholder="Name" onChange={handleName} className="w-full border border-[#C4B5FD] p-2.5 text-sm bg-white rounded-lg outline-none text-[#334155] focus:border-[#8A2BE2] focus:ring-2 focus:ring-[#8A2BE2] sm:p-3 sm:text-base" />
                   <label className="text-sm font-semibold text-[#4C1D95]">Roll Number</label>
                    <input type="text" required placeholder="RollNumber" onChange={handleRollNo} className="w-full border border-[#C4B5FD] p-2.5 text-sm bg-white rounded-lg outline-none text-[#334155] focus:border-[#8A2BE2] focus:ring-2 focus:ring-[#8A2BE2] sm:p-3 sm:text-base"/>
                    <label className="text-sm font-semibold text-[#4C1D95]">Department</label>
                    <input type="text" required placeholder="Department" onChange={handleDept} className="w-full border border-[#C4B5FD] p-2.5 text-sm bg-white rounded-lg outline-none text-[#334155] focus:border-[#8A2BE2] focus:ring-2 focus:ring-[#8A2BE2] sm:p-3 sm:text-base"/>
                    <button className="bg-[#8A2BE2] hover:bg-[#6A5ACD] text-white font-bold p-3 rounded-lg mt-5 cursor-pointer transition" onClick={handleAdd}>Register Student</button>
                    <p className="text-center text-[#334155] mt-4">Already Registered?<Link className="text-[#6A5ACD] hover:text-[#4C1D95] font-semibold underline" to={'/'}>Student List</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Register;
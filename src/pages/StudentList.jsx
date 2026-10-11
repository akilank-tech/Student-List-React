import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";

const StudentList = () => {
    const { studentList, setStudentList } = useContext(StudentContext)

    const handleFav = (studentid) => {
        const newStudentList = studentList.map((item) => {
            if (item.id === studentid) {
                return { ...item, isFavourite: true, };
            }
            else {
                return item;
            }
        })
        setStudentList(newStudentList)
    }

    return (
        <div className="min-h-0 bg-[#d6c4fa] p-4 sm:p-8 flex justify-center">
            <div className="max-w-6xl w-full rounded-xl p-3 bg-[#c0a3fa] shadow-lg sm:p-8">
                <div className="flex items-center justify-between gap-2 mb-6">
                    <div>
                        <h1 className="text-xl sm:text-3xl font-bold text-[#4C1D95] mb-1">🎓 Student List</h1>
                        <p className="text-[#334155] text-xs sm:text-base mt-2">Manage your student details</p>
                    </div>
                    <Link to={'/FavouriteStudents'} className="bg-[#8A2BE2] text-center hover:bg-[#6A5ACD] text-white px-3 py-3 text-xs sm:px-4 sm:py-3 sm:text-base rounded-lg shadow-md transition">❤️View Favourites</Link>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg border border-[#E0E7FF] overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                               <tr className="bg-[#6A5ACD] text-white">
                                <th className="w-[10%] p-2 text-xs sm:p-4 sm:text-base">S.No</th>
                                <th className="w-[20%] p-2 text-xs sm:p-4 sm:text-base">Name</th>
                                <th className="w-[23%] p-2 text-xs sm:p-4 sm:text-base">Roll Number</th>
                                <th className="w-[25%] p-2 text-xs sm:p-4 sm:text-base">Department</th>
                                <th className="w-[22%] p-2 text-xs sm:p-4 sm:text-base">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    studentList.map((item, index) => {
                                        return (<tr key={item.id} className="border-b border-[#DDD6FE]  hover:bg-[#EDE9FE] transition">
                                            <td className="text-center break-words p-2 text-xs sm:p-4 sm:text-base text-[#334155]">{index + 1}</td>
                                            <td className="text-center break-words p-2 text-xs sm:p-4 sm:text-base font-semibold text-[#4C1D95]">{item.Name}</td>
                                            <td className="text-center break-words p-2 text-xs sm:p-4 sm:text-base text-[#334155]">{item.RollNumber}</td>
                                            <td className="text-center break-words p-2 text-xs sm:p-4 sm:text-base text-[#334155]">{item.Department}</td>
                                            <td className="p-1  sm:p-4">{item.isFavourite ? (<button disabled className="bg-gray-200 text-gray-500 px-1 py-2 text-[10px] font-medium sm:w-auto sm:px-3 sm:text-sm rounded-lg cursor-not-allowed">💜Favourited</button>) : (<button className="cursor-pointer bg-[#FBB24] hover:bg-[#F59E0B] text-[#422006] px-1 py-2 text-[10px] font-medium sm:w-auto sm:px-3 sm:text-sm rounded-lg transition" onClick={() => { handleFav(item.id) }}>💟Favourite</button>)}</td>
                                        </tr>)

                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 mb-0 text-center ">
                    <p className="text-xs sm:text-base text-[#334155]">Don't have a Registeration? {""}<Link to={'/register'} className=" text-[#6A5ACD] hover:text-[#4C1D95] font-semibold underline">Register Now</Link></p>
                </div>
            </div>
        </div>
    )
}
export default StudentList;
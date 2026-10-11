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
        <div className="min-h-screen bg-[#d6c4fa] p-5 sm:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-row justify-between items-center gap-2 mb-6">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#4C1D95] ">🎓 Student List</h1>
                        <p className="text-[#334155] mt-2">Manage your student details</p>
                    </div>
                    <Link to={'/FavouriteStudents'} className="bg-[#8A2BE2] hover:bg-[#6A5ACD] text-white px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-base rounded-lg shadow-md transition">❤️View Favourites</Link>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg border border-[#E0E7FF] overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[#6A5ACD] text-white">
                                <tr>
                                    <th className="p-4 text-center">S.No</th>
                                    <th className="p-4 text-center">Name</th>
                                    <th className="p-4 text-center">Roll Number</th>
                                    <th className="p-4 text-center">Department</th>
                                    <th className="p-4 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    studentList.map((item, index) => {
                                        return (<tr key={item.id} className="border-b border-[#DDD6FE]  hover:bg-[#EDE9FE] transition">
                                            <td className="p-4 text-[#334155]">{index + 1}</td>
                                            <td className="p-4 font-semibold text-[#4C1D95]">{item.Name}</td>
                                            <td className="p-4 text-[#334155]">{item.RollNumber}</td>
                                            <td className="p-4 text-[#334155]">{item.Department}</td>
                                            <td className="p-4">{item.isFavourite ? (<button disabled className="bg-gray-200 text-gray-500 px-3 py-2 rounded-lg cursor-not-allowed">💜Favourited</button>) : (<button className="bg-[#FBB24] hover:bg-[#F59E0B] text-[#422006] px-4 py-2 rounded-lg font-medium transition" onClick={() => { handleFav(item.id) }}>💟Favourite</button>)}</td>
                                        </tr>)

                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 text-center ">
                    <p className="text-[#334155]">Don't have a Registeration? {""}<Link to={'/register'} className=" text-[#6A5ACD] hover:text-[#4C1D95] font-semibold underline underline-offset-4">Register Now</Link></p>
                </div>
            </div>
        </div>
    )
}
export default StudentList;
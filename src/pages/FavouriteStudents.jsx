import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";


const FavouriteStudent = () => {
    const { studentList, setStudentList } = useContext(StudentContext)
    const favouriteList = studentList.filter((item) => {
        return item.isFavourite === true
    })
    const handleUnfavour = (studentid) => {
        const newStudentList = studentList.map((item) => {
            if (item.id === studentid) {
                return { ...item, isFavourite: false, };
            }
            else {
                return item;
            }
        })
        setStudentList(newStudentList)
    }


    return (
        <div className="h-screen overflow-hidden bg-[#d6c4fa] p-4 sm:p-8">
            <div className="mx-auto max-w-6xl rounded-xl bg-[#E6E6FA] p-4 shadow-lg sm:p-8">
            <div className="flex justify-between items-center gap-2 mb-5">
                <div>
                    <h1 className="text-xl sm:text-3xl font-bold text-[#4C1D95] mb-1">Favourite Students</h1>
                <p className="mt-2 text-[#334155] text-xs sm:text-base">Your favourite students List</p>
                </div>
            <Link to={'/'} className="bg-[#8A2BE2] hover:bg-[#6A5ACD] text-white text-xs sm:text-base px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-md transition "><i class="fa-solid fa-arrow-left"></i>  Back to Student List</Link>
            </div>
            {favouriteList.length === 0 ? (<div className="rounded-lg border border-[#C4B5FD] bg-[#DDD6FE] p-8 text-center"><p className="text-lg font-semibold text-[#4c1D95]">💜 No Favourite Students Added Yet!</p><p className="mt-2 text-[#334155]">Go to Student List and Add your favourite students.</p></div>) :
                (<div className="bg-white rounded-2xl shadow-lg border-[#E0E7FF] overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#6A5ACD] text-white">
                                <th className="p-4">S.No</th>
                                <th className="p-4">Name</th>
                                <th className="p-4">Roll Number</th>
                                <th className="p-4">Department</th>
                                <th className="p-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favouriteList.map((item, index) => {
                                return (
                                    <tr key={item.id} className="border-b border-[#DDD6FE] hover:bg-[#EDE9FE] transition">
                                        <td className="p-4 text-[#334155]">{index + 1}</td>
                                        <td className="p-4 font-semibold text-[#4C1D95]">{item.Name}</td>
                                        <td className="p-4 text-[#334155]">{item.RollNumber}</td>
                                        <td className="p-4 text-[#334155]">{item.Department}</td>
                                        <td className="p-4"><button className="bg-[#8A2BE2] hover:bg-[#6A5ACD] cursor-pointer text-[#422006] px-3 py-2 rounded-lg font-medium transition" onClick={() => handleUnfavour(item.id)}>💔 Unfavourite</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>)}
        </div>
        </div>    
    )
}
export default FavouriteStudent;
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
        <div className="min-h-[100dvh] bg-[#d6c4fa] p-4 sm:p-8 flex justify-center">
            <div className="max-w-6xl w-full bg-[#c0a3fa] rounded-xl p-3 shadow-lg sm:p-8">
            <div className="flex justify-between items-center gap-2 mb-6">
                <div>
                    <h1 className="text-xl sm:text-3xl font-bold text-[#4C1D95] mb-1">Favourite Students</h1>
                <p className="mt-2 text-[#334155] text-xs sm:text-base">Your favourite students List</p>
                </div>
            <Link to={'/'} className="bg-[#8A2BE2] hover:bg-[#6A5ACD] text-white text-xs sm:text-base px-3 py-4 sm:px-4 sm:py-3 rounded-xl shadow-md transition "><i class="fa-solid fa-arrow-left"></i>  Back to Student List</Link>
            </div>
            {favouriteList.length === 0 ? (<div className="rounded-lg border border-[#C4B5FD] bg-[#DDD6FE] p-8 text-center"><p className="text-lg font-semibold text-[#4c1D95]">💜 No Favourite Students Added Yet!</p><p className="mt-2 text-[#334155]">Go to Student List and Add your favourite students.</p></div>) :
                (<div className="bg-white rounded-2xl shadow-lg border-[#E0E7FF] overflow-x-auto w-full">
                    <table className="w-full table-fixed border-collapse">
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
                            {favouriteList.map((item, index) => {
                                return (
                                    <tr key={item.id} className="border-b border-[#DDD6FE] hover:bg-[#EDE9FE] transition">
                                        <td className="text-center break-words p-2 text-xs sm:p-4 sm:text-base text-[#334155]">{index + 1}</td>
                                        <td className="text-center break-words p-2 text-xs sm:p-4 sm:text-base font-semibold text-[#4C1D95]">{item.Name}</td>
                                        <td className="text-center break-words p-2 text-xs sm:p-4 sm:text-base text-[#334155]">{item.RollNumber}</td>
                                        <td className="text-center break-words p-2 text-xs sm:p-4 sm:text-base text-[#334155]">{item.Department}</td>
                                        <td className="p-2 sm:p-4"><button className="bg-[#8A2BE2] hover:bg-[#6A5ACD] cursor-pointer text-[#422006] px-1 py-2 text-[10px] font-medium sm:w-auto sm:px-3 sm:text-sm rounded-lg transition" onClick={() => handleUnfavour(item.id)}>💔 Unfavourite</button></td>
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
import React, { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { IoSchool } from "react-icons/io5";
import { sidemenu } from "./DashSideMenu";
import { Link } from "react-router-dom";
import userImg from '../../assets/user.png'
import axios from "axios";

const DashSide = () => {
  const RoleUser = secureLocalStorage.getItem("loginR");
  const EmailUser = secureLocalStorage.getItem("loginE");
  const Username = secureLocalStorage.getItem("loginU");


  const currentID = localStorage.getItem("dashmenuID") || "";

  const currentMenu = (id) => {
    localStorage.setItem("dashmenuID", id);
  };

  const loginToken = localStorage.getItem('login')

  const [getuserdata, setgetuserdata] = useState([])

//   useEffect(() => {
//       axios.get(import.meta.env.VITE_APP_API + '/user/getuserdata/' + EmailUser, {
//           headers: {
//               'Authorization': `Bearer ${loginToken}`,
//           }
//       })
//       .then(res => setgetuserdata(res.data.Result))
//       .catch(err => console.log(err))
//   }, [])

  return (
    <div className="w-full">
      <div className="flex ml-4">
        <div className="pt-3 pr-2">
          <IoSchool className="h-8 w-auto fill-[#7829e1]" />
        </div>
        <h1 className="my-4 text-center font-semibold uppercase text-xl bg-gradient-to-r from-[#7829e1] to-[#9e67e8] bg-clip-text text-transparent">
          CCK Project
        </h1>
      </div>

      <div className="flex px-4">
        <div className="my-4">
            {/* <img 
                src={getuserdata?.image ? `${import.meta.env.VITE_APP_API}/${getuserdata.image}` : userImg} 
                alt="User Image" 
                className="mt-0 rounded-full h-10 object-cover w-auto" 
            /> */}
        </div>
        <div className="mt-4 pl-4">
          <p className="uppercase text-gray-500">{Username}</p>
          <h1 className="text-sm uppercase font-semibold text-[#7829e1]">
            {RoleUser}
          </h1>
        </div>
      </div>

      <div className="mt-4">
        {sidemenu.map((menu, index) => {
          const isActive = currentID === String(menu.id); // Ensure comparison works
            if(RoleUser === "admin"){
                if(menu.id !== 7 && menu.id !== 8 ){
                    return (
                        <Link to={menu.link} key={menu.id}>
                          <div
                            onClick={() => currentMenu(menu.id)}
                            className={`py-4 pl-4 cursor-pointer duration-500 flex items-center ${
                              isActive
                                ? "text-[#7829e1] font-semibold"
                                : "text-gray-400 hover:pl-6 hover:text-[#7829e1]"
                            }`}
                          >
                            <menu.icon className="h-8 w-auto" />
                            <h1 className="pt-1 pl-4">{menu.name}</h1>
                          </div>
                        </Link>
                    );
                }
            }
            else if(RoleUser === "company"){
                if(menu.id !== 6 && menu.id !== 7 && menu.id !== 8 ){
                    return (
                        <Link to={menu.link} key={menu.id}>
                          <div
                            onClick={() => currentMenu(menu.id)}
                            className={`py-4 pl-4 cursor-pointer duration-500 flex items-center ${
                              isActive
                                ? "text-[#7829e1] font-semibold"
                                : "text-gray-400 hover:pl-6 hover:text-[#7829e1]"
                            }`}
                          >
                            <menu.icon className="h-8 w-auto" />
                            <h1 className="pt-1 pl-4">{menu.name}</h1>
                          </div>
                        </Link>
                    );
                }
            }
        })}
      </div>
    </div>
  );
};

export default DashSide;
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../utils/context";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { handleAuth } from "../utils/reducers/reducer";

import Login from "../pages/Login";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import HomeMentee from "../pages/Mentee/HomeMentee";
import HomeMentor from "../pages/Mentor/HomeMentor";
import Task from "../pages/Mentee/Task";
import InputTask from "../pages/Mentor/InputTask";
import HomeAdmin from "../pages/Admin/HomeAdmin"
import InputClass from "../pages/Admin/InputClass";
import ForumMentee from "../pages/Mentee/ForumMentee";
import ForumMentor from "../pages/Mentor/ForumMentor";
import InputMember from "../pages/Admin/InputMember";


axios.defaults.baseURL =
  "https://virtserver.swaggerhub.com/NURFATUROHMAN28/Mentutor/1.0.0";

const index = () => {
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const jwtToken = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      dispatch(handleAuth(true));
    } else {
      dispatch(handleAuth(false));
    }
    axios.defaults.headers.common["Authorization"] = getToken
      ? `Bearer ${getToken}`
      : "";
  }, [isLoggedIn]);

  return (
    <TokenContext.Provider value={jwtToken}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
          />
          <Route path="/homementee" element={<HomeMentee />} />
          <Route path="/homementor" element={<HomeMentor />} />
          <Route path="/task" element={<Task />} />
          <Route path="/inputTask" element={<InputTask />} />
          <Route path="/homeadmin" element={<HomeAdmin />} />
          <Route path="/inputclass" element={<InputClass />} />
          <Route path="/inputmember" element={<InputMember />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forummentee" element={<ForumMentee />} />
          <Route path="/forummentor" element={<ForumMentor />} />
          {/* <Route path='/profile' element={isLoggedIn ? <Profile/> : <Navigate to='/login'/>}/> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
};

export default index;

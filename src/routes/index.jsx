import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../utils/context";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { handleAuth } from "../utils/reducers/reducer";
import { useCookies } from "react-cookie";

import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import HomeMentee from "../pages/Mentee/HomeMentee";
import HomeMentor from "../pages/Mentor/HomeMentor";
import Task from "../pages/Mentee/Task";
import InputTask from "../pages/Mentor/InputTask";
import HomeAdmin from "../pages/Admin/HomeAdmin";
import InputClass from "../pages/Admin/InputClass";
import ForumMentee from "../pages/Mentee/ForumMentee";
import ForumMentor from "../pages/Mentor/ForumMentor";
import InputMember from "../pages/Admin/InputMember";
import ProfileMentee from "../pages/Mentee/ProfileMentee";
import ProfileMentor from "../pages/Mentor/ProfileMentor";
import DetailTask from "../pages/Mentor/DetailTask";

axios.defaults.baseURL = "https://ecommerce-alta.online/";

const index = () => {
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn)
  const dispatch = useDispatch()
  const [token, setToken] = useState(null)
  const [cookie, setCookie, removeCookie] = useCookies()
  const jwtToken = useMemo(() => ({ token, setToken }), [token])
  const checkToken = cookie.token;

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { data } = error.response
      if (
        data === "Missing or malformed JWT" ||
        [401, 403].includes(data.code)
      ) {
        removeCookie("token")
      }
      return Promise.reject(error)
    }
  )

  (function () {
    if (checkToken) {
      const { token } = cookie
      dispatch(handleAuth(true))
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } else {
      dispatch(handleAuth(false))
      delete axios.defaults.headers.common["Authorization"]
    }
  })()


  return (
    <TokenContext.Provider value={jwtToken}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />

          <Route path="/homementee" element={<HomeMentee />} />
          <Route path="/task" element={<Task />} />
          <Route path="/profilementee" element={<ProfileMentee />} />
          <Route path="/forummentee" element={<ForumMentee />} />

          <Route path="/homementor" element={<HomeMentor />} />
          <Route path="/inputtask" element={<InputTask />} />
          <Route path="/forummentor" element={<ForumMentor />} />
          <Route path="/profilementor" element={<ProfileMentor />} />
          <Route path="/detailtask/:task_id" element={<DetailTask />} />

          <Route path="/homeadmin" element={<HomeAdmin />} />
          <Route path="/inputclass" element={<InputClass /> } />
          <Route path="/inputmember" element={<InputMember />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
};

export default index;

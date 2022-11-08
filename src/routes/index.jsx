import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../utils/context";
import { useSelector, useDispatch } from "react-redux";
import { useState, useMemo } from "react";
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

const index = (props) => {
  // const isLoggedIn = useSelector((state) => state.data.isLoggedIn);
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies();
  const jwtToken = useMemo(() => ({ token, setToken }), [token]);
  const checkToken = cookie.token;

  const [role, setRole] = useState(null);
  const roleLogin = useMemo(() => ({ role, setRole }), [role]);
  const checkRole = cookie.role;

  axios.interceptors.response.use(
    function (response) {
      return response;
    },

    function (error) {
      const { data } = error.response;
      console.log(data);
      if (data === "Missing or malformed JWT" || [400].includes(data.code)) {
        removeCookie("token");
      }
      return Promise.reject(error);
    }
  );

  (function () {
    if (checkToken) {
      const { token } = cookie;
      dispatch(handleAuth(true));
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      dispatch(handleAuth(false));
      delete axios.defaults.headers.common["Authorization"];
    }
  })();

  return (
    <TokenContext.Provider value={jwtToken}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/homementee"
            element={
              checkToken && checkRole === "mentee" ? <HomeMentee /> : <Login />
            }
          />
          <Route
            path="/task"
            element={
              checkToken && checkRole === "mentee" ? <Task /> : <Login />
            }
          />
          <Route
            path="/profilementee"
            element={
              checkToken && checkRole === "mentee" ? (
                <ProfileMentee />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/forummentee"
            element={
              checkToken && checkRole === "mentee" ? <ForumMentee /> : <Login />
            }
          />

          <Route
            path="/homementor"
            element={
              checkToken && checkRole === "mentor" ? <HomeMentor /> : <Login />
            }
          />
          <Route
            path="/inputtask"
            element={
              checkToken && checkRole === "mentor" ? <InputTask /> : <Login />
            }
          />
          <Route
            path="/forummentor"
            element={
              checkToken && checkRole === "mentor" ? <ForumMentor /> : <Login />
            }
          />
          <Route
            path="/profilementor"
            element={
              checkToken && checkRole === "mentor" ? (
                <ProfileMentor />
              ) : (
                <Login />
              )
            }
          />

          <Route
            path="/detailtask/:task_id"
            element={
              checkToken && checkRole === "admin" ? <DetailTask /> : <Login />
            }
          />
          <Route
            path="/homeadmin"
            element={
              checkToken && checkRole === "admin" ? <HomeAdmin /> : <Login />
            }
          />
          <Route
            path="/inputclass"
            element={
              checkToken && checkRole === "admin" ? <InputClass /> : <Login />
            }
          />
          <Route
            path="/inputmember"
            element={
              checkToken && checkRole === "admin" ? <InputMember /> : <Login />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
};

export default index;

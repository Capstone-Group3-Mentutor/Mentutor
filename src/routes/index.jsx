import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import axios from 'axios'
import { TokenContext } from '../utils/context'
import { useSelector, useDispatch } from 'react-redux'
import {useEffect, useState, useMemo} from 'react'
import { handleAuth } from '../utils/reducers/reducer'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

axios.defaults.baseURL = "https://virtserver.swaggerhub.com/NURFATUROHMAN28/Mentutor/1.0.0"

const index = () => {
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn)
  const dispatch = useDispatch()
  const [token, setToken] = useState(null)
  const jwtToken = useMemo(
    () => ({
      token,
      setToken,
    }),
     [token]
  )

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
  }, [isLoggedIn])

  return (
    <TokenContext.Provider value={jwtToken}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  )
}

export default index
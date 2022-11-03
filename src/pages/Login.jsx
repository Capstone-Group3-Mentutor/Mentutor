import React,{ useState, useeffect, useEffect }  from 'react'
import { useNavigate } from 'react-router-dom'

import girl from '../assets/girl.png'
import CustomInput from '../components/CustomInput'


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const useEffect = () => {

  }


  return (
    <div className='w-full h-screen overflow-auto flex flex-row bg-putih'>
      <div className='hidden md:w-1/2 md:flex md:justify-center items-center bg-gradient-to-b from-[#202442] to-[#332B6A] rounded-r-[25px]'>
        <img id="gbr-login" className='w-[85%] text-center' src={girl}/>
      </div>
      <form className='w-full md:w-1/2 px-10 lg:px-28 py-28'>
        <h1 className='font-semibold text-4xl mb-10'>Login to your account</h1>
        <div className='space-y-5  text-sidebar '>
          <div className='flex flex-col'>
            <p className='font-semibold'>Email</p>
            <CustomInput
            id="input-email"
            category="Login"
            type="email"
            placeholder="Input Email"
            />
          </div>
          <div className='flex flex-col mb-10'>
            <p className='font-semibold'>Password</p>
            <CustomInput
            id="input-password"
            category="Login"
            type="password"
            placeholder="Input Password"
            />
          </div>
        </div>
        <div className='w-full'>
          <div className="btn w-full pl-3 h-[3.4rem] bg-[#473E8B] rounded-[10px] mt-10 mb-3">
            <button>Login</button>
          </div>
          <p className='text-abu font-light text-center w-full'>If you dont have an account, please contact <a className='font-normal text-[#26317C] cursor-pointer'>admin</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login
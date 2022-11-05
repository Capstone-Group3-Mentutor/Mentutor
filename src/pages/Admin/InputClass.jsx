import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { ListClass } from '../../components/ListItems'
import { apiRequest } from '../../utils/apiRequest'
import Swal from 'sweetalert2'

const InputClass = () => {
  
  const [className, setClassName] = useState("")
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate()
  
  useEffect(() => {
    if (className) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [className])

  const registerClass = async (e) => {
    setLoading(false)
    e.preventDefault()

    if (className.length == 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Data cannot be empty !",
        showConfirmButton: true,
      })
      return
  }
 const body = {
      class : className,
    }
    apiRequest("admin/users","post",body)
    .then((res) => {
      if (res?.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Succes",
          showConfirmButton: true,
          })
      }
      // navigate("/homeadmin")     
    })
    .catch((err) => {
      if (err.response?.status === 400) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Invalid Input From Client",
          showConfirmButton: true,
          })
      } else if (err.response?.status === 500 ) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something Error In Server",
          showConfirmButton: true,
        })
      } 
    })
    .finally(() => {
      setLoading(false)
    }) 
  } 

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <div className="md:space-y-2 mb-3">
          <h1 className="text-putih text-lg md:text-3xl font-medium">
            Add Class
          </h1>
          <p className="text-abu font-light text-[8px] md:text-sm ">
            Join the class to learn with each others.
          </p>
      </div>
      <form className='w-full h-[10rem] md:h-[13rem] bg-card rounded-[30px] text-xs md:text-lg mb-5 px-3 md:px-7 py-3'
      onSubmit={(e) => registerClass(e)}
      >
        <div className='flex flex-col space-y-2 w-1/2'>
          <p className="text-putih text-md md:text-lg">Class</p>
          <CustomInput
          id="input-class"
          category="Class"
          type="text"
          placeholder="Class Name"
          onChange={(e) => setClassName(e.target.value)}
          value={className}
          />
        </div>
        <div className='text-start mt-7'>
          <CustomButton
          id="btn-addClass"
          color="Primary"
          label="Add"
          // loading={loading || disabled}
          />
        </div>
      </form>
      <div className='w-full h-[26rem] md:h-[18rem] bg-card rounded-[30px] text-xs md:text-lg overflow-auto mb-7'>
        <div className='flex flex-row text-putih px-3 md:px-7 py-2 space-x-2 sticky top-0 z-10 bg-card border-abu border-opacity-50 border-b'>
          <p className='w-[10%] text-center'>No</p>  
          <p className='w-[30%] text-center'>Class Name</p>  
          <p className='w-[30%] text-center'>Number of Mentess</p>  
          <p className='w-[25%] text-center'>Mentor</p>  
          <p className='w-[20%] text-center'>Status</p>  
          <p className='w-[2%] text-center'></p>  
        </div>
        <hr className='text-abu mx-3 border-abu border-opacity-50' />
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
      </div>
    </Layout>
  )
}

export default InputClass
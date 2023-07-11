/* eslint-disable react/no-unescaped-entities */
"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const session =useSession();
  const router = useRouter()
  // console.log(session);
  // if(session.status ==="loading"){
  //     return <p>Loading....</p>
  // }
  if(session.status ==="authenticated"){
    router.push('/dashboard')
  }
   const signInFunc = async () =>{
    signIn("google")
  }


  return (
    <div style={{ width: '100vw', height: '100vh' }} className='bg-[#f0f0f0]'>
      {/* <p>Hellow</p>
        <button onClick={()=>signInFunc("google")}>Login with google</button> */}
      <div className='flex w-full h-full'>
        <div className='bg-black h-screen w-5/12 text-white max-sm:hidden'>
          <div className='mt-[23rem] ms-[13rem] text-7xl font-semibold '>
            Board.
          </div>
        </div>
        <div className=' pt-44 ps-56 max-sm:ps-6'>
          <header className='text-black'>
            <h1 className=' text-4xl font-bold mb-1'>Sign In</h1>
            <p className=' font-semibold text-black'>Sign in to your account</p>
          </header>
          <div className='flex mt-8 max-sm:flex-col'>
            <button className=' px-5 py-2 flex gap-2 bg-white rounded-xl text-slate-500 hover:text-slate-900 hover:shadow transition duration-150 font-light text-sm me-4 max-sm:mb-3'>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1 me-1'>
                <g id="google-icon 1" clipPath="url(#clip0_0_347)">
                  <path id="Vector" d="M13.9926 7.13096C13.9926 6.55738 13.9449 6.13883 13.8419 5.70477H7.1394V8.2936H11.0736C10.9943 8.93695 10.566 9.90584 9.61414 10.5569L9.6008 10.6436L11.72 12.2478L11.8668 12.2622C13.2152 11.0452 13.9926 9.25473 13.9926 7.13096" fill="#4285F4" />
                  <path id="Vector_2" d="M7.13948 13.9519C9.0669 13.9519 10.685 13.3318 11.8669 12.2622L9.61422 10.5569C9.0114 10.9677 8.20233 11.2545 7.13948 11.2545C5.2517 11.2545 3.64946 10.0376 3.07831 8.35565L2.99459 8.3626L0.791024 10.0291L0.762207 10.1074C1.93612 12.3862 4.34742 13.9519 7.13948 13.9519Z" fill="#34A853" />
                  <path id="Vector_3" d="M3.07816 8.35566C2.92746 7.92161 2.84024 7.45651 2.84024 6.97597C2.84024 6.49537 2.92746 6.03033 3.07023 5.59627L3.06624 5.50383L0.835056 3.81058L0.762055 3.84451C0.27823 4.79015 0.000610352 5.85207 0.000610352 6.97597C0.000610352 8.09987 0.27823 9.16173 0.762055 10.1074L3.07816 8.35566" fill="#FBBC05" />
                  <path id="Vector_4" d="M7.13948 2.69735C8.47995 2.69735 9.38417 3.26317 9.89976 3.73602L11.9145 1.81375C10.6771 0.689847 9.0669 0 7.13948 0C4.34742 0 1.93612 1.5657 0.762207 3.84449L3.07038 5.59626C3.64946 3.91428 5.2517 2.69735 7.13948 2.69735" fill="#EB4335" />
                </g>
                <defs>
                  <clipPath id="clip0_0_347">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p onClick={()=>signInFunc()}>Sign in with Google</p>
            </button>
            <button className='p-5 py-2 flex gap-2 bg-white rounded-xl text-slate-500 hover:text-slate-900 hover:shadow transition duration-150 font-light text-sm max-sm:w-[95%]'>
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1'>
                <g id="apple 1" clipPath="url(#clip0_0_355)">
                  <path id="Vector" d="M6.34516 1.21952C7.27201 0.00716167 8.56055 0.00125122 8.56055 0.00125122C8.56055 0.00125122 8.75222 1.14107 7.83144 2.23908C6.84828 3.41151 5.73078 3.21966 5.73078 3.21966C5.73078 3.21966 5.52094 2.29759 6.34516 1.21952V1.21952ZM5.84866 4.0181C6.32548 4.0181 7.21043 3.36763 8.36232 3.36763C10.3451 3.36763 11.1251 4.76781 11.1251 4.76781C11.1251 4.76781 9.59954 5.54189 9.59954 7.42017C9.59954 9.53904 11.5 10.2693 11.5 10.2693C11.5 10.2693 10.1715 13.9801 8.37708 13.9801C7.55292 13.9801 6.91217 13.4289 6.04378 13.4289C5.15883 13.4289 4.28065 14.0007 3.70868 14.0007C2.0701 14.0007 0 10.4806 0 7.65098C0 4.86704 1.7522 3.40664 3.39569 3.40664C4.46411 3.40664 5.29321 4.0181 5.84866 4.0181V4.0181Z" fill="#999999" />
                </g>
                <defs>
                  <clipPath id="clip0_0_355">
                    <rect width="11.5" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p>Sign in with Apple</p>
            </button>
          </div>
          <div className="bg-[#fff] mt-5 p-6 rounded-xl font-medium">
            <div className="w-full mb-5">
              <div className="flex flex-col justify-center">
                <label htmlFor="user">Email address</label>
                <input type='text' placeholder="Username" name='user'
                  className="px-1  w-full  rounded-xl py-2 text-gray-700 bg-[#F5F5F5] focus:outline-none items-center" />
              </div>
            </div>
            <div className="w-full mb-5">
              <div className="flex flex-col justify-center">
                <label htmlFor="pass">Password</label>
                <input type='password' placeholder="Password" name='pass'
                  className="px-1 w-full rounded-xl py-2 text-gray-700 focus:outline-none bg-[#F5F5F5]" />
              </div>
            </div>
            <a href="#" className="text-sm text-opacity-100 mb-1 mt-2 text-blue-600 underline" style={{ textDecoration: 'none' }}>Forgot Password?</a>
            <button type="submit" onClick={()=>router.push('/dashboard')}
              className="w-full mt-3 py-2 bg-black rounded-xl font-semibold text-gray-100 focus:outline-none">Sign In</button>
          </div>
          <div className=' w-full flex justify-center align-middle'>
            <div>
              <a href="#" className="text-sm text-opacity-100 float-left mt-6 mb-8 ">Don&apos;t have an account ? <span className='text-blue-600'>Register here</span> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
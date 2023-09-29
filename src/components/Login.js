import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    
    <div>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
alt="logo"/>
</div> 

<form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0'>
<h1 className='font-'>Sign In</h1>
    <input type="text" placeholder='Email Address' className='p-2 m-2'/>
    <input type='password' placeholder='Password' className='p-2 m-2'/>
<button className='p-4 m-4 '>Sign In</button>

</form>

</div>
  )
}

export default Login
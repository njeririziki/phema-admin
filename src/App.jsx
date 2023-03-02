import { useState } from 'react'
import CreateUser from './page/CreateUser'
import UsersManagement from './page/Users'

function App() {

  return (
    <div className='h-screen w-screen bg-white'>
      {/* <UsersManagement/> */}
      <CreateUser/>
    </div>
  )
}

export default App

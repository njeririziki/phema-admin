import { useState } from 'react'
import UsersManagement from './page/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen bg-white'>
      <UsersManagement/>
    </div>
  )
}

export default App

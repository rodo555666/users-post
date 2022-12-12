import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Formuser from './componentes/Formuser';
import Usercard from './componentes/Usercard';



function App() {
  const [users, setusers] = useState()
  const [update, setupdate] = useState()


const getallusers = () => {

const URL = 'http://users-crud.academlo.tech/users/'

axios.get(URL)
.then(res=> setusers(res?.data))      
.catch(err=> console.log(err))


}

useEffect(() => {

getallusers()

}, [])



const crateNewUser = data => {
  const URL =  'http://users-crud.academlo.tech/users/'

  axios.post(URL, data)
  .then(() => getallusers())      
  .catch(er=> console.log(er))
}

const deleteUser = (id) => {
  const URL =  `http://users-crud.academlo.tech/users/${id}`

  axios.delete(URL)
  .then(() => getallusers())      
  .catch(err=> console.log(err))
}

const editUser = (id, data) => {
  const URL =  `http://users-crud.academlo.tech/users/${id}`

  axios.put(URL, data)
  .then( res => getallusers())      
  .catch(err=> console.log(err))
}










  return (
    <><div className="App">
      <Formuser crateNewUser={crateNewUser}
      update={update}
      editUser={editUser}
      setupdate={setupdate} />
    
    <div className='user_container'> {
      users?.map(user => (
        <Usercard 
        key={user.id}
        user={user}
        deleteUser={deleteUser}
        setupdate={setupdate}/>
      ))
    } 
    </div>
    
  </div> </>
  )
}

export default App

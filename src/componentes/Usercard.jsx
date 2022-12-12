import React from 'react'
import './carduser.css'

const Usercard = ({ user, deleteUser , setupdate }) => {







  return (
    <><article>
      <h3>{user.first_name} {user.last_name}</h3>

      <ul>
        <li><span>Email: </span>{user.email} </li>
        <li><span>Birthday: </span>{user.birthday} </li></ul>
      <footer><button>
      <i  onClick={() => deleteUser(user.id)}     className="fa-solid fa-trash"   ></i>
      </button>
       <button>
      <i onClick={() => setupdate(user) } className="fa-solid fa-pen-to-square"></i>
       </button>
      </footer>
    </article></>
  )
}

export default Usercard
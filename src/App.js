import React, { useState } from "react"
import Form from './Form'

function App() {
  // const [member, setMember] = useState(props.memberToEdit || {name: '', email: '', role: ''})
  // const [member, setMember] = useState({name: [], email: [], role: []})
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [role, setRole] = useState([])
  // const [member, setMember] = useState({name: '', email: '', role: ''})
  // const [member, setMember] = useState('why')

/* li {display: inline;}  */

const ul = {
  float: 'left', 
}
const li = {
  display: 'inline',
  width: '400px'
}

  return (
    <div className="App-header">
      <Form name={name} setName={setName} email={email} setEmail={setEmail} role={role} setRole={setRole} />
<ul style={ul}>
      {name.map(item => (
            <li key={item} className="movie-star">
              {item}
            </li>
          ))} 
</ul>
{/* <br></br> */}
<ul style={ul}>
{email.map(item => (
            <li key={item} className="movie-star">
              {item}
            </li>
          ))} 
</ul>
{/* <br></br> */}

<ul style={ul}>
{role.map(item => (
            <li key={item} className="movie-star">
              {item}
            </li>
          ))} 
</ul>

    </div>
  )
}

export default App

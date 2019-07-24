import React, { useEffect, useState } from "react"
import Form from './Form'


function App() {
    const [member, setMember] = useState(props.memberToEdit || {name: '', email: '', role: ''})

  return (
    <div className="container">
      <Form member={member} setMember={setMember} />
    </div>
  )
}

export default App

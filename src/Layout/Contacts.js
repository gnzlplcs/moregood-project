import React from 'react'

const Contacts = ({ list }) => {
  return (
    <div>
      {list.map((contact) => (
        <div key={contact.id}>Contact {contact.id}</div>
      ))}
    </div>
  )
}

export default Contacts
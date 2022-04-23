import React, { useEffect } from 'react'

export default function Logout() {

    useEffect(() => {
       localStorage.removeItem("key");
    },[]);
  return (
    <div>You logged out sucessfully!</div>
  )
}

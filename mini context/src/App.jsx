import React from "react"
import UserContextProvider from "./context/UserContext/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <h1>Ramkrishna Patidar</h1>
    </UserContextProvider>
  )
}

export default App

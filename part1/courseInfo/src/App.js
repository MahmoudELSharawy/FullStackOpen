import React from 'react'
const App = () => {
  const name = "peter"
  const age = 15
  return (
    <>
      <h1>Greetings</h1>
      <Hello name = "Mahmoud" age = {20} />
      <Hello name = "Elsharawy" age = {age}/>
      <Hello name = {name} age = {age}/>
      <Footer />
    </>
  )
}
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

export default App
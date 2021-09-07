import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content name = {part1} exercisesNumber = {exercises1}/>
      <Content name = {part2} exercisesNumber = {exercises2}/>
      <Content name = {part3} exercisesNumber = {exercises3}/>
      <Total exercisesNumber1 = {exercises1} exercisesNumber2 = {exercises2} exercisesNumber3 = {exercises3} />
     
 
      
    </div>
  )
}
const Header = (props) => {
  return(
    <h1>{props.course}</h1>

  )
  
}
const Content = (props) => {
  return (
    <p>
    {props.name} {props.exercisesNumber}
  </p>

  )

}
const Total = (props) => {
  return (
    <p>
    Number of exercises {props.exercisesNumber1 + props.exercisesNumber2 + props.exercisesNumber3}
    </p>
  )


}

export default App
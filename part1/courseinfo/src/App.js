const Header = ({ course }) => (
    <h1>{course}</h1>
)

const Content = ({ parts }) => (
  <>
    <Part part={parts[0].name} exercises={parts[0].exercises} ></Part>
    <Part part={parts[1].name} exercises={parts[1].exercises} ></Part>
    <Part part={parts[2].name} exercises={parts[2].exercises} ></Part>
  </>
)


const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const Total = ({ parts }) => (
    <p>
      Number of exercises {parts.reduce((total, part) => total + part.exercises, 0)}
    </p>
  )

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      } 
    ]
  }

  return (

    <>
      <Header course={course.name}></Header>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App
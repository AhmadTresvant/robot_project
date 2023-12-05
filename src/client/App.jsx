import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([])

  useEffect(()=> {
    async function getData() {
      const response = await fetch("/api/robot");
      const data = await response.json()
      console.log(data);
      setRobots(data);
    }
    getData()
},[])

  return (
    <div className="App">
hello world
{robots.map(robot =>(
  <div>
    <h3>{robot.name}</h3>
  </div>
))}
    </div>
  );
}

export default App;

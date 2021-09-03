import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = ()=>{
  const [tasks, setTasks]=useState([
    {
        id:1,
        text: 'Doctor Appointment',
        day: 'Sept 7th at 2:30pm',
        reminder:true,
    },
    {
        id:2,
        text: 'GDSC Meeting',
        day: 'Sept 8th at 1:30pm',
        reminder:true,
    },
    {
        id:3,
        text: 'Family Dinner',
        day: 'Sept 9th at 8:30pm',
        reminder:false,
    }
])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;

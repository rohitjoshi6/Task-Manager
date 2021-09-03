const tasks=[
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
]

const Tasks = () => {
    return (
        <>
          {tasks.map((task)=>(
          <h3 key={task.id}>{task.text}</h3>
          ))}  
        </>
    )
}

export default Tasks

import React from 'react'

const Task = ({title,description,deleteTask,index}) => {
 
  return (
    <div className='task'>
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <div className='btn'>
        <button onClick={()=>deleteTask(index)}>X</button>
      </div>
    </div>
  )
}

export default Task

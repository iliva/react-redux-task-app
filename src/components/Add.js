import React from 'react';
import TaskForm from './TaskForm';

const Add = React.createClass({

  render() {
	
	const task = {name: '', description: '', active: true};
	
    return (
			<div>
				<div className="container">	
					<h1>Add Task</h1>
					<TaskForm task={task} {...this.props} add={true}  />
				</div>	
			</div>	
    )
  }
});

export default Add;

import React from 'react';
import TaskForm from './TaskForm';

const Edit = React.createClass({

  render() {

    const { taskId } = this.props.params;

	const i = this.props.tasks.findIndex((task) => task.id == taskId);
	const task = this.props.tasks[i];
	
    return (
			<div>
				<div className="container">	
					<h1>Update</h1>
					<TaskForm task={task} {...this.props} add={false} />
				</div>	
			</div>	
    )
  }
});

export default Edit;

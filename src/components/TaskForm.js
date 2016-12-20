import React from 'react';
import { browserHistory } from "react-router";

const TaskForm = React.createClass({
	render: function(){
		
		const { task, add } = this.props;
		
		const SubmitTitle = add ? 'Add Task' : 'Edit';
		
		return(
			<form id="update-form" onSubmit={this.onSubmit}>
					
					<div className="form-group">
						<label >Task Name</label>
						<input type="text"
								ref="name"
								defaultValue={task.name}
								className="form-control"
								required />
					</div>
					
					<div className="form-group">
						<label>Task Description</label>
						<input type="text"
								ref="description"
								defaultValue={task.description}
								className="form-control"
								required />
					</div>

					<div className="form-group">
						
						<input type="checkbox"
								ref="active"
								defaultChecked={task.active}							
								/>
						<label>Active</label>	   

					</div>	
					
					<button type="submit" className="btn btn-primary" >
						{SubmitTitle}
					</button>
				</form>			
		)
	},
	onSubmit: function(e){
		e.preventDefault();
		
		const name = this.refs.name.value.trim()
		const description = this.refs.description.value.trim()
		const active = this.refs.active.checked;
		
		if(this.props.add) {
			const new_task = { name, description, active }
			this.props.addTask(new_task);
		} else {
			const new_task = { id: this.props.task.id, name, description, active }
			this.props.updateTask(new_task)				
		}
		browserHistory.push("/")	
	}		
});

export default TaskForm;
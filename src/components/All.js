import React from 'react';
import { IndexLink, Link } from "react-router";
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.css';

const All = React.createClass({
  render() {
	
	const activeButtons = this.props.buttons.map(button =>	
			<button 
				key={button.name} 
				className={button.active?'btn btn-danger':'btn btn-default'} 
				onClick={ this.props.turnOnButton.bind(null, button) }	>
				{button.name.toUpperCase()}
			</button> 	
		)
	

	const activeButton = this.props.buttons.filter((i)=>i.active)[0].name;
		
	const tasks = this.props.tasks.filter(task => {
			switch(activeButton){
				case 'active': return task.active; break;
				case 'unactive': return !task.active; break;
				default: return task; break;	
			}	
		}
	) 

	const tasksList = tasks.map(task => {
			return <Item {...this.props} key={task.id} task={task} />
		}
	) 
		
    return (
	
			<div>
				<div className="container">
					<h1>Tasks List</h1>
					<div className="row">

						<div className="col-xs-6">
							<div className="btn-group">
								{activeButtons}
							</div>
						</div>	
						<div className="col-xs-4">
	
						</div>						
						<div className="col-xs-1">
							<Link to={"/add"} className="btn btn-primary">Add Task</Link>
						</div>
					</div>
				</div>	
				<hr />
				<div className="container">
					<div className="row">
						<table className="table table-striped">
							<tbody>
								{tasksList}
							</tbody>	
						</table>		
					</div>
				</div>	
			</div>
    )
  }
});

export default All;

import React from 'react';
import { Link } from 'react-router';

const Item = React.createClass({
  render() {
    const { task } = this.props;
    return (
					<tr key={task.id}>
						<td>
							<input 
								type="checkbox" 
								checked={task.active} 
								onChange={ this.props.toggleActiveTask.bind(null, task.id) }	/>
						</td>
						<td>{ task.name }</td>
						<td>{ task.description }</td>
						<td>
							<Link 
								to={`/edit/${task.id}`} 
								className="btn btn-xs btn-default" >
								edit
							</Link>
						</td>
						<td><button 
							className="btn btn-xs btn-default" 
							onClick={ this.props.removeTask.bind(null, task.id) } >
							remove
							</button>
						</td>
					</tr>			
    )
  }
});

export default Item;

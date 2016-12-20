function tasks(state = [], action) {
  switch(action.type) {
    case 'REMOVE_TASK':
		return [ ...state.filter(task => task.id !== action.taskId) ];	
		
    case 'TOGGLE_ACTIVE_TASK':
		return [ 
			...state.map(task => { 
				{ task.id == action.taskId ? task.active = !task.active : null }
				return task; 
			})
		];
			
    case 'UPDATE_TASK':
		return [ 
			...state.map(task => { 
				{ task.id == action.task.id ? task = action.task : null }
				return task; 
			})
		];
	
    case 'ADD_TASK':
		action.task.id = [...state].sort((a, b) => a.id - b.id).slice(-1)[0].id + 1;
		return [...state, action.task];
		
    default:
		return state;
	  
  }
}

export default tasks;

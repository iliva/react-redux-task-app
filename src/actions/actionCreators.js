export function removeTask(taskId) {
  return {
    type: 'REMOVE_TASK',
    taskId
  }
}

export function toggleActiveTask(taskId) {
  return {
    type: 'TOGGLE_ACTIVE_TASK',
    taskId
  }
}

export function turnOnButton(button) {
	return {type: "TURN_ON_BUTTON", button};
	/*
	return function(dispatch) {
		new Promise((resolve) => {
			resolve( dispatch({type: "TURN_ON_BUTTON", 	button}) )
		}).then(() => 
			dispatch({type: "FILTER_ACTIVE_TASKS", button})
		);
	}
	*/
}

export function updateTask(task) {
  return {
    type: 'UPDATE_TASK',
    task
  }
}

export function addTask(task) {
  return {
    type: 'ADD_TASK',
    task
  }
}
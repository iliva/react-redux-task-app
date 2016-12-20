function buttons(state = [], action) {
  switch(action.type) {

    case 'TURN_ON_BUTTON':
		return [ 
			...state.map(button => { 
				{ button == action.button ? button.active = true : button.active = false }
				return button; 
			})
		];	
		
    default:
		return state;
  }
}

export default buttons;

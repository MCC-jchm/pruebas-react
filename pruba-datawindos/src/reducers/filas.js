const filas = (state =[] , action) => {
    console.log('Insertando desde el reducer',action.id,action.text)
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          action
        ]
      
      default:
        return state
    }
  }
  
  export default filas;
  

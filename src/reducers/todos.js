import { act } from "react-test-renderer"

//reducers take previous state and an action in its parameters

const todos = (state =[] , action) =>{
    switch(action.type){
        case 'ADD_TODO' :
            return [
                ...state,{
                    id        :     action.id,
                    text      :     action.text,
                    completed :     false  
                 }
            ]

        case 'TOGGLE_TODO' :

        default :
          return state
    }
}

export default todos
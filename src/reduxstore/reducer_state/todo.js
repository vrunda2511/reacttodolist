import { ADD_TODO, TOGGLE_TODO,DELETE_TODO } from "../actiontype";

const initialstate={
    alltodos:[],
    todosbyID:[]
}

export default function(state=initialstate,action){
    console.log(state,action.type)
    switch(action.type){
        case ADD_TODO:{
            const { id, value } = action.payload;
            return{
                ...state,
                alltodos:[...state.alltodos,id],
                todosbyID:{
                    ...state.todosbyID,
                    [id]:{
                        value,
                        completed:false
                    }
                }
            };
        }
        
       case TOGGLE_TODO:{
           const {id}=action.payload;
           return{
               ...state,
               todosbyID:{
                   ...state.todosbyID,
                   [id]:{
                       ...state.todosbyID[id],
                       completed:!state.todosbyID[id].completed
                   }
               }
           };
       }
       case DELETE_TODO:{
           console.log("delete")
        const {id}=action.payload;
        return {
            ...state.alltodos,
            todosbyID: [...state.todosbyID.filter((todo)=>todo.id !== id)]
        };
       }
      
       default:
           console.log("aas"+state)
           return state;
           
    }
}
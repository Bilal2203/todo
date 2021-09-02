// glavnyi store reducer menen ishteit
// action logikasyna karata atkargan jer ushul jerde jaigashkan r-reducers
// logika dannyilar ushul jerde
import { combineReducers } from "redux";
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from '../actions/actions';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => { //constantalardyn ichinen SHOW_ALLdu alat.
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
          case 'TOGGLE_TODO':
            return state.map(todo => 
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp



/*
    _____ OUR STATE _____

{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/



// const initialState = {
//     visibilityFilter: VisibilityFilters.SHOW_ALL,
//     todos: [
//         {
//             text: 'init',
//             completed: true
//         }
//     ]
// }



/* export default function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
} */



/* function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            })
        default:
            return state
    }
} */



/* Это называется композицией редюсеров и является фундаментальным шаблоном построения Redux-приложений. */
/* function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.todos.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed,
                    })
                }

                return todo;
            })
        default:
            return state;
    }
} */



/* function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case ADD_TODO :
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case TOGGLE_TODO :
            return Object.assign({}, state, {
                todo: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed,
                        })
                    }

                    return todo;
                })
            })
        default:
            return state;
    }
} */



/* function todoApp(state = initialState, action) {
    // Пока не обрабатываем никаких экшенов
    // и просто возвращаем состояние, которое приняли в качестве параметра
    return state
} */



/* function todoApp(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    // Пока не обрабатываем никаких экшенов
    // и просто возвращаем состояние, которое приняли в качестве параметра
    return state
} */
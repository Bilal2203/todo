// ekshndar bul 3su
// ekshn tipy
export const ADD_TODO = 'ADD_TODO' //bir nerse koshobuz
export const TOGGLE_TODO = 'TOGGLE_TODO' //atkarylgan nerse
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER' // bul filter sortirovka kylat. All||Active||Completed - bular 'SET_VISIBILITY_FILTER'


// const NOMINAL = ["USD", "SOM", "RUB"];-constantalar
// constantalar ekshnga joop berbeit.bul objectter
export const VisibilityFilters = { //korunushtun filterin jasait type saktait.this object
    SHOW_ALL: 'SHOW_ALL', //constanta kylyp saktait
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}//ekshn ushular menen ishtesh kerek . biz kaisy bir knopkany bazsak ushulishtep anan 'SET_VISIBILITY_FILTER'ge  barat


//generation 
// action creators logikasyna karata tuzulot
// action creators emne? 

let nextTodoId = 0//bashtalyshy
export const addTodo = text => ({ //text alat syrttan, misaly biz jazgan text
    // have object ekshn
    type: ADD_TODO, 
    id: nextTodoId++, //koboiot
    text: text
})//eksh generator

export const setVisibilityFilter = filter => ({//filter kabyl alat SHOW_ALL: 'SHOW_ALL',
                                                                // SHOW_COMPLETED: 'SHOW_COMPLETED',
                                                                // SHOW_ACTIVE: 'SHOW_ACTIVE'
    type: SET_VISIBILITY_FILTER,
    filter //baskan nerse tushot ushul jerge
})

export const toggleTodo = id => ({ //atkaryldy or atkarylbady oshogo karap ishteit
    type: TOGGLE_TODO, //type
    id: id 
})
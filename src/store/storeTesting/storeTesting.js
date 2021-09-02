import { store } from '../store';
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from '../actions/actions';

/* 
Отправка экшенов (Dispatching Actions)
На текущий момент у нас есть созданный стор, давайте проверим, как работает наше приложение! 
Даже без любого UI мы уже можем проверить логику обновления состояния.
*/

export function storeTesting() {
    // Выведем в консоль начальное состояние
    console.log(store.getState());
    
    // Каждый раз при обновлении состояния - выводим его
    // Отметим, что subscribe() возвращает функцию для отмены регистрации слушателя
    const unsubscribe = store.subscribe(() => console.log(store.getState()))

    // Отправим несколько экшенов
    store.dispatch(addTodo('Learn about actions'));
    store.dispatch(addTodo('Learn about reducers'));
    store.dispatch(addTodo('Learn about store'))
    store.dispatch(toggleTodo(0))
    store.dispatch(toggleTodo(1))
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

    // Прекратим слушать обновление состояния
    unsubscribe();
}
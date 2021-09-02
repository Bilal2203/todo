import './App.css';
// import { storeTesting } from './store/storeTesting/storeTesting'

import Footer from './components/Footer/footer'
import AddTodo from './containers/AddTodo/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList/VisibleTodoList'

export default function App() {
    //uncomment for testing
    // storeTesting();
    return (
        <div>
            <AddTodo />
            <VisibleTodoList  />
            <Footer />
        </div>
    )

}
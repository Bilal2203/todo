import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/actions';

let AddTodo = ({dispatch}) => { //dispatch-
    let input; //ozgormo 

    return (
        <div>
            <form
            style={{
                color: 'red',

            }}
            onSubmit={e => {
                e.preventDefault() //avtoobnovlenie
                if (!input.value.trim()) { 
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}
        >
                <input style={{
                    margin: '30px',
                    textAlign: 'center',
                    color: 'red'

                }} ref={node => (input = node)} />
                <button style={{color: 'blue'}} type="submit">Add Todo</button>
            </form>
        </div>
    )
}
export default connect()(AddTodo);//connect.  react-reduxtan kelip atat
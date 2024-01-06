/**
 * Created by 0easy-23 on 2017/8/15.
 */
import {connect} from 'react-redux';
import AddTodo from '../components/AddTodo';
import { addTodo } from '../actions';
export default connect(undefined, (dispatch) => ({
    addTodo: (text) => {dispatch(addTodo(text))}
}))(AddTodo);
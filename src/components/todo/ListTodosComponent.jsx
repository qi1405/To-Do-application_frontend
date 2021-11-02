import React, {Component} from "react";
import TodoDataService from "../../api/todo/TodoDataService.js";
import AuthenticationService from "./AuthenticationService.js";
import moment from "moment";


class ListTodosComponent extends Component {
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('componentWillUnmount')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshTodos()
        console.log(this.state)
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                //console.log(response)
                this.setState({todos : response.data})
            }
        )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username)
        TodoDataService.deleteTodo(username, id)
        .then(
            response => {
                this.setState({message: `Delete of todo ${id} successful`});
                this.refreshTodos()
            }
        )
    }

    addTodoClicked() {
        this.props.history.push('/todos/-1')
    }

    updateTodoClicked(id) {
        // let username = AuthenticationService.getLoggedInUserName
        console.log('update ' + id)
        this.props.history.push(`/todos/${id}`)
        // /todos/${id}
        // TodoDataService.deleteTodo(username, id)
        // .then(
        //     response => {
        //         this.setState({message: `Delete of todo ${id} successful`});
        //         this.refreshTodos()
        //     }
        // )
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-successful">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>targetDate</th>
                                <th>isComplete?</th>
                                <th>Delete?</th>
                                <th>Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent
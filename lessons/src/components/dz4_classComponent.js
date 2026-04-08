import { Component } from 'react';

class ComponentClass extends Component {
  state = {
    input: '',
    todos: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }
  componentDidMount() {
    const lsTodos = localStorage.getItem('todos');
    if (lsTodos) {
      this.setState({ todos: JSON.parse(lsTodos) });
    }
  }
  addTask = () => {
    if (!this.state.input || this.state.input.trim().length === 0) {
      return;
    }
    this.setState({ todos: [...this.state.todos, this.state.input] });
    this.setState({ input: '' });
  };
  changeHandler = e => {
    const value = e.target.value;
    this.setState({ input: value });
  };
  onKeyFunk = e => {
    if (e.key === 'Enter') {
      if (!this.state.input || this.state.input.trim().length === 0) {
        return;
      }
      this.setState({ todos: [...this.state.todos, this.state.input] });
      this.setState({ input: '' });
    }
  };
  deleteObj = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter((_, index) => index !== id),
    }));
  };
  clearLocalStrg = () => {
    localStorage.clear();
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <input
            onKeyDown={this.onKeyFunk}
            className='input'
            onChange={this.changeHandler}
            value={this.state.input}
          />
          <h1>{this.state.todos.length}</h1>
          <ul>
            {this.state.todos.map((todo, index) => (
              <>
                <li key={index}>
                  {index}: {todo}
                </li>
                <button
                  key={'btn' + index}
                  onClick={() => this.deleteObj(index)}
                  type='button'
                >
                  Видалити
                </button>
              </>
            ))}
          </ul>
          <button
            className='button-37'
            onClick={() => this.addTask(this.state.input)}
          >
            Add TO DO
          </button>
          <button className='button-37' onClick={() => this.clearLocalStrg()}>
            Clear Todo List
          </button>
        </header>
      </div>
    );
  }
}
export default ComponentClass;

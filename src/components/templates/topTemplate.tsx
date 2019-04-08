import * as React from 'react'

// import TodoInput from '../organisms/todoInput'
import TodoList from '../organisms/todoList'
import Main from '../organisms/main'
import Footer from '../organisms/footer'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Main />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <TodoInput /> */}
        <TodoList />
        <Footer />
      </div>
    )
  }
}

export default App

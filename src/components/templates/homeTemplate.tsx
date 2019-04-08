import * as React from 'react'

// import TodoInput from '../organisms/todoInput'
import { TodoList, Main, Footer } from '../organisms'

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

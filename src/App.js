import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import TodoHeader from './components/todoHeader';
import TodoFooter from './components/todoFooter';
import TodoAll from './components/todoAll';
import TodoCompleted from './components/todoCompleted';
import TodoIncompleted from './components/todoIncompleted';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="todoapp">
          <TodoHeader />
          <Routes>
            <Route path="/" exact element={<TodoAll />} />
            <Route path="/incompleted" element={<TodoIncompleted />} />
            <Route path="/completed" element={<TodoCompleted />} />
          </Routes>
          <TodoFooter />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


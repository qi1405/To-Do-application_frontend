import React from 'react';
//import FirstComponent from './components/learning-examples/FirstComponent';
//import SecondComponent from './components/learning-examples/SecondComponent';
//import ThirdComponent from './components/learning-examples/ThirdComponent';
//import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp';
import './App.css';
import './bootstrap.css'


function App() {
  return (
    <div className="App">
      <TodoApp/>
        {/*<Counter></Counter>*/}
    </div>
  );
}




// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         My Hello World
//       <FirstComponent></FirstComponent>
//       <SecondComponent></SecondComponent>
//       <ThirdComponent></ThirdComponent>
//       </div>
//     )
//   }
// }

export default App;
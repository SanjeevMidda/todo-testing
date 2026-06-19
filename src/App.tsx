import "./index.css";
import Todo from "./components/todo";
import todoData from "./data/todoData";

function App() {
  return (
    <div className="App">
      {todoData.map((i) => {
        return (
          <Todo
            key={i.id}
            todoName={i.taskName}
            completionStatus={i.completed}
          />
        );
      })}
    </div>
  );
}

export default App;

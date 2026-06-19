type todoTasksProps = {
  id: number;
  taskName: string;
  completed: boolean;
};

const todoTasks: todoTasksProps[] = [
  {
    id: 0,
    taskName: "take umbrella",
    completed: false,
  },
  {
    id: 1,
    taskName: "go running",
    completed: false,
  },
  {
    id: 2,
    taskName: "begin reading chapter one from Focus",
    completed: false,
  },
  {
    id: 3,
    taskName: "Go to New York",
    completed: false,
  },
  {
    id: 4,
    taskName: "Build table",
    completed: false,
  },
];

export default todoTasks;

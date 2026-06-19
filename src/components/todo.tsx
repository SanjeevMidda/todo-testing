import { useState } from "react";

type TodoProps = {
  todoName: string;
  completionStatus: boolean;
};

const Todo = ({ todoName, completionStatus }: TodoProps) => {
  const [check, setCheck] = useState<boolean>(completionStatus);

  return (
    <>
      <p>{todoName}</p>
      <input
        type="checkbox"
        onChange={() => setCheck((prev) => !prev)}
        checked={check}
      />
    </>
  );
};

export default Todo;

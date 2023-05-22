import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

import { Item } from "../components/Item";
import { NewTaskPopup } from "../components/NewTaskPopup";
import { CustomButton } from "../components/CustomButton";

export const MainPage = () => {
  const { allTasks } = useSelector((state) => state.todosReducer);
  const assignedTasks = allTasks.filter((task) => task.isDone === false);
  const performedTasks = allTasks.filter((task) => task.isDone);

  const [createNewTask, setCreateNewTask] = useState(false);

  const handleOpenAddingTask = () =>
    setCreateNewTask((prevState) => !prevState);
  return (
    <Box
      sx={{
        background: "#5b70b0",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: "600px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflowY: "scroll",
        }}
      >
        {assignedTasks.map((task) => (
          <Item task={task} key={task.id} />
        ))}
        {performedTasks.map((task) => (
          <Item task={task} key={task.id} />
        ))}
      </Box>
      {createNewTask ? (
        <NewTaskPopup closeAdding={handleOpenAddingTask} />
      ) : (
        <CustomButton
          buttonText={"Create new task"}
          variant={"contained"}
          action={handleOpenAddingTask}
          color={"secondary"}
        />
      )}
    </Box>
  );
};

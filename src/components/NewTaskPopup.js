import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import { CustomInput } from "./CustomInput";
import { CustomButton } from "./CustomButton";
import { todosActions } from "../redux";

export const NewTaskPopup = ({ closeAdding }) => {
  const { allTasks } = useSelector((state) => state.todosReducer);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  const handleCancel = () => {
    closeAdding();
  };
  const handleAdd = async () => {
    const dataForAdd = {
      id: allTasks.length,
      title,
      description: desc,
      isDone: false,
    };

    await dispatch(todosActions.addNewTask(dataForAdd));
    closeAdding();
  };
  return (
    <Box
      sx={{
        width: "50%",
        height: "80px",
        background: "#051956",
        borderRadius: "8px",
        mb: 2,
        ml: 2,
        padding: 2,
        display: "flex",
        alignItems: "center",
        boxShadow: "0 0 10px 0 #c2badb",
      }}
    >
      <Box>
        <CustomInput placeholder={"Title"} value={title} setValue={setTitle} />
        <CustomInput
          placeholder={"Description"}
          value={desc}
          setValue={setDesc}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <CustomButton
          buttonText={"Cancel"}
          variant={"outlined"}
          action={handleCancel}
          color={"secondary"}
          sx={{ mr: 2 }}
          isDisabled={false}
        />
        <CustomButton
          buttonText={"Save"}
          variant={"outlined"}
          action={handleAdd}
          color={"secondary"}
          isDisabled={!title}
        />
      </Box>
    </Box>
  );
};

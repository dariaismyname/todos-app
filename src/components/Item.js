import { Box, Checkbox, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { todosActions } from "../redux";

export const Item = ({ task: { title, description, isDone, id } }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(isDone);
  const handleChange = (id) => {
    setChecked((prev) => !prev);
    if (isDone) {
      dispatch(todosActions.markIsDoneFalse({ id }));
    } else {
      dispatch(todosActions.markIsDone({ id }));
    }
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
        boxShadow: "0 0 10px 1px #5d32a6",
      }}
    >
      <Checkbox
        checked={checked}
        onChange={() => handleChange(id)}
        sx={{
          color: "#9c27b0",
        }}
        color={"secondary"}
      />
      <Box>
        <Typography
          variant={"h6"}
          sx={{
            color: "#b9c6e2",
            textDecoration: isDone ? "line-through" : "none",
          }}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            variant={"body2"}
            sx={{
              color: "#7e8eb2",
              textDecoration: isDone ? "line-through" : "none",
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

import { TextField } from "@mui/material";

export const CustomInput = ({ placeholder, setValue, value }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <TextField
      variant={"standard"}
      value={value}
      onChange={handleChange}
      size={"small"}
      placeholder={placeholder}
      sx={{
        width: "400px",
        height: "20px",
        mb: 3,
        mt: 1,
        "& .MuiInput-underline:after": {
          borderBottomColor: "#f402ff",
        },
        "& .MuiInputBase-input": {
          color: "#b9c6e2",
        },
      }}
    />
  );
};

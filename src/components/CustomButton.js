import { Button } from "@mui/material";
import { useRef } from "react";

export const CustomButton = ({
  buttonText,
  variant,
  sx,
  action,
  color,
  isDisabled,
}) => {
  const buttonRef = useRef(null);

  return (
    <>
      <Button
        ref={buttonRef}
        variant={variant}
        sx={{
          px: 2,
          minWidth: "auto",
          ...sx,
        }}
        onClick={action}
        color={color}
        disabled={isDisabled}
      >
        {buttonText && buttonText}
      </Button>
    </>
  );
};

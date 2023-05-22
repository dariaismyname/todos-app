import {useState} from "react";
import {Checkbox} from "@mui/material";

export const CheckBox = () => {
    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked((prev) => !prev);

        return <Checkbox checked={checked} onChange={handleChecked} color={'secondary'}/>
    }
}
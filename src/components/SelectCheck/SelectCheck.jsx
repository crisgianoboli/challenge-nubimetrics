import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

/* const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}; */

const stateFood = ["Todos", "Activos", "Inactivos"];

export default function SelectCheck() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          width: 210,
          height: 48,
          backgroundColor: "#EBF0F3",
          borderRadius: "16px",
          "& fieldset": { border: "none" },
        }}
      >
        <InputLabel>Cocido antes:</InputLabel>
        <Select
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Cocido antes:" />}
          renderValue={(selected) => selected.join(", ")}
          //MenuProps={MenuProps}
        >
          {stateFood.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
              <Checkbox checked={personName.indexOf(name) > -1} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

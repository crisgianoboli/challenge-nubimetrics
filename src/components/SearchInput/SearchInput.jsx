import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { data } from "../../mock/data";

export default function SearchInput() {
  return (
    <Stack spacing={2} sx={{ width: 490 }}>
      <Autocomplete
        freeSolo
        options={data.map((coock) => coock.title)}
        renderInput={(params) => <TextField {...params} label="Buscador" />}
      />
    </Stack>
  );
}

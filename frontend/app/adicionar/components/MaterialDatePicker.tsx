import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Stack } from "@mui/material";

export default function MaterialDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <Stack sx={{ padding: 0, margin: 0 }}>
          <DatePicker
            className="relative bottom-1"
            slotProps={{
              textField: {
                variant: "outlined",
                sx: {
                  height: "40px",
                  margin: 0,
                  padding: 0,
                  borderColor: "#D1D5DB",
                  borderRadius: "8px",

                  "& .MuiInputBase-root": {
                    height: "40px",
                    overflow: "hidden",
                    margin: 0,
                    padding: 0,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D1D5DB",
                  },
                },
              },
            }}
          />
        </Stack>
      </DemoContainer>
    </LocalizationProvider>
  );
}

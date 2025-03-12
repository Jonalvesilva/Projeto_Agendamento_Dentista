import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { roundToNearestFiveMinutes } from "@/app/_functions/roundToNearestFiveMinutes";
import dayjs from "dayjs";

import { Stack } from "@mui/material";

interface Props {
  props: {
    date: Date | undefined;
    setDate: (date: Date) => void;
    onChange: (...event: any[]) => void;
  };
}

export default function MaterialDatePicker({ props }: Props) {
  const handleDate = (date: Date | undefined) => {
    if (date) {
      props.onChange(date);
      props.setDate(date);
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["MobileDateTimePicker"]}>
        <Stack sx={{ padding: 0, margin: 0 }}>
          <MobileDateTimePicker
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
                    fontSize: "calc(0.7rem + .5vw)",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D1D5DB",
                  },
                },
              },
            }}
            ampm={false}
            defaultValue={dayjs(roundToNearestFiveMinutes(props.date!))}
            minutesStep={5}
            onChange={(newDate) => handleDate(newDate?.toDate())}
            format="DD/MM/YYYY HH:mm"
          />
        </Stack>
      </DemoContainer>
    </LocalizationProvider>
  );
}

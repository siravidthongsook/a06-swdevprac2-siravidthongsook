"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateReserve() {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Choose date"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        slotProps={{
          textField: {
            variant: "outlined",
            name: "Event-Date",
            fullWidth: true,
            sx: {
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                '& fieldset': { borderColor: '#e7e5e4' },
                '&:hover fieldset': { borderColor: '#d6d3d1' },
                '&.Mui-focused fieldset': { borderColor: '#1c1917', borderWidth: 2 }
              },
              '& .MuiInputLabel-root.Mui-focused': { color: '#1c1917' }
            }
          },
        }}
      />
    </LocalizationProvider>
  );
}

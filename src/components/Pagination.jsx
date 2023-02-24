/* eslint-disable react/prop-types */
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationOutlined(props) {
  const color = props.color;
  return (
    <Stack
      spacing={2}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Pagination count={10} variant="outlined" color={color || "primary"} />
    </Stack>
  );
}

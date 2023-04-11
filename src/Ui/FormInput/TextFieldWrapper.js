import { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import { ErrorMessage, useField, useFormikContext } from "formik";
import { Box } from "@mui/system";
import Image from "next/image";

export const TextFieldWrapper = ({
  hint,
  icon,
  type,
  EndIcon = null,
  StartIcon = null,
  variant = "outlined",
  readOnly = false,
  sx,
  enablePerformance = false,
  ...props
}) => {
  const [fieldValue, setFieldValue] = useState("");
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box>
      <TextField
        {...field}
        {...props}
        sx={{ my: 2 }}
        fullWidth
        variant={variant}
        error={!!(meta.touched && meta.error)}
        autoComplete="off"
        type={showPassword ? "text" : type}
        size="small"
      />
      <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {meta.touched && meta.error ? (
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box sx={{ mr: 1 }}>
              <Image
                src="images/infoerror.svg"
                width={15}
                height={15}
                alt="info"
              />
            </Box>
            <ErrorMessage
              component="div"
              name={field?.name}
              style={{ fontSize: "12px", color: "#d32f2f" }}
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

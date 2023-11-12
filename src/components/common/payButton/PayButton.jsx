import { Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

const PayButton = ({ comprado }) => {
  return (
    <Box width={9 / 10} sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        sx={{ width: "100%" }}
        variant="contained"
        type={"submit"}
        color="success"
        disabled={comprado}
        endIcon={
          comprado && (
            <CircularProgress
              sx={{
                color: " white",
              }}
            />
          )
        }
      >
        Pagar
      </Button>
    </Box>
  );
};

export default PayButton;

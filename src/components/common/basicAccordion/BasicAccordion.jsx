import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import PayButton from "../payButton/PayButton";
import { useState } from "react";

export default function BasicAccordion({ comprado }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "#d1d5db",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Tarjeta de crédito o débito</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ mb: "10px" }}>
            Al aceptar la compra seras redirigido a la pasarela de pagos de
            tarjetas de credito y debito.
          </Typography>
          <PayButton comprado={comprado} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#d1d5db",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        >
          <Typography>Mercado Pago</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ mb: "10px" }}>
            Utilizando la opción Pagar a través de{" "}
            <strong> Mercado Pago </strong>
            serás redirigido y podrás pagar de las siguientes formas:
          </Typography>
          <PayButton comprado={comprado} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

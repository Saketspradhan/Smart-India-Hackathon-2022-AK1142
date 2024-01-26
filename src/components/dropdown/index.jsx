import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

function Dropdown() {
  const [port, setPort] = React.useState("");
  const handleChange = (event) => {
    setPort(event.target.value);
  };
  return (
    <div style={{ marginTop: "2.5vh" }}>
      <Box>
        <FormControl
          style={{ textAlign: "center", width: "25vw", marginTop: "5vh" }}
        >
          <InputLabel id="demo-simple-select-label">Ports</InputLabel>
          <Select
            style={{ textAlign: "center" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={port}
            label="Ports"
            onChange={handleChange}
          >
            <Link to="/paradip">
              <MenuItem style={{ textAlign: "center" }} value={"ParaDip"}>
                Paradip Port Authority, Paradeep, Odisha
              </MenuItem>
            </Link>
            <Link to="/mumbai">
              <MenuItem style={{ textAlign: "center" }} value={"Mumbai"}>
                Mumbai Port Trust, Mumbai, Maharashtra
              </MenuItem>
            </Link>
            <Link to="/deen">
              <MenuItem style={{ tetAlign: "center" }} value={"Deendayal"}>
                Deendayal Port Trust, Kandla, Gujarat
              </MenuItem>
            </Link>
            <Link to="/goa">
              <MenuItem style={{ textAlign: "center" }} value={"Margao"}>
                Mormugao Port Trust, Margao, Goa
              </MenuItem>
            </Link>
            <Link to="/manglore">
              <MenuItem style={{ textAlign: "center" }} value={"Mangalore"}>
                New Mangaluru Port Trust, Mangaluru, Karnataka
              </MenuItem>
            </Link>
            <Link to="/kamarajar">
              <MenuItem style={{ textAlign: "center" }} value={"Kamarajar"}>
                Kamarajar Port Limited, Chennai Ennore, Tamil Nadu
              </MenuItem>
            </Link>
            <Link to="/chennai">
              <MenuItem style={{ textAlign: "center" }} value={"Chennai"}>
                Chennai Port Trust, Chennai, Tamil Nadu
              </MenuItem>
            </Link>
            <Link to="/chidambaranar">
              <MenuItem style={{ textAlign: "center" }} value={"Chidambaranar"}>
                V.O. Chidambaranar Port Trust, Thoothukudi, Tamil Nadu
              </MenuItem>
            </Link>
            <Link to="/cochin">
              <MenuItem style={{ textAlign: "center" }} value={"Cochin"}>
                Cochin Port Trust, Kochi, Kerala
              </MenuItem>
            </Link>
            <Link to="/visakhapatnam">
              <MenuItem style={{ textAlign: "center" }} value={"Visakhapatnam"}>
                Visakhapatnam Port Trust, Vizag, Andhra Pradesh
              </MenuItem>
            </Link>
            <Link to="/nehru">
              <MenuItem style={{ textAlign: "center" }} value={"Nehru"}>
                Jawaharlal Nehru Port Trust, Navi Mumbai, Maharashtra
              </MenuItem>
            </Link>
            <Link to="/haldia">
              <MenuItem style={{ textAlign: "center" }} value={"HaldiaDock"}>
                Syama Prasad Mookerjee Port Trust, Kolkata, West Bengal
              </MenuItem>
            </Link>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default Dropdown;

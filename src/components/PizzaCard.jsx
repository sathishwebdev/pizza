import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart.actions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import * as mui from "@mui/material";
import { Row, Col } from "react-bootstrap";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ImageModal from "./ImageModal";

const Button = mui.styled(mui.Button)(({ theme }) => ({
  color: theme.palette.getContrastText(mui.colors.purple[500]),
  backgroundColor: "#000000",
  margin: "3%",
  fontFamily:"hussor-bold",

  "&:hover": {
    backgroundColor: "rgba(56, 56, 56, 0.938)",
    color: "white",
    boxShadow: "0px 0px 20px 1px #0f0f0f",
  },
  '&:focus':{
    border: 'none',
    boxShadow: "none",
    outline: "none"
},
}));

export default function PizzaCard({ pizza }) {
  const dispatch = useDispatch();

  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [openImage, setopenImage] = useState(false);

  const handleClose = () => {
    setopenImage(false);
  };

  const addPizzaToCard = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  return (
    <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{
      minWidth:'300px'
    }}>
      <h6 className="mt-3">{pizza.name}</h6>

      <ImageModal pizza={pizza} open={openImage} handleClose={handleClose} />

      {/* Pizza Image */}
      <div style={{
        height: "280px",
        width: "280px",
        overflow: 'hidden',
        marginLeft:'auto',
        marginRight:'auto'
      }} className="d-flex justify-content-center align-items-center" >
        <img
          src={pizza.image}
          alt="pizza"
          className=" pointer"
          style={{
            maxHeight:'35vh'
          }}
          onClick={() => setopenImage(true)}
        />
      </div>

      <CardContent>
        {/* CONTENT */}
        <Row>
          <Col lg="6" sm="12">
            <h6 className="mt-3">Varients:</h6>

            <FormControl fullWidth>
              <Select
                label=""
                value={varient}
                onChange={(e) => setVarient(e.target.value)}
              >
                {pizza.varients.map((vari, ind) => (
                  <MenuItem key={ind} value={vari}>
                    {vari}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Col>

          <Col lg="6" sm="12">
            <h6 className="mt-3">Quantity:</h6>

            <FormControl fullWidth>
              <Select
                label=""
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[...Array(10).keys()].map((x, i) => (
                  <MenuItem value={i + 1} key={i}>
                    {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Col>
        </Row>
      </CardContent>

      <CardActions>
        {/* FOOTER */}
        <Row className="w-100">
          <Col md="6" sm="12">
            <h5>&#8377; {pizza.prices[0][varient] * quantity}</h5>
          </Col>
          <Col md="6" sm="12">
            <div className="text-center">
              <Button
                variant="contained"
                color="primary"
                onClick={addPizzaToCard}
              >
                ADD
              </Button>
            </div>
          </Col>
        </Row>
      </CardActions>
    </Card>
  );
}

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch()
  const send=(e)=>{
    dispatch(ADD(e))
  }
  
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to cart Projects</h2>
      <div className="row mt-3">
        {data.map((element, id) => {
          return (
            <div className="col-md-4 mb-3">
              <Card style={{ width: "18rem",border:"none" }}>
                <Card.Img variant="top" src={element.imgdata} style={{height:"12rem"}} />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                  Price  ${element.price}
                   {element.somedata}
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                  <Button onClick={()=>send(element)} variant="primary" className="col-lg-12">Add to cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

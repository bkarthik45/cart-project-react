import { React, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { DELETE } from "../redux/actions/action.js";

const Header = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);

  //price calculation total
  const [price,setPrice]=useState(0);
  const total=()=>{
    let price =0;
    getdata.map((ele,k)=>{
        price = ele.price + price
    })
    setPrice(price);
  }
  useEffect(()=>{
    total();
  },[total])
  console.log(getdata);


  const dispatch = useDispatch();

const dlt=(id)=>{
    console.log("delete")
    dispatch(DELETE(id))
}

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/home" className="text-decoration-none text-light mx-3">
            Addtocart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card-details"
              style={{ width: "24rem", padding: "2rem" }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurent Name</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        getdata.map((e)=>{
                            return (
                                <>
                                <tr>
                                    <td><NavLink to={`/cart/${e.id}`} onClick={handleClose}> <img src={e.imgdata} style={{width:"7rem",height:"5rem"}}></img></NavLink></td>
                                    <td>
                                        <p>{e.rname}</p>
                                        <p> <strong>Price :</strong> $ {e.price}</p>
                                        <p><strong>Quantity :</strong> {e.qnty}</p>
                                        <p style={{color:"red", cursor:"pointer", fontSize:"20px"}} ><i className="fas fa-trash smalltrash"></i></p>
                                    
                                    </td>
                                    <td style={{color:"red", cursor:"pointer", fontSize:"20px"}} onClick={()=>dlt(e.id)}><i className="fas fa-trash largetrash"></i></td>
                                </tr>
                                
                                
                                </>
                            )
                        })
                    }
                    
                    <p className="text-center"><strong>Total :</strong> {price }</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="card_details p-3 border rounded text-center position-relative">
              <button
                type="button"
                onClick={handleClose}
                className="btn-close position-absolute top-0 end-0 m-2"
                aria-label="Close"
              ></button>
              <p className="fs-4 mb-0">Your cart is empty</p>
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;

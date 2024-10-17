import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE,ADD,DEC } from '../redux/actions/action';

const CardsDetails = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const getdata = useSelector((state) => state.cartreducer.carts);

    const compare = () => {
        let compareData = getdata.filter((e) => e.id == id);
        setData(compareData); // Set filtered data to state
        console.log("Filtered Data:", compareData);
    };

    useEffect(() => {
        compare();
    }, [id,getdata]);

    const history = useNavigate();
    const dispatch = useDispatch();


    const dlt=(id)=>{
        dispatch(DELETE(id))
        history("/")
    }
    //dec one

    const remove=(item)=>{
        dispatch(DEC(item))
    }
    //add data 
    const send=(e)=>{
        dispatch(ADD(e))
      }
    return (
        <div>
            <div className="container mt-3">
                <h2 className='text-center'> Item Details Page</h2>
                <section className='container mt-3'>
                    <div className="iteamsdetails d-flex align-items-start"> {/* Added flexbox here */}
                        {data.length > 0 ? (
                            data.map((e) => (
                                
                                <React.Fragment key={e.id}>
                                    <div className="items_img ms-3">
                                        <img src={e.imgdata} alt="Item" style={{ width: '300px', height: '200px', padding:"0.5rem" }} /> {/* Added fixed size to image */}
                                    </div>
                                    <div className="details ms-3"> {/* Added margin to the right */}
                                        <Table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p><strong>Restaurant:</strong> {e.rname}</p>
                                                        <p><strong>Price:</strong> $ {e.price}</p>
                                                        <p><strong>Dishes:</strong> {e.address}</p>
                                                        <p><strong>Total:</strong> $ {e.price * e.qnty}</p>
                                                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd", color:"#111"}}>
                                                            <span style={{fontSize:24}} onClick={()=>remove(e)}> - </span>
                                                            <span style={{fontSize:24}}>{e.qnty}</span>
                                                            <span style={{fontSize:24}} onClick={()=>send(e)}> + </span>


                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p><strong>Rating:</strong><span style={{ background: "gold", padding: "2px 5px", borderRadius: "5px" }}>3.5 ★</span></p>
                                                        <p><strong>Order Review:</strong><span>{e.somedata}</span></p>
                                                        <p onClick={()=>dlt(e.id)}><strong>Remove:</strong><span><i className='fas fa-trash'  style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i></span></p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </React.Fragment>
                            ))
                        ) : (
                            <p className='text-center'>No item details available.</p>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CardsDetails;

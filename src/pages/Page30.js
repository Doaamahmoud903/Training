import React from "react";
import EIT from "../media/EIT.jpeg";



const Page30 = () => {
  return (

<>
    <div className="container text-white">
    <div class="row col-6  m-3 mt-5 " style={{width: "728px"}}>
        <div className=" mt-3 p-2" style={{backgroundColor:"rgb(31, 31, 31,0.7)"}}>
                        <div className="col-7">
                            <img src={EIT} className="float-start"  
                            style={{width:"100px", height:"50px",}}/>
                            <h6 style={{cursor:"pointer", fontSize:"20px",}}>Front-end React JS Developer</h6>
                            <p>Eptikar IT Solutions, Obour City</p>
                        </div>
                        <div className="col-5">
                            
                            <span style={{fontSize: "15px", fontWeight:"bold",}}>5000 EGP - 8000 EGP </span>
                            <span> Per Month</span>
                            <div>
                            <i className="fas fa-map-marker-alt" 
                            style={{
                                color:"#bf9b30",
                                }}></i>
                            <span> On Site</span>
                            </div>
                            
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sed minus 
                            enim quo hic libero maiores accusantium, voluptas vitae nulla neque aperiam,
                             molestias incidunt placeat temporibus nihil ex mollitia non!</p>
                        <div className="btn text-white m-2" 
                        style={{width: "160px", height: "40px", border:" 2px solid rgb(212, 204, 93)"}}>React JS</div>
                        <div className="btn text-white m-2" 
                        style={{width: "160px", height: "40px", border:" 2px solid rgb(212, 204, 93)"}}>Devlopment</div>
                        <div className="row">
                            <div className="col-9">
                                <i className="fas fa-clock mt-3" style={{color:"rgb(180, 180, 180)", fontSize: "28px"}}></i>
                                <span style={{fontSize: "18px"}}>2 h ago</span>
                            </div>
                            <div className="col-3 mt-2">
                                <div className=" btn  text-uppercase text-white" style={{backgroundColor: "#bf9b30"}}>view details</div>
                            </div>
                        </div>
                    </div>

        </div>
        </div>
</>

  )};
  export default Page30;
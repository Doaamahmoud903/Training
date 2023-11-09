import React from "react";
import EIT from "../media/EIT.jpeg";
import Imageupload from "../media/upload-img.png";


const Page32 = () => {
  return (

    <> 
     <div className="container text-white">
        <main style={{width: "728px"}}>
        <div className="row">
                    <div className="col-7">
                        <img src={EIT} className="float-start"  
                        style={{
                            width:"100px",
                            height:"50px",
                            }}/>
                        <h6 style={{
                            cursor:"pointer",
                            fontSize:"20px"
                        }}>Front-end React JS Developer</h6>
                        <p>Eptikar IT Solutions, Obour City</p>
                    </div>
                    <div className="col-5">
                        
                        <span style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        }}>5000 EGP - 8000 EGP </span>
                        <span> Per Month</span>
                        <div>
                            <i className="fas fa-map-marker-alt" 
                            style={{
                                color:"#bf9b30",
                                }}></i>
                            <span> On Site</span> 
                        </div>   
                    </div>
                </div>

                <div className="row  pt-5" >
                    <div className="col-5">
                        <h6 style={{
                         cursor:"pointer",
                         fontSize:"20px",
                         }}>Balqees Hamdi Sabir</h6>
                        
                        <p>Computer science, international islamic university</p>
                    </div>
              
                </div>

                <div className="row  py-2 " >
                    <div className="col-8">
                        <h6 style={{fontSize:"20px",}}>Email</h6>
                        
                        <input type="text"  className="form-control " 
                        style={{
                        border:"0px",
                        backgroundColor:"rgb(73, 73, 73)",
                         }}/>
                    </div>
                    <div className="col-4">
                        <h6 style={{fontSize: "20px"}}>Years Of Experience</h6>
                        
                        <input type="text"  className="form-control " style={{border: "0px", 
                        backgroundColor:"rgb(73, 73, 73)",}}/>
                    </div>
                </div>

                <div className="row  py-2">
                    <div className="col-6">
                        <h6 style={{fontSize: "20px",}}>Mobile Number </h6>
                        
                        <input type="text"  className="form-control " style={{border: "0px", 
                        backgroundColor:"rgb(73, 73, 73)"}}/>
                    </div>
               
                </div>
                <div className="row  py-2">
                    <div className="col-7" style={{width: "430px"}}>
                        <h6 style={{fontSize: "20px"}}>Upload CV </h6>
                        <div className="col-12" style={{
                        border:"1px dashed #bf9b30",
                        textAlign: "center",}}>
                            <img src={Imageupload} />
                            <h6 style={{fontSize: "20px"}}>Drog & drop files or <span 
                            style={{
                            cursor: "pointer",
                            textDecoration: "underline",
                            color:"#bf9b30", }}>Browse</span> </h6>
                            <p  style={{fontSize: "14px", color: "gray",}}>Supported formotes: JPEG,PNG,GIF,MP4,PDF,PSD,AL,Word,PPT</p>
                        </div>
                    </div>
                 
               
                </div>
                <div className="col-5 text-white float-end mt-3">
                    <div className="btn  text-uppercase text-white" 
                    style={{backgroundColor: "rgba(223, 217, 217, 0.822)", width: "130px", color: "white" }}>cancel</div>
                    <div className="btn text-uppercase" style={{width: "130px", color: "white", marginLeft:"1rem" ,backgroundColor: "#bf9b30" }}>submit</div>
                </div>
                </main>
            </div>
    

    </>

    )}
    export default Page32;
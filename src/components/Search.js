import React from "react";

const Search= () => {
    return (
<>
<div class="container " style={{marginBottom:"5rem"}}>
       
                <div className="row justify-content-between text-white">
                        <div className="col-5 text-left">
                            <h2>Looking for a job ?</h2>
                            <h6>Here you can find your best match between 1000s of updated and avalible positions </h6>
                        </div>
                        <div className=" col-5 text-white">
                            <div className="row text-white" style={{
                                backgroundColor: "rgba(90, 90, 90, 0.541)",
                            }}>
                                <div className="col-1">
                                    <i className="fas fa-search i2 " 
                                    style={{
                                        color: "rgb(206, 164, 26)",
                                         width: "35px" ,
                                         cursor: "pointer",
                                        backgroundColor:  "rgba(128, 128, 128, 0)",
                                        verticalAlign:"bottom",
                                    }}></i>
                                </div>
                                <div className="col-8">
                                    <input type="text" 
                                     placeholder="Search for a job" 
                                     style={{
                                     backgroundColor:"rgba(128, 128, 128, 0)",
                                     border: "0px", 
                                     width: "300px",
                                     height: "40px",
                                     }}/>
                                </div>
                                <div className="col-3 btn  text-uppercase text-white" 
                                style={{
                                    backgroundColor: "rgb(206, 164, 26)",
                                }}>Search</div>
                            </div>
                        </div>
                    </div>

            </div>
            
</>   
)};
export default Search;
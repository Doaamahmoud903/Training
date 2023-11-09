import React from "react";

const Sidebar= () => {
    return (
    <>
        <div className="container text-white">
                <div className="row col-4 mt-5" 
                style={{
                    backgroundColor: "rgb(31, 31, 31,0.7)",
                }}>
                    <div className=" bg-dark  m-4 justify-content-between">
                        <div className="col-3 p-1">
                            <h2><a href="#" className="text-decoration-none text-white">Filters</a></h2>
                        </div>
                        <div className="col-4  mt-3 ml-1">
                            <h6 style={{
                            color: "rgb(233, 233, 50)", 
                            cursor: "pointer",
                            }}>Clear All</h6>
                        </div>
                    </div>
                    <div className="row justify-content-between m-3">
                        <div className="col-3">
                            <h6>location</h6>
                        </div>
                        <div className="dropdown col-12">
                            <button type="button" 
                            className="btn btn-secondary col-12 dropdown-toggle mt-2 custome-button" 
                            data-bs-toggle="dropdown" 
                            style={{
                            textAlign: "left" ,
                             fontSize: "18px",
                              width: "280px",
                              height: "40px",
                              }}>
                                Cairo
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Normal</a></li>
                                <li><a className="dropdown-item active" href="#">Active</a></li>
                                <li><a className="dropdown-item " href="#">Disabled</a></li>
                            </ul>
                        </div>
                        <div className="col-5 pt-5">
                            <h6>Job Type</h6>
                        </div>
                        <div className="dropdown  ml-1 col-12 justify-content-between  ">
                            <div className="form-check ">
                                <input type="checkbox" className="form-check-input " 
                                style={{backgroundColor:" rgb(49, 49, 49)"}}
                                 id="check1"  />
                                <label className="form-check-label" for="check1">Full Type</label>
                              </div>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" 
                                style={{backgroundColor:" rgb(206, 164, 26)" }}
                                id="check2" checked/>
                                <label className="form-check-label" for="check2">Part Type</label>
                              </div>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" 
                                style={{backgroundColor: "rgb(49, 49, 49)"
                            }}/>
                                <label className="form-check-label">Remote</label>
                              </div>
                        </div>
                        <div className="col-5 pt-5">
                            <h6>Level</h6>
                        </div>
                        <div className="dropdown  ml-1 col-12 justify-content-between  ">
                            <div className="form-check ">
                                <input type="checkbox" className="form-check-input " 
                                style={{
                                    backgroundColor: "rgb(49, 49, 49)"
                                }} id="check1"  />
                                <label className="form-check-label" for="check1">Entry Level</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" 
                                 style={{
                                    backgroundColor:" rgb(206, 164, 26)" 
                                }}
                                  id="check2" checked/>
                                <label className="form-check-label" for="check2">Intermediate</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" 
                                style={{
                                    backgroundColor: "rgb(49, 49, 49)"
                             }}/>
                                <label className="form-check-label">Expert</label>
                            </div>
                        </div>
                        <div className="col-5 pt-5">
                            <h6>Salary Range</h6>
                        </div>
                        <div className="dropdown  ml-1 col-12 justify-content-between" 
                        style={{height: "150px"}}>
                            <div className="form-check ">
                                <input type="checkbox" className="form-check-input " 
                                style={{
                                    backgroundColor:"rgb(49, 49, 49)",
                               }} id="check1"/>
                                <label className="form-check-label" for="check1">Under 4000 EGP</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" 
                               style={{
                                backgroundColor:"rgb(206, 164, 26)",
                            }} id="check2" checked/>
                                <label className="form-check-label" for="check2">Between 4000 & 10000 EGP</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" 
                                style={{
                                    backgroundColor:"rgb(49, 49, 49)",
                               }}/>
                                <label className="form-check-label">More Than 10000 EGP</label>
                            </div>
                        </div>
                    

                    </div>
                </div>
            </div>

    </>   
)}
export default Sidebar;
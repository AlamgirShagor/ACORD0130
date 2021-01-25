import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const Locations = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <h5>LOCATIONS</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <h6>LOC #</h6>
                        {/* <input
                            type="text"
                            name="MONTHLY"
                            class="custom-control-input"
                            id="MONTHLY"
                            onChange={handleBlur}
                            /> */}
                    </div>
                    <div className="col-2">
                        <h6>HIGHEST FLOOR</h6>
                    </div>
                    <div className="col-8">
                        <h6>STREET, CITY, COUNTY, STATE, ZIP CODE</h6>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-2">
                        <input
                            type="text"
                            name="LOC"
                            class="form-control"
                            id="LOC"
                            onChange={handleBlur}
                            />
                    </div>
                    <div className="col-2">
                        <input
                            type="text"
                            name="FLOOR"
                            class="form-control"
                            id="FLOOR"
                            onChange={handleBlur}
                            />
                    </div>
                    <div className="col-8">
                    <input
                            type="text"
                            name="STREET"
                            class="form-control"
                            id="STREET"
                            onChange={handleBlur}
                            />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">
                        <input
                            type="text"
                            name="LOC"
                            class="form-control"
                            id="LOC"
                            onChange={handleBlur}
                            />
                    </div>
                    <div className="col-2">
                    <input
                            type="text"
                            name="FLOOR"
                            class="form-control"
                            id="FLOOR"
                            onChange={handleBlur}
                            />
                    </div>
                    <div className="col-8">
                    <input
                            type="text"
                            name="STREET"
                            class="form-control"
                            id="STREET"
                            onChange={handleBlur}
                            />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-2">
                        <input
                            type="text"
                            name="LOC"
                            class="form-control"
                            id="LOC"
                            onChange={handleBlur}
                            />
                    </div>
                    <div className="col-2">
                    <input
                            type="text"
                            name="FLOOR"
                            class="form-control"
                            id="FLOOR"
                            onChange={handleBlur}
                            />
                    </div>
                    <div className="col-8">
                    <input
                            type="text"
                            name="STREET"
                            class="form-control"
                            id="STREET"
                            onChange={handleBlur}
                            />
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(2) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(4) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default Locations;
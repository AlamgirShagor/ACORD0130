import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const TotalEstimated = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <div className="h5">TOTAL ESTIMATED ANNUAL PREMIUM - ALL STATES</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="">TOTAL ESTIMATED ANNUAL PREMIUM ALL STATES</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">$</span>
                                </div>
                                <input type="text" name="OTAL ESTIMATED" class="form-control" onChange={handleBlur}/>
                            </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">TOTAL MINIMUM PREMIUM ALL STATES</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">$</span>
                                </div>
                                <input type="text" name="TOTAL MINIMUM" class="form-control" onChange={handleBlur}/>
                            </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">TOTAL DEPOSIT PREMIUM ALL STATES</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">$</span>
                                </div>
                                <input type="text" name="TOTAL DEPOSIT" class="form-control" onChange={handleBlur}/>
                            </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(4) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(6) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default TotalEstimated;
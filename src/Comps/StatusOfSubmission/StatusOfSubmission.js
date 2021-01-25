import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const StatusOfSubmission = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-4">
                        <h5>STATUS OF SUBMISSION</h5>
                    </div>
                    <div className="col-8">
                        <h5>BILLING / AUDIT INFORMATION</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-6">
                                <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="QUOTE"
                                class="custom-control-input"
                                id="QUOTE"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="QUOTE">QUOTE</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="BOUND"
                                class="custom-control-input"
                                id="BOUND"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="BOUND">BOUND (Give date and/or attach copy)</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="ASSIGNED"
                                class="custom-control-input"
                                id="ASSIGNED"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="ASSIGNED">ASSIGNED RISK (Attach ACORD 133)</label>
                                </div>
                            </div>
                            <div className="col-6">
                            <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="ISSUE POLICY"
                                class="custom-control-input"
                                id="ISSUE POLICY"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="ISSUE POLICY">ISSUE POLICY</label>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            
                            <div className="col">
                                <h6>BILLING PLAN</h6>
                                <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="AGENCY BILL"
                                class="custom-control-input"
                                id="AGENCY BILL"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="AGENCY BILL">AGENCY BILL</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="DIRECT BILL"
                                class="custom-control-input"
                                id="DIRECT BILL"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="DIRECT BILL">DIRECT BILL</label>
                            </div>
                            </div>

                            <div className="col">
                                <h6>PAYMENT PLAN</h6>
                                <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="ANNUAL"
                                class="custom-control-input"
                                id="ANNUAL"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="ANNUAL">ANNUAL</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="SEMI-ANNUAL"
                                class="custom-control-input"
                                id="SEMI-ANNUAL"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="SEMI-ANNUAL">SEMI-ANNUAL</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="QUARTERLY"
                                class="custom-control-input"
                                id="QUARTERLY"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="QUARTERLY">QUARTERLY</label>
                            </div>
                            </div>
                            <div className="col">
                            <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="other"
                                class="custom-control-input mt-3"
                                id="other"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="other"></label>
                            </div>
                            <input type="text"onChange={handleBlur} name="other" className="form-control"/>
                            <input type="text"onChange={handleBlur} name="% DOWN" className="form-control mt-1" placeholder="% DOWN"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col">
                                <h6>PAYMENT PLAN</h6>
                                <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="AT EXPIRATION"
                                class="custom-control-input"
                                id="AT EXPIRATION"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="AT EXPIRATION">AT EXPIRATION</label>
                                </div>

                                <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="SEMI-ANNUAL"
                                class="custom-control-input"
                                id="SEMI-ANNUAL"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="SEMI-ANNUAL">SEMI-ANNUAL</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="QUARTERLY"
                                class="custom-control-input"
                                id="QUARTERLY"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="QUARTERLY">QUARTERLY</label>
                                </div>
                            </div>
                            <div className="col">
                            <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="MONTHLY"
                                class="custom-control-input"
                                id="MONTHLY"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="MONTHLY">MONTHLY</label>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(1) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(3) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default StatusOfSubmission;
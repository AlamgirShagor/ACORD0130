import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const PolicyInformation = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div class="form-row">
                    <h5>POLICY INFORMATION</h5>
                </div>
                <div className="row">
                    <div className="col-2 text-center">
                        <label htmlFor="">PROPOSED EFF DATE</label>
                                <input
                                type="date"
                                name="PROPOSED EFF DATE"
                                class="form-control mt-3"
                                id="PROPOSED EFF DATE"
                                onChange={handleBlur}
                                />
                    </div>
                    <div className="col-2">
                        <label htmlFor="">PROPOSED EXP DATE</label>
                                <input
                                type="date"
                                name="PROPOSED EXP DATE"
                                class="form-control mt-3"
                                id="PROPOSED EXP DATE"
                                onChange={handleBlur}
                                />
                    </div>
                    <div className="col-2 text-center">
                        <label htmlFor="">RATING EFFECTIVE DATE (if applicable)</label>
                                <input
                                type="date"
                                name="RATING EFFECTIVE DATE (if applicable)"
                                class="form-control"
                                id="RATING EFFECTIVE DATE (if applicable)"
                                onChange={handleBlur}
                                />
                    </div>
                    <div className="col-2 text-center">
                        <label htmlFor="">RANNIVERSARY RATING DATE (if applicable)</label>
                                <input
                                type="date"
                                name="ANNIVERSARY RATING DATE(if applicable)"
                                class="form-control"
                                id="ANNIVERSARY RATING DATE(if applicable)"
                                onChange={handleBlur}
                                />
                    </div>
                    <div className="col-2 mt-4 text-center">
                                <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="PARTICIPATING"
                                class="custom-control-input"
                                id="PARTICIPATING"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="PARTICIPATING">PARTICIPATING</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                name="NON-PARTICIPATING"
                                class="custom-control-input"
                                id="NON-PARTICIPATING"
                                onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="NON-PARTICIPATING">NON-PARTICIPATING</label>
                                </div>
                    </div>
                    <div className="col-2 text-center">
                        <label htmlFor="">RETRO PLAN</label>
                                <input
                                type="text"
                                name="RETRO PLAN"
                                class="form-control mt-3"
                                id="RETRO PLAN"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-5 text-center">
                                <label htmlFor="">PART 1 - WORKERS COMPENSATION (States)</label>
                                <textarea name="PART 1 - WORKERS" id=""class="form-control" cols="30" rows="5"></textarea>
                            </div>
                            <div className="col-7">
                                <label htmlFor="">PART 2 - EMPLOYER'S LIABILITY</label>
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="ANNUAL_REVENUES" class="form-control" onChange={handleBlur}/>
                                <label htmlFor="" className="mt-2 ml-1">EACH ACCIDENT</label>
                                </div>
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="ANNUAL_REVENUES" class="form-control" onChange={handleBlur}/>
                                <label htmlFor="" className="mt-2 ml-1">DISEASE-POLICY LIMIT</label>
                                </div>
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="ANNUAL_REVENUES" class="form-control" onChange={handleBlur}/>
                                <label htmlFor="" className="mt-2 ml-1">DISEASE-EACH EMPLOYEE</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-3 text-center">
                                <label htmlFor="">PART 3 - OTHER STATES INS</label>
                                <textarea onChange={handleBlur} name="PART 1 - WORKERS" id=""class="form-control" cols="30" rows="6"></textarea>
                            </div>
                            <div className="col-2">
                                <label htmlFor="">DEDUCTIBLES STATES INS</label>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MEDICAL"
                                    class="custom-control-input"
                                    id="MEDICAL"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="MEDICAL">MEDICAL</label>
                                </div>

                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="INDEMNITY"
                                    class="custom-control-input"
                                    id="INDEMNITY"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="INDEMNITY">INDEMNITY</label>
                                </div>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">AMOUNT / % (N / A in WI)</label>
                                <textarea name="AMOUNT" onChange={handleBlur} id=""class="form-control" cols="30" rows="5"></textarea>
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    
                                    <div className="col-6">
                                    <label htmlFor="">OTHER COVERAGES</label>
                                        <div class="custom-control custom-checkbox">
                                            <input
                                            type="checkbox"
                                            name="U.S.L. & H."
                                            class="custom-control-input"
                                            id="U.S.L. & H."
                                            onChange={handleBlur}
                                            />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="U.S.L. & H.">U.S.L. & H.</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input
                                            type="checkbox"
                                            name="VOLUNTARY COMP"
                                            class="custom-control-input"
                                            id="VOLUNTARY COMP"
                                            onChange={handleBlur}
                                            />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="VOLUNTARY COMP">VOLUNTARY COMP</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input
                                            type="checkbox"
                                            name="FOREIGN COV"
                                            class="custom-control-input"
                                            id="FOREIGN COV"
                                            onChange={handleBlur}
                                            />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="FOREIGN COV">FOREIGN COV</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                    <div class="custom-control custom-checkbox">
                                            <input
                                            type="checkbox"
                                            name="MANAGED CARE OPTION"
                                            class="custom-control-input"
                                            id="MANAGED CARE OPTION"
                                            onChange={handleBlur}
                                            />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="MANAGED CARE OPTION">MANAGED CARE OPTION</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="">DIVIDEND PLAN/SAFETY GROUP</label>
                        <input type="text" name="DIVIDEND PLAN/SAFETY GROUP" class="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="">ADDITIONAL COMPANY INFORMATION</label>
                        <input type="text" name="ADDITIONAL COMPANY INFORMATION" class="form-control" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">SPECIFY ADDITIONAL COVERAGES / ENDORSEMENTS (Attach ACORD 101, Additional Remarks Schedule, if more space is required)</label>
                        <textarea name="SPECIFY" onChange={handleBlur} id=""class="form-control" cols="30" rows="3"></textarea>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(3) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(5) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default PolicyInformation;
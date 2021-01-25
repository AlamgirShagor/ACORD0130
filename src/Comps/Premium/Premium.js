import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const Premium = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <h5>PREMIUM</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <h6>STATE:</h6>
                            </div>
                            <div className="col-3 text-center">
                                <h6>FACTOR</h6>
                            </div>
                            <div className="col-5 text-center">
                                <h6>FACTORED PREMIUM</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">TOTAL</label>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">N / A</label>
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="TOTAL" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">INCREASED LIMITS</label>
                            </div>
                            <div className="col-3">
                                        <input
                                        type="text"
                                        name="INCREASED LIMITS"
                                        class="form-control"
                                        id="INCREASED LIMITS"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="INCREASED LIMITS" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">DEDUCTIBLE *</label>
                            </div>
                            <div className="col-3">
                                        <input
                                        type="text"
                                        name="DEDUCTIBLE *"
                                        class="form-control"
                                        id="DEDUCTIBLE *"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="DEDUCTIBLE *" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">EXPERIENCE OR MERIT MODIFICATION</label>
                            </div>
                            <div className="col-3">
                                        <input
                                        type="text"
                                        name="EXPERIENCE *"
                                        class="form-control"
                                        id="EXPERIENCE *"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="EXPERIENCE *" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">TERRORISM</label>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">N/A</label>
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="TERRORISM *" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">CATASTROPHE</label>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">N/A</label>
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="CATASTROPHE" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">ASSIGNED RISK SURCHARGE *</label>
                            </div>
                            <div className="col-3 ">
                                        <input
                                        type="text"
                                        name="ASSIGNED"
                                        class="form-control"
                                        id="ASSIGNED"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="ASSIGNED" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">ARAP *</label>
                            </div>
                            <div className="col-3 ">
                                        <input
                                        type="text"
                                        name="ARAP *"
                                        class="form-control"
                                        id="ARAP"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="ARAP" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <h6></h6>
                            </div>
                            <div className="col-3 text-center">
                                <h6>FACTOR</h6>
                            </div>
                            <div className="col-5 text-center">
                                <h6>FACTORED PREMIUM</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                        <input
                                        type="text"
                                        name=""
                                        class="form-control"
                                        id="ARAP"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 ">
                                        <input
                                        type="text"
                                        name="FACTOR2"
                                        class="form-control"
                                        id=""
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="FACTORED PREMIUM" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">SCHEDULE RATING *</label>
                            </div>
                            <div className="col-3 ">
                                        <input
                                        type="text"
                                        name="SCHEDULE"
                                        class="form-control"
                                        id="SCHEDULE"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="SCHEDULE" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">CCPAP</label>
                            </div>
                            <div className="col-3 ">
                                        <input
                                        type="text"
                                        name="CCPAP"
                                        class="form-control"
                                        id="CCPAP"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="CCPAP" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">CCPAP</label>
                            </div>
                            <div className="col-3 ">
                                        <input
                                        type="text"
                                        name="STANDARD PREMIUM"
                                        class="form-control"
                                        id="STANDARD PREMIUM"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="STANDARD PREMIUM" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">CCPAP</label>
                            </div>
                            <div className="col-3 ">
                                        <input
                                        type="text"
                                        name="PREMIUM DISCOUNT"
                                        class="form-control"
                                        id="PREMIUM DISCOUNT"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="PREMIUM DISCOUNT" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-4">
                                <label htmlFor="">EXPENSE CONSTANT</label>
                            </div>
                            <div className="col-3 text-center ">
                                <label htmlFor="">N/A</label>
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="EXPENSE CONSTANT" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-4">
                                <label htmlFor="">TAXES / ASSESSMENTS *</label>
                            </div>
                            <div className="col-3 text-center ">
                                <label htmlFor="">N/A</label>
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="TAXES" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-4">
                                <input type="text" name="" class="form-control" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center ">
                                <input type="text" name="" class="form-control" onChange={handleBlur}/>   
                            </div>
                            <div className="col-5">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">* N / A in Wisconsin</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h6>TOTAL ESTIMATED ANNUAL PREMIUM</h6>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="text" name="TOTAL ESTIMATED ANNUAL PREMIUM" class="form-control" onChange={handleBlur}/>
                        </div>
                    </div>
                    <div className="col-4">
                        <h6>MINIMUM PREMIUM</h6>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="text" name="MINIMUM PREMIUM" class="form-control" onChange={handleBlur}/>
                        </div>
                    </div>
                    <div className="col-4">
                        <h6>DEPOSIT PREMIUM</h6>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="text" name="DEPOSIT PREMIUM" class="form-control" onChange={handleBlur}/>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(8) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(10) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default Premium;
import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const PriorCarrier = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-6">
                       <h5>PRIOR CARRIER INFORMATION / LOSS HISTORY</h5>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <h6>AGENCY CUSTOMER ID:</h6>
                            </div>
                            <div className="col-8">
                                        <input
                                        type="text"
                                        name="AGENCY CUSTOMER"
                                        class="form-control"
                                        id="AGENCY CUSTOMER"
                                        onChange={handleBlur}
                                        />
                            </div>
                        </div>
                    </div>
               </div>
               <div className="row mt-2">
                   <div className="col-10">
                       <h6>PROVIDE INFORMATION FOR THE PAST 5 YEARS AND USE THE REMARKS SECTION FOR LOSS DETAILS</h6>
                   </div>
                   <div className="col-2">
                        <div class="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                name="LOSS RUN ATTACHED"
                                class="custom-control-input"
                                id="LOSS RUN ATTACHED"
                                onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="LOSS RUN ATTACHED">LOSS RUN ATTACHED</label>
                        </div>
                   </div>
               </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-4 text-center">
                                <h6>YEAR</h6>
                            </div>
                            <div className="col-8 text-center">
                                <h6>CARRIER & POLICY NUMBER</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 text-center">
                                        <input
                                        type="text"
                                        name="YEAR"
                                        class="form-control my-3"
                                        id="YEAR"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-8 ">
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="">CO:</label>
                                    </div>
                                    <div className="col-10">
                                        <input
                                        type="text"
                                        name="CO"
                                        class="form-control mb-1"
                                        id="CO"
                                        onChange={handleBlur}
                                        /> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="">POL #:</label>
                                    </div>
                                    <div className="col-10">
                                        <input
                                        type="text"
                                        name="POL"
                                        class="form-control mb-1"
                                        id="POL"
                                        onChange={handleBlur}
                                        /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 text-center">
                                        <input
                                        type="text"
                                        name="YEAR"
                                        class="form-control my-3"
                                        id="YEAR"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-8 ">
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="">CO:</label>
                                    </div>
                                    <div className="col-10">
                                        <input
                                        type="text"
                                        name="CO"
                                        class="form-control mb-1"
                                        id="CO"
                                        onChange={handleBlur}
                                        /> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="">POL #:</label>
                                    </div>
                                    <div className="col-10">
                                        <input
                                        type="text"
                                        name="POL"
                                        class="form-control mb-1"
                                        id="POL"
                                        onChange={handleBlur}
                                        /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 text-center">
                                        <input
                                        type="text"
                                        name="YEAR"
                                        class="form-control my-3"
                                        id="YEAR"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-8 ">
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="">CO:</label>
                                    </div>
                                    <div className="col-10">
                                        <input
                                        type="text"
                                        name="CO"
                                        class="form-control mb-1"
                                        id="CO"
                                        onChange={handleBlur}
                                        /> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="">POL #:</label>
                                    </div>
                                    <div className="col-10">
                                        <input
                                        type="text"
                                        name="POL"
                                        class="form-control mb-1"
                                        id="POL"
                                        onChange={handleBlur}
                                        /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 text-center">
                                        <input
                                        type="text"
                                        name="YEAR"
                                        class="form-control my-3"
                                        id="YEAR"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-8 ">
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="">CO:</label>
                                    </div>
                                    <div className="col-10">
                                        <input
                                        type="text"
                                        name="CO"
                                        class="form-control mb-1"
                                        id="CO"
                                        onChange={handleBlur}
                                        /> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="">POL #:</label>
                                    </div>
                                    <div className="col-10">
                                        <input
                                        type="text"
                                        name="POL"
                                        class="form-control mb-1"
                                        id="POL"
                                        onChange={handleBlur}
                                        /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-3">
                                <h6>ANNUAL PREMIUM</h6>
                            </div>
                            <div className="col-2">
                                <h6>MOD</h6>
                            </div>
                            <div className="col-2">
                                <h6># CLAIMS</h6>
                            </div>
                            <div className="col-3">
                                <h6>AMOUNT PAID</h6>
                            </div>
                            <div className="col-2">
                                <h6>RESERVE</h6>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-3">
                                <input
                                    type="text"
                                    name="ANNUAL PREMIUM"
                                    class="form-control mb-1"
                                    id="ANNUAL PREMIUM"
                                    style={{height:"80px"}}
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                <input
                                    type="text"
                                    name="MOD"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="MOD"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                <input
                                    type="text"
                                    name="CLAIMS"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="CLAIMS"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-3">
                                <input
                                    type="text"
                                    name="AMOUNT PAID"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="AMOUNT PAID"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                <input
                                    type="text"
                                    name="RESERVE"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="RESERVE"
                                    onChange={handleBlur}
                                    />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-3">
                                <input
                                    type="text"
                                    name="ANNUAL PREMIUM"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="ANNUAL PREMIUM"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                <input
                                    type="text"
                                    name="MOD"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="MOD"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                <input
                                    type="text"
                                    name="CLAIMS"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="CLAIMS"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-3">
                                <input
                                    type="text"
                                    name="AMOUNT PAID"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="AMOUNT PAID"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                <input
                                    type="text"
                                    name="RESERVE"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="RESERVE"
                                    onChange={handleBlur}
                                    />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-3">
                                <input
                                    type="text"
                                    name="ANNUAL PREMIUM"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="ANNUAL PREMIUM"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                <input
                                    type="text"
                                    name="MOD"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="MOD"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                <input
                                    type="text"
                                    name="CLAIMS"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="CLAIMS"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-3">
                                <input
                                    type="text"
                                    name="AMOUNT PAID"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="AMOUNT PAID"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                <input
                                    type="text"
                                    name="RESERVE"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="RESERVE"
                                    onChange={handleBlur}
                                    />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <input
                                    type="text"
                                    name="ANNUAL PREMIUM"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="ANNUAL PREMIUM"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                <input
                                    type="text"
                                    name="MOD"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="MOD"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                <input
                                    type="text"
                                    name="CLAIMS"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="CLAIMS"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-3">
                                <input
                                    type="text"
                                    name="AMOUNT PAID"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="AMOUNT PAID"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                <input
                                    type="text"
                                    name="RESERVE"
                                    class="form-control mb-1"
                                    style={{height:"80px"}}
                                    id="RESERVE"
                                    onChange={handleBlur}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
               <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(10) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(12) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default PriorCarrier;
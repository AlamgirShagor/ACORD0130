import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const FirstStep = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div class="form-row">
                    <div class="col">
                    <textarea 
                    id="AGENCY"
                    name="AGENCY NAME AND ADDRESS"
                    rows="9"
                    cols="50"
                    class="form-control mb-2"
                    placeholder="AGENCY"
                    onChange={handleBlur}

                    />

                    <input
                        type="text"
                        name="PRODUCER NAME:"
                        class="form-control mb-2"
                        placeholder="PRODUCER NAME:"
                        onChange={handleBlur}
                    />

                    <input
                        type="text"
                        name="CS REPRESENTATIVE NAME:"
                        class="form-control mb-2"
                        placeholder="CS REPRESENTATIVE NAME:"
                        onChange={handleBlur}
                    />
                    <input
                        type="text"
                        name="CS REPRESENTATIVE NAME:"
                        class="form-control mb-2"
                        placeholder="CS REPRESENTATIVE NAME:"
                        onChange={handleBlur}
                    />
                    <input
                        type="text"
                        name="MOBILE PHONE:"
                        class="form-control mb-2"
                        placeholder="MOBILE PHONE"
                        onChange={handleBlur}
                    />
                    <input
                        type="text"
                        name="FAX  (A/C, No):"
                        class="form-control mb-2"
                        placeholder="FAX  (A/C, No)"
                        onChange={handleBlur}
                    />

                    <input
                        type="text"
                        name="EMAIL ADDRESS:"
                        class="form-control mb-2"
                        placeholder="EMAIL ADDRESS:"
                        onChange={handleBlur}
                    />
                    <div className="row">
                        <div className="col-6">
                            <input
                            type="text"
                            name="CODE:"
                            class="form-control mb-2"
                            placeholder="CODE:"
                            onChange={handleBlur}
                            />
                        </div>
                        <div className="col-6">
                            <input
                            type="text"
                            name="SUB CODE:"
                            class="form-control mb-2"
                            placeholder="SUB CODE:"
                            onChange={handleBlur}
                            />
                        </div>
                    </div>
                    <input
                        type="text"
                        name="AGENCY CUSTOMER ID:"
                        class="form-control mb-2"
                        placeholder="AGENCY CUSTOMER ID:"
                        onChange={handleBlur}
                    />
                    </div>
                    <div class="col">
                    <div className="row">
                        <div className="col">
                        <input
                            type="text"
                            name="COMPANY:"
                            class="form-control mb-2"
                            placeholder="COMPANY:"
                            onChange={handleBlur}
                            />
                            <input
                            type="text"
                            name="UNDERWRITER:"
                            class="form-control mb-2"
                            placeholder="UNDERWRITER:"
                            onChange={handleBlur}
                            />
                            <input
                            type="text"
                            name="APPLICANT NAME:"
                            class="form-control mb-2"
                            placeholder="APPLICANT NAME:"
                            onChange={handleBlur}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <input
                            type="text"
                            name="OFFICE PHONE:"
                            class="form-control mb-2"
                            placeholder="OFFICE PHONE:"
                            onChange={handleBlur}
                            />
                        </div>
                        <div className="col-3">
                            <input
                            name="MOBILE PHONE:"
                            type="text"
                            class="form-control mb-2"
                            placeholder="MOBILE PHONE:"
                            onChange={handleBlur}
                            />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-8">
                            <textarea name="MAILING ADDRESS" id="" class="form-control mb-2" placeholder="MAILING ADDRESS (including ZIP + 4 or Canadian Postal Code)"
                            onChange={handleBlur}  cols="30" rows="7"></textarea>
                        </div>
                        <div className="col-4">
                            <input
                            type="text"
                            class="form-control mb-2"
                            placeholder="YRS IN BUS:"
                            name="YRS IN BUS:"
                            onChange={handleBlur}
                            />
                            <input
                            type="text"
                            class="form-control mb-2"
                            placeholder="SIC:"
                            name="SIC"
                            onChange={handleBlur}
                            />
                            <input
                            type="text"
                            class="form-control mb-2"
                            name="NAICS:"
                            placeholder="NAICS:"
                            onChange={handleBlur}
                            />
                            <input
                            type="text"
                            name="WEBSITE ADDRESS:"
                            class="form-control mb-2"
                            placeholder="WEBSITE ADDRESS:"
                            onChange={handleBlur}
                            />
                        </div>
                    </div>
                    <input
                        type="text"
                        class="form-control mb-2"
                        placeholder="E-MAIL ADDRESS:"
                        onChange={handleBlur}
                        name="E-MAIL ADDRESS:"
                    />
                    <div className="row">
                        <div className="col-2 mt-2">
                            <div class="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            name="SOLE PROPRIETOR"
                            class="custom-control-input"
                            id="SOLE PROPRIETOR"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="SOLE PROPRIETOR">SOLE PROPRIETOR</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            name="PARTNERSHIP"
                            class="custom-control-input"
                            id="PARTNERSHIP"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" style={{fontSize: "13px"}} for="PARTNERSHIP">PARTNERSHIP</label>
                            </div>
                        </div>
                        <div className="col-3 mt-2">
                            <div class="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            name="CORPORATION"
                            class="custom-control-input"
                            id="CORPORATION"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="CORPORATION">CORPORATION</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            name="SUBCHAPTER S CORP"
                            class="custom-control-input"
                            id="SUBCHAPTER S CORP"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="SUBCHAPTER S CORP">SUBCHAPTER "S" CORP</label>
                            </div>
                        </div>
                        <div className="col-2 mt-2">
                            <div class="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            name="LLC"
                            class="custom-control-input"
                            id="LLC"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="LLC">LLC</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            name="JOINT VENTURE"
                            class="custom-control-input"
                            id="JOINT VENTURE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="JOINT VENTURE">JOINT VENTURE</label>
                            </div>
                        </div>
                        <div className="col-2 mt-2">
                            <div class="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            name="TRUST"
                            class="custom-control-input"
                            id="TRUST"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="TRUST">TRUST</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            name="Other"
                            class="custom-control-input"
                            id="OtherE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="Other">Other</label>
                            </div>
                        </div>
                        <div className="col-3 mt-2">
                            <div class="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            name="UNINCORPORATED ASSOCIATION"
                            class="custom-control-input"
                            id="UNINCORPORATED ASSOCIATION"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="UNINCORPORATED ASSOCIATION">UNINCORPORATED ASSOCIATION</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">
                            
                            <input 
                            type="text" 
                            class="form-control mb-2"
                            placeholder="CREDIT BUREAU NAME"
                            name="CREDIT BUREAU NAME:"
                            onChange={handleBlur} 
                            />
                            
                        </div>
                        <div className="col-6">
                           
                            <input type="text" 
                            class="form-control mb-2"
                            name="ID NUMBER:"
                            placeholder="ID NUMBER:"
                            onChange={handleBlur} 
                            />
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <input type="text" 
                            class="form-control mb-2"
                            name="FEDERAL EMPLOYER ID NUMBER:"
                            placeholder="FEDERAL EMPLOYER ID NUMBER:"
                            onChange={handleBlur} 
                            />
                        </div>
                        <div className="col-4">
                        <input type="text" 
                            class="form-control mb-2"
                            name="FEDERAL EMPLOYER ID NUMBER:"
                            placeholder="FEDERAL EMPLOYER ID NUMBER:"
                            onChange={handleBlur} 
                            />
                        </div>
                        <div className="col-4">
                        <input type="text" 
                            class="form-control mb-2"
                            name="FEDERAL EMPLOYER ID NUMBER:"
                            placeholder="FEDERAL EMPLOYER ID NUMBER:"
                            onChange={handleBlur} 
                            />
                        </div>
                    </div>
                    </div>
                    
                </div>
                
                <button onClick={()=>setStep(2) } className="btn btn-success ml-auto" style={{width: "100px"}} >Next</button>
            </form>
        </div>
    );
};

export default FirstStep;
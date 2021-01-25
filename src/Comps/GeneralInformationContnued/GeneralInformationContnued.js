import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const GeneralInformationContnued = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h5>GENERAL INFORMATION (continued)</h5>
                    </div>
                    <div className="col-md-6">
                    <div className="row">
                            <div className="col-4">
                                <h6>AGENCY CUSTOMER ID:</h6>
                            </div>
                            <div className="col-8">
                                <input
                                    type="text"
                                    onChange={handleBlur}
                                    name="AGENCY CUSTOMER ID"
                                    class="form-control mb-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>EXPLAIN ALL "YES" RESPONSES</h6>
                    </div>
                    <div className="col-1">
                        <h6>Y / N</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">17. ANY OTHER INSURANCE WITH THIS INSURER?</label>
                        <textarea name="ANY OTHER INSURANCE WITH THIS INSURER" id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name="ANY OTHER INSURANCE WITH THIS INSURER Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">18. ANY PRIOR COVERAGE DECLINED / CANCELLED / NON-RENEWED IN THE LAST THREE (3) YEARS? (Missouri Applicants - Do not answer this question)</label>
                        <textarea name=" ANY PRIOR COVERAGE DECLINED" id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name=" ANY PRIOR COVERAGE DECLINED  Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">19. ARE EMPLOYEE HEALTH PLANS PROVIDED?</label>
                        <textarea name="ARE EMPLOYEE HEALTH" id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name="ARE EMPLOYEE HEALTH Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">20. DO ANY EMPLOYEES PERFORM WORK FOR OTHER BUSINESSES OR SUBSIDIARIES?</label>
                        <textarea name="DO ANY EMPLOYEES PERFORM" id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name="DO ANY EMPLOYEES PERFORM Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">21. DO YOU LEASE EMPLOYEES TO OR FROM OTHER EMPLOYERS?</label>
                        <textarea name="DO YOU LEASE EMPLOYEES" id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name="DO YOU LEASE EMPLOYEES Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">22. DO ANY EMPLOYEES PREDOMINANTLY WORK AT HOME? If "YES", # of Employees:</label>
                        <textarea name="DO ANY EMPLOYEES PREDOMINANTLY" id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name="DO ANY EMPLOYEES PREDOMINANTLY Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">23. ANY TAX LIENS OR BANKRUPTCY WITHIN THE LAST FIVE (5) YEARS? (If "YES", please specify)</label>
                        <textarea name=" ANY TAX LIENS OR BANKRUPTCY" id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name="ANY TAX LIENS OR BANKRUPTCY Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">24. ANY UNDISPUTED AND UNPAID WORKERS COMPENSATION PREMIUM DUE FROM YOU OR ANY COMMONLY MANAGED OR OWNED ENTERPRISES? IF YES, EXPLAIN INCLUDING ENTITY NAME(S) AND POLICY NUMBER(S).</label>
                        <textarea name="ANY UNDISPUTED AND UNPAID WORKERS" id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name="ANY UNDISPUTED AND UNPAID WORKERS Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div class="d-flex mt-2 justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(13) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(15) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default GeneralInformationContnued;
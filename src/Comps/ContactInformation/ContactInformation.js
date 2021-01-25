import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const ContactInformation = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <h5>CONTACT INFORMATION</h5>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">
                        <h6>TYPE</h6>
                    </div>
                    <div className="col-3">
                        <h6>NAME</h6>
                    </div>
                    <div className="col-2">
                        <h6>OFFICE PHONE</h6>
                    </div>
                    <div className="col-2">
                        <h6>MOBILE PHONE</h6>
                    </div>
                    <div className="col-3">
                        <h6>E-MAIL</h6>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-2">
                        <h6>INSPECTION</h6>
                    </div>
                    <div className="col-3">
                        <input type="text" name="INSPECTION_NAME" class="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="INSPECTION OFFICE PHONE" class="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="INSPECTION MOBILE PHONE" class="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-3">
                        <input type="text" name="INSPECTION E-MAI" class="form-control" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-2">
                        <h6>ACCTNG RECORD</h6>
                    </div>
                    <div className="col-3">
                        <input type="text" name="ACCTNG RECORD_NAME" class="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="ACCTNG RECORD OFFICE PHONE" class="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="ACCTNG RECORD MOBILE PHONE" class="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-3">
                        <input type="text" name="ACCTNG RECORD E-MAI" class="form-control" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-2">
                        <h6>CLAIMS INFO</h6>
                    </div>
                    <div className="col-3">
                        <input type="text" name="CLAIMS INFO name" class="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="CLAIMS INFO OFFICE PHONE" class="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="CLAIMS INFO MOBILE PHONE" class="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-3">
                        <input type="text" name="CLAIMS INFO E-MAI" class="form-control" onChange={handleBlur}/>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(5) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(7) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default ContactInformation;
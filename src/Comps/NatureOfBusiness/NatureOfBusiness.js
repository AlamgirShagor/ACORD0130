import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const NatureOfBusiness = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <h5 className="mb-3">NATURE OF BUSINESS / DESCRIPTION OF OPERATIONS</h5>
                <h6>GIVE COMMENTS AND DESCRIPTIONS OF BUSINESS, OPERATIONS AND PRODUCTS: MANUFACTURING - RAW MATERIALS, PROCESSES, PRODUCT, EQUIPMENT; CONTRACTOR - TYPE OF WORK, SUB-CONTRACTS; MERCANTILE - MERCHANDISE, CUSTOMERS, DELIVERIES; SERVICE - TYPE, LOCATION; FARM - ACREAGE, ANIMALS, MACHINERY, SUB-CONTRACTS.</h6>
                <div className="row">
                    <div className="col">
                        <textarea name="NATURE OF BUSINESS" id="" cols="30" rows="10"  className="form-control" onChange={handleBlur}></textarea>
                    </div>
               </div>
               <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(11) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(13) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default NatureOfBusiness;
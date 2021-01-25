import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const IndivisualsIncluded = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
           <form className="my-5">
               <div className="row">
                   <div className="col">
                       <h5>INDIVIDUALS INCLUDED / EXCLUDED</h5>
                   </div>
               </div>
               <div className="row">
                    <div className="col">
                        <h6>PARTNERS, OFFICERS, RELATIVES ( Must be employed by business operations) TO BE INCLUDED OR EXCLUDED (Remuneration/Payroll to be included must be part of rating information section.) Exclusions in Missouri must meet the requirements of Section 287.090 RSMo.</h6>
                    </div>
               </div>
               <div className="row mt-2">
                   <div className="col-6">
                       <div className="row">
                           <div className="col-2 text-center">
                               <label htmlFor="">STATE</label>
                           </div>
                           <div className="col-2 text-center">
                               <label htmlFor="">LOC #</label>
                           </div>
                           <div className="col-3 text-center">
                               <label htmlFor="">NAME</label>
                           </div>
                           <div className="col-3 text-center">
                               <label htmlFor="">DATE OF BIRTH</label>
                           </div>
                           <div className="col-2 text-center">
                               <label htmlFor="">TITLE/ RELATIONSHIP</label>
                           </div>
                       </div>
                       
                       <div className="row mt-2">
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="STREET"
                                class="form-control"
                                id="STATE"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="text"
                                name="NAME"
                                class="form-control"
                                id="NAME"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control"
                                id="DATE OF BIRTH"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="TITLE/ RELATIONSHIP"
                                class="form-control"
                                id="TITLE/ RELATIONSHIP"
                                onChange={handleBlur}
                                />
                           </div>
                       </div>
                       <div className="row mt-2">
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="STREET"
                                class="form-control"
                                id="STATE"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="text"
                                name="NAME"
                                class="form-control"
                                id="NAME"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control"
                                id="DATE OF BIRTH"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="TITLE/ RELATIONSHIP"
                                class="form-control"
                                id="TITLE/ RELATIONSHIP"
                                onChange={handleBlur}
                                />
                           </div>
                       </div><div className="row mt-2">
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="STREET"
                                class="form-control"
                                id="STATE"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="text"
                                name="NAME"
                                class="form-control"
                                id="NAME"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control"
                                id="DATE OF BIRTH"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="TITLE/ RELATIONSHIP"
                                class="form-control"
                                id="TITLE/ RELATIONSHIP"
                                onChange={handleBlur}
                                />
                           </div>
                       </div>
                       <div className="row mt-2">
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="STREET"
                                class="form-control"
                                id="STATE"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="text"
                                name="NAME"
                                class="form-control"
                                id="NAME"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="date"
                                name="DATE OF BIRTH"
                                class="form-control"
                                id="DATE OF BIRTH"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="TITLE/ RELATIONSHIP"
                                class="form-control"
                                id="TITLE/ RELATIONSHIP"
                                onChange={handleBlur}
                                />
                           </div>
                       </div>
                       
                   </div>
                   <div className="col-6">
                       <div className="row">
                           <div className="col-2 text-center">
                               <label htmlFor="">OWNER- STATE %</label>
                           </div>
                           <div className="col-3 text-center">
                               <label htmlFor="">DUTIES</label>
                           </div>
                           <div className="col-2 text-center">
                               <label htmlFor="">INC/EXC</label>
                           </div>
                           <div className="col-2 text-center">
                               <label htmlFor="">CLASS CODE</label>
                           </div>
                           <div className="col-3 text-center">
                               <label htmlFor="">REMUNERATION/ PAYROLL</label>
                           </div>
                       </div>
                       <div className="row mt-2">
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="OWNER"
                                class="form-control"
                                id="OWNER"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="text"
                                name="DUTIES"
                                class="form-control"
                                id="DUTIES"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="INC/EXC"
                                class="form-control"
                                id="INC/EXC"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="text"
                                name="REMUNERATION"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                           </div>
                       </div>
                       <div className="row mt-2">
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="OWNER"
                                class="form-control"
                                id="OWNER"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="text"
                                name="DUTIES"
                                class="form-control"
                                id="DUTIES"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="INC/EXC"
                                class="form-control"
                                id="INC/EXC"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="text"
                                name="REMUNERATION"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                           </div>
                       </div>
                       <div className="row mt-2">
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="OWNER"
                                class="form-control"
                                id="OWNER"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="text"
                                name="DUTIES"
                                class="form-control"
                                id="DUTIES"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="INC/EXC"
                                class="form-control"
                                id="INC/EXC"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="text"
                                name="REMUNERATION"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                           </div>
                       </div>
                       <div className="row mt-2">
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="OWNER"
                                class="form-control"
                                id="OWNER"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="text"
                                name="DUTIES"
                                class="form-control"
                                id="DUTIES"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="INC/EXC"
                                class="form-control"
                                id="INC/EXC"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-2 text-center">
                               <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                           </div>
                           <div className="col-3 text-center">
                               <input
                                type="text"
                                name="REMUNERATION"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                           </div>
                       </div>
                   </div>
               </div>
               <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(6) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(8) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
           </form>
        </div>
    );
};

export default IndivisualsIncluded;
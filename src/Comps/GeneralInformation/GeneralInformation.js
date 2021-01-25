import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'
const GeneralInformation = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                   <div className="col">
                   <h5>GENERAL INFORMATION</h5>
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
                        <label htmlFor="">1. DOES APPLICANT OWN, OPERATE OR LEASE AIRCRAFT / WATERCRAFT?</label>
                        <textarea name="DOES APPLICANT OWN" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="DOES APPLICANT OWN Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">2. DO / HAVE PAST, PRESENT OR DISCONTINUED OPERATIONS INVOLVE(D) STORING,TREATING, DISCHARGING, APPLYING, DISPOSING, OR TRANSPORTING OF HAZARDOUS MATERIAL? (e.g. landfills, wastes, fuel tanks, etc)</label>
                        <textarea name="DO / HAVE PAST" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="DO / HAVE PAST Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">3. ANY WORK PERFORMED UNDERGROUND OR ABOVE 15 FEET?</label>
                        <textarea name="ANY WORK PERFORMED" onChange={handleBlur} onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY WORK PERFORMED Y/S" onChange={handleBlur} onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">4. ANY WORK PERFORMED ON BARGES, VESSELS, DOCKS, BRIDGE OVER WATER?</label>
                        <textarea name="ANY WORK PERFORMED" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY WORK PERFORMED Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">5. IS APPLICANT ENGAGED IN ANY OTHER TYPE OF BUSINESS?</label>
                        <textarea name="IS APPLICANT ENGAGED" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="IS APPLICANT ENGAGED Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">6. ARE SUB-CONTRACTORS USED? (If "YES", give % of work subcontracted)</label>
                        <textarea name="ARE SUB-CONTRACTORS" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ARE SUB-CONTRACTORS Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">7. ANY WORK SUBLET WITHOUT CERTIFICATES OF INSURANCE? (If "YES", payroll for this work must be included in the State Rating Worksheet on Page 2)</label>
                        <textarea name="ANY WORK SUBLET" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY WORK SUBLET  Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">8. IS A WRITTEN SAFETY PROGRAM IN OPERATION?</label>
                        <textarea name="IS A WRITTEN SAFETY" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="IS A WRITTEN SAFETY Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">9. ANY GROUP TRANSPORTATION PROVIDED?</label>
                        <textarea name="ANY GROUP TRANSPORTATION" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY GROUP TRANSPORTATION Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">10. ANY EMPLOYEES UNDER 16 OR OVER 60 YEARS OF AGE?</label>
                        <textarea name="ANY EMPLOYEES" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY EMPLOYEES Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">11. ANY SEASONAL EMPLOYEES?</label>
                        <textarea name="ANY SEASONAS" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY SEASONAS Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">12. IS THERE ANY VOLUNTEER OR DONATED LABOR? (If "YES", please specify)</label>
                        <textarea name="IS THERE ANY VOLUNTEER" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="IS THERE ANY VOLUNTEER Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">13. ANY EMPLOYEES WITH PHYSICAL HANDICAPS?</label>
                        <textarea name="ANY EMPLOYEES" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY EMPLOYEES Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">14. DO EMPLOYEES TRAVEL OUT OF STATE? (If "YES", indicate state(s) of travel and frequency)</label>
                        <textarea name="DO EMPLOYEES TRAVEL" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name=" DO EMPLOYEES TRAVEL Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">15. ARE ATHLETIC TEAMS SPONSORED?</label>
                        <textarea name="ARE ATHLETIC TEAMS" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ARE ATHLETIC TEAMS Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">16. ARE PHYSICALS REQUIRED AFTER OFFERS OF EMPLOYMENT ARE MADE?</label>
                        <textarea name="ARE PHYSICALS REQUIRED" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ARE PHYSICALS REQUIRED Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div class="d-flex mt-2 justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(12) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(14) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default GeneralInformation;
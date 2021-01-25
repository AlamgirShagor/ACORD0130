import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const StateRatne = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div class="form-row">
                    <div className="col-5">
                        <div className="row">
                        <div className="col-4">
                                <label htmlFor="">STATE RATING SHEET #</label>
                                </div>
                                <div className="col-2">
                                    <input
                                    type="text"
                                    name="STATE RATING"
                                    class="form-control"
                                    id="STATE RATING"
                                    onChange={handleBlur}
                                    />
                                </div>
                                <div className="col-1">
                                    <label htmlFor="">OF</label>
                                </div>
                                <div className="col-2">
                                <input
                                type="text"
                                name="STATE RATING of"
                                class="form-control"
                                id="STATE RATING of"
                                onChange={handleBlur}
                                />
                                </div>
                            <div className="col-2">
                            <label htmlFor="">SHEETS</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <div className="col-4 text-right">
                                <label htmlFor="">AGENCY CUSTOMER ID:</label>
                            </div>
                            <div className="col-8">
                            <input
                                type="text"
                                name="AGENCY CUSTOMER ID"
                                class="form-control"
                                id="AGENCY CUSTOMER ID"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col text-center">
                        <h5>STATE RATING WORKSHEET</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>FOR MULTIPLE STATES, ATTACH AN ADDITIONAL PAGE 2 OF THIS FORM</h5>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-5">
                                <h6>RATING INFORMATION - STATE:</h6>
                            </div>
                            <div className="col-6">
                                <input
                                type="text"
                                name="RATING"
                                class="form-control"
                                id="RATING"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-7">
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="">LOC #</label>
                            </div>
                            <div className="col-2">
                                <label htmlFor="">CLASS CODE</label>
                            </div>
                            <div className="col-2">
                                <label htmlFor="">DESCR CODE</label>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">CATEGORIES, DUTIES, CLASSIFICATIONS</label>
                            </div>
                            <div className="col-3">
                                <h6># EMPLOYEES</h6>
                                <div className="row">
                                    <div className="col-6">
                                        FULL TIME
                                    </div>
                                    <div className="col-6">
                                        PART TIME
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2">
                                <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="DESCR CODE"
                                class="form-control"
                                id="DESCR CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <input
                                type="text"
                                name="CATEGORIES"
                                class="form-control"
                                id="CATEGORIES"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="FULL TIME"
                                        class="form-control"
                                        id="FULL TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="PART TIME"
                                        class="form-control"
                                        id="PART TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2">
                                <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="DESCR CODE"
                                class="form-control"
                                id="DESCR CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <input
                                type="text"
                                name="CATEGORIES"
                                class="form-control"
                                id="CATEGORIES"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="FULL TIME"
                                        class="form-control"
                                        id="FULL TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="PART TIME"
                                        class="form-control"
                                        id="PART TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2">
                                <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="DESCR CODE"
                                class="form-control"
                                id="DESCR CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <input
                                type="text"
                                name="CATEGORIES"
                                class="form-control"
                                id="CATEGORIES"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="FULL TIME"
                                        class="form-control"
                                        id="FULL TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="PART TIME"
                                        class="form-control"
                                        id="PART TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2">
                                <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="DESCR CODE"
                                class="form-control"
                                id="DESCR CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <input
                                type="text"
                                name="CATEGORIES"
                                class="form-control"
                                id="CATEGORIES"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="FULL TIME"
                                        class="form-control"
                                        id="FULL TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="PART TIME"
                                        class="form-control"
                                        id="PART TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2">
                                <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="DESCR CODE"
                                class="form-control"
                                id="DESCR CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <input
                                type="text"
                                name="CATEGORIES"
                                class="form-control"
                                id="CATEGORIES"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="FULL TIME"
                                        class="form-control"
                                        id="FULL TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="PART TIME"
                                        class="form-control"
                                        id="PART TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2">
                                <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="DESCR CODE"
                                class="form-control"
                                id="DESCR CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <input
                                type="text"
                                name="CATEGORIES"
                                class="form-control"
                                id="CATEGORIES"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="FULL TIME"
                                        class="form-control"
                                        id="FULL TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="PART TIME"
                                        class="form-control"
                                        id="PART TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2">
                                <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="DESCR CODE"
                                class="form-control"
                                id="DESCR CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <input
                                type="text"
                                name="CATEGORIES"
                                class="form-control"
                                id="CATEGORIES"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="FULL TIME"
                                        class="form-control"
                                        id="FULL TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="PART TIME"
                                        class="form-control"
                                        id="PART TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2">
                                <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="DESCR CODE"
                                class="form-control"
                                id="DESCR CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <input
                                type="text"
                                name="CATEGORIES"
                                class="form-control"
                                id="CATEGORIES"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="FULL TIME"
                                        class="form-control"
                                        id="FULL TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="PART TIME"
                                        class="form-control"
                                        id="PART TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2">
                                <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="DESCR CODE"
                                class="form-control"
                                id="DESCR CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <input
                                type="text"
                                name="CATEGORIES"
                                class="form-control"
                                id="CATEGORIES"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="FULL TIME"
                                        class="form-control"
                                        id="FULL TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="PART TIME"
                                        class="form-control"
                                        id="PART TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2">
                                <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="DESCR CODE"
                                class="form-control"
                                id="DESCR CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <input
                                type="text"
                                name="CATEGORIES"
                                class="form-control"
                                id="CATEGORIES"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="FULL TIME"
                                        class="form-control"
                                        id="FULL TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="PART TIME"
                                        class="form-control"
                                        id="PART TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2">
                                <input
                                type="text"
                                name="LOC"
                                class="form-control"
                                id="LOC"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="CLASS CODE"
                                class="form-control"
                                id="CLASS CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-2">
                                <input
                                type="text"
                                name="DESCR CODE"
                                class="form-control"
                                id="DESCR CODE"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <input
                                type="text"
                                name="CATEGORIES"
                                class="form-control"
                                id="CATEGORIES"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="FULL TIME"
                                        class="form-control"
                                        id="FULL TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                        type="text"
                                        name="PART TIME"
                                        class="form-control"
                                        id="PART TIME"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-2 text-center">
                                <label htmlFor="">SIC</label>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">NAICS</label>
                            </div>
                            <div className="col-3 text-center">
                                <label style={{fontSize: "13px"}} htmlFor="">ESTIMATED ANNUAL REMUNERATION/ PAYROLL</label>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">RATE</label>
                            </div>
                            <div className="col-3 text-center">
                                <label  style={{fontSize: "13px"}} htmlFor="">ESTIMATED ANNUAL MANUAL PREMIUM</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="SIC"
                                        class="form-control"
                                        id="SIC"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="NAICS"
                                        class="form-control"
                                        id="NAICS"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="RATE"
                                        class="form-control"
                                        id="RATE"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="SIC"
                                        class="form-control"
                                        id="SIC"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="NAICS"
                                        class="form-control"
                                        id="NAICS"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="RATE"
                                        class="form-control"
                                        id="RATE"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="SIC"
                                        class="form-control"
                                        id="SIC"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="NAICS"
                                        class="form-control"
                                        id="NAICS"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="RATE"
                                        class="form-control"
                                        id="RATE"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="SIC"
                                        class="form-control"
                                        id="SIC"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="NAICS"
                                        class="form-control"
                                        id="NAICS"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="RATE"
                                        class="form-control"
                                        id="RATE"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="SIC"
                                        class="form-control"
                                        id="SIC"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="NAICS"
                                        class="form-control"
                                        id="NAICS"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="RATE"
                                        class="form-control"
                                        id="RATE"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="SIC"
                                        class="form-control"
                                        id="SIC"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="NAICS"
                                        class="form-control"
                                        id="NAICS"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="RATE"
                                        class="form-control"
                                        id="RATE"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="SIC"
                                        class="form-control"
                                        id="SIC"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="NAICS"
                                        class="form-control"
                                        id="NAICS"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="RATE"
                                        class="form-control"
                                        id="RATE"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="SIC"
                                        class="form-control"
                                        id="SIC"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="NAICS"
                                        class="form-control"
                                        id="NAICS"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="RATE"
                                        class="form-control"
                                        id="RATE"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="SIC"
                                        class="form-control"
                                        id="SIC"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="NAICS"
                                        class="form-control"
                                        id="NAICS"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="RATE"
                                        class="form-control"
                                        id="RATE"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="SIC"
                                        class="form-control"
                                        id="SIC"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="NAICS"
                                        class="form-control"
                                        id="NAICS"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="RATE"
                                        class="form-control"
                                        id="RATE"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="SIC"
                                        class="form-control"
                                        id="SIC"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="NAICS"
                                        class="form-control"
                                        id="NAICS"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-2 text-center">
                                        <input
                                        type="text"
                                        name="RATE"
                                        class="form-control"
                                        id="RATE"
                                        onChange={handleBlur}
                                        />
                            </div>
                            <div className="col-3 text-center">
                                        <input
                                        type="text"
                                        name="ESTIMATED"
                                        class="form-control"
                                        id="ESTIMATED"
                                        onChange={handleBlur}
                                        />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(7) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(9) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default StateRatne;
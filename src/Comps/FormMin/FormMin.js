import React, { useContext } from 'react';
import FirstStep from '../FirstStep/FirstStep';
import {StepLabel,  Stepper, Step} from '@material-ui/core'
import {multiStepContext} from '../StepContext/StepContext'
import Header from './Header/Header';
import StatusOfSubmission from '../StatusOfSubmission/StatusOfSubmission';
import Locations from '../Locations/Locations';
import PolicyInformation from '../PolicyInformation/PolicyInformation';
import TotalEstimated from '../TotalEstimated/TotalEstimated';
import ContactInformation from '../ContactInformation/ContactInformation';
import IndivisualsIncluded from '../IndivisualsIncluded/IndivisualsIncluded';
import StateRatne from '../StateRatne/StateRatne';
import Premium from '../Premium/Premium';
import Remarks from "../Remarks/Remarks";
import PriorCarrier from '../PriorCarrier/PriorCarrier';
import NatureOfBusiness from '../NatureOfBusiness/NatureOfBusiness';
import GeneralInformation from '../GeneralInformation/GeneralInformation';
import GeneralInformationContnued from '../GeneralInformationContnued/GeneralInformationContnued';
import Signature from '../Signature/Signature'


const FormMin = () => {
    const {currentStep,setStep, finalData, setUserData, userData} = useContext(multiStepContext);
    const handleBlur = e =>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e =>{

        console.log(userData);
        setUserData('')
        setStep(1)
    }

    function showStep(step){
        switch(step){
            case 1:
                return <FirstStep handleBlur={handleBlur}/>
            case 2:
                return <StatusOfSubmission handleBlur={handleBlur}/>
            case 3:
                return <Locations handleBlur={handleBlur}/>
            case 4:
                return <PolicyInformation handleBlur={handleBlur}/>
            case 5:
                return <TotalEstimated handleBlur={handleBlur}/>
            case 6:
                return <ContactInformation handleBlur={handleBlur}/>
            case 7:
                return <IndivisualsIncluded handleBlur={handleBlur}/>
            case 8:
                return <StateRatne handleBlur={handleBlur} />
            case 9:
                return <Premium handleBlur={handleBlur}/>
            case 10:
                return <Remarks handleBlur={handleBlur}/>
            case 11:
                return <PriorCarrier handleBlur={handleBlur}/>
            case 12:
                return <NatureOfBusiness handleBlur={handleBlur}/>
            case 13:
                return <GeneralInformation handleBlur={handleBlur}/>
            case 14:
                return <GeneralInformationContnued handleBlur={handleBlur}/>
            case 15:
                return <Signature handleBlur={handleBlur} handleSubmit={handleSubmit}/>
            
        }
    }

    return (
        <>
            <Header/>
            <Stepper style={{width: '100%'}} activeStep={currentStep - 1} orientation="horizontal">
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
            </Stepper>
            {showStep(currentStep)}
        </>
    );
};

export default FormMin;
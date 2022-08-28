import { CompanyInfo } from "../../Shared/CompanyInfo/CompanyInfo"
import { Stepper } from "../../Shared/Stepper/Stepper";
import {Step} from '../../Shared/Step/Step';
import { Button } from '../../Shared/Button/Button';
import './OnBoarding.css';
import { useState } from "react";
import { BasicDetails } from "../BasicDetails/BasicDetails";
import { WorkSpaceDetails } from "../WorkSpaceDetails/WorkSpaceDetails";
import { AccountType } from "../AccountType/AccountType";
import { Success } from "../Success/Success";


export const OnBoarding = ()=>{
    const [activeStep, setActiveStep] = useState(0);

    const pages = [
        {
            label: 1,
            component: <BasicDetails/>
        },
        {
            label: 2,
            component: <WorkSpaceDetails/>
        },
        {
            label: 3,
            component: <AccountType/>
        },
        {
            label: 4,
            component: <Success/>
        }
    ]

    const handleButtonClick = ()=>{
        if(activeStep !== pages.length -1){
            setActiveStep((prev)=>prev+1);
        }
    }

    const getButtonLabel = ()=>{
        if(activeStep===pages.length-1){
            return "Launch Eden"
        }
        return "Create Workspace"
    }

    return<div  className="onBoardingContainer">
        <CompanyInfo/>
        <div className="stepperContainer">
        <Stepper active={activeStep}>
        {pages.map((page, index)=>{
            return <Step
            key={index}
            onClick={() => setActiveStep(index)}
            active={activeStep === index}
            completed={activeStep > index}
            label={page.label}
          />
        })}
        </Stepper>
        </div>
        {pages[activeStep].component}
        <div className="onBoardingButton">
          <Button onClick={()=>handleButtonClick()} label={getButtonLabel()}/>
        </div>
    </div>
}
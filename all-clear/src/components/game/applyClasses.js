import React from "react";
import SubjectInfo from "./subjectInfo"
import ScheduleRow from "../preset/scheduleRow";


const ApplyClasses = ({preset, selectedNum}) => {

    //preset은 잘 받아 오는데 selectedNUm이 안된다.
    console.log("selectedNum : "+  selectedNum)
    var selectedPreset = []
    if(selectedNum ==0)
        selectedPreset= preset.preset1;
    else if(selectedNum ==1)   
        selectedPreset= preset.preset2;
    else if(selectedNum ==2)   
        selectedPreset= preset.preset2;
    else 
        selectedPreset= preset.preset1;
    console.log(selectedPreset)
    return (
       <>
       {selectedPreset.map((subject) => <SubjectInfo subject={subject} />)}
       </>
    
)}

export default ApplyClasses;
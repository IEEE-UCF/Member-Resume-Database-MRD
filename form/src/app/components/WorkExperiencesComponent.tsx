import { Dispatch, SetStateAction, useState } from "react";
import { type Form, type Experience } from "../interfaces"

import WorkExperienceComponent from "./WorkExperienceComponent";
import { setWorkExperienceDetails, addWorkExperience, removeWorkExperience } from "../utils/onChanges";
import { printArray } from "../utils/printArray";

interface WorkExperiencesComponentProps {
    workExperiences: Experience[];
    setFormData: Dispatch<SetStateAction<Form>>;
    sectionErrors: string[];
    itemErrors: string[][];
}

const WorkExperiencesComponent = ({ 
    workExperiences, 
    setFormData,
    sectionErrors,
    itemErrors 
}: WorkExperiencesComponentProps) => {

    return (
        <>
            <h3>Work Experience</h3>

            {
                sectionErrors.length > 0 && 
                (<>
                    <p>WORK EXPERIENCE SECTION IS NOT VALID BECAUSE:</p>
                    {printArray(sectionErrors, "Work Experience")}
                </>)
            }

            {workExperiences.map((exp, index) => {
                return (
                    <WorkExperienceComponent
                        key={index}
                        experience={exp}
                        index={index}
                        errors={itemErrors[index] || []}
                        onUpdateField={(field, val) => setWorkExperienceDetails(index, field as any, val, setFormData)}
                        onRemove={() => {
                            removeWorkExperience(index, setFormData);
                        }}
                    />
                );
            })}
            
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addWorkExperience(setFormData);
                }}
            >
                Add Work Experience
            </button>
        </>
    );
};

export default WorkExperiencesComponent;
import { Dispatch, SetStateAction, useState } from "react";
import { type Form, type Experience } from "../interfaces"

import WorkExperienceComponent from "./WorkExperienceComponent";
import { setWorkExperienceDetails, addWorkExperience, removeWorkExperience } from "../utils/onChanges";
import { validateWorkExperiences } from "../utils/validations";
import { printArray } from "../utils/printArray";

interface WorkExperiencesComponentProps {
    workExperiences: Experience[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const WorkExperiencesComponent = ({ 
    workExperiences, 
    setFormData 
}: WorkExperiencesComponentProps) => {
    const [sectionErrors, setSectionErrors] = useState<string[]>([])
    const [itemErrors, setItemErrors] = useState<string[][]>(workExperiences.map(() => []))

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
                            setItemErrors(prev => prev.filter((_, i) => i !== index));
                        }}
                    />
                );
            })}
            
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addWorkExperience(setFormData);
                    setItemErrors(prev => [...prev, []]);
                }}
            >
                Add Work Experience
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    const { sectionErrors: sErrors, itemErrors: iErrors } = validateWorkExperiences(workExperiences);
                    setSectionErrors(sErrors);
                    setItemErrors(iErrors);
                }}
            >
                Confirm All Work Experiences
            </button>
        </>
    );
};

export default WorkExperiencesComponent;
import { Dispatch, SetStateAction } from "react";
import { type Form, type Education } from "../interfaces"

import EducationComponent from "./EducationComponent";
import { 
    setEducationName, 
    setEducationMajor, 
    setEducationGPA, 
    setEducationScale, 
    setEducationStartDate, 
    setEducationEndDate, 
    setEducationDescription,
    addEducation,
    removeEducation
} from "../utils/onChanges";
import { printArray } from "../utils/printArray";

interface EducationsComponentProps {
    educations: Education[];
    setFormData: Dispatch<SetStateAction<Form>>;
    sectionErrors: string[];
    itemErrors: string[][];
}

const EducationsComponent = ({ 
    educations, 
    setFormData,
    sectionErrors,
    itemErrors 
}: EducationsComponentProps) => {

    const handleUpdateField = (index: number, field: string, value: string) => {
        switch (field) {
            case "name": setEducationName(value, index, setFormData); break;
            case "major": setEducationMajor(value, index, setFormData); break;
            case "startDate": setEducationStartDate(value, index, setFormData); break;
            case "endDate": setEducationEndDate(value, index, setFormData); break;
            case "description": setEducationDescription(value, index, setFormData); break;
        }
    };

    const handleUpdateGPA = (index: number, field: "gpa" | "scale", value: string) => {
        if (field === "gpa") setEducationGPA(value, index, setFormData);
        else setEducationScale(value, index, setFormData);
    };

    return (
        <>
            <h3>Education</h3>

            {
                sectionErrors.length > 0 && 
                (<>
                    <p>EDUCATION SECTION IS NOT VALID BECAUSE:</p>
                    {printArray(sectionErrors, "Education")}
                </>)
            }

            {educations.map((edu, index) => {
                return (
                    <EducationComponent
                        key={index}
                        education={edu}
                        index={index}
                        errors={itemErrors[index] || []}
                        onUpdateField={(field, val) => handleUpdateField(index, field, val)}
                        onUpdateGPA={(field, val) => handleUpdateGPA(index, field, val)}
                        onRemove={() => {
                            removeEducation(index, setFormData);
                        }}
                    />
                );
            })}
            
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addEducation(setFormData);
                }}
            >
                Add Education
            </button>
        </>
    );
};

export default EducationsComponent;
import { Dispatch, SetStateAction } from "react"

import type { Education, Form } from "../interfaces";
import { createEmptyEducation } from "../interfaces";

import { setEducationName } from "../utils/onChanges"
import { setEducationDegree } from "../utils/onChanges"
import { setEducationGPA } from "../utils/onChanges"
import { setEducationScale } from "../utils/onChanges"
import { setEducationStartDate } from "../utils/onChanges"
import { setEducationEndDate } from "../utils/onChanges"
import { setEducationDescription } from "../utils/onChanges"

import formStyles from "../styles/form.module.css"

type EducationsComponentProps = {
    educations:Education[];
    setFormData: Dispatch<SetStateAction<Form>>;
};

const EducationsComponent = ({ 
    educations, 
    setFormData 
}: EducationsComponentProps) => {
    return (
        <>
            <h3>Education</h3>
            {educations.map((education, index) => {
                return (
                    <div key={`educations[${index}]`} className={`${formStyles.child} ${formStyles.education}`}>
                        <h4>Education {index + 1}</h4>
                        <input
                            type="text"
                            name={`educations[${index}].name`}
                            placeholder="School Name"
                            value={education.name}
                            onChange={(e) => setEducationName(e.target.value, index, setFormData)}
                        />
                        <input
                            type="text"
                            name={`educations[${index}].degree`}
                            placeholder="Degree"
                            value={education.degree}
                            onChange={(e) => setEducationDegree(e.target.value, index, setFormData)}
                        />
                        <input
                            type="number"
                            name={`educations[${index}].gpa.gpa`}
                            placeholder="GPA"
                            value={education.gpa.gpa}
                            step="0.01"
                            min="0"
                            max={education.gpa.scale || 4}
                            onChange={(e) => setEducationGPA(e.target.value, index, setFormData)}
                        />
                        <input
                            type="number"
                            name={`educations[${index}].gpa.scale`}
                            placeholder="GPA Scale"
                            value={education.gpa.scale || ""}
                            onChange={(e) => setEducationScale(e.target.value, index, setFormData)}
                            step="0.01"
                            min="0"
                        />

                        <div className="dates">
                            <input
                                type="month"
                                name={`educations[${index}].dates.start`}
                                placeholder="Start Date"
                                value={education.dates.start}
                                onChange={(e) => setEducationStartDate(e.target.value, index, setFormData)}
                            />

                            <input
                                type="month"
                                name={`educations[${index}].dates.end`}
                                placeholder="End Date"
                                value={education.dates.end}
                                onChange={(e) => setEducationEndDate(e.target.value, index, setFormData)}
                            />


                            <textarea
                                name={`educations[${index}].description`}
                                placeholder="Description"
                                value={education.description}
                                onChange={(e) => setEducationDescription(e.target.value, index, setFormData)}
                                rows={3}
                            />

                        </div>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setFormData((prev) => ({
                                    ...prev,
                                    educations: prev.educations.filter((_, i) => i !== index),
                                }));
                            }}
                        >
                            Remove Education
                        </button>
                    </div>
                );
            })}
            <input
                type="button"
                value="Add Education"
                onClick={(e) => {
                    e.preventDefault()
                    setFormData((prev) => ({
                        ...prev,
                        educations: [...prev.educations, createEmptyEducation()],
                    }))
                }}
            />
        </>
    );
}

export default EducationsComponent;
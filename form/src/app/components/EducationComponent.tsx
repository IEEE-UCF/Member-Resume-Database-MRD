import { Dispatch, SetStateAction } from "react"
import type { Education, Form } from "../interfaces";
import { createEmptyEducation } from "../interfaces";

type EducationComponentProps = {
    educations: Education[];
    setFormData: Dispatch<SetStateAction<Form>>;
};

const EducationComponent = ({ 
    educations, 
    setFormData 
}: EducationComponentProps) => {
    return (
        <>
            <h3>Education</h3>
            {educations.map((education, index) => {
                return (
                    <div key={`education[${index}]`} className="education-entry">
                        <h4>Education {index + 1}</h4>
                        <input
                            type="text"
                            name={`education[${index}].name`}
                            placeholder="School Name"
                            value={education.name}
                            onChange={(e) =>
                                setFormData((prev) => {
                                    const updated = [...prev.educations];
                                    updated[index].name = e.target.value;
                                    return { ...prev, education: updated };
                                })
                            }
                        />
                        <input
                            type="text"
                            name={`education[${index}].degree`}
                            placeholder="Degree"
                            value={education.degree}
                            onChange={(e) =>
                                setFormData((prev) => {
                                    const updated = [...prev.educations];
                                    updated[index].degree = e.target.value;
                                    return { ...prev, education: updated };
                                })                            
                            }
                        />
                        <input
                            type="number"
                            name={`education[${index}].gpa.gpa`}
                            placeholder="GPA"
                            value={education.gpa.gpa}
                            onChange={(e) =>
                                setFormData((prev) => {
                                    const updated = [...prev.educations];
                                    updated[index].gpa.gpa = Number(e.target.value);
                                    return { ...prev, education: updated };
                                })
                            }
                            step="0.01"
                            min="0"
                            max={education.gpa.scale || 4}
                        />
                        <input
                            type="number"
                            name={`education[${index}].gpa.scale`}
                            placeholder="GPA Scale"
                            value={education.gpa.scale || ""}
                            onChange={(e) =>
                                setFormData((prev) => {
                                    const updated = [...prev.educations];
                                    updated[index].gpa.scale = Number(e.target.value);
                                    return { ...prev, education: updated };
                                })  
                            }
                            step="0.01"
                            min="0"
                        />
                        <div className="dates">
                            <input
                                type="month"
                                name={`education[${index}].dates.start`}
                                placeholder="Start Date"
                                value={education.dates.start}
                                onChange={(e) => {
                                    setFormData((prev) => {
                                        const updated = [...prev.educations];
                                        updated[index].dates.start = e.target.value;
                                        return { ...prev, education: updated };
                                    })  
                                }}
                            />
                            <input
                                type="month"
                                name={`education[${index}].dates.end`}
                                placeholder="End Date"
                                value={education.dates.end}
                                onChange={(e) => {
                                    setFormData((prev) => {
                                        const updated = [...prev.educations];
                                        updated[index].dates.end = e.target.value;
                                        return { ...prev, education: updated };
                                    })  
                                }}
                            />
                            <textarea
                                name={`education[${index}].description`}
                                placeholder="Description"
                                value={education.description}
                                onChange={(e) =>
                                    setFormData((prev) => {
                                        const updated = [...prev.educations];
                                        updated[index].description = e.target.value;
                                        return { ...prev, education: updated };
                                    })
                                }
                                rows={3}
                            />
                        </div>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setFormData((prev) => ({
                                    ...prev,
                                    education: prev.educations.filter((_, i) => i !== index),
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
                        education: [...prev.educations, createEmptyEducation()],
                    }))
                }}
            />
        </>
    );
}

export default EducationComponent;
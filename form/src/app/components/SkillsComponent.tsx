import { Dispatch, SetStateAction, useState } from "react";
import { type Form } from "../interfaces"

import { setSkill } from "../utils/onChanges";
import { validateSkill } from "../utils/validations";
import { printArray } from "../utils/printArray";

interface SkillsComponentProps {
    skills: string[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const SkillsComponent = ({ 
    skills, 
    setFormData 
}: SkillsComponentProps) => {
    const[errors, setErrors] = useState<string[]>([])

    return (
        <>
            <h3>Skills</h3>

             {
                errors.length > 0 &&
                (<>
                    <p>SKILLS ARE INVALID BECAUSE:</p>
                    {
                        printArray(errors, "skills")
                    }
                </>)
            }
            
            {skills.map((skill, index) => {
                return (
                    <div key={`skills[${index}]`}>
                        <input
                            type="text"
                            name={`skills[${index}]`}
                            value={skill}
                            onChange={(e) =>
                                setFormData((prev) => {
                                    const result = [...prev.skills];
                                    result[index] = e.target.value;
                                    return { ...prev, skills: result };
                                })
                            }
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                setFormData((prev) => ({
                                    ...prev,
                                    skills: prev.skills.filter((_, i) => i !== index),
                                }))
                            }}
                        >
                            Remove
                        </button>
                    </div>
                );
            })}
            <button
                onClick={(e) => {
                    e.preventDefault()
                    setFormData((prev) => ({
                        ...prev,
                        skills: [...prev.skills, ""],
                    }))
                }}
            >
                Add Skill
            </button>
            <button
                onClick={(e)=> {
                    e.preventDefault()
                    setErrors(validateSkill(skills))
                }}
            >
                submit
            </button>


        </>
    );
};

export default SkillsComponent;
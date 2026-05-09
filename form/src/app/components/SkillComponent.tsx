import { Dispatch, SetStateAction, useState } from "react";
import { type Form } from "../interfaces";

import { setSkill, addSkill, removeSkill } from "../utils/onChanges";
import { validateSkill } from "../utils/validations";
import { printArray } from "../utils/printArray";

interface SkillComponentProps {
    skill: string;
    index: number;
    setFormData: Dispatch<SetStateAction<Form>>;
}

const SkillComponent = ({
    skill,
    index,
    setFormData,
}: SkillComponentProps) => {
    const [errors, setErrors] = useState<string[]>([]);

    return (
        <>
            {errors.length > 0 && (
                <>
                    <p>SKILL IS NOT VALID BECAUSE:</p>

                    {printArray(errors, "Skills")}
                </>
            )}

            <input
                type="text"
                name={`skills[${index}]`}
                value={skill}
                onChange={(e) =>
                    setSkill(index, e.target.value, setFormData)
                }
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setErrors(validateSkill(skill));
                }}
            >
                Submit
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    removeSkill(index, setFormData);
                }}
            >
                Remove
            </button>
        </>
    );
};

export default SkillComponent;

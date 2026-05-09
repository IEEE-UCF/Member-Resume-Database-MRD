import { Dispatch, SetStateAction, useState } from "react";
import { type Form } from "../interfaces"

import SkillComponent from "./SkillComponent";
import { setSkill, addSkill, removeSkill } from "../utils/onChanges";
import { validateSkills, validateSkill } from "../utils/validations";
import { printArray } from "../utils/printArray";

interface SkillsComponentProps {
    skills: string[];
    setFormData: Dispatch<SetStateAction<Form>>;
}
const SkillsComponent = ({ 
    skills, 
    setFormData 
}: SkillsComponentProps) => {
    const [sectionErrors, setSectionErrors] = useState<string[]>([])
    const [itemErrors, setItemErrors] = useState<string[][]>(skills.map(() => []))

    return (
        <>
            <h3>Skills</h3>

            {
                sectionErrors.length > 0 && 
                (<>
                    <p>SKILLS SECTION IS NOT VALID BECAUSE:</p>

                    {
                        printArray(sectionErrors, "Skills")
                    }
                </>)
            }

            {skills.map((skill, index) => {
                return (
                    <SkillComponent
                        key={index}
                        skill={skill}
                        index={index}
                        errors={itemErrors[index] || []}
                        onChange={(val) => setSkill(index, val, setFormData)}
                        onRemove={() => {
                            removeSkill(index, setFormData);
                            setItemErrors(prev => prev.filter((_, i) => i !== index));
                        }}
                    />
                );
            })}

            <button
                onClick={(e) => {
                    e.preventDefault();
                    addSkill(setFormData);
                    setItemErrors(prev => [...prev, []]);
                }}
            >
                Add Skill
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    const { sectionErrors: sErrors, itemErrors: iErrors } = validateSkills(skills);
                    setSectionErrors(sErrors);
                    setItemErrors(iErrors);
                }}
            >
                Confirm All Skills
            </button>
        </>
    );
};


export default SkillsComponent;
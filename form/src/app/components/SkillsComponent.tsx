import { Dispatch, SetStateAction } from "react";
import { type Form } from "../interfaces"

import SkillComponent from "./SkillComponent";
import { setSkill, addSkill, removeSkill } from "../utils/onChanges";
import { printArray } from "../utils/printArray";

interface SkillsComponentProps {
    skills: string[];
    setFormData: Dispatch<SetStateAction<Form>>;
    sectionErrors: string[];
    itemErrors: string[][];
}
const SkillsComponent = ({ 
    skills, 
    setFormData,
    sectionErrors,
    itemErrors 
}: SkillsComponentProps) => {

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
                        }}
                    />
                );
            })}

            <button
                onClick={(e) => {
                    e.preventDefault();
                    addSkill(setFormData);
                }}
            >
                Add Skill
            </button>
        </>
    );
};


export default SkillsComponent;
import { Dispatch, SetStateAction } from "react";
import { type Form } from "../interfaces";

import SkillComponent from "./SkillComponent";

import { addSkill } from "../utils/onChanges";

interface SkillsComponentProps {
    skills: string[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const SkillsComponent = ({ skills, setFormData }: SkillsComponentProps) => {
    return (
        <>
            <h3>Skills</h3>

            {skills.map((skill, index) => {
                return (
                    <SkillComponent
                        key={`skills[${index}]`}
                        skill={skill}
                        index={index}
                        setFormData={setFormData}
                    />
                )
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

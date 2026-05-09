import { printArray } from "../utils/printArray";

interface SkillComponentProps {
    skill: string;
    index: number;
    onChange: (value: string) => void;
    onRemove: () => void;
    errors: string[];
}

const SkillComponent = ({
    skill,
    index,
    onChange,
    onRemove,
    errors,
}: SkillComponentProps) => {
    return (
        <>
            <input
                type="text"
                value={skill}
                onChange={(e) => onChange(e.target.value)}
                placeholder={`Skill ${index + 1}`}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onRemove();
                }}
            >
                Remove
            </button>

            {errors.length > 0 && printArray(errors, `Skill ${index + 1}`)}
        </>
    );
};

export default SkillComponent;

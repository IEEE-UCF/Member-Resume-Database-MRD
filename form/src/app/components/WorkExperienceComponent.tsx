import { printArray } from "../utils/printArray";
import { type Experience } from "../interfaces";

interface WorkExperienceComponentProps {
    experience: Experience;
    index: number;
    onUpdateField: (field: "name" | "title" | "description" | "startDate" | "endDate", value: string) => void;
    onRemove: () => void;
    errors: string[];
}

const WorkExperienceComponent = ({ 
    experience, 
    index, 
    onUpdateField, 
    onRemove, 
    errors 
}: WorkExperienceComponentProps) => {
    return (
        <div>
            <h4>Work Experience {index + 1}</h4>
            
            {errors.length > 0 && (
                <div>
                    <p>WORK EXPERIENCE {index + 1} IS NOT VALID BECAUSE:</p>
                    {printArray(errors, `Work Experience ${index + 1}`)}
                </div>
            )}

            <input
                type="text"
                placeholder="Company Name"
                value={experience.name}
                onChange={(e) => onUpdateField("name", e.target.value)}
            />

            <input
                type="text"
                placeholder="Job Title"
                value={experience.title}
                onChange={(e) => onUpdateField("title", e.target.value)}
            />

            <div>
                <label>Start Date:</label>
                <input
                    type="date"
                    value={experience.dates.start}
                    onChange={(e) => onUpdateField("startDate", e.target.value)}
                />
                <label>End Date:</label>
                <input
                    type="date"
                    value={experience.dates.end}
                    onChange={(e) => onUpdateField("endDate", e.target.value)}
                />
            </div>

            <textarea
                placeholder="Work Description"
                value={experience.description}
                onChange={(e) => onUpdateField("description", e.target.value)}
                rows={3}
            />

            <button
                onClick={(e) => {
                    e.preventDefault();
                    onRemove();
                }}
            >
                Remove
            </button>
        </div>
    );
};

export default WorkExperienceComponent;
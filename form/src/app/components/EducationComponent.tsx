import { printArray } from "../utils/printArray";
import { type Education } from "../interfaces";
import { ucfMajors } from "../data/majors";

interface EducationComponentProps {
    education: Education;
    index: number;
    onUpdateField: (field: string, value: string) => void;
    onUpdateGPA: (field: "gpa" | "scale", value: string) => void;
    onRemove: () => void;
    errors: string[];
}

const EducationComponent = ({ 
    education, 
    index, 
    onUpdateField, 
    onUpdateGPA,
    onRemove, 
    errors 
}: EducationComponentProps) => {
    return (
        <div>
            <h4>Education {index + 1}</h4>
            
            {errors.length > 0 && (
                <div>
                    <p>EDUCATION {index + 1} IS NOT VALID BECAUSE:</p>
                    {printArray(errors, `Education ${index + 1}`)}
                </div>
            )}

            <input
                type="text"
                placeholder="School Name"
                value={education.name}
                onChange={(e) => onUpdateField("name", e.target.value)}
            />

            <select
                value={education.major}
                onChange={(e) => onUpdateField("major", e.target.value)}
            >
                <option value="">Select Major</option>
                {ucfMajors.map((m, i) => (
                    <option key={i} value={m}>
                        {m}
                    </option>
                ))}
            </select>

            <div>
                <label>Start Date:</label>
                <input
                    type="date"
                    value={education.dates.start}
                    onChange={(e) => onUpdateField("startDate", e.target.value)}
                />
                <label>End Date:</label>
                <input
                    type="date"
                    value={education.dates.end}
                    onChange={(e) => onUpdateField("endDate", e.target.value)}
                />
            </div>

            <div>
                <input
                    type="number"
                    placeholder="GPA"
                    step="0.01"
                    value={education.gpa.gpa || ""}
                    onChange={(e) => onUpdateGPA("gpa", e.target.value)}
                />
                <span> / </span>
                <select
                    value={education.gpa.scale || ""}
                    onChange={(e) => onUpdateGPA("scale", e.target.value)}
                >
                    <option value="">Scale</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>

            <textarea
                placeholder="Description"
                value={education.description}
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

export default EducationComponent;
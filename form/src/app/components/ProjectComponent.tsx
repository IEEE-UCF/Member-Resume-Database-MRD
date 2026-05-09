import { printArray } from "../utils/printArray";
import { type Project } from "../interfaces";

interface ProjectComponentProps {
    project: Project;
    index: number;
    onUpdateField: (field: "name" | "description" | "link" | "startDate" | "endDate", value: string) => void;
    onRemove: () => void;
    errors: string[];
}

const ProjectComponent = ({ 
    project, 
    index, 
    onUpdateField, 
    onRemove, 
    errors 
}: ProjectComponentProps) => {
    return (
        <div>
            <h4>Project {index + 1}</h4>
            
            {errors.length > 0 && (
                <div>
                    <p>PROJECT {index + 1} IS NOT VALID BECAUSE:</p>
                    {printArray(errors, `Project ${index + 1}`)}
                </div>
            )}

            <input
                type="text"
                placeholder="Project Name"
                value={project.name}
                onChange={(e) => onUpdateField("name", e.target.value)}
            />

            <input
                type="url"
                placeholder="Project Link"
                value={project.link}
                onChange={(e) => onUpdateField("link", e.target.value)}
            />

            <div>
                <label>Start Date:</label>
                <input
                    type="date"
                    value={project.dates.start}
                    onChange={(e) => onUpdateField("startDate", e.target.value)}
                />
                <label>End Date:</label>
                <input
                    type="date"
                    value={project.dates.end}
                    onChange={(e) => onUpdateField("endDate", e.target.value)}
                />
            </div>

            <textarea
                placeholder="Description"
                value={project.description}
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

export default ProjectComponent;
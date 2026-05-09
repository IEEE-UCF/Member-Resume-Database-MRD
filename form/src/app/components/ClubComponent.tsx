import { printArray } from "../utils/printArray";
import { type Experience } from "../interfaces";

interface ClubComponentProps {
    club: Experience;
    index: number;
    onUpdateField: (field: "name" | "title" | "description" | "startDate" | "endDate", value: string) => void;
    onRemove: () => void;
    errors: string[];
}

const ClubComponent = ({ 
    club, 
    index, 
    onUpdateField, 
    onRemove, 
    errors 
}: ClubComponentProps) => {
    return (
        <div>
            <h4>Club {index + 1}</h4>
            
            {errors.length > 0 && (
                <div>
                    <p>CLUB {index + 1} IS NOT VALID BECAUSE:</p>
                    {printArray(errors, `Club ${index + 1}`)}
                </div>
            )}

            <input
                type="text"
                placeholder="Club Name"
                value={club.name}
                onChange={(e) => onUpdateField("name", e.target.value)}
            />

            <input
                type="text"
                placeholder="Title (e.g., President)"
                value={club.title}
                onChange={(e) => onUpdateField("title", e.target.value)}
            />

            <div>
                <label>Start Date:</label>
                <input
                    type="date"
                    value={club.dates.start}
                    onChange={(e) => onUpdateField("startDate", e.target.value)}
                />
                <label>End Date:</label>
                <input
                    type="date"
                    value={club.dates.end}
                    onChange={(e) => onUpdateField("endDate", e.target.value)}
                />
            </div>

            <textarea
                placeholder="Description"
                value={club.description}
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

export default ClubComponent;
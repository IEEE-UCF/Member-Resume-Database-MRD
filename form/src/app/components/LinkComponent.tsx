import { printArray } from "../utils/printArray";

interface LinkComponentProps {
    link: string;
    index: number;
    onChange: (value: string) => void;
    onRemove: () => void;
    errors: string[];
}

const LinkComponent = ({ 
    link, 
    index, 
    onChange, 
    onRemove, 
    errors 
}: LinkComponentProps) => {
    return (
        <div>
            <input
                type="url"
                value={link}
                onChange={(e) => onChange(e.target.value)}
                placeholder="https://example.com"
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onRemove();
                }}
            >
                Remove
            </button>
            
            {errors.length > 0 && (
                <div>
                    {printArray(errors, `Link ${index + 1}`)}
                </div>
            )}
        </div>
    );
};

export default LinkComponent;
import { Dispatch, SetStateAction, useState } from "react";
import { type Form } from "../interfaces"

import { setSchoolYear } from "../utils/onChanges";
import { validateSchoolYear } from "../utils/validations";
import { printArray } from "../utils/printArray";

interface SchoolYearComponentProps {
    schoolYear: string;
    setFormData: Dispatch<SetStateAction<Form>>;
}

const schoolYearOptions = [
    "Freshman",
    "Sophomore",
    "Junior",
    "Senior",
    "Graduate"
];

const SchoolYearComponent = ({ 
    schoolYear, 
    setFormData 
}: SchoolYearComponentProps) => {
    const [errors, setErrors] = useState<string[]>([])
    
    return (
        <div>
            <h3>School Year</h3>

            {
                errors.length > 0 && 
                (<>
                    <p>SCHOOL YEAR IS NOT VALID BECAUSE:</p>
                    
                    {
                        printArray(errors, "schoolYear")
                    }
                </>)
            }

            {schoolYearOptions.map(option => (
                <label key={option} style={{ marginRight: 16 }}>
                    <input
                        type="radio"
                        name="schoolYear"
                        value={option}
                        checked={schoolYear === option}
                        onChange={e => setSchoolYear(e.target.value, setFormData)}
                    />
                    {option}
                </label>
            ))}
            <button
                onClick={(e) => {
                    e.preventDefault()
                    setErrors(validateSchoolYear(schoolYear))
                }}
            >
                Submit
            </button>
        </div>
    );
};

export default SchoolYearComponent;

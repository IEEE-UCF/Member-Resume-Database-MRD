import { Dispatch, SetStateAction, useState } from "react";
import { Form } from "../interfaces";

import { setGraduationYear } from "../utils/onChanges";
import { validateGraduationYear } from "../utils/validations";
import { printArray } from "../utils/printArray";

interface GraduationYearComponentProps {
    graduationYear: number;
    setFormData: Dispatch<SetStateAction<Form>>;
}

const GraduationYearComponent = ({
    graduationYear,
    setFormData
}: GraduationYearComponentProps) => {
    const[errors, setErrors] = useState<string[]>([])

    return (
        <div>
            <h3>Graduation Year</h3>

            {
                errors.length > 0 && 
                (<>
                    <p>GRADUATION YEAR IS INVALID BECAUSE</p>

                    {
                        printArray(errors, "graduationYear")
                    }
                </>)
            }

            <input
                type="number"
                name="graduationYear"
                min={2020}
                max={2035}
                value={graduationYear}
                onChange={e => setGraduationYear(e.target.value, setFormData)}
            />
            <button
                onClick={(e) =>{
                    e.preventDefault()
                    setErrors(validateGraduationYear(String(graduationYear)))
                }}
            >
                Submit
            </button>
        </div>
    );
};

export default GraduationYearComponent;

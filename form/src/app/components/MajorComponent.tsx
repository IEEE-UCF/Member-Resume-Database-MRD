import { Dispatch, SetStateAction, useState } from "react";
import { type Form } from "../interfaces";

import { setMajor } from "../utils/onChanges";
import { validateMajor } from "../utils/validations";
import { printArray } from "../utils/printArray";
import { ucfMajors } from "../data/majors";


type MajorComponentProps = {
    major: string;
    setFormData: Dispatch<SetStateAction<Form>>;
};

const MajorComponent = ({ 
    major, 
    setFormData 
}: MajorComponentProps) => {
    const[errors, setErrors] = useState<string[]>([])

    return (
        <>
            <h3>Major</h3>

            {
                errors.length > 0 && 
                (<>
                    <p>MAJOR IS NOT VALID BECAUSE:</p>

                    {
                        printArray(errors, "major")
                    }
               </>)
            }


            <select
                name="major"
                value={major}
                onChange={(e) => setMajor(e.target.value, setFormData)}
            >
                <option value="">Select Major</option>
                {ucfMajors.map((m, i) => (
                    <option key={i} value={m}>
                        {m}
                    </option>
                ))}
            </select>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    setErrors(validateMajor(major))
                }}
            >
                Submit
            </button>
        </>
    );
};

export default MajorComponent;
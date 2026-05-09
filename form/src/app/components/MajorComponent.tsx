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
    const [itemErrors, setItemErrors] = useState<string[]>([])

    return (
        <>
            <h3>Major</h3>

            {
                itemErrors.length > 0 && 
                (<>
                    <p>MAJOR IS NOT VALID BECAUSE:</p>

                    {
                        printArray(itemErrors, "major")
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
                    const { itemErrors: iErrors } = validateMajor(major)
                    setItemErrors(iErrors)
                }}
            >
                Submit Major
            </button>
        </>
    );
};

export default MajorComponent;
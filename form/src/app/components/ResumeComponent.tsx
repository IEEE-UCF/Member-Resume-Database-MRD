import { Dispatch, SetStateAction, useState } from "react";
import { type Form } from "../interfaces"

import { setResume } from "../utils/onChanges";
import { validateResume } from "../utils/validations";
import { printArray } from "../utils/printArray";

interface ResumeComponentProps {
    resume: string;
    setFormData: Dispatch<SetStateAction<Form>>;
}

const ResumeComponent = ({ 
    resume, 
    setFormData 
}: ResumeComponentProps) => {
    const[errors, setErrors] = useState<string[]>([])

    return (
        <>
            <h3>Resume</h3>

            {
                errors.length > 0 && 
                (<>
                    <p>RESUME IS NOT VALID BECAUSE:</p>

                    {
                        printArray(errors, "resume")
                    }
                </>)
            }

            <input
                type="url"
                name="resume"
                placeholder="https://example.com/resume.pdf"
                value={resume}
                onChange={(e) => setResume(e.target.value, setFormData)}
            />
            <button
                onClick={(e) => {
                    e.preventDefault()
                    setErrors(validateResume(resume))
                }}
            >
                Submit
            </button>
        </>
    );
};

export default ResumeComponent;
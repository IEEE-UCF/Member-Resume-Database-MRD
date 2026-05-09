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
    const [itemErrors, setItemErrors] = useState<string[]>([])

    return (
        <>
            <h3>Resume</h3>

            {
                itemErrors.length > 0 && 
                (<>
                    <p>RESUME IS NOT VALID BECAUSE:</p>

                    {
                        printArray(itemErrors, "resume")
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
                    const { itemErrors: iErrors } = validateResume(resume)
                    setItemErrors(iErrors)
                }}
            >
                Submit Resume
            </button>
        </>
    );
};

export default ResumeComponent;
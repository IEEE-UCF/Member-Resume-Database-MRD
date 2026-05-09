import { Dispatch, SetStateAction } from "react";
import { type Form } from "../interfaces"

import { setResume } from "../utils/onChanges";
import { printArray } from "../utils/printArray";

interface ResumeComponentProps {
    resume: string;
    setFormData: Dispatch<SetStateAction<Form>>;
    itemErrors: string[];
}

const ResumeComponent = ({ 
    resume, 
    setFormData,
    itemErrors 
}: ResumeComponentProps) => {

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
        </>
    );
};

export default ResumeComponent;
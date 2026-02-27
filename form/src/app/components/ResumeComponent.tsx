import { Dispatch, SetStateAction } from "react";
import { setResume } from "../utils/onChanges";
import { type Form } from "../interfaces"

interface ResumeComponentProps {
    resume: string;
    setFormData: Dispatch<SetStateAction<Form>>;
}

const ResumeComponent = ({ 
    resume, 
    setFormData 
}: ResumeComponentProps) => {
    return (
        <>
            <h3>Resume</h3>
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
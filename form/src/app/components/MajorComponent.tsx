import { Dispatch, SetStateAction } from "react";
import { ucfMajors } from "../data/majors";
import type { Form } from "../interfaces";
import { setMajor } from "../utils/onChanges";

type MajorComponentProps = {
    major: string;
    setFormData: Dispatch<SetStateAction<Form>>;
};

const MajorComponent = ({ 
    major, 
    setFormData 
}: MajorComponentProps) => {
    return (
        <>
            <h3>Major</h3>
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
        </>
    );
};

export default MajorComponent;
import { Dispatch, SetStateAction } from "react";
import { setGraduationYear } from "../utils/onChanges";
import { Form } from "../interfaces";

interface GraduationYearComponentProps {
    graduationYear: number;
    setFormData: Dispatch<SetStateAction<Form>>;
}

const GraduationYearComponent = ({
    graduationYear,
    setFormData
}: GraduationYearComponentProps) => {
    return (
        <div>
            <h3>Graduation Year</h3>
            <input
                type="number"
                name="graduationYear"
                min={2020}
                max={2035}
                value={graduationYear}
                onChange={e => setGraduationYear(e.target.value, setFormData)}
            />
        </div>
    );
};

export default GraduationYearComponent;

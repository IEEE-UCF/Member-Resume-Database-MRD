import { Dispatch, SetStateAction } from "react";
import { type Form } from "../interfaces"
import { setSchoolYear } from "../utils/onChanges";

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
    return (
        <div>
            <h3>School Year</h3>
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
        </div>
    );
};

export default SchoolYearComponent;

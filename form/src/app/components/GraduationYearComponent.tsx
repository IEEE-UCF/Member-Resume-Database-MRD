import { Dispatch, SetStateAction, useState } from "react";
import { Form } from "../interfaces";

import { setGraduationYear } from "../utils/onChanges";
import { validateGraduationYear } from "../utils/validations";
import { printArray } from "../utils/printArray";

interface GraduationYearComponentProps {
    graduationYear: string;
    setFormData: Dispatch<SetStateAction<Form>>;
}

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const GraduationYearComponent = ({ 
    graduationYear, 
    setFormData 
}: GraduationYearComponentProps) => {
    const [itemErrors, setItemErrors] = useState<string[]>([])
    
    // Improved parsing to handle partial strings correctly
    let currentMonth = "";
    let currentYear = "";
    
    if (graduationYear) {
        const parts = graduationYear.split(" ");
        if (parts.length === 2) {
            [currentMonth, currentYear] = parts;
        } else if (parts.length === 1) {
            if (/^\d+$/.test(parts[0])) {
                currentYear = parts[0];
            } else {
                currentMonth = parts[0];
            }
        }
    }

    const startYear = 2025;
    const endYear = 2035;
    const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

    const handleMonthChange = (month: string) => {
        const newDate = `${month} ${currentYear || ""}`.trim();
        setGraduationYear(newDate, setFormData);
    };

    const handleYearChange = (year: string) => {
        const newDate = `${currentMonth || ""} ${year}`.trim();
        setGraduationYear(newDate, setFormData);
    };

    return (
        <div>
            <h3>Graduation Year</h3>

            {
                itemErrors.length > 0 &&
                (<>
                    <p>GRADUATION YEAR IS NOT VALID BECAUSE:</p>

                    {
                        printArray(itemErrors, "graduationYear")
                    }
                </>)
            }

            <select 
                value={currentMonth} 
                onChange={(e) => handleMonthChange(e.target.value)}
            >
                <option value="">Select Month</option>
                {months.map(m => <option key={m} value={m}>{m}</option>)}
            </select>

            <select 
                value={currentYear} 
                onChange={(e) => handleYearChange(e.target.value)}
            >
                <option value="">Select Year</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>

            <button
                onClick={(e) => {
                    e.preventDefault()
                    const { itemErrors: iErrors } = validateGraduationYear(graduationYear)
                    setItemErrors(iErrors)
                }}
            >
                Confirm Graduation Year
            </button>
        </div>
    );
};

export default GraduationYearComponent;
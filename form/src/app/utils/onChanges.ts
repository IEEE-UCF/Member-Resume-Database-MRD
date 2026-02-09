import { Dispatch, SetStateAction } from "react";

import { Form } from "../interfaces";

// Bio          
export const setBio = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData(
        (prev) => ({ ...prev, bio: newValue })
    )
}

// Clubs
                    

// Education
export const setEducationDegree = (
    newValue: string,
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => {
        const updated = [...prev.educations];
        updated[index].degree = newValue;
        return { ...prev, educations: updated };
    })     
}

// Graduation


// Links


// Major


// Name


// Picture


// Projects


// Resume


// School Year


// Skills


// Work experience
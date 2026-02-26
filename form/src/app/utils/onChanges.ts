import { Dispatch, SetStateAction } from "react";

import * as validations from "./validations"

import { Form } from "../interfaces";

// Bio          
export const setBio = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    if(validations.validateBio(newValue)) {
        setFormData(
            (prev) => ({ ...prev, bio: newValue })
        )
    }
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
export const setGraduationYear = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    if(validations.validateGraduationYear(newValue)){
        setFormData(
            (prev) => ({...prev, graduationYear: Number(newValue)})
        )
    }
}


// Links


// Major
export const setMajor = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    if(validations.validateMajor(newValue)){
        setFormData(
            (prev) => ({ ...prev, major: newValue })
        )
    }
}


// Name
export const setName = (
    newValue: string, 
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    if(validations.validateName(newValue)){
        setFormData(
            (prev) => ({...prev, name: newValue})
        )
    }
}


// Picture


// Projects


// Resume


// School Year
export const setSchoolYear = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    if(validations.validateSchoolYear(newValue)){
        setFormData(
            (prev) => ({...prev, schoolYear: newValue})
        )
    }
}


// Skills


// Work experience

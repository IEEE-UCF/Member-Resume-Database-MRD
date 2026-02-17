import { Dispatch, SetStateAction } from "react";

import type { Form } from "../interfaces";
import * as validations from "./validations";

//School Year
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
//Name
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
//Major
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
//Graduation Year
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

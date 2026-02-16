import { Dispatch, SetStateAction } from "react";

import type { Form } from "../interfaces";

//School Year
export const validateSchoolYear = (schoolYear: string) => {
    let isSelectd = schoolYear.length > 0
    
    return !isSelectd
}
//Name 
export const validateName = (name: string) => {
    let tooLarge = name.length > 20
    let isNumber = /\d/.test(name)
    //individual banned characters, can be changed later on
    let isSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(name)

    return !tooLarge  && !isNumber && !isSpecialCharacter
}
//Major
export const validateMajor = (major: string) => {
    let isSelectd = (major == ("Select Major"))

    return !isSelectd
}

export const validateGraduationYear = (GraduationYear: string) => {
    let isValidYear = Number(GraduationYear) <= 1800 


    return !isValidYear 
}
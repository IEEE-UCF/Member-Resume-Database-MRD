import { Dispatch, SetStateAction } from "react";

import type { Form } from "../interfaces";

//School Year
export const validateSchoolYear = (schoolYear: string) => {
    let isSelected = schoolYear.length > 0
    
    return !isSelected
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
//Graduation Year
export const validateGraduationYear = (graduationYear: string) => {
    let notNeg = Number(graduationYear) >= 0
    let tooLarge = Number(graduationYear) > 2100
    //makes sure years are 4 digits long let yearFormat = /^\d{5}$/.test(graduationYear)

    
    

    return notNeg && !tooLarge && //!yearFormat
}
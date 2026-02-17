import { Dispatch, SetStateAction } from "react";

import { Form } from "../interfaces";

// Bio
export const validateBio = (bio: string) => {
    let tooSmall = bio.length <= 0
    let tooLarge = bio.length > 8

    return !tooSmall && !tooLarge
}

// Clubs
                    

// Education


// Graduation 
export const validateGraduationYear = (graduationYear: string) => {
    let tooSmall = Number(graduationYear) >= 1900
    let tooLarge = Number(graduationYear) > 2100
    
    
    return tooSmall && !tooLarge 
}


// Links


// Major
export const validateMajor = (major: string) => {
    let isSelectd = (major == ("Select Major"))

    return !isSelectd
}


// Name 
export const validateName = (name: string) => {
    let tooLarge = name.length > 20
    let isNumber = /\d/.test(name)
    //individual banned characters, can be changed later on
    let isSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(name)

    return !tooLarge  && !isNumber && !isSpecialCharacter
}


// Picture


// Projects


// Resume


// School Year
export const validateSchoolYear = (schoolYear: string) => {
    let isSelected = schoolYear.length > 0
    
    return isSelected
}


// Skills


// Work experience

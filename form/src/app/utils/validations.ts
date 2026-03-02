import { Dispatch, SetStateAction } from "react";

import { Form } from "../interfaces";

import { ucfMajors } from "../data/majors";

// Bio
export const validateBio = (bio: string) => {
    let strTooSmall = bio.length <= 0
    let strTooLarge = bio.length > 8

    return !strTooSmall && !strTooLarge
}

// Clubs
                    

// Education


// Graduation 
export const validateGraduationYear = (graduationYear: string) => {
    let isSelected = graduationYear.length > 0
    let tooSmall = Number(graduationYear) <= 1900
    let tooLarge = Number(graduationYear) >= 2200
    let strTooLarge = graduationYear.length > 4
    let isSpecialCharacter = /[@#$%^&*_+=\[\]{};'"\\|<>\/?]/.test(graduationYear)
    let hasLetter = /\D/.test(graduationYear)
    
    return isSelected && !tooSmall && !tooLarge && !strTooLarge  && !isSpecialCharacter && !hasLetter
}

// Links
export const validateLinks = (link : string) => {
    let isEmpty = (link.trim() == "")
    let strTooSmall = link.length < 10
    let strTooLarge = link.length > 200
    let whiteSpace = (/\s/.test(link))
    let validProtocol = /^https?:\/\//i.test(link)
    
    return !isEmpty && !strTooSmall && !strTooLarge && !whiteSpace && validProtocol 
}


// Major
export const validateMajor = (major: string) => {
    let isSelectd = (major !== ("Select Major"))
    let validMajor = ucfMajors.includes(major)
    let strTooSmall = major.length <= 0
    let strTooLarge = major.length > 200
    let isSpecialCharacter = /[@#$%^&*_+=\[\]{};'"\\|<>\/?]/.test(major)

    return isSelectd && validMajor && !strTooSmall && !strTooLarge && !isSpecialCharacter
}


// Name 
export const validateName = (name: string) => {
    let isSelected = name.length > 0
    let tooLarge = name.length > 30
    let hasNumber = /\d/.test(name)
    //individual banned characters, can be changed later on
    let isSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(name)

    return isSelected && !tooLarge  && !hasNumber && !isSpecialCharacter
}


// Picture


// Projects


// Resume


// School Year
const schoolYearOptions = [
    "Freshman",
    "Sophomore",
    "Junior",
    "Senior",
    "Graduate"
];

export const validateSchoolYear = (schoolYear: string) => {
    let isSelected = schoolYear.length > 0
    let validSchoolYear = schoolYearOptions.includes(schoolYear)
    let strTooLarge = schoolYear.length > 9
    let isSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(schoolYear)
    let hasNumber = /\d/.test(schoolYear)

    return isSelected && validSchoolYear && !strTooLarge && !isSpecialCharacter && !hasNumber
}


// Skills


// Work experience

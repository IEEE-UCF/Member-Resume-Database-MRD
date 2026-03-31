import { Dispatch, SetStateAction } from "react";

import { Form } from "../interfaces";

import { ucfMajors } from "../data/majors";

// Bio
export const validateBio = (bio: string): string[] => {
    const errors: string[] = []

    let strTooSmall = bio.length <= 0
    let strTooLarge = bio.length > 8

    if(strTooSmall) {
        errors.push("Bio input is too small.")
    }

    if(strTooLarge) {
        errors.push("Bio input is too large.")
    }

    return errors
}

// Clubs
export const validateClubName = (name: string) => {
    const trimmed = name.trim();
    if (trimmed.length === 0) return true;
    return trimmed.length > 0 && trimmed.length <= 50; // This length can be adjusted to meet the requirements
};

export const validateClubDescription = (description: string) => {
    const trimmed = description.trim();
    if (trimmed.length === 0) return true;
    return trimmed.length > 0 && trimmed.length <= 200; // This length can be adjusted to meet the requirements
};

export const validateClubTitle = (title: string) => {
    const trimmed = title.trim();
    if (trimmed.length === 0) return true;
    return trimmed.length > 0 && trimmed.length <= 50; // This length can be adjusted to meet the requirements
};  

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
export const validateMajor = (major: string): string[] => {
    const errors: string[] = []

    let isSelectd = (major !== ("Select Major"))
    let validMajor = ucfMajors.includes(major)
    let strTooSmall = major.length <= 0
    let strTooLarge = major.length > 200
    let isSpecialCharacter = /[@#$%^&*_+=\[\]{};'"\\|<>\/?]/.test(major)
    
    if(!isSelectd){
        errors.push("Major was not selected")
    }
    if(!validMajor){
        errors.push("Valid major from list was not input")
    }
    if(strTooSmall){
        errors.push("Selected Major length too small")
    }
    if(strTooLarge){
        errors.push("Selected Major length too large")
    }
    if(isSpecialCharacter){
        errors.push("Selected Major contains an invalid special character")
    }
   
    return errors
}   


// Name 
export const validateName = (name: string): string[] => {
    const errors: string[] = []
    
    let isSelected = name.length > 0
    let tooLarge = name.length > 30
    let hasNumber = /\d/.test(name)
    //individual banned characters, can be changed later on
    let isSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(name)

    if(!isSelected){
        errors.push("Name was not input")
    }
    if(tooLarge){
        errors.push("Name input too long")
    }
    if(hasNumber){
        errors.push("Name input contains a number")
    }
    if(isSpecialCharacter){
        errors.push("Name contains invalid special character")
    }

    return errors
}


// Picture


// Projects
export const validateProjectName = (name: string) => {
    const trimmed = name.trim();
    if (trimmed.length === 0) return true;
    return trimmed.length > 0 && trimmed.length <= 100; // This length can be adjusted to meet the requirements
};

export const validateProjectDescription = (description: string) => {
    const trimmed = description.trim();
    if (trimmed.length === 0) return true;
    return trimmed.length > 0 && trimmed.length <= 500; // This length can be adjusted to meet the requirements
};

export const validateProjectLink = (link: string) => {
    const trimmed = link.trim();
    if (trimmed.length === 0) return true;
    try {
        const url = new URL(trimmed);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
};

// Resume
export const validateResume = (resume: string): string[] => {
    const errors: string[] = []
    
    // basic url check
    try{
        const trimmed = resume.trim();
        console.log("Trimmed input:", trimmed);
        const url = new URL(trimmed);
        console.log("Protocol:", url.protocol);
        if(url.protocol !== "http:" && url.protocol !== "https:"){
            errors.push("Resume input contained invalid addressing protocol")
        }
    } 
    catch(e){
        errors.push("Resume input is not a valid URL")
    }

    return errors
};

// School Year
const schoolYearOptions = [
    "Freshman",
    "Sophomore",
    "Junior",
    "Senior",
    "Graduate"
];

export const validateSchoolYear = (schoolYear: string): string[] => {
    const errors: string[] = []

    let isSelected = schoolYear.length > 0
    let validSchoolYear = schoolYearOptions.includes(schoolYear)
    let strTooLarge = schoolYear.length > 9
    let isSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(schoolYear)
    let hasNumber = /\d/.test(schoolYear)

    if(!isSelected){
        errors.push("School Year input was not selected.")
    }
    if(!validSchoolYear){
        errors.push("Valid school year was not selected")
    }
    if(strTooLarge){
        errors.push("School year input was too large")
    }
    if(isSpecialCharacter){
        errors.push("School year included a special character")
    }
    if(hasNumber){
        errors.push("School year included a number input")
    }

    return errors
}


// Skills


// Work experience

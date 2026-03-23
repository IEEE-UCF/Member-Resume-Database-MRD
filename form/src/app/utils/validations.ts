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
export const validateResume = (resume: string) => {
  const trimmed = resume.trim();

  // allow clearing the field
  if (trimmed.length === 0) return true;

  // basic url check
  try {
    const url = new URL(trimmed);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

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
export const validateSkill = (skill: string) => {
    const trimmed = skill.trim();

    if (trimmed.length === 0) return true;

    return trimmed.length <= 50;
};

// Work experience

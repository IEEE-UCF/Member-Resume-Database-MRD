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
export const getClubErrors = (
  name: string,
  description: string,
  title: string
): { name: string; description: string; title: string } => {
  return {
    name: validateClubName(name) ? "" : "Club name is invalid.",
    description: validateClubDescription(description)
      ? ""
      : "Club description is invalid.",
    title: validateClubTitle(title) ? "" : "Club title is invalid.",
  };
};  

// Education
    //School Name
export const validateEducationName = (educationName: string) =>{
    let tooSmall = educationName.length <=0
    let tooLarge = educationName.length > 40

    return !tooSmall && !tooLarge
}

    //Degree 
export const validateEducationDegree = (educationDegree: string) =>{
    let tooSmall = educationDegree.length <= 0 
    let tooLarge = educationDegree.length > 30

    return !tooSmall && !tooLarge

}

    //GPA 

export const validateEducationGPA = (educationGPA: string) => {
    const trimmed = educationGPA.trim();
    if (trimmed.length === 0) return false;
    if (trimmed.length > 5) return false;

    const value = Number(trimmed);
    if (Number.isNaN(value)) return false;

    return value >= 0 && value <= 10;

}

    //GPA Scale

export const validateEducationScale = (educationScale: string) => {
    const trimmed = educationScale.trim();
    if (trimmed.length === 0) return false;
    if (trimmed.length > 5) return false;

    const value = Number(trimmed);
    if (Number.isNaN(value)) return false;

    return value >= 0 && value <= 10;

}



const isValidISODate = (value: string) => {
    const trimmed = value.trim();
  
    if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return false;
  
    const d = new Date(trimmed);
    return !Number.isNaN(d.getTime());
  };

  // Start Date
export const validateEducationStartDate = (
    educationStartDate: string,
    educationEndDate?: string
  ) => {
    const start = educationStartDate.trim();
    const end = (educationEndDate ?? "").trim();
  
    if (start.length === 0) return true;

    if (start.length > 10) return false;

    if (!isValidISODate(start)) return false;
  
    if (end.length > 0 && isValidISODate(end)) {
      return new Date(start).getTime() <= new Date(end).getTime();
    }
  
    return true;
  };
  
  // End Date
  export const validateEducationEndDate = (
    educationEndDate: string,
    educationStartDate?: string
  ) => {
    const end = educationEndDate.trim();
    const start = (educationStartDate ?? "").trim();
  
    if (end.length === 0) return true;
    if (end.length > 10) return false;
  
    if (!isValidISODate(end)) return false;
  
    if (start.length > 0 && isValidISODate(start)) {
      return new Date(start).getTime() <= new Date(end).getTime();
    }
  
    return true;
  };

    //Description

export const validateEducationDescription = (educationDescription: string) => {
    let tooSmall = educationDescription.length <= 0 
    let tooLarge = educationDescription.length > 150
    
    return !tooSmall && !tooLarge
    }    

// Graduation 
export const validateGraduationYear = (graduationYear: string): string[] => {
    const errors: string[] = []
    
    let isSelected = graduationYear.length > 0
    let tooSmall = Number(graduationYear) <= 1900
    let tooLarge = Number(graduationYear) >= 2200
    let strTooLarge = graduationYear.length > 4
    let isSpecialCharacter = /[@#$%^&*_+=\[\]{};'"\\|<>\/?]/.test(graduationYear)
    let hasLetter = /\D/.test(graduationYear)
    
    if(!isSelected){
        errors.push("Graduation Year was not input")
    }
     if(tooSmall){
        errors.push("Graduation Year too old")
    }
     if(tooLarge){
        errors.push("Graduation year is too far in the future")
    }
     if(strTooLarge){
        errors.push("Graduation input too large")
    }
     if(isSpecialCharacter){
        errors.push("Graduation input contains a special character")
    }
     if(hasLetter){
        errors.push("Graduation input contains a letter")
    }

    return errors
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

export const getLinkError = (link: string): string => {
  return validateLinks(link) ? "" : "Link is invalid.";
};


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

export const validatePicture = (picture: File) => {
    let tooLarge = picture.size > 5 * 1024 * 1024; // 5MB
    return !tooLarge;
}


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

export const getProjectErrors = (
  name: string,
  description: string,
  link: string
): { name: string; description: string; link: string } => {
  return {
    name: validateProjectName(name) ? "" : "Project name is invalid.",
    description: validateProjectDescription(description)
      ? ""
      : "Project description is invalid.",
    link: validateProjectLink(link) ? "" : "Project link is invalid.",
  };
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
export const validateSkill = (skill: string) => {
    const trimmed = skill.trim();

    if (trimmed.length === 0) return true;

    return trimmed.length <= 50;
};

// Work experience
export const validateWorkExperienceName = (name: string): boolean => {
  const trimmed = name.trim();
  if (trimmed.length === 0) return true;
  return trimmed.length <= 100;
};

export const validateWorkExperienceTitle = (title: string): boolean => {
  const trimmed = title.trim();
  if (trimmed.length === 0) return true;
  return trimmed.length <= 100;
};

export const validateWorkExperienceDescription = (
  description: string
): boolean => {
  const trimmed = description.trim();
  if (trimmed.length === 0) return true;
  return trimmed.length <= 500;
};

export const getWorkExperienceErrors = (
  name: string,
  title: string,
  description: string
): { name: string; title: string; description: string } => {
  return {
    name: validateWorkExperienceName(name) ? "" : "Company name is invalid.",
    title: validateWorkExperienceTitle(title) ? "" : "Job title is invalid.",
    description: validateWorkExperienceDescription(description)
      ? ""
      : "Work description is invalid.",
  };
};
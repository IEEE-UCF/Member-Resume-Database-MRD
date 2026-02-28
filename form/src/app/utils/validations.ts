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


// Links


// Major


// Name


// Picture

export const validatePicture = (picture: File) => {
    let tooLarge = picture.size > 5 * 1024 * 1024; // 5MB
    return !tooLarge;
}


// Projects


// Resume


// School Year


// Skills


// Work experience
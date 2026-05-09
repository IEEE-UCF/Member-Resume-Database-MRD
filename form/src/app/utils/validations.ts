import { Dispatch, SetStateAction } from "react";

import { Form } from "../interfaces";

import { ucfMajors } from "../data/majors";

// Bio
export const validateBio = (bio: string): { itemErrors: string[] } => {
    const itemErrors: string[] = []
    const trimmed = bio.trim();

    if (trimmed.length === 0) {
        return { itemErrors };
    }

    if (trimmed.length > 8) {
        itemErrors.push("Bio input is too large.");
    }

    return { itemErrors }
}

// Clubs
export const validateClubs = (clubs: any[]): { sectionErrors: string[], itemErrors: string[][] } => {
    const sectionErrors: string[] = [];
    if (clubs.length > 5) {
        sectionErrors.push("You cannot have more than 5 club entries.");
    }

    const itemErrors = clubs.map(club => validateClub(club));
    
    return { sectionErrors, itemErrors };
};

export const validateClub = (club: any): string[] => {
    const itemErrors: string[] = [];
    
    if (club.name.trim() === "") {
        itemErrors.push("Club Name cannot be empty");
    } else if (!validateClubName(club.name)) {
        itemErrors.push("Club Name is too long (max 50 chars)");
    }

    if (club.title.trim() === "") {
        itemErrors.push("Club Title cannot be empty");
    } else if (!validateClubTitle(club.title)) {
        itemErrors.push("Club Title is too long (max 50 chars)");
    }

    if (club.dates.start.trim() === "") {
        itemErrors.push("Start Date is required");
    } else if (!validateEducationStartDate(club.dates.start, club.dates.end)) {
        itemErrors.push("Start Date must be before End Date and valid format");
    }

    if (club.dates.end.trim() === "") {
        itemErrors.push("End Date is required");
    } else if (!validateEducationEndDate(club.dates.end, club.dates.start)) {
        itemErrors.push("End Date is invalid format");
    }

    if (club.description.trim().length > 200) {
        itemErrors.push("Description is too long (max 200 chars)");
    }

    return itemErrors;
};

// Projects
export const validateProjects = (projects: any[]): { sectionErrors: string[], itemErrors: string[][] } => {
    const sectionErrors: string[] = [];
    if (projects.length > 5) {
        sectionErrors.push("You cannot have more than 5 project entries.");
    }

    const itemErrors = projects.map(project => validateProject(project));
    
    return { sectionErrors, itemErrors };
};

export const validateProject = (project: any): string[] => {
    const itemErrors: string[] = [];
    
    if (project.name.trim() === "") {
        itemErrors.push("Project Name cannot be empty");
    } else if (!validateProjectName(project.name)) {
        itemErrors.push("Project Name is too long (max 100 chars)");
    }

    const projectLinkErrors = validateProjectLink(project.link);
    projectLinkErrors.forEach(err => itemErrors.push(`Link: ${err}`));

    if (project.dates.start.trim() === "") {
        itemErrors.push("Start Date is required");
    } else if (!validateEducationStartDate(project.dates.start, project.dates.end)) {
        itemErrors.push("Start Date must be before End Date and valid format");
    }

    if (project.dates.end.trim() === "") {
        itemErrors.push("End Date is required");
    } else if (!validateEducationEndDate(project.dates.end, project.dates.start)) {
        itemErrors.push("End Date is invalid format");
    }

    if (project.description.trim().length > 500) {
        itemErrors.push("Description is too long (max 500 chars)");
    }

    return itemErrors;
};

// Work Experience
export const validateWorkExperiences = (experiences: any[]): { sectionErrors: string[], itemErrors: string[][] } => {
    const sectionErrors: string[] = [];
    if (experiences.length > 5) {
        sectionErrors.push("You cannot have more than 5 work experience entries.");
    }

    const itemErrors = experiences.map(exp => validateWorkExperience(exp));
    
    return { sectionErrors, itemErrors };
};

export const validateWorkExperience = (exp: any): string[] => {
    const itemErrors: string[] = [];
    
    if (exp.name.trim() === "") {
        itemErrors.push("Company Name cannot be empty");
    } else if (!validateWorkExperienceName(exp.name)) {
        itemErrors.push("Company Name is too long (max 100 chars)");
    }

    if (exp.title.trim() === "") {
        itemErrors.push("Job Title cannot be empty");
    } else if (!validateWorkExperienceTitle(exp.title)) {
        itemErrors.push("Job Title is too long (max 100 chars)");
    }

    if (exp.dates.start.trim() === "") {
        itemErrors.push("Start Date is required");
    } else if (!validateEducationStartDate(exp.dates.start, exp.dates.end)) {
        itemErrors.push("Start Date must be before End Date and valid format");
    }

    if (exp.dates.end.trim() === "") {
        itemErrors.push("End Date is required");
    } else if (!validateEducationEndDate(exp.dates.end, exp.dates.start)) {
        itemErrors.push("End Date is invalid format");
    }

    if (exp.description.trim().length > 500) {
        itemErrors.push("Description is too long (max 500 chars)");
    }

    return itemErrors;
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

export const validateEducations = (educations: any[]): { sectionErrors: string[], itemErrors: string[][] } => {
    const sectionErrors: string[] = [];
    if (educations.length > 5) {
        sectionErrors.push("You cannot have more than 5 education entries.");
    }

    const itemErrors = educations.map(edu => validateEducation(edu));
    
    return { sectionErrors, itemErrors };
};

export const validateEducation = (edu: any): string[] => {
    const itemErrors: string[] = [];
    
    const nameTrimmed = edu.name.trim();
    if (nameTrimmed === "") {
        itemErrors.push("School Name cannot be empty");
    } else if (!validateEducationName(edu.name)) {
        itemErrors.push("School Name is invalid (max 40 chars)");
    }
    
    const { itemErrors: majorErrors } = validateMajor(edu.major);
    majorErrors.forEach(err => itemErrors.push(`Major: ${err}`));

    const gpa = Number(edu.gpa.gpa);
    const scale = Number(edu.gpa.scale);

    if (isNaN(gpa) || gpa < 0 || gpa > 10) {
        itemErrors.push("GPA must be a valid number between 0 and 10");
    }

    if (![4, 5, 6].includes(scale)) {
        itemErrors.push("GPA Scale must be 4, 5, or 6");
    }

    if (!isNaN(gpa) && !isNaN(scale) && gpa > scale) {
        itemErrors.push(`GPA (${gpa}) cannot be greater than the selected Scale (${scale})`);
    }
    
    // Date validation with "Required" checks
    if (edu.dates.start.trim() === "") {
        itemErrors.push("Start Date is required");
    } else if (!validateEducationStartDate(edu.dates.start, edu.dates.end)) {
        itemErrors.push("Start Date must be before End Date and valid format");
    }

    if (edu.dates.end.trim() === "") {
        itemErrors.push("End Date is required");
    } else if (!validateEducationEndDate(edu.dates.end, edu.dates.start)) {
        itemErrors.push("End Date is invalid format");
    }

    if (edu.description.trim().length > 150) {
        itemErrors.push("Description is too long (max 150 chars)");
    }

    return itemErrors;
};

// Graduation 
export const validateGraduationYear = (graduationYear: string): { itemErrors: string[] } => {
    const itemErrors: string[] = []
    
    if (!graduationYear || graduationYear.trim() === "") {
        itemErrors.push("Graduation Date was not selected");
        return { itemErrors };
    }

    const parts = graduationYear.trim().split(/\s+/);
    let month = "";
    let yearStr = "";

    if (parts.length === 2) {
        [month, yearStr] = parts;
    } else if (parts.length === 1) {
        if (/^\d+$/.test(parts[0])) {
            yearStr = parts[0];
        } else {
            month = parts[0];
        }
    }

    const year = Number(yearStr);
    const currentYear = new Date().getFullYear();

    if (!month || !yearStr) {
        itemErrors.push("Both month and year must be selected");
    }

    if (yearStr && !isNaN(year)) {
        if (year < currentYear) {
            itemErrors.push(`Graduation year cannot be earlier than the current year (${currentYear})`);
        } else if (year > 2200) {
            itemErrors.push("Graduation year is too far in the future");
        }
    }

    return { itemErrors }
}

// Links
export const validateLinks = (links: string[]): { sectionErrors: string[], itemErrors: string[][] } => {
    const sectionErrors: string[] = [];
    if (links.length > 5) {
        sectionErrors.push("You cannot have more than 5 links.");
    }

    const itemErrors = links.map(link => validateLink(link));
    
    return { sectionErrors, itemErrors };
};

export const validateLink = (link: string): string[] => {
    const errors: string[] = [];
    const trimmed = link.trim();

    if (trimmed.length === 0) {
        errors.push("Link cannot be empty");
        return errors;
    }

    if (trimmed.length > 200) {
        errors.push("Link is too long (max 200 characters)");
    }

    if (/\s/.test(trimmed)) {
        errors.push("Link cannot contain spaces");
    }

    // Forgiving Protocol Implementation
    let urlToTest = trimmed;
    if (!urlToTest.startsWith("http://") && !urlToTest.startsWith("https://")) {
        urlToTest = "https://" + urlToTest;
    }

    try {
        const url = new URL(urlToTest);
        
        if (!url.hostname || !url.hostname.includes(".")) {
            errors.push("Link must contain a valid domain (e.g., .com)");
        }
    } catch {
        errors.push("Link format is invalid");
    }

    return errors;
};


// Major
export const validateMajor = (major: string): { itemErrors: string[] } => {
    const itemErrors: string[] = []

    let isSelectd = (major !== ("Select Major"))
    let validMajor = ucfMajors.includes(major)
    let strTooSmall = major.length <= 0
    let strTooLarge = major.length > 200
    let isSpecialCharacter = /[@#$%^&*_+=\[\]{};'"\\|<>\/?]/.test(major)
    
    if(!isSelectd){
        itemErrors.push("Major was not selected")
    }
    if(!validMajor){
        itemErrors.push("Valid major from list was not input")
    }
    if(strTooLarge){
        itemErrors.push("Selected Major length too large")
    }
    if(isSpecialCharacter){
        itemErrors.push("Selected Major contains an invalid special character")
    }
   
    return { itemErrors }
}   


// Name 
export const validateName = (name: string): { itemErrors: string[] } => {
    const itemErrors: string[] = []
    
    let isSelected = name.length > 0
    let tooLarge = name.length > 30
    let hasNumber = /\d/.test(name)
    //individual banned characters, can be changed later on
    let isSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(name)

    if(!isSelected){
        itemErrors.push("Name was not input")
    }
    if(tooLarge){
        itemErrors.push("Name input too long")
    }
    if(hasNumber){
        itemErrors.push("Name input contains a number")
    }
    if(isSpecialCharacter){
        itemErrors.push("Name contains invalid special character")
    }

    return { itemErrors }
}


// Picture

export const validatePicture = (picture: File): { itemErrors: string[] } => {
    const itemErrors: string[] = []
    let tooLarge = picture.size > 5 * 1024 * 1024; // 5MB
    let isNotImage = !picture.type.startsWith("image/");

    if(tooLarge){
        itemErrors.push ("Picture too large")
    }

    if(isNotImage){
        itemErrors.push ("File is not a valid image")
    }

    return { itemErrors }
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

export const validateProjectLink = (link: string): string[] => {
    const errors: string[] = [];
    const trimmed = link.trim();

    if (trimmed.length === 0) {
        return errors; // Optional for projects? Let's assume it is.
    }

    // Forgiving Protocol Implementation
    let urlToTest = trimmed;
    if (!urlToTest.startsWith("http://") && !urlToTest.startsWith("https://")) {
        urlToTest = "https://" + urlToTest;
    }

    try {
        const url = new URL(urlToTest);
        if (!url.hostname || !url.hostname.includes(".")) {
            errors.push("Project link must contain a valid domain");
        }
    } catch {
        errors.push("Project link format is invalid");
    }

    return errors;
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
    link: validateProjectLink(link).join(", "),
  };
};

// Resume
export const validateResume = (resume: string): { itemErrors: string[] } => {
    const itemErrors: string[] = []
    const trimmed = resume.trim();

    if (trimmed.length === 0) {
        return { itemErrors };
    }

    // Forgiving Protocol Implementation
    let urlToTest = trimmed;
    if (!urlToTest.startsWith("http://") && !urlToTest.startsWith("https://")) {
        urlToTest = "https://" + urlToTest;
    }

    try {
        const url = new URL(urlToTest);
        if (!url.hostname || !url.hostname.includes(".")) {
            itemErrors.push("Resume link must contain a valid domain");
        }
    } catch (e) {
        itemErrors.push("Resume input is not a valid URL")
    }

    return { itemErrors }
};

// School Year
const schoolYearOptions = [
    "Freshman",
    "Sophomore",
    "Junior",
    "Senior",
    "Graduate"
];

export const validateSchoolYear = (schoolYear: string): { itemErrors: string[] } => {
    const itemErrors: string[] = []

    let validSchoolYear = schoolYearOptions.includes(schoolYear)
    let strTooLarge = schoolYear.length > 9
    let isSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(schoolYear)
    let hasNumber = /\d/.test(schoolYear)

    if(!validSchoolYear){
        itemErrors.push("Valid school year was not selected")
    }
    if(strTooLarge){
        itemErrors.push("School year input was too large")
    }
    if(isSpecialCharacter){
        itemErrors.push("School year included a special character")
    }
    if(hasNumber){
        itemErrors.push("School year included a number input")
    }

    return { itemErrors }
}


// Skills
export const validateSkills = (skills: string[]): { sectionErrors: string[], itemErrors: string[][] } => {
    const sectionErrors: string[] = [];
    if (skills.length > 10) {
        sectionErrors.push("You cannot have more than 10 skills.");
    }

    const itemErrors = skills.map(skill => validateSkill(skill));
    
    return { sectionErrors, itemErrors };
};

export const validateSkill = (skill: string): string[] => {
    const errors: string[] = [];
    const trimmed = skill.trim();
    if (trimmed.length >= 25) errors.push("Skill is too long");
    if (trimmed.length === 0) errors.push("Skill cannot be empty");
    return errors;
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
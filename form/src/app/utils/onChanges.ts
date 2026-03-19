import { Dispatch, SetStateAction } from "react";

import * as validations from "./validations"

import { Form } from "../interfaces";

// Bio          
export const setBio = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData(
        (prev) => ({ ...prev, bio: newValue })
    )
}

// Clubs
export const setClubDetails = (
    index: number,
    field: "name" | "description" | "title",
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    if (field === "name" && validations.validateClubName(newValue)) {
        setFormData((prev) => {
            const updated = [...prev.clubs];
            updated[index].name = newValue;
            return { ...prev, clubs: updated };
        });
    } else if (field === "description" && validations.validateClubDescription(newValue)) {
        setFormData((prev) => {
            const updated = [...prev.clubs];
            updated[index].description = newValue;
            return { ...prev, clubs: updated };
        });
    } else if (field === "title" && validations.validateClubTitle(newValue)) {
        setFormData((prev) => {
            const updated = [...prev.clubs];
            updated[index].title = newValue;
            return { ...prev, clubs: updated };
        });
    }
};

// Education
export const setEducationDegree = (
    newValue: string,
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => {
        const updated = [...prev.educations];
        updated[index].degree = newValue;
        return { ...prev, educations: updated };
    })     
}

// Graduation 
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


// Links


// Major
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


// Name
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


// Picture


// Projects
export const setProjectDetails = (
    index: number,
    field: "name" | "description" | "link",
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    // Validates the input before updating the form data
    if (field === "name" && validations.validateProjectName(newValue)) {
        setFormData((prev) => {
            const updatedProjects = [...prev.projects];
            updatedProjects[index].name = newValue;
            return { ...prev, projects: updatedProjects };
        });
    } else if (field === "description" && validations.validateProjectDescription(newValue)) {
        setFormData((prev) => {
            const updatedProjects = [...prev.projects];
            updatedProjects[index].description = newValue;
            return { ...prev, projects: updatedProjects };
        });
    } else if (field === "link" && validations.validateProjectLink(newValue)) {
        setFormData((prev) => {
            const updatedProjects = [...prev.projects];
            updatedProjects[index].link = newValue;
            return { ...prev, projects: updatedProjects };
        });
    }
};

// Resume
export const setResume = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    const trimmed = newValue.trim();
    if (trimmed.length === 0) return true;
    try {
        const url = new URL(trimmed);
        if (url.protocol === "http:" || url.protocol === "https:") {
            setFormData((prev) => ({ ...prev, resume: newValue }));
        } else {
            return false;
        }
    } catch {
        return false;
    }
};

// School Year
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


// Skills


// Work experience

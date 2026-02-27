import { Dispatch, SetStateAction } from "react";

import { Form } from "../interfaces";

// Bio
export const validateBio = (bio: string) => {
    let tooSmall = bio.length <= 0
    let tooLarge = bio.length > 8

    return !tooSmall && !tooLarge
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


// Links


// Major


// Name


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


// Skills


// Work experience
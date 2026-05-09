import { Dispatch, SetStateAction } from "react";

import * as validations from "./validations"

import { Form, createEmptyExperience, createEmptyEducation, createEmptyProject } from "../interfaces";

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
    field: "name" | "description" | "title" | "startDate" | "endDate",
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => {
        const updated = [...prev.clubs];
        if (field === "startDate") updated[index].dates.start = newValue;
        else if (field === "endDate") updated[index].dates.end = newValue;
        else updated[index][field] = newValue;
        
        return { ...prev, clubs: updated };
    });
};

export const addClub = (
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => ({
        ...prev,
        clubs: [...prev.clubs, createEmptyExperience()]
    }));
};

export const removeClub = (
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => ({
        ...prev,
        clubs: prev.clubs.filter((_, i) => i !== index)
    }));
};

// Education

        //School Name
export const setEducationName = (
    newValue: string,
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) =>{
    setFormData(
        (prev) => {
        const updated = [...prev.educations];
        updated[index].name = newValue;
        return { ...prev, educations: updated };
    }) 
}

        //Major
export const setEducationMajor = (
    newValue: string,
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => {
        const updated = [...prev.educations];
        updated[index].major = newValue;
        return { ...prev, educations: updated };
    })
}

        //GPA
export const setEducationGPA = (
    newValue: string,
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    const gpaNum = Number(newValue);
    setFormData((prev) => {
        const updated = [...prev.educations];
        updated[index].gpa.gpa = gpaNum;
        return { ...prev, educations: updated };
    })
}

        //GPA Scale
export const setEducationScale = (
    newValue: string,
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    const scaleNum = Number(newValue);
    setFormData((prev) => {
        const updated = [...prev.educations];
        updated[index].gpa.scale = scaleNum;
        return { ...prev, educations: updated };
    })  
}

    //Start Date 
    export const setEducationStartDate = (
        newValue: string,
        index: number,
        setFormData: Dispatch<SetStateAction<Form>>
      ) => {
        setFormData((prev) => {
          const updated = [...prev.educations];
          updated[index].dates.start = newValue;
          return { ...prev, educations: updated };
        });
      };


    //End Date
export const setEducationEndDate = (
  newValue: string,
  index: number,
  setFormData: Dispatch<SetStateAction<Form>>
) => {
  setFormData((prev) => {
    const updated = [...prev.educations];
    updated[index].dates.end = newValue;
    return { ...prev, educations: updated };
  });
};

    //Description
export const setEducationDescription = (
    newValue: string, 
    index: number,
    setFormData: Dispatch <SetStateAction<Form>>
) => {
    setFormData((prev) => {
        const updated = [...prev.educations];
        updated[index].description = newValue;
        return { ...prev, educations: updated };
    })
}

export const addEducation = (
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => ({
        ...prev,
        educations: [...prev.educations, createEmptyEducation()]
    }));
};

export const removeEducation = (
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => ({
        ...prev,
        educations: prev.educations.filter((_, i) => i !== index)
    }));
};

// Graduation 
export const setGraduationYear = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData(
        (prev) => ({...prev, graduationYear: newValue})
    )
}


// Links
export const setLink = (
    index: number,
    value: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => {
        const result = [...prev.links];
        result[index] = value;

        return {
            ...prev,
            links: result
        };
    });
};

export const addLink = (
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => ({
        ...prev,
        links: [...prev.links, ""]
    }));
};

export const removeLink = (
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => ({
        ...prev,
        links: prev.links.filter((_, i) => i !== index)
    }));
};


// Major
export const setMajor = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData(
        (prev) => ({ ...prev, major: newValue })
    )
}


// Name
export const setName = (
    newValue: string, 
    setFormData: Dispatch<SetStateAction<Form>>
) => {
        setFormData(
            (prev) => ({...prev, name: newValue})
        )
}


// Picture

export const setPicture = (
    newValue: File,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
        setFormData(
            (prev) => ({ ...prev, picture: newValue })
        )
}

// Projects
export const setProjectDetails = (
    index: number,
    field: "name" | "description" | "link" | "startDate" | "endDate",
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => {
        const updated = [...prev.projects];
        if (field === "startDate") updated[index].dates.start = newValue;
        else if (field === "endDate") updated[index].dates.end = newValue;
        else updated[index][field] = newValue;
        
        return { ...prev, projects: updated };
    });
};

export const addProject = (
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => ({
        ...prev,
        projects: [...prev.projects, createEmptyProject()]
    }));
};

export const removeProject = (
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => ({
        ...prev,
        projects: prev.projects.filter((_, i) => i !== index)
    }));
};

// Resume
export const setResume = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
        setFormData(
            (prev) => ({ ...prev, resume: newValue })
        )
};

// School Year
export const setSchoolYear = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
        setFormData(
        (prev) => ({...prev, schoolYear: newValue})
    )
}


// Skills
export const setSkills = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    const skillsArray = newValue.split(",").map(s => s.trim());
    setFormData((prev) => ({
        ...prev,
        skills: skillsArray
    }));
};

export const setSkill = (
    index: number,
    value: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => {
        const result = [...prev.skills];
        result[index] = value;

        return {
            ...prev,
            skills: result
        };
    });
};

export const addSkill = (
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, ""]
    }));
};

export const removeSkill = (
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData((prev) => ({
        ...prev,
        skills: prev.skills.filter((_, i) => i !== index)
    }));
};

// Work experience
export const setWorkExperienceDetails = (
  index: number,
  field: "name" | "title" | "description" | "startDate" | "endDate",
  value: string,
  setFormData: Dispatch<SetStateAction<Form>>
) => {
  setFormData((prev) => {
    const updated = [...prev.workExperiences];
    if (field === "startDate") updated[index].dates.start = value;
    else if (field === "endDate") updated[index].dates.end = value;
    else updated[index][field] = value;

    return { ...prev, workExperiences: updated };
  });
};

export const addWorkExperience = (
  setFormData: Dispatch<SetStateAction<Form>>
) => {
  setFormData((prev) => ({
    ...prev,
    workExperiences: [...prev.workExperiences, createEmptyExperience()],
  }));
};

export const removeWorkExperience = (
  index: number,
  setFormData: Dispatch<SetStateAction<Form>>
) => {
  setFormData((prev) => ({
    ...prev,
    workExperiences: prev.workExperiences.filter((_, i) => i !== index),
  }));
};
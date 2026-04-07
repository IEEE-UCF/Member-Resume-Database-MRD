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

        //School Name
export const setEducationName = (
    newValue: string,
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) =>{
    if(validations.validateEducationName(newValue)) {
        setFormData(
            (prev) => {
            const updated = [...prev.educations];
            updated[index].name = newValue;
            return { ...prev, educations: updated };
        }) 
    }
    

}

        //Degree
export const setEducationDegree = (
    newValue: string,
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    if(validations.validateEducationDegree(newValue)) {
    setFormData((prev) => {
        const updated = [...prev.educations];
        updated[index].degree = newValue;
        return { ...prev, educations: updated };
    })
}     
}



        //GPA
export const setEducationGPA = (
    newValue: string,
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) => {

    const gpaNum = Number(newValue);
    if(validations.validateEducationGPA(newValue)){
    setFormData((prev) => {
        const updated = [...prev.educations];
        updated[index].gpa.gpa = gpaNum;
        return { ...prev, educations: updated };
    })
}
}

        //GPA Scale
export const setEducationScale = (
    newValue: string,
    index: number,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    const scaleNum = Number(newValue);
    if(validations.validateEducationScale(newValue)){
    setFormData((prev) => {
        const updated = [...prev.educations];
        updated[index].gpa.scale = scaleNum;
        return { ...prev, educations: updated };
    })  
}
}

    //Start Date 
    export const setEducationStartDate = (
        newValue: string,
        index: number,
        setFormData: Dispatch<SetStateAction<Form>>
      ) => {
        setFormData((prev) => {
          const updated = [...prev.educations];
          const currentEnd = updated[index].dates.end;
      
          
          if (!validations.validateEducationStartDate(newValue, currentEnd)) return prev;
      
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
    const currentStart = updated[index].dates.start;

    if (!validations.validateEducationEndDate(newValue, currentStart)) return prev;

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
    if(validations.validateEducationDescription(newValue)){
    setFormData((prev) => {
        const updated = [...prev.educations];
        updated[index].description = newValue;
        return { ...prev, educations: updated };
    })
}
}

// Graduation 
export const setGraduationYear = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    setFormData(
        (prev) => ({...prev, graduationYear: Number(newValue)})
    )
}


// Links


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

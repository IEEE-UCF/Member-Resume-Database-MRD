import { Dispatch, SetStateAction } from "react";

import * as validations from "./validations"

import { Form } from "../interfaces";

// Bio          
export const setBio = (
    newValue: string,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    if(validations.validateBio(newValue)) {
        setFormData(
            (prev) => ({ ...prev, bio: newValue })
        )
    }
}

// Clubs
                    

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


// Links


// Major


// Name


// Picture

export const setPicture = (
    newValue: File,
    setFormData: Dispatch<SetStateAction<Form>>
) => {
    if(validations.validatePicture(newValue)) {
        setFormData(
            (prev) => ({ ...prev, picture: newValue })
        )
    }
}

// Projects


// Resume


// School Year


// Skills


// Work experience
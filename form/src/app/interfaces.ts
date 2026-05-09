export interface Experience {
    name: string;
    description: string;
    title: string;
}
export const createEmptyExperience = () => {
    return {
        name: "",
        description: "",
        title: ""
    };
};

export interface Education {
    name: string;
    dates: {
        start: string;
        end: string;
    };
    degree: string;
    gpa: {
        scale: number;
        gpa: number;
    };
    description: string;
}
export const createEmptyEducation = (): Education => {
    return {
        name: "",
        dates: {
            start: "",
            end: "",
        },
        degree: "",
        gpa: {
            scale: 0,
            gpa: 0,
        },
        description: ""
    };
};

export interface Project {
    name: string;
    description: string;
    link: string;
}
export const createEmptyProject = (): Project => {
    return {
        name: "",
        description: "",
        link: "",
    };
};

export interface Form {
    name: string;
    bio: string;
    resume: string;
    major: string;
    schoolYear: string;
    graduationYear: number;
    links: string[];
    educations: Education[];
    clubs: Experience[];
    workExperiences: Experience[];
    picture: any;
    projects: Project[];
    skills: string[];
}
export const createEmptyForm = (): Form => {
    return {
        name: "",
        bio: "",
        resume: "",
        major: "",
        schoolYear: "",
        graduationYear: 0,
        links: [""],
        educations: [createEmptyEducation()],
        clubs: [createEmptyExperience()],
        workExperiences: [createEmptyExperience()],
        picture: null,
        projects: [createEmptyProject()],
        skills: [""],
    };
};

export interface FormErrors {
    name: string[];
    bio: string[];
    resume: string[];
    major: string[];
    schoolYear: string[];
    graduationYear: string[];
    links: string[];
    educations: string[];
    clubs: string[];
    workExperiences: string[];
    picture: string[];
    projects: string[];
    skills: string[];
}

export const createEmptyFormErrors = (): FormErrors => {
    return {
        name: [],
        bio: [],
        resume: [],
        major: [],
        schoolYear: [],
        graduationYear: [],
        links: [],
        educations: [],
        clubs: [],
        workExperiences: [],
        picture: [],
        projects: [],
        skills: [],
    };
};
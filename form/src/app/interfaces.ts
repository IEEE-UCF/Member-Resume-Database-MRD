export interface Experience {
    name: string;
    description: string;
    title: string;
    dates: {
        start: string;
        end: string;
    };
}
export const createEmptyExperience = (): Experience => {
    return {
        name: "",
        description: "",
        title: "",
        dates: {
            start: "",
            end: "",
        }
    };
};

export interface Education {
    name: string;
    dates: {
        start: string;
        end: string;
    };
    major: string;
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
        major: "",
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
    dates: {
        start: string;
        end: string;
    };
}
export const createEmptyProject = (): Project => {
    return {
        name: "",
        description: "",
        link: "",
        dates: {
            start: "",
            end: "",
        },
    };
};

export interface Form {
    name: string;
    bio: string;
    resume: string;
    major: string;
    schoolYear: string;
    graduationYear: string;
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
        graduationYear: "",
        links: [],
        educations: [],
        clubs: [],
        workExperiences: [],
        picture: null,
        projects: [],
        skills: [],
    };
};

export interface FormErrors {
    name: { itemErrors: string[] };
    bio: { itemErrors: string[] };
    resume: { itemErrors: string[] };
    major: { itemErrors: string[] };
    schoolYear: { itemErrors: string[] };
    graduationYear: { itemErrors: string[] };
    links: { sectionErrors: string[], itemErrors: string[][] };
    educations: { sectionErrors: string[], itemErrors: string[][] };
    clubs: { sectionErrors: string[], itemErrors: string[][] };
    workExperiences: { sectionErrors: string[], itemErrors: string[][] };
    picture: { itemErrors: string[] };
    projects: { sectionErrors: string[], itemErrors: string[][] };
    skills: { sectionErrors: string[], itemErrors: string[][] };
}

export const createEmptyFormErrors = (): FormErrors => {
    return {
        name: { itemErrors: [] },
        bio: { itemErrors: [] },
        resume: { itemErrors: [] },
        major: { itemErrors: [] },
        schoolYear: { itemErrors: [] },
        graduationYear: { itemErrors: [] },
        links: { sectionErrors: [], itemErrors: [] },
        educations: { sectionErrors: [], itemErrors: [] },
        clubs: { sectionErrors: [], itemErrors: [] },
        workExperiences: { sectionErrors: [], itemErrors: [] },
        picture: { itemErrors: [] },
        projects: { sectionErrors: [], itemErrors: [] },
        skills: { sectionErrors: [], itemErrors: [] },
    };
};
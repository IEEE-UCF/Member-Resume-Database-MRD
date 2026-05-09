import { useState } from "react";
import { ucfMajors } from "../data/majors";

import ProjectsComponent from "./ProjectsComponent"
import LinksComponent from "./LinksComponent"
import SkillsComponent from "./SkillsComponent"
import PictureComponent from "./PictureComponent" 
import ResumeComponent from "./ResumeComponent"
import SchoolYearComponent from "./SchoolYearComponent";
import GraduationYearComponent from "./GraduationYearComponent";
import WorkExperiencesComponent from "./WorkExperiencesComponent";
import NameComponent from "./NameComponent";
import BioComponent from "./BioComponent";
import MajorComponent from "./MajorComponent";
import EducationsComponent from "./EducationsComponent";
import ClubsComponent from "./ClubsComponent"

import { 
    type Form, 
    createEmptyForm, 
    type FormErrors, 
    createEmptyFormErrors 
} from "../interfaces"

import * as validations from "../utils/validations"

import formStyles from "../styles/form.module.css"

const Form = () => {
    const [formData, setFormData] = useState<Form>(createEmptyForm());
    const [formErrors, setFormErrors] = useState<FormErrors>(createEmptyFormErrors());

    const handleConfirmAll = () => {
        const errors: FormErrors = {
            name: validations.validateName(formData.name),
            bio: validations.validateBio(formData.bio),
            resume: validations.validateResume(formData.resume),
            major: validations.validateMajor(formData.major),
            schoolYear: validations.validateSchoolYear(formData.schoolYear),
            graduationYear: validations.validateGraduationYear(formData.graduationYear),
            links: validations.validateLinks(formData.links),
            educations: validations.validateEducations(formData.educations),
            clubs: validations.validateClubs(formData.clubs),
            workExperiences: validations.validateWorkExperiences(formData.workExperiences),
            picture: formData.picture 
                ? validations.validatePicture(formData.picture) 
                : { itemErrors: [] }, // Picture is optional
            projects: validations.validateProjects(formData.projects),
            skills: validations.validateSkills(formData.skills),
        };
        setFormErrors(errors);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        handleConfirmAll();
    };

    const hasErrors = () => {
        return Object.values(formErrors).some(errorGroup => {
            if ("sectionErrors" in errorGroup) {
                return errorGroup.sectionErrors.length > 0 || errorGroup.itemErrors.some(item => item.length > 0);
            }
            return errorGroup.itemErrors.length > 0;
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={`${formStyles.form}`}>
                
                <div className={`${formStyles.child} ${formStyles.name}`}>
                    <NameComponent 
                        name={formData.name} 
                        setFormData={setFormData} 
                        itemErrors={formErrors.name.itemErrors}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.bio}`}>
                    <BioComponent 
                        bio={formData.bio} 
                        setFormData={setFormData} 
                        itemErrors={formErrors.bio.itemErrors}
                    />
                </div>


                <div className={`${formStyles.child} ${formStyles.resume}`}>
                    <ResumeComponent
                        resume={formData.resume}
                        setFormData={setFormData}
                        itemErrors={formErrors.resume.itemErrors}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.major}`}>
                    <MajorComponent 
                        major={formData.major} 
                        setFormData={setFormData} 
                        itemErrors={formErrors.major.itemErrors}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.links}`}>
                    <LinksComponent
                        links={formData.links}
                        setFormData={setFormData}
                        sectionErrors={formErrors.links.sectionErrors}
                        itemErrors={formErrors.links.itemErrors}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.graduationYear}`}>
                    <GraduationYearComponent
                        graduationYear={formData.graduationYear}
                        setFormData={setFormData}
                        itemErrors={formErrors.graduationYear.itemErrors}
                    />
                </div>


                <div className={`${formStyles.child} ${formStyles.schoolYear}`}>
                    <SchoolYearComponent
                        schoolYear = { formData.schoolYear }
                        setFormData = { setFormData }
                        itemErrors={formErrors.schoolYear.itemErrors}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.educations}`}>
                    <EducationsComponent 
                        educations={formData.educations} 
                        setFormData={setFormData} 
                        sectionErrors={formErrors.educations.sectionErrors}
                        itemErrors={formErrors.educations.itemErrors}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.clubs}`}>
                    <ClubsComponent
                        clubs = {formData.clubs}
                        setFormData = {setFormData}
                        sectionErrors={formErrors.clubs.sectionErrors}
                        itemErrors={formErrors.clubs.itemErrors}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.workExperiences}`}>
                    <WorkExperiencesComponent
                        workExperiences = {formData.workExperiences}
                        setFormData = {setFormData}
                        sectionErrors={formErrors.workExperiences.sectionErrors}
                        itemErrors={formErrors.workExperiences.itemErrors}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.picture}`}>
                    <PictureComponent 
                        setFormData={setFormData} 
                        itemErrors={formErrors.picture.itemErrors}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.project}`}>
                    <ProjectsComponent
                        projects={formData.projects}
                        setFormData={setFormData}
                        sectionErrors={formErrors.projects.sectionErrors}
                        itemErrors={formErrors.projects.itemErrors}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.skills}`}>
                    <SkillsComponent
                        skills={formData.skills}
                        setFormData={setFormData}
                        sectionErrors={formErrors.skills.sectionErrors}
                        itemErrors={formErrors.skills.itemErrors}
                    />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "2rem" }}>
                    <button type="submit">Confirm All Information</button>
                    {hasErrors() && <span style={{ color: "red", fontWeight: "bold" }}>There are errors in the form</span>}
                </div>
            </form>
        </>
    );
};

export default Form;
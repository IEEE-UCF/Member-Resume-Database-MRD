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

import { type Form, createEmptyForm, createEmptyExperience, createEmptyEducation } from "../interfaces"

import formStyles from "../styles/form.module.css"

const Form = () => {
    const [formData, setFormData] = useState<Form>(createEmptyForm());

    const handleSubmit = async (event: React.FormEvent) => {
        // event.preventDefault();
        // try {
        //     const response = await fetch("http://localhost:3001", {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(formData),
        //     });
        //     const data = await response.json();
        //     console.log(data);
        //     console.log(formData)
        // } catch (error) {
        //     console.error("Error: ", error);
        // }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={`${formStyles.form}`}>
                
                <div className={`${formStyles.child} ${formStyles.name}`}>
                    <NameComponent 
                        name={formData.name} 
                        setFormData={setFormData} 
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.bio}`}>
                    <BioComponent 
                        bio={formData.bio} 
                        setFormData={setFormData} 
                    />
                </div>


                <div className={`${formStyles.child} ${formStyles.resume}`}>
                    <ResumeComponent
                        resume={formData.resume}
                        setFormData={setFormData}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.major}`}>
                    <MajorComponent 
                        major={formData.major} 
                        setFormData={setFormData} 
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.links}`}>
                    <LinksComponent
                        links={formData.links}
                        setFormData={setFormData}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.graduationYear}`}>
                    <GraduationYearComponent
                        graduationYear={formData.graduationYear}
                        setFormData={setFormData}
                    />
                </div>


                <div className={`${formStyles.child} ${formStyles.schoolYear}`}>
                    <SchoolYearComponent
                        schoolYear = { formData.schoolYear }
                        setFormData = { setFormData }
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.educations}`}>
                    <EducationsComponent 
                        educations={formData.educations} 
                        setFormData={setFormData} 
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.clubs}`}>
                    <ClubsComponent
                        clubs = {formData.clubs}
                        setFormData = {setFormData}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.workExperiences}`}>
                    <WorkExperiencesComponent
                        workExperiences = {formData.workExperiences}
                        setFormData = {setFormData}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.picture}`}>
                    <PictureComponent setFormData={setFormData} />
                </div>

                <div className={`${formStyles.child} ${formStyles.project}`}>
                    <ProjectsComponent
                        projects={formData.projects}
                        setFormData={setFormData}
                    />
                </div>

                <div className={`${formStyles.child} ${formStyles.skills}`}>
                    <SkillsComponent
                        skills={formData.skills}
                        setFormData={setFormData}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form;
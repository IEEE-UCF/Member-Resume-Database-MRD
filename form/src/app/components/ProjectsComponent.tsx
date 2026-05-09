import { Dispatch, SetStateAction } from "react";
import { type Form, type Project } from "../interfaces"

import ProjectComponent from "./ProjectComponent";
import { setProjectDetails, addProject, removeProject } from "../utils/onChanges";
import { printArray } from "../utils/printArray";

interface ProjectsComponentProps {
    projects: Project[];
    setFormData: Dispatch<SetStateAction<Form>>;
    sectionErrors: string[];
    itemErrors: string[][];
}

const ProjectsComponent = ({ 
    projects, 
    setFormData,
    sectionErrors,
    itemErrors 
}: ProjectsComponentProps) => {

    return (
        <>
            <h3>Projects</h3>

            {
                sectionErrors.length > 0 && 
                (<>
                    <p>PROJECTS SECTION IS NOT VALID BECAUSE:</p>
                    {printArray(sectionErrors, "Projects")}
                </>)
            }

            {projects.map((project, index) => {
                return (
                    <ProjectComponent
                        key={index}
                        project={project}
                        index={index}
                        errors={itemErrors[index] || []}
                        onUpdateField={(field, val) => setProjectDetails(index, field as any, val, setFormData)}
                        onRemove={() => {
                            removeProject(index, setFormData);
                        }}
                    />
                );
            })}
            
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addProject(setFormData);
                }}
            >
                Add Project
            </button>
        </>
    );
};

export default ProjectsComponent;
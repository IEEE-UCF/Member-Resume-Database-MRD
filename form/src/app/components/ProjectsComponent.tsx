import { Dispatch, SetStateAction, useState } from "react";
import { type Form, type Project } from "../interfaces"

import ProjectComponent from "./ProjectComponent";
import { setProjectDetails, addProject, removeProject } from "../utils/onChanges";
import { validateProjects } from "../utils/validations";
import { printArray } from "../utils/printArray";

interface ProjectsComponentProps {
    projects: Project[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const ProjectsComponent = ({ 
    projects, 
    setFormData 
}: ProjectsComponentProps) => {
    const [sectionErrors, setSectionErrors] = useState<string[]>([])
    const [itemErrors, setItemErrors] = useState<string[][]>(projects.map(() => []))

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
                            setItemErrors(prev => prev.filter((_, i) => i !== index));
                        }}
                    />
                );
            })}
            
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addProject(setFormData);
                    setItemErrors(prev => [...prev, []]);
                }}
            >
                Add Project
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    const { sectionErrors: sErrors, itemErrors: iErrors } = validateProjects(projects);
                    setSectionErrors(sErrors);
                    setItemErrors(iErrors);
                }}
            >
                Confirm All Projects
            </button>
        </>
    );
};

export default ProjectsComponent;
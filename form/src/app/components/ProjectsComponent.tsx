import { Dispatch, SetStateAction, useState } from "react";

import { type Form, type Project, createEmptyProject } from "../interfaces"

import formStyles from "../styles/form.module.css"

import { setProjectDetails } from "../utils/onChanges";
import {
  validateProjectName,
  validateProjectDescription,
  validateProjectLink,
} from "../utils/validations";

interface ProjectsComponentProps {
    projects: Project[]
    setFormData: Dispatch<SetStateAction<Form>>
}

const ProjectsComponent = ({
  projects,
  setFormData,
}: ProjectsComponentProps) => {
  const [projectErrors, setProjectErrors] = useState<
    { name: string; description: string; link: string }[]
  >(
    projects.map(() => ({
      name: "",
      description: "",
      link: "",
    }))
  );

  const validateSingleProject = (index: number) => {
    const project = projects[index];
    const newErrors = [...projectErrors];

    newErrors[index] = {
      name: validateProjectName(project.name)
        ? ""
        : "Project name is invalid.",
      description: validateProjectDescription(project.description)
        ? ""
        : "Project description is invalid.",
      link: validateProjectLink(project.link)
        ? ""
        : "Project link is invalid.",
    };

    setProjectErrors(newErrors);
  };

  return (
    <>
      <h3>Projects</h3>

      {projects.map((project, index) => (
        <div
          key={`projects[${index}]`}
          className={`${formStyles.child} ${formStyles.project}`}
        >
          <h4>Project {index + 1}</h4>

          <input
            type="text"
            name={`projects[${index}].name`}
            placeholder="Project Name"
            value={project.name}
            onChange={(e) =>
              setProjectDetails(index, "name", e.target.value, setFormData)
            }
          />

          <textarea
            name={`projects[${index}].description`}
            placeholder="Project Description"
            value={project.description}
            onChange={(e) =>
              setProjectDetails(
                index,
                "description",
                e.target.value,
                setFormData
              )
            }
            rows={5}
          />

          <input
            type="text"
            placeholder="Project Link"
            value={project.link}
            onChange={(e) =>
              setProjectDetails(index, "link", e.target.value, setFormData)
            }
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              validateSingleProject(index);
            }}
          >
            Validate Project
          </button>

          {projectErrors[index]?.name && <p>{projectErrors[index].name}</p>}
          {projectErrors[index]?.description && (
            <p>{projectErrors[index].description}</p>
          )}
          {projectErrors[index]?.link && <p>{projectErrors[index].link}</p>}

          <button
            onClick={(e) => {
              e.preventDefault();

              setFormData((prev) => ({
                ...prev,
                projects: prev.projects.filter((_, i) => i !== index),
              }));

              setProjectErrors((prev) => prev.filter((_, i) => i !== index));
            }}
          >
            Remove
          </button>
        </div>
      ))}
      
        <input
            type="button"
            value="Add Project"
            onClick={(e) => {
                e.preventDefault()
                setFormData((prev) => ({
                    ...prev,
                    projects: [
                        ...prev.projects,
                        createEmptyProject(),
                    ],
                }))
            }}
        />    
    </>
    )
}

export default ProjectsComponent
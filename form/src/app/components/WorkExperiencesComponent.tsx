import { Dispatch, SetStateAction, useState } from "react";

import { type Form, type Experience, createEmptyExperience } from "../interfaces"

import formStyles from "../styles/form.module.css"

import {
  setWorkExperienceDetails,
  addWorkExperience,
  removeWorkExperience,
} from "../utils/onChanges";

import { getWorkExperienceErrors } from "../utils/validations";

interface WorkExperienceComponentProps {
    workExperiences: Experience[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const WorkExperienceComponent = ({
  workExperiences,
  setFormData,
}: WorkExperienceComponentProps) => {
  const [errors, setErrors] = useState<
    { name: string; title: string; description: string }[]
  >(
    workExperiences.map(() => ({
      name: "",
      title: "",
      description: "",
    }))
  );

  const validateSingleWorkExperience = (index: number) => {
    const experience = workExperiences[index];
    const newErrors = [...errors];

    newErrors[index] = getWorkExperienceErrors(
      experience.name,
      experience.title,
      experience.description
    );

    setErrors(newErrors);
  };

  return (
    <>
      <h3>Work Experience</h3>

      {workExperiences.map((experience, index) => (
        <div
          key={`workExperiences[${index}]`}
          className={`${formStyles.child} ${formStyles.workExperience}`}
        >
          <h4>Experience {index + 1}</h4>

          <input
            type="text"
            name={`workExperiences[${index}].name`}
            placeholder="Company Name"
            value={experience.name}
            onChange={(e) =>
              setWorkExperienceDetails(index, "name", e.target.value, setFormData)
            }
          />

          <input
            type="text"
            name={`workExperiences[${index}].title`}
            placeholder="Job Title"
            value={experience.title}
            onChange={(e) =>
              setWorkExperienceDetails(index, "title", e.target.value, setFormData)
            }
          />

          <textarea
            name={`workExperiences[${index}].description`}
            placeholder="Description"
            value={experience.description}
            onChange={(e) =>
              setWorkExperienceDetails(
                index,
                "description",
                e.target.value,
                setFormData
              )
            }
            rows={3}
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              validateSingleWorkExperience(index);
            }}
          >
            Validate Work Experience
          </button>

          {errors[index]?.name && <p>{errors[index].name}</p>}
          {errors[index]?.title && <p>{errors[index].title}</p>}
          {errors[index]?.description && <p>{errors[index].description}</p>}

          <button
            onClick={(e) => {
              e.preventDefault();
              removeWorkExperience(index, setFormData);
              setErrors((prev) => prev.filter((_, i) => i !== index));
            }}
          >
            Remove Experience
          </button>
        </div>
      ))}
            <input
                type="button"
                value="Add Experience"
                onClick={e =>
                    setFormData(prev => ({
                        ...prev,
                        workExperiences: [...prev.workExperiences, createEmptyExperience()],
                    }))
                }
            />
        </>
    );
};

export default WorkExperienceComponent;


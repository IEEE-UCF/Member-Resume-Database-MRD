import { Dispatch, SetStateAction, useState } from "react";

import formStyles from "../styles/form.module.css"

import { setClubDetails } from "../utils/onChanges";
import {
  validateClubName,
  validateClubDescription,
  validateClubTitle,
} from "../utils/validations";


import {
    type Experience,
    type Form,
    createEmptyExperience,
} from "../interfaces";

interface ClubsComponentProps {
    clubs: Experience[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const ClubsComponent = ({
  clubs,
  setFormData,
}: ClubsComponentProps) => {
  const [clubErrors, setClubErrors] = useState<
    { name: string; description: string; title: string }[]
  >(
    clubs.map(() => ({
      name: "",
      description: "",
      title: "",
    }))
  );

  const validateSingleClub = (index: number) => {
    const club = clubs[index];
    const newErrors = [...clubErrors];

    newErrors[index] = {
      name: validateClubName(club.name) ? "" : "Club name is invalid.",
      description: validateClubDescription(club.description)
        ? ""
        : "Club description is invalid.",
      title: validateClubTitle(club.title) ? "" : "Club title is invalid.",
    };

    setClubErrors(newErrors);
  };

  return (
    <>
      <h3>Clubs</h3>
      {clubs.map((club, index) => (
        <div
          key={`clubs[${index}]`}
          className={`${formStyles.child} ${formStyles.club}`}
        >
          <h4>Club {index + 1}</h4>

          <input
            type="text"
            name={`clubs[${index}].name`}
            placeholder="Club Name"
            value={club.name}
            onChange={(e) =>
              setClubDetails(index, "name", e.target.value, setFormData)
            }
          />

          <textarea
            name={`clubs[${index}].description`}
            placeholder="Description"
            value={club.description}
            onChange={(e) =>
              setClubDetails(index, "description", e.target.value, setFormData)
            }
            rows={3}
          />

          <input
            type="text"
            name={`clubs[${index}].title`}
            placeholder="Your Title"
            value={club.title}
            onChange={(e) =>
              setClubDetails(index, "title", e.target.value, setFormData)
            }
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              validateSingleClub(index);
            }}
          >
            Validate Club
          </button>

          {clubErrors[index]?.name && <p>{clubErrors[index].name}</p>}
          {clubErrors[index]?.description && (
            <p>{clubErrors[index].description}</p>
          )}
          {clubErrors[index]?.title && <p>{clubErrors[index].title}</p>}

          <button
            onClick={(e) => {
              e.preventDefault();
              setFormData((prev) => ({
                ...prev,
                clubs: prev.clubs.filter((_, i) => i !== index),
              }));
            }}
          >
            Remove Club
          </button>
        </div>
      ))}

      <input
        type="button"
        value="Add Club"
        onClick={(e) => {
          e.preventDefault();
          setFormData((prev) => ({
            ...prev,
            clubs: [...prev.clubs, createEmptyExperience()],
          }));
        }}
      />
    </>
  );
};

export default ClubsComponent;

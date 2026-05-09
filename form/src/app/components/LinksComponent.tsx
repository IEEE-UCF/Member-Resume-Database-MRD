import { Dispatch, SetStateAction, useState } from "react";

import { type Form } from "../interfaces"

import formStyles from "../styles/form.module.css"

import { getLinkError } from "../utils/validations";

interface LinksComponentProps {
    links: string[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const LinksComponent = ({
  links,
  setFormData,
}: LinksComponentProps) => {
  const [linkErrors, setLinkErrors] = useState<string[]>(
    links.map(() => "")
  );

  const validateSingleLink = (index: number) => {
    const newErrors = [...linkErrors];
    newErrors[index] = getLinkError(links[index]);
    setLinkErrors(newErrors);
  };

  return (
    <>
      <h3>Links</h3>

      {links.map((link, index) => {
        return (
          <div
            key={`links[${index}]`}
            className={`${formStyles.child} ${formStyles.link}`}
          >
            <input
              type="url"
              name={`links[${index}]`}
              placeholder="https://example.com"
              value={link}
              onChange={(e) => {
                setFormData((prev) => {
                  const result = [...prev.links];
                  result[index] = e.target.value;
                  return { ...prev, links: result };
                });
              }}
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                validateSingleLink(index);
              }}
            >
              Validate Link
            </button>

            {linkErrors[index] && <p>{linkErrors[index]}</p>}

            <button
              onClick={(e) => {
                e.preventDefault();

                setFormData((prev) => ({
                  ...prev,
                  links: prev.links.filter((_, i) => i !== index),
                }));

                setLinkErrors((prev) => prev.filter((_, i) => i !== index));
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
            <input
                type="button"
                value="Add Link"
                onClick={(e) => {
                    e.preventDefault()
                    return (
                        setFormData((prev) => ({
                            ...prev,
                            links: [...prev.links, ""],
                        }))
                    )
                }}
            />
        </>
    );
};

export default LinksComponent;
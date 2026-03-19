import { Dispatch, SetStateAction, useState } from "react";

import type { Form } from "../interfaces";

import { setBio } from "../utils/onChanges"
import { validateBio } from "../utils/validations"

type BioComponentProps = {
    bio: string;
    setFormData: Dispatch<SetStateAction<Form>>;
};

const BioComponent = ({ 
    bio, 
    setFormData, 
}: BioComponentProps) => {
    const [isValid, setIsValid] = useState<boolean>(false)

    return (
        <>
            <h3>Bio</h3>
            {
                console.log(isValid) ||
                isValid ||
                <p>BIO IS NOT VALID</p>
            }

            <textarea
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value, setFormData)}
                rows={5}
            />

            <button
                onClick = {(e) => {
                    e.preventDefault()
                    setIsValid(validateBio(bio))
                }}
            >
                Submit Bio
            </button>
        </>
    );
};

export default BioComponent;
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
    const [errors, setErrors] = useState<string[]>([])

    return (
        <>
            <h3>Bio</h3>

            {
                errors.length > 0 && 
                (<>
                    <p>BIO IS NOT VALID BECAUSE:</p>

                    {errors.map((element, index) => {
                        return <p key = {index}>{element}</p>
                    })}
                </>)
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
                    setErrors(validateBio(bio))
                }}
            >
                Submit
            </button>
        </>
    );
};

export default BioComponent;
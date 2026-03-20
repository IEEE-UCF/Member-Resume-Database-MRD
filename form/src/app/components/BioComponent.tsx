import { Dispatch, SetStateAction, useState } from "react";
import type { Form } from "../interfaces";

import { setBio } from "../utils/onChanges"
import { validateBio } from "../utils/validations";
import { printArray } from "../utils/printArray";

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

                    {printArray(errors, "Bio")}
                </>)
            }

            <textarea
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value, setFormData)}
                rows={5}
            />

            <button
                onClick={(e) => {
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
import { Dispatch, SetStateAction } from "react";
import type { Form } from "../interfaces";

import { setBio } from "../utils/onChanges"
import { printArray } from "../utils/printArray";

type BioComponentProps = {
    bio: string;
    setFormData: Dispatch<SetStateAction<Form>>;
    itemErrors: string[];
};

const BioComponent = ({ 
    bio,
    setFormData, 
    itemErrors,
}: BioComponentProps) => {

    return (
        <>
            <h3>Bio</h3>
            
            {
                itemErrors.length > 0 &&
                (<>
                    <p>BIO IS NOT VALID BECAUSE:</p>

                    {printArray(itemErrors, "Bio")}
                </>)
            }

            <textarea
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value, setFormData)}
                rows={5}
            />
        </>
    );
};

export default BioComponent;
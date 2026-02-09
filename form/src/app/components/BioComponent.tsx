import { Dispatch, SetStateAction } from "react";
import type { Form } from "../interfaces";
import { setBio } from "../utils/onChanges"

type BioComponentProps = {
    bio: string;
    setFormData: Dispatch<SetStateAction<Form>>;
};

const BioComponent = ({ 
    bio, 
    setFormData, 
}: BioComponentProps) => {
    return (
        <>
            <h3>Bio</h3>
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
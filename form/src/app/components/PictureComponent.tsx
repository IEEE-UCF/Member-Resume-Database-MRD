import { Dispatch, SetStateAction, useState } from "react";
import { type Form } from "../interfaces"

import { setPicture } from "../utils/onChanges";
import { validatePicture } from "../utils/validations";
import { printArray } from "../utils/printArray";

interface PictureComponentProps {
    setFormData: Dispatch<SetStateAction<Form>>;
}

const PictureComponent = ({ 
    setFormData 
}: PictureComponentProps) => {
    const [errors, setErrors] = useState<string[]>([])
    const [tempFile, setTempFile] = useState<File | null>(null)

    return (
        <>
            <h3>Picture</h3>
            
            {
                errors.length > 0 && 
                (<>
                    <p>PICTURE IS INVALID BECAUSE:</p>

                    {
                        printArray(errors, "Picture")
                    }
                </>)
            }

            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        setTempFile(file);
                        setPicture(file, setFormData);
                    }
                }}
            />
            <button
                onClick={(e) =>{
                    e.preventDefault()
                    if(tempFile) {
                        setErrors(validatePicture(tempFile))
                    } else {
                        setErrors(["No picture selected"])
                    }
                }}
            >
                Submit
            </button>
        </>
    );
};

export default PictureComponent;
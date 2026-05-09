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
    const [itemErrors, setItemErrors] = useState<string[]>([])
    const [tempFile, setTempFile] = useState<File | null>(null)

    return (
        <>
            <h3>Picture</h3>
            
            {
                itemErrors.length > 0 && 
                (<>
                    <p>PICTURE IS NOT VALID BECAUSE:</p>

                    {
                        printArray(itemErrors, "Picture")
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
                        const { itemErrors: iErrors } = validatePicture(tempFile)
                        setItemErrors(iErrors)
                    } else {
                        setItemErrors(["No picture selected"])
                    }
                }}
            >
                Submit Picture
            </button>
        </>
    );
};

export default PictureComponent;
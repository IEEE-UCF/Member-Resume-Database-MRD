import { Dispatch, SetStateAction, useState } from "react";
import { type Form } from "../interfaces"

import { setPicture } from "../utils/onChanges";
import { validatePicture } from "../utils/validations";
import { printArray } from "../utils/printArray";
interface PictureComponentProps {
    file: File;
    setFormData: Dispatch<SetStateAction<Form>>;
}

const PictureComponent = ({ 
    file,
    setFormData 
}: PictureComponentProps) => {
    const[errors, setErrors] = useState<string[]>([])

    return (
        <>
            <h3>Picture</h3>
            
            {
                errors.length > 0 && 
                (<>
                    <p>PICTURE IS INVALID BECAUSE:</p>

                    {
                        printArray(errors, "file")
                    }
                </>)
            }

            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        setPicture(file, setFormData);
                    }
                }}
            />
            <button
                onClick={(e) =>{
                    e.preventDefault()
                    if(file) {
                    setErrors(validatePicture(file))
                    }
                }}
            >
                Submit
            </button>
        </>
    );
};

export default PictureComponent;
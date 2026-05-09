import { Dispatch, SetStateAction } from "react";
import { type Form } from "../interfaces"

import { setPicture } from "../utils/onChanges";
import { printArray } from "../utils/printArray";

interface PictureComponentProps {
    setFormData: Dispatch<SetStateAction<Form>>;
    itemErrors: string[];
}

const PictureComponent = ({ 
    setFormData,
    itemErrors 
}: PictureComponentProps) => {

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
                        setPicture(file, setFormData);
                    }
                }}
            />
        </>
    );
};

export default PictureComponent;
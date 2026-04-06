import { Dispatch, SetStateAction, useState } from "react";
import { type Form } from "../interfaces";

import { setName } from "../utils/onChanges";
import { validateName } from "../utils/validations";
import { printArray } from "../utils/printArray";

type NameComponentProps = {
    name: string;
    setFormData: Dispatch<SetStateAction<Form>>;
};

const NameComponent = ({ 
    name, 
    setFormData 
}: NameComponentProps) => {
    const [errors, setErrors] = useState<string[]>([])

    return (
        <>
            <h3>Name</h3>

            {
                errors.length > 0 &&
                (<>
                    <p>NAME IS NOT VALID BECAUSE:</p>

                    {
                        printArray(errors, "Bio")
                    }
                </>)
            }

            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value, setFormData)}
            />
            <button
                onClick={(e) => {
                    e.preventDefault()
                    setErrors(validateName(name))
                }}
            >
                Submit
            </button>
        </>
    );
};

export default NameComponent;
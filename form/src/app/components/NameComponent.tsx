import { Dispatch, SetStateAction } from "react";
import { type Form } from "../interfaces";

import { setName } from "../utils/onChanges";
import { printArray } from "../utils/printArray";

type NameComponentProps = {
    name: string;
    setFormData: Dispatch<SetStateAction<Form>>;
    itemErrors: string[];
};

const NameComponent = ({ 
    name, 
    setFormData,
    itemErrors 
}: NameComponentProps) => {

    return (
        <>
            <h3>Name</h3>

            {
                itemErrors.length > 0 &&
                (<>
                    <p>NAME IS NOT VALID BECAUSE:</p>

                    {
                        printArray(itemErrors, "Name")
                    }
                </>)
            }

            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value, setFormData)}
            />
        </>
    );
};

export default NameComponent;
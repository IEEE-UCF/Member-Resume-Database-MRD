import { Dispatch, SetStateAction } from "react";
import type { Form } from "../interfaces";
import { setName } from "../utils/onChanges";

type NameComponentProps = {
    name: string;
    setFormData: Dispatch<SetStateAction<Form>>;
};

const NameComponent = ({ 
    name, 
    setFormData 
}: NameComponentProps) => {
    return (
        <>
            <h3>Name</h3>
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
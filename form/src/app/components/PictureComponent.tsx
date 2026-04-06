import { setPicture } from "../utils/onChanges";

import { Dispatch, SetStateAction } from "react";

import { type Form } from "../interfaces"

interface PictureComponentProps {
    setFormData: Dispatch<SetStateAction<Form>>;
}

const PictureComponent = ({ setFormData }: PictureComponentProps) => {
    return (
        <>
            <h3>Picture</h3>
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
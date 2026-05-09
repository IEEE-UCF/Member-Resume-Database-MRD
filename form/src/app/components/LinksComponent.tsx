import { Dispatch, SetStateAction } from "react";
import { type Form } from "../interfaces"

import LinkComponent from "./LinkComponent";
import { setLink, addLink, removeLink } from "../utils/onChanges";
import { printArray } from "../utils/printArray";

interface LinksComponentProps {
    links: string[];
    setFormData: Dispatch<SetStateAction<Form>>;
    sectionErrors: string[];
    itemErrors: string[][];
}

const LinksComponent = ({ 
    links, 
    setFormData,
    sectionErrors,
    itemErrors 
}: LinksComponentProps) => {

    return (
        <>
            <h3>Links</h3>

            {
                sectionErrors.length > 0 && 
                (<>
                    <p>LINKS SECTION IS NOT VALID BECAUSE:</p>

                    {
                        printArray(sectionErrors, "Links")
                    }
                </>)
            }

            {links.map((link, index) => {
                return (
                    <LinkComponent
                        key={index}
                        link={link}
                        index={index}
                        errors={itemErrors[index] || []}
                        onChange={(val) => setLink(index, val, setFormData)}
                        onRemove={() => {
                            removeLink(index, setFormData);
                        }}
                    />
                );
            })}
            
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addLink(setFormData);
                }}
            >
                Add Link
            </button>
        </>
    );
};

export default LinksComponent;
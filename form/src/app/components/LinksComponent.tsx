import { Dispatch, SetStateAction, useState } from "react";
import { type Form } from "../interfaces"

import LinkComponent from "./LinkComponent";
import { setLink, addLink, removeLink } from "../utils/onChanges";
import { validateLinks } from "../utils/validations";
import { printArray } from "../utils/printArray";

interface LinksComponentProps {
    links: string[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const LinksComponent = ({ 
    links, 
    setFormData 
}: LinksComponentProps) => {
    const [sectionErrors, setSectionErrors] = useState<string[]>([])
    const [itemErrors, setItemErrors] = useState<string[][]>(links.map(() => []))

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
                            // Keep error array in sync
                            setItemErrors(prev => prev.filter((_, i) => i !== index));
                        }}
                    />
                );
            })}
            
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addLink(setFormData);
                    // Add empty error slot for new link
                    setItemErrors(prev => [...prev, []]);
                }}
            >
                Add Link
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    const { sectionErrors: sErrors, itemErrors: iErrors } = validateLinks(links);
                    setSectionErrors(sErrors);
                    setItemErrors(iErrors);
                }}
            >
                Submit All Links
            </button>
        </>
    );
};

export default LinksComponent;
import { Dispatch, SetStateAction, useState } from "react";
import { type Form, type Experience } from "../interfaces"

import ClubComponent from "./ClubComponent";
import { setClubDetails, addClub, removeClub } from "../utils/onChanges";
import { validateClubs } from "../utils/validations";
import { printArray } from "../utils/printArray";

interface ClubsComponentProps {
    clubs: Experience[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const ClubsComponent = ({ 
    clubs, 
    setFormData 
}: ClubsComponentProps) => {
    const [sectionErrors, setSectionErrors] = useState<string[]>([])
    const [itemErrors, setItemErrors] = useState<string[][]>(clubs.map(() => []))

    return (
        <>
            <h3>Clubs</h3>

            {
                sectionErrors.length > 0 && 
                (<>
                    <p>CLUBS SECTION IS NOT VALID BECAUSE:</p>
                    {printArray(sectionErrors, "Clubs")}
                </>)
            }

            {clubs.map((club, index) => {
                return (
                    <ClubComponent
                        key={index}
                        club={club}
                        index={index}
                        errors={itemErrors[index] || []}
                        onUpdateField={(field, val) => setClubDetails(index, field, val, setFormData)}
                        onRemove={() => {
                            removeClub(index, setFormData);
                            setItemErrors(prev => prev.filter((_, i) => i !== index));
                        }}
                    />
                );
            })}
            
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addClub(setFormData);
                    setItemErrors(prev => [...prev, []]);
                }}
            >
                Add Club
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    const { sectionErrors: sErrors, itemErrors: iErrors } = validateClubs(clubs);
                    setSectionErrors(sErrors);
                    setItemErrors(iErrors);
                }}
            >
                Confirm All Clubs
            </button>
        </>
    );
};

export default ClubsComponent;
import { Dispatch, SetStateAction } from "react";
import { type Form, type Experience } from "../interfaces"

import ClubComponent from "./ClubComponent";
import { setClubDetails, addClub, removeClub } from "../utils/onChanges";
import { printArray } from "../utils/printArray";

interface ClubsComponentProps {
    clubs: Experience[];
    setFormData: Dispatch<SetStateAction<Form>>;
    sectionErrors: string[];
    itemErrors: string[][];
}

const ClubsComponent = ({ 
    clubs, 
    setFormData,
    sectionErrors,
    itemErrors 
}: ClubsComponentProps) => {

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
                        }}
                    />
                );
            })}
            
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addClub(setFormData);
                }}
            >
                Add Club
            </button>
        </>
    );
};

export default ClubsComponent;
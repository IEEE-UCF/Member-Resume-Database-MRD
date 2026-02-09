import { Dispatch, SetStateAction } from "react";

import { Form } from "../interfaces";

// Bio
export const validateBio = (bio: string) => {
    let tooSmall = bio.length <= 0
    let tooLarge = bio.length > 8

    return !tooSmall && !tooLarge
}

// Clubs
                    

// Education


// Graduation


// Links


// Major


// Name


// Picture


// Projects


// Resume


// School Year


// Skills


// Work experience
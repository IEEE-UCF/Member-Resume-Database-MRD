import * as validations from "./validations"

// Bio          
const bio = "asdf"
const tooLong = "as;dlfkja;sdlkjfa;lsjdf;laskjdflaksjdf;as"
const tooShort = ""

test("properly validated the bio input", () => {
    expect(validations.validateBio(bio)).toBe(true)
    expect(validations.validateBio(tooLong)).toBe(false)
    expect(validations.validateBio(tooShort)).toBe(false)
})

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
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
const schoolYear = "2029"
const notSelected = "0"

test("Properly validated the schoolYear input", () =>{
    expect(validations.validateSchoolYear(schoolYear)).toBe(true)
    expect(validations.validateSchoolYear(notSelected)).toBe(false)

})


// Skills


// Work experience
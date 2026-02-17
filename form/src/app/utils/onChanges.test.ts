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
const graduationYear = "2029"
const tooSmall = "1800"
const tooLarge = "2200"

test("properly validated the graduation input", ()=> {
    expect(validations.validateGraduationYear(graduationYear)).toBe(true)
    expect(validations.validateGraduationYear(tooSmall)).toBe(false)
    expect(validations.validateGraduationYear(tooLarge)).toBe(false)
})

// Links


// Major
const major = "Art (BA)"
const majorNotSelected = "Select Major"

test("properly validated the major input", () => {
    expect(validations.validateMajor(major)).toBe(true)
    expect(validations.validateMajor(majorNotSelected)).toBe(false)
})

// Name
const name = "Luis"
const isNumber = "12345"
const hasSpecialCharacter = "Luis@Classe!"

test("properly validated the name input", () => {
    expect(validations.validateName(name)).toBe(true)
    expect(validations.validateName(tooLong)).toBe(false)
    expect(validations.validateName(isNumber)).toBe(false)
    expect(validations.validateName(hasSpecialCharacter)).toBe(false)
})
// Picture


// Projects


// Resume


// School Year
const schoolYear = "Freshman"
const notSelected = ""

test("Properly validated the schoolYear input", () =>{
    expect(validations.validateSchoolYear(schoolYear)).toBe(true)
    expect(validations.validateSchoolYear(notSelected)).toBe(false)
})


// Skills


// Work experience
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
const notSelected = "" 
const tooSmall = "1800"
const tooLarge = "2200"
const gradStrTooLarge = "22200"
const specialGrad = "2029@"
const LetterGrad = "2029D"

test("properly validated the graduation input", ()=> {
    expect(validations.validateGraduationYear(graduationYear)).toBe(true)
    expect(validations.validateGraduationYear(notSelected)).toBe(false)
    expect(validations.validateGraduationYear(tooSmall)).toBe(false)
    expect(validations.validateGraduationYear(tooLarge)).toBe(false)
    expect(validations.validateGraduationYear(gradStrTooLarge)).toBe(false)
    expect(validations.validateGraduationYear(specialGrad)).toBe(false)
    expect(validations.validateGraduationYear(LetterGrad)).toBe(false)
})

// Links


// Major
const major = "Art (BA)"
const majorNotSelected = "Select Major"
const invalidMajor = "Star Wars (BA)"
const strTooSmall = "BA"
const majorStrTooLarge = "bjkoqhfqfqfknkqfnqfjfwnwejgnj1n1iokg48710i913fkmenfjqegjmkqgnkgmqngjegnqjkmgqenjgkmeqngjqkmgqengkqqfnqwfjnqjfnqjfnqjnfjqnfjqnwjnjqfjqnfjqwnjfnqjfnqjfnqffjqnjqwnfqfqnfqfnwjnfqwjnfqjwjfnqwjfnqwjfqnwjfqnfjqnfjqwnfjqwnfjqfnqj"
const specialMajor = "@rt (B@)"

test("properly validated the major input", () => {
    expect(validations.validateMajor(major)).toBe(true)
    expect(validations.validateMajor(majorNotSelected)).toBe(false)
    expect(validations.validateMajor(invalidMajor)).toBe(false)
    expect(validations.validateMajor(strTooSmall)).toBe(false)
    expect(validations.validateMajor(majorStrTooLarge)).toBe(false)
    expect(validations.validateMajor(specialMajor)).toBe(false)
})

// Name
const name = "Luis"
const nameTooLong = "kneqgjgenqengjnjg1njgn1jkngjaaa"
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
const schoolYearNotSelected = ""
const invalidSchoolYear = "Professor"
const schoolYearStrTooLarge = "Graduate Student"
const specialSchoolYear = "Freshm@n"
const numSchoolYear = "Senior29" 

test("Properly validated the schoolYear input", () =>{
    expect(validations.validateSchoolYear(schoolYear)).toBe(true)
    expect(validations.validateSchoolYear(schoolYearNotSelected)).toBe(false)
    expect(validations.validateSchoolYear(invalidSchoolYear)).toBe(false)
    expect(validations.validateSchoolYear(schoolYearStrTooLarge)).toBe(false)
    expect(validations.validateSchoolYear(specialSchoolYear)).toBe(false)
    expect(validations.validateSchoolYear(numSchoolYear)).toBe(false)
})


// Skills


// Work experience
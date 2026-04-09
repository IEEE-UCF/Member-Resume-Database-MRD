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
const validClubName = "omom";
const invalidClubName = "a".repeat(51);
const emptyClubName = "";

const validClubDescription = "klndfdklndklnvdlkvndlkvndlkfdndklnvdklnvd";
const invalidClubDescription = "a".repeat(201);
const emptyClubDescription = "";

const validClubTitle = "President";
const invalidClubTitle = "a".repeat(51);
const emptyClubTitle = "";

test("properly validated the club name input", () => {
    expect(validations.validateClubName(validClubName)).toBe(true);
    expect(validations.validateClubName(invalidClubName)).toBe(false);
    expect(validations.validateClubName(emptyClubName)).toBe(true);
});

test("properly validated the club description input", () => {
    expect(validations.validateClubDescription(validClubDescription)).toBe(true);
    expect(validations.validateClubDescription(invalidClubDescription)).toBe(false);
    expect(validations.validateClubDescription(emptyClubDescription)).toBe(true);
});

test("properly validated the club title input", () => {
    expect(validations.validateClubTitle(validClubTitle)).toBe(true);
    expect(validations.validateClubTitle(invalidClubTitle)).toBe(false);
    expect(validations.validateClubTitle(emptyClubTitle)).toBe(true);
});                    

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
const link = "https://www.google.com"
const emptyLink = ""
const shortLink = "short.com"
const longLink = "https://www.suuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuppppperLooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong.com"
const spaceLink = "https://www.google .com"
const invalidProtocol = "ftp://www.google.com"

test("properly validated the links input", ()=> {
    expect(validations.validateLinks(link)).toBe(true)
    expect(validations.validateLinks(emptyLink)).toBe(false)
    expect(validations.validateLinks(shortLink)).toBe(false)
    expect(validations.validateLinks(longLink)).toBe(false)
    expect(validations.validateLinks(spaceLink)).toBe(false)
    expect(validations.validateLinks(invalidProtocol)).toBe(false)
})


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
const validProjectName = "Portfolio Website";
const invalidProjectName = "a".repeat(101);
const emptyProjectName = "";

const validProjectDescription = "kdfdlfjkdlkfjdfdklndlkvndklvndklfldjlkndvlknvdlkjfdnklvdnvkdljnf";
const invalidProjectDescription = "a".repeat(501);
const emptyProjectDescription = "";

const validProjectLink = "https://example.com/project";
const invalidProjectLink = "not-a-url";
const emptyProjectLink = "";

test("properly validated the project name input", () => {
    expect(validations.validateProjectName(validProjectName)).toBe(true);
    expect(validations.validateProjectName(invalidProjectName)).toBe(false);
    expect(validations.validateProjectName(emptyProjectName)).toBe(true);
});

test("properly validated the project description input", () => {
    expect(validations.validateProjectDescription(validProjectDescription)).toBe(true);
    expect(validations.validateProjectDescription(invalidProjectDescription)).toBe(false);
    expect(validations.validateProjectDescription(emptyProjectDescription)).toBe(true);
});

test("properly validated the project link input", () => {
    expect(validations.validateProjectLink(validProjectLink)).toBe(true);
    expect(validations.validateProjectLink(invalidProjectLink)).toBe(false);
    expect(validations.validateProjectLink(emptyProjectLink)).toBe(true);
});

// Resume
const validResume = "https://example.com/resume.pdf";
const invalidResume = "not-a-url";
const emptyResume = "";

test("properly validated the resume input", () => {
    expect(validations.validateResume(validResume)).toBe(true);
    expect(validations.validateResume(invalidResume)).toBe(false);
    expect(validations.validateResume(emptyResume)).toBe(true);
});

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
const validSkill = "lkdnfdlknfdlknvdlknvd";
const invalidSkill = "a".repeat(51);
const emptySkill = "";

test("properly validated the skill input", () => {
    expect(validations.validateSkill(validSkill)).toBe(true);
    expect(validations.validateSkill(invalidSkill)).toBe(false);
    expect(validations.validateSkill(emptySkill)).toBe(true);
});

// Work experience
const validWorkExperienceName = "Deloitte"
const invalidWorkExperienceName = "a".repeat(101)
const emptyWorkExperienceName = ""

const validWorkExperienceTitle = "Software Engineer Intern"
const invalidWorkExperienceTitle = "a".repeat(101)
const emptyWorkExperienceTitle = ""

const validWorkExperienceDescription =
  "Worked on frontend and backend tasks, fixed bugs, and collaborated with the team."
const invalidWorkExperienceDescription = "a".repeat(501)
const emptyWorkExperienceDescription = ""

test("properly validated the work experience name input", () => {
  expect(validations.validateWorkExperienceName(validWorkExperienceName)).toBe(true)
  expect(validations.validateWorkExperienceName(invalidWorkExperienceName)).toBe(false)
  expect(validations.validateWorkExperienceName(emptyWorkExperienceName)).toBe(true)
})

test("properly validated the work experience title input", () => {
  expect(validations.validateWorkExperienceTitle(validWorkExperienceTitle)).toBe(true)
  expect(validations.validateWorkExperienceTitle(invalidWorkExperienceTitle)).toBe(false)
  expect(validations.validateWorkExperienceTitle(emptyWorkExperienceTitle)).toBe(true)
})

test("properly validated the work experience description input", () => {
  expect(
    validations.validateWorkExperienceDescription(validWorkExperienceDescription)
  ).toBe(true)
  expect(
    validations.validateWorkExperienceDescription(invalidWorkExperienceDescription)
  ).toBe(false)
  expect(
    validations.validateWorkExperienceDescription(emptyWorkExperienceDescription)
  ).toBe(true)
})
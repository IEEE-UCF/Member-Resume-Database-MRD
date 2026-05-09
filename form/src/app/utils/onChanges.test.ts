import * as validations from "./validations"

// Bio          
const bio = "asdf"
const tooLongBio = "as;dlfkja;sdlkjfa;lsjdf;laskjdflaksjdf;as"
const emptyBio = ""

test("properly validated the bio input", () => {
    expect(validations.validateBio(bio).itemErrors.length).toBe(0)
    expect(validations.validateBio(tooLongBio).itemErrors.length).toBeGreaterThan(0)
    expect(validations.validateBio(emptyBio).itemErrors.length).toBe(0) // Bio is optional
})

// Clubs
const validClubName = "omom";
const invalidClubName = "a".repeat(51);
const emptyClubName = "";

test("properly validated the club name input", () => {
    expect(validations.validateClubName(validClubName)).toBe(true);
    expect(validations.validateClubName(invalidClubName)).toBe(false);
    expect(validations.validateClubName(emptyClubName)).toBe(false);
});

// Graduation
const graduationYear = "January 2029"
const notSelected = "" 
const pastYear = "January 2020"
const tooFarFuture = "January 2300"

test("properly validated the graduation input", ()=> {
    expect(validations.validateGraduationYear(graduationYear).itemErrors.length).toBe(0)
    expect(validations.validateGraduationYear(notSelected).itemErrors.length).toBeGreaterThan(0)
    expect(validations.validateGraduationYear(pastYear).itemErrors.length).toBeGreaterThan(0)
    expect(validations.validateGraduationYear(tooFarFuture).itemErrors.length).toBeGreaterThan(0)
})

// Links
const validLink = "https://www.google.com"
const forgivingLink = "google.com"
const emptyLink = ""
const spaceLink = "https://www.google .com"

test("properly validated the links input", ()=> {
    expect(validations.validateLink(validLink).length).toBe(0)
    expect(validations.validateLink(forgivingLink).length).toBe(0)
    expect(validations.validateLink(emptyLink).length).toBeGreaterThan(0)
    expect(validations.validateLink(spaceLink).length).toBeGreaterThan(0)
})


// Major
const major = "Art (BA)"
const majorNotSelected = "Select Major"
const invalidMajor = "Star Wars (BA)"

test("properly validated the major input", () => {
    expect(validations.validateMajor(major).itemErrors.length).toBe(0)
    expect(validations.validateMajor(majorNotSelected).itemErrors.length).toBeGreaterThan(0)
    expect(validations.validateMajor(invalidMajor).itemErrors.length).toBeGreaterThan(0)
})

// Name
const validName = "Luis"
const nameTooLong = "a".repeat(31)
const isNumber = "12345"

test("properly validated the name input", () => {
    expect(validations.validateName(validName).itemErrors.length).toBe(0)
    expect(validations.validateName(nameTooLong).itemErrors.length).toBeGreaterThan(0)
    expect(validations.validateName(isNumber).itemErrors.length).toBeGreaterThan(0)
})

// Projects
const validProject = {
    name: "Portfolio",
    link: "github.com",
    dates: { start: "2024-01-01", end: "2024-02-01" },
    description: "Cool project"
};

test("properly validated the project input", () => {
    expect(validations.validateProject(validProject).length).toBe(0);
});

// Resume
const validResume = "example.com/resume.pdf";
const emptyResume = "";

test("properly validated the resume input", () => {
    expect(validations.validateResume(validResume).itemErrors.length).toBe(0);
    expect(validations.validateResume(emptyResume).itemErrors.length).toBe(0); // Optional
});

// School Year
const schoolYear = "Freshman"
const professor = "Professor"

test("Properly validated the schoolYear input", () =>{
    expect(validations.validateSchoolYear(schoolYear).itemErrors.length).toBe(0)
    expect(validations.validateSchoolYear(professor).itemErrors.length).toBeGreaterThan(0)
})

// Skills
const skills = ["React", "TypeScript"];
const tooManySkills = Array(11).fill("Skill");

test("properly validated the skills input", () => {
    expect(validations.validateSkills(skills).sectionErrors.length).toBe(0);
    expect(validations.validateSkills(tooManySkills).sectionErrors.length).toBeGreaterThan(0);
});

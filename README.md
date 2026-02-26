# Member Portfolio Service (MPS)
The following document describes the structure of the code of version 1 of the Member Portfolio Service (MPS).

## Contents
<ul>
    <li>1. Run the Program (for devs)</li>
    <li>2. Goal</li>
    <li>
        3. Form Structure
        <ul>
            <li>
                3.1. The Name Section
                <ul>
                    <li>3.1.1. The Name Section Call in Form.tsx</li>
                    <li>3.1.2. The Name Section as a Component</li>                    
                </ul>
            </li>
            <li>
                3.2. The Skills Section
                <ul>
                    <li>3.2.1. The Skills Section Call in Form.tsx</li>
                    <li>3.2.2. The Skills Section as a Component</li>                    
                </ul>
            </li>
            <li>
                3.3. The Clubs Section
                <ul>
                    <li>3.3.1. The Clubs Section in Form.tsx</li>
                    <li>3.3.2. The Clubs Section as a Component</li>                    
                </ul>
            </li>
            <li>3.4 CSS</li>
        </ul>
    </li>
    <li>
        4. Website Structure
        <ul>
            <li>4.1. Website Form</li>
            <li>4.2 Website CSS</li>                    
        </ul>
    </li>
    <li>5. Conclusion</li>
    <li>
        6. Future Versions
        <ul>
            <li>6.1. Deploy the Form</li>
            <li>6.2. Error Handling for Improper Inputs</li>
            <li>6.3. CSS</li>      
            <li>6.4. Majors</li>      
            <li>6.5 Master Lists</li>      
        </ul>
    </li>
</ul>

## 1. Run the Program (for devs)

Navigate to a folder that contains a src folder

Type the command: npm i

Type the command: npm run dev

## 2. Goal

This version serves as the foundation of a website that will undergo many changes over the span of many years, so the main goal for it is to be as easily accessible as possible. This is done in two ways. First, the code that represents each field in the database is isolated and clearly labeled. If one wants to make a change to any field, they can simply look for the component that shares its name. Also, the change will not interfere with any other component in the form. Second, the code that represents each field was written to be as similar to the code all other fields as possible. If one wants to understand the structure of a field, they can learn that of a simpler one, and the understanding will translate well. Future versions do not need to maintain this symmetry.

## 3. Form Structure

The structure of the form is intended to be symmetric, such that every field looks nearly identical. This document will start by describing the simplest section, and will slowly build up to the most complex ones.

### 3.1. The Name Section

The first bits of code this document will describe belong to the name section.

#### 3.1.1. The Name Section Call in Form.tsx

The following is the code that calls NameComponent.tsx, the component for the name field, in Form.tsx:

```javascript
// ./form/src/app/components/Form.tsx

<div className={`${formStyles.child} ${formStyles.name}`}>
    <NameComponent 
        name={formData.name} 
        setFormData={setFormData} 
    />
</div>
```

This code comprises of a div tag that isolates the component and connects it to the form's stylesheet. Inside the div tag is a call to the component NameComponent.tsx. It is passed the name field in the formData object and setFormData- the useState function that sets the contents of formData.

#### 3.1.2. The Name Section as a Component

The following is the code inside NameComponent.tsx.

```javascript
// ./form/src/app/components/NameComponent.tsx

import { Dispatch, SetStateAction } from "react";
import type { Form } from "../interfaces";

type NameComponentProps = {
    name: string;
    setFormData: Dispatch<SetStateAction<Form>>;
};

const NameComponent = ({ 
    name, 
    setFormData 
}: NameComponentProps) => {
    return (
        <>
            <h3>Name</h3>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
            />
        </>
    );
};

export default NameComponent;
```

As stated before, NameComponent.tsx is passed two properties: the name field in formData and the function setFormData, which resets formData according to changes. These components are handled as an interface called NameComponentProps.

The name component itself is a constant that is sent to Form.tsx as the default export of NameComponent.tsx.

Inside the component is only its return value, which comprises of a title for the component and an input tag in HTML. The input tag is passed four fields. The first is an input type as a text. The second is its key in the JSON object sent in the POST request of the form. Third is the data for the name in formData used as the value for the name field in the JSON object. Finally, it is passed an onChange, a field provided by React, which is set to the function setFormData. This version of setFormData sets formData to a new formData object in which the only change is in the name field, which is set to the string the user writes in the input tag. It is updated during every rerender.

### 3.2. The Skills Section

The code of the skills section is nearly identical to the code of the name section except in that it is implemented as an array, has a different name, and represents another part of the form.

#### 3.2.1. The Skills Section Call in Form.tsx

The following is the code inside Form.tsx:

```javascript
// ./form/src/app/components/Form.tsx

<div className={`${formStyles.child} ${formStyles.skills}`}>
    <SkillsComponent
        skills={formData.skills}
        setFormData={setFormData}
    />
</div>
```

This code is nearly identical to that of the name section call in Form.tsx. Its parts are described in better detail in section 3.1.1 of this document.

#### 3.2.2. The Skills Section as a Component

The following is the code inside SkillsComponent.tsx:

```javascript
// ./form/src/app/components/ SkillsComponent.tsx

import { Dispatch, SetStateAction } from "react";

import { type Form } from "../interfaces"

interface SkillsComponentProps {
    skills: string[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const SkillsComponent = ({ 
    skills, 
    setFormData 
}: SkillsComponentProps) => {
    return (
        <>
            <h3>Skills</h3>
            {skills.map((skill, index) => {
                return (
                    <div key={`skills[${index}]`}>
                        <input
                            type="text"
                            name={`skills[${index}]`}
                            value={skill}
                            onChange={(e) =>
                                setFormData((prev) => {
                                    const result = [...prev.skills];
                                    result[index] = e.target.value;
                                    return { ...prev, skills: result };
                                })
                            }
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                setFormData((prev) => ({
                                    ...prev,
                                    skills: prev.skills.filter((_, i) => i !== index),
                                }))
                            }}
                        >
                            Remove
                        </button>
                    </div>
                );
            })}
            <button
                onClick={(e) => {
                    e.preventDefault()
                    setFormData((prev) => ({
                        ...prev,
                        skills: [...prev.skills, ""],
                    }))
                }}
            >
                Add Skill
            </button>
        </>
    );
};

export default SkillsComponent;
```

The code has a lot in common with the name section as a component in section 3.1.2. This section of the document will focus on the key difference: its implementation as an array.

Skills is an array because one resume may contain a number of skills that cannot be accurately predicted. This document handles that by using the .map() function to iterate through each skill in the skills array and return it as a component. The .map() function is passed an array element and the index of that element. Its key is the same as the element's name in the JSON file. It contains an input tag in which the user types out the skill, where inside the input tag, the onChange field is a little more complicated, as the skills array is recreated in isolation, updated, and used to replace the previous version of the array in the form. There is also a button the user can press to delete the skill. Following the .map(), this component also has a button the user can press to add another skill to the array by replacing it with a duplicate array that is appended an empty version of a skill, which, in this case, is an empty string.

### 3.3. The Clubs Section

The code of the clubs section has the exact same structure as the code of the skills section, there are just more fields in the clubs section.

#### 3.3.1. The Clubs Section in Form.tsx

To maintain consistancy, the clubs component call in Form.tsx is the same as every other component in Form.tsx.

```javascript
// ./form/src/app/components/Form.tsx

<div className={`${formStyles.child} ${formStyles.clubs}`}>
    <ClubsComponent
        schoolYear = { formData.clubs }
        setFormData = { setFormData }
    />
</div>
```

#### 3.3.2. The Clubs Section as a Component

The following is the code inside ClubsComponent.tsx:

```javascript
// ./form/src/app/components/ClubsComponent.tsx

import { Dispatch, SetStateAction } from "react";

import {
    type Experience,
    type Form,
    createEmptyExperience,
} from "../interfaces";

interface ClubsComponentProps {
    clubs: Experience[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const ClubsComponent = ({ 
    clubs, 
    setFormData 
}: ClubsComponentProps) => {
    return (
        <>
            <h3>Clubs</h3>
            {clubs.map((club, clubsIndex) => (
                <div key={`clubs[${clubsIndex}]`} className="club">
                    <h4>Club {clubsIndex + 1}</h4>
                    <input
                        type="text"
                        name={`clubs[${clubsIndex}].name`}
                        placeholder="Club Name"
                        value={club.name}
                        onChange={(e) =>
                            setFormData((prev) => {
                                const updated = [
                                    ...prev.clubs,
                                ];
                                updated[clubsIndex].name = e.target.value;
                                return { ...prev, clubs: updated };
                            })
                        }
                    />
                    <textarea
                        name={`clubs[${clubsIndex}].description`}
                        placeholder="Description"
                        value={club.description}
                        onChange={(e) =>
                            setFormData((prev) => {
                                const updated = [...prev.clubs];
                                updated[clubsIndex].description = e.target.value;
                                return { ...prev, clubs: updated };
                            })
                        }
                        rows={3}
                    />
                    <input
                        type="text"
                        name={`clubs[${clubsIndex}].title`}
                        placeholder="Your Title"
                        value={club.title}
                        onChange={(e) =>
                            setFormData((prev) => {
                                const updated = [...prev.clubs];
                                updated[clubsIndex].title = e.target.value;
                                return { ...prev, clubs: updated };
                            })
                        }
                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setFormData((prev) => ({
                                ...prev,
                                clubs: prev.clubs.filter((_, i) => i !== clubsIndex),
                            }));
                        }}
                    >
                        Remove Club
                    </button>
                </div>
            ))}
            <input
                type="button"
                value="Add Club"
                onClick={(e) =>
                    setFormData((prev) => ({
                        ...prev,
                        clubs: [...prev.clubs, createEmptyExperience()],
                    }))
                }
            />
        </>
    );
};

export default ClubsComponent;
```

There is no doubt that this component is more complicated than the last one, but by the way that the code for this form is implemented, the information described in section 3.2.2 translates well here.

### 3.4 CSS

This CSS was not written to decorate the form, it was written to clearly isolate components to make debugging much easier. The code looks like this.

```javascript
// ./form/src/app/components/Form.tsx

<div className={`${formStyles.child} ${formStyles.name}`}>
    <NameComponent 
        name={formData.name} 
        setFormData={setFormData} 
    />
</div>
```

```css
/* ./form/src/app/styles/form.module.css */
.child {
    border: 1px solid black;
}

@media (max-width: 1000px) {
    .child {
        margin: 2%;
        padding: 2%;
    }
}
@media (min-width: 1000px) {
    .child {
        margin: 5%;
        padding: 5%;
    }
}
```

Every element of the form is the child of something, so they are all isolated as children of their parents. They have a black border, some margin, and some padding. The margin and padding change depending on the size of the window. They are smaller for mobile formats and bigger for desktop formats. There is room here for increased complexity in a way that is incredibly easy to implement. It works by isolating any screen size bigger or smaller than a specific value and changing the CSS within those values. Global CSS can be written outside the media tags. The media tags will overwrite any global CSS.

## 4. Website Structure

This section will be breezed through as everything is pretty much the same as that of the input form, except that it outputs fields instead of inputting them.

### 4.1. Website Form

The only difference in the call for the projects section is that it no longer passes setFormData, as the website does not perform create, update, or delete operations.

```javascript
// ./website/client/src/app/components/Form.tsx

<div className={`${formStyles.child} ${formStyles.projects}`}>
    <ProjectsComponent projects={formData.projects} />
</div>
```

The only difference in the call for the projects component is that all input tags are replaced with text tags. Other components are more complicated, but the point is that the code was written to be as similar as possible to that of the input form.

```javascript
// ./website/client/src/app/components/ProjectsComponent.tsx

import { type Project } from "../interfaces"

import formStyles from "../styles/form.module.css"

interface ProjectsComponentProps {
    projects: Project[];
}

const ProjectsComponent = ({ 
    projects 
}: ProjectsComponentProps) => {
    return (
        <>
            <h3>Projects</h3>
            {projects.map((project, index) => (
                <div key = {`${index}`} className={`${formStyles.child}`}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>{project.link}</p>            
                </div>
            ))}        
        </>
    );
};

export default ProjectsComponent;
```

### 4.2 Website CSS

There is not a single change between the CSS in the website and the CSS in the input form.

```css
/* ./website/client/src/app/styles/form.module.css */

.child {
    border: 1px solid black;
}

@media (max-width: 1000px) {
    .child {
        margin: 2%;
        padding: 2%;
    }
}
@media (min-width: 1000px) {
    .child {
        margin: 5%;
        padding: 5%;
    }
}
```

## 5. Conclusion

Every decision in this program had one idea in mind: make the code serve as a solid and accessible foundation that can be easily updated for years to come. If you have any questions, comments, or concerns, please reach out to the team by filling out this form: https://forms.gle/RLmoxYHrUsUDQebK7.

## 6. Future Versions

A watchful eye may notice that there are many elements of this project that need to be refined. This section states everything RDI is working on for version two of the project.

### 6.1. Deploy the Form

The form will not be deployed until it is connected to the database and RDI is confident that it is completely refined and has gone through extensive tests against user abuse. This may take a while, so to alleviate pressure, the team will not set any expectations for when the form will be officially deployed.

### 6.2. Error Handling for Improper Inputs

This addresses three issues. The first is that there are no required elements. This will change in version 2. Second, empty elements may be added with no issues. A check will filter these submissions. Finally, the user can add as many elements to the arrays as they want, which can overload the database. Version two will have a cap on the number of elements a user can add.

### 6.3. CSS

The CSS of version 1 mainly serves to help users debug the program by clearly, visually separating each component in the code and on display, but it does not look presentable. The form will be styled in version 2.

### 6.4. Majors

The majors dropdown list in the form is the entire UCF major catalogue copied and pasted into a text file. Version two will have cherry-picked majors formatted more properly. The input field will also have a search feature so that users will not have to manually look for their major. Finally, the majors will be listed in alphabetical order.

### 6.5 Master Lists

This may not be implemented until version three, but there is an intention to make a master list of some fields. For example, if a user gathered some skills while working on a project, they may add those skills directly into the project's field, and it would still be added to the master list of all the skills they gathered.

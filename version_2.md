# Member Portfolio Service (MPS) - Version 2
The following document describes the structure of the code of version 2 of the Member Portfolio Service (MPS). This version expands upon the foundation laid in version 1, introducing more comprehensive fields, robust validation, and a dedicated backend server.

## Contents
<ul>
    <li>1. Run the Program (for devs)</li>
    <li>2. Version 2 Goals</li>
    <li>
        3. Form Enhancements
        <ul>
            <li>
                3.1. Expanded Components
                <ul>
                    <li>3.1.1. Bio and Resume Components</li>
                    <li>3.1.2. Education and Work Experience</li>                    
                </ul>
            </li>
            <li>
                3.2. Validation Logic
                <ul>
                    <li>3.2.1. Centralized Validations</li>
                    <li>3.2.2. Validation Usage in Components</li>                    
                </ul>
            </li>
            <li>3.3. Major Selection with Data</li>
            <li>3.4. CSS Refinements</li>
        </ul>
    </li>
    <li>
        4. Full-Stack Integration
        <ul>
            <li>4.1. Backend Server</li>
            <li>4.2. Data Transfer (POST/GET)</li>                    
        </ul>
    </li>
    <li>5. Conclusion</li>
    <li>
        6. Future Versions
        <ul>
            <li>6.1. Database Integration (Persistent Storage)</li>
            <li>6.2. User Authentication</li>
            <li>6.3. Advanced UI/UX Refinement</li>      
            <li>6.4. Deployment to Production</li>      
        </ul>
    </li>
</ul>

## 1. Run the Program (for devs)

Navigate to the `form`, `website/client`, or `website/server` folders.

Type the command: `npm i`

For the frontend (`form` or `website/client`):
Type the command: `npm run dev`

For the backend (`website/server`):
Type the command: `node app.js` (or `npm start` if configured)

## 2. Version 2 Goals

The main goal of version 2 is to move from a static prototype to a functional, full-stack application. This involves:
1.  **Completeness:** Adding all necessary fields for a professional portfolio (Education, Work Experience, Bio, etc.).
2.  **Reliability:** Implementing client-side validation to ensure data integrity before submission.
3.  **Connectivity:** Establishing a backend server to handle data flow between the input form and the display website.
4.  **Organization:** Better management of large datasets, such as the UCF majors list.

## 3. Form Enhancements

Version 2 significantly increases the complexity of the form while maintaining the symmetric component structure established in version 1.

### 3.1. Expanded Components

New components have been added to capture a wider range of user information.

#### 3.1.1. Bio and Resume Components

The `BioComponent` and `ResumeComponent` handle long-form text and external links respectively.

```javascript
// ./form/src/app/components/BioComponent.tsx

<div className={`${formStyles.child} ${formStyles.bio}`}>
    <BioComponent 
        bio={formData.bio} 
        setFormData={setFormData} 
    />
</div>
```

#### 3.1.2. Education and Work Experience

These components handle complex arrays of objects, allowing users to add multiple schools or jobs.

```javascript
// ./form/src/app/components/EducationsComponent.tsx

<div className={`${formStyles.child} ${formStyles.educations}`}>
    <EducationsComponent 
        educations={formData.educations} 
        setFormData={setFormData} 
    />
</div>
```

### 3.2. Validation Logic

A major addition in version 2 is the centralized validation utility.

#### 3.2.1. Centralized Validations

All validation logic is now contained within a single file, making it easy to update rules across the entire application.

```javascript
// ./form/src/app/utils/validations.ts

export const validateName = (name: string): string[] => {
    const errors: string[] = []
    
    let isSelected = name.length > 0
    let tooLarge = name.length > 30
    let hasNumber = /\d/.test(name)
    let isSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(name)

    if(!isSelected) errors.push("Name was not input")
    if(tooLarge) errors.push("Name input too long")
    if(hasNumber) errors.push("Name input contains a number")
    if(isSpecialCharacter) errors.push("Name contains invalid special character")

    return errors
}
```

#### 3.2.2. Validation Usage in Components

Components use these validation functions to provide real-time feedback to users.

```javascript
// ./form/src/app/components/NameComponent.tsx

<button
    onClick={(e) => {
        e.preventDefault()
        setErrors(validateName(name))
    }}
>
    Submit
</button>
```

### 3.3. Major Selection with Data

The `MajorComponent` now pulls from a comprehensive list of UCF majors, organized by department.

```javascript
// ./form/src/app/data/majors.ts

export const ucfMajors = [
    // Arts and Humanities
    "Art (BA)",
    "English (BA)",
    // ... Engineering and Computer Science
    "Computer Science (BS)",
    // ...
];
```

### 3.4. CSS Refinements

While the form continues to use basic borders for component isolation, the website client has begun implementing more specific styles for data display, such as background colors for different sections and better typography.

```css
/* ./website/client/src/app/styles/form.module.css */

.experience {
    background-color: #e9f7f6;
    padding: 1rem;
    margin-bottom: 1rem;
}

.experience h3 {
    font-size: 1.3rem;
    color: #2c3e50;
}
```

## 4. Full-Stack Integration

Version 2 introduces a backend to bridge the gap between the form and the website.

### 4.1. Backend Server

A simple Express server acts as the data hub.

```javascript
// ./website/server/app.js

app.post("/", (req, res) => {
  latestData = req.body
  res.json({status: `you just got a status!`})
})

app.get('/', (req, res) => {
  res.json(latestData)
})
```

### 4.2. Data Transfer (POST/GET)

The form submits data via a POST request, and the website retrieves it via a GET request.

```javascript
// ./form/src/app/components/Form.tsx (handleSubmit)

const response = await fetch("http://localhost:3001", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
});
```

## 5. Conclusion

Version 2 represents a significant step forward in making the Member Portfolio Service a reality. By adding robust validation, comprehensive fields, and a backend server, we have transitioned from a UI prototype to a functional application architecture.

## 6. Future Versions

Looking ahead to version 3 and beyond, the following features are planned:

### 6.1. Database Integration (Persistent Storage)

The current server stores data in memory, meaning it is lost when the server restarts. Version 3 will integrate a database (like MongoDB or PostgreSQL) for persistent storage.

### 6.2. User Authentication

To allow multiple users to manage their own portfolios, we will implement a secure login and authentication system.

### 6.3. Advanced UI/UX Refinement

Building on the basic CSS of version 2, future versions will focus on a more polished, professional design with interactive elements and better mobile responsiveness.

### 6.4. Deployment to Production

Once persistent storage and authentication are in place, the application will be deployed to a cloud hosting provider for public access.

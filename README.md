# Member Portfolio Service (MPS)
The following document describes the structure of the code of the Member Portfolio Service (MPS).

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
            <li>3.4. CSS</li>
        </ul>
    </li>
    <li>
        4. Validation and Utilities
        <ul>
            <li>4.1. Centralized Validations</li>
            <li>4.2. State Management Helpers</li>
        </ul>
    </li>
    <li>
        5. Website and Server Structure
        <ul>
            <li>5.1. Backend Server</li>
            <li>5.2. Website Client</li>
            <li>5.3. Frontend CSS</li>                    
        </ul>
    </li>
    <li>6. Conclusion</li>
    <li>
        7. Future Versions
        <ul>
            <li>7.1. Database Integration</li>
            <li>7.2. User Authentication</li>
            <li>7.3. UI/UX Refinement</li>      
            <li>7.4. Deployment</li>      
        </ul>
    </li>
</ul>

## 1. Run the Program (for devs)

The project is split into three main parts: the input form, the website client, and the backend server.

### 1.1. Setup
Navigate to each respective folder (`/form`, `/website/client`, and `/website/server`) and run:
`npm i`

### 1.2. Execution
- **Form:** `npm run dev` (inside `/form`)
- **Website Client:** `npm run dev` (inside `/website/client`)
- **Server:** `node app.js` (inside `/website/server`)

## 2. Goal

The goal of this service is to provide a solid and accessible foundation for a member portfolio system. The code is designed to be modular and symmetric, allowing for easy updates and maintenance. Each field in the database is isolated into its own component, ensuring that changes to one section do not interfere with others. This modularity, combined with consistent coding patterns across components, makes the project easy to understand and extend.

## 3. Form Structure

The form is built with a symmetric structure where every field is encapsulated in its own component.

### 3.1. The Name Section

The name section is a simple text input field with validation.

#### 3.1.1. The Name Section Call in Form.tsx

```javascript
// ./form/src/app/components/Form.tsx

<div className={`${formStyles.child} ${formStyles.name}`}>
    <NameComponent 
        name={formData.name} 
        setFormData={setFormData} 
    />
</div>
```

#### 3.1.2. The Name Section as a Component

```javascript
// ./form/src/app/components/NameComponent.tsx

const NameComponent = ({ 
    name, 
    setFormData 
}: NameComponentProps) => {
    const [errors, setErrors] = useState<string[]>([])

    return (
        <>
            <h3>Name</h3>
            {/* Error Printing Logic */}
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value, setFormData)}
            />
            <button
                onClick={(e) => {
                    e.preventDefault()
                    setErrors(validateName(name))
                }}
            >
                Submit
            </button>
        </>
    );
};
```

### 3.2. The Skills Section

The skills section handles an array of strings, allowing users to dynamically add or remove skills.

#### 3.2.1. The Skills Section Call in Form.tsx

```javascript
// ./form/src/app/components/Form.tsx

<div className={`${formStyles.child} ${formStyles.skills}`}>
    <SkillsComponent
        skills={formData.skills}
        setFormData={setFormData}
    />
</div>
```

#### 3.2.2. The Skills Section as a Component

```javascript
// ./form/src/app/components/SkillsComponent.tsx

{skills.map((skill, index) => (
    <div key={`skills[${index}]`}>
        <input
            type="text"
            value={skill}
            onChange={(e) =>
                setFormData((prev) => {
                    const result = [...prev.skills];
                    result[index] = e.target.value;
                    return { ...prev, skills: result };
                })
            }
        />
        <button onClick={() => /* Remove logic */}>Remove</button>
    </div>
))}
<button onClick={() => /* Add logic */}>Add Skill</button>
```

### 3.3. The Clubs Section

The clubs section handles an array of objects (`Experience`), representing a more complex data structure.

#### 3.3.1. The Clubs Section in Form.tsx

```javascript
// ./form/src/app/components/Form.tsx

<div className={`${formStyles.child} ${formStyles.clubs}`}>
    <ClubsComponent
        clubs = {formData.clubs}
        setFormData = {setFormData}
    />
</div>
```

#### 3.3.2. The Clubs Section as a Component

```javascript
// ./form/src/app/components/ClubsComponent.tsx

{clubs.map((club, index) => (
    <div key={`clubs[${index}]`} className={`${formStyles.child} ${formStyles.club}`}>
        <input
            placeholder="Club Name"
            value={club.name}
            onChange={(e) => setClubDetails(index, "name", e.target.value, setFormData)}
        />
        <textarea
            placeholder="Description"
            value={club.description}
            onChange={(e) => setClubDetails(index, "description", e.target.value, setFormData)}
        />
        {/* ... Title Input and Remove Button */}
    </div>
))}
```

### 3.4. CSS

The CSS is designed to isolate components for easier debugging and layout management.

```css
/* ./form/src/app/styles/form.module.css */
.child {
    border: 1px solid black;
    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
```

## 4. Validation and Utilities

The application includes centralized validation and helper functions to manage state updates.

### 4.1. Centralized Validations
Located in `utils/validations.ts`, these functions provide a consistent way to check inputs across all components.

### 4.2. State Management Helpers
Functions like `setName` and `setClubDetails` in `utils/onChanges.ts` abstract the complexity of updating nested state objects and arrays.

## 5. Website and Server Structure

The portfolio is displayed through a client-server architecture.

### 5.1. Backend Server
A Node.js/Express server (`/website/server`) handles the receipt of form data and serves it to the website client.

### 5.2. Website Client
The client (`/website/client`) fetches data from the server and renders the portfolio using components that mirror the structure of the input form, but focused on display rather than input.

### 5.3. Frontend CSS
The website client includes more refined styling for various sections like education, experience, and projects to provide a professional look.

## 6. Conclusion

Every decision in this program focuses on making the code a solid and accessible foundation. By isolating components and centralizing logic, the Member Portfolio Service is built for long-term growth and maintainability.

## 7. Future Versions

Planned improvements for future iterations include:
- **7.1. Database Integration:** Replacing in-memory storage with a persistent database.
- **7.2. User Authentication:** Securing the form and allowing multiple users.
- **7.3. UI/UX Refinement:** Polishing the visual design for both the form and the website.
- **7.4. Deployment:** Moving the entire stack to a production environment.

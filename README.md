# Member Resume Database (MRD)
The following document describes the current structure and architecture of the Member Resume Database (MRD). This project is built with a focus on modularity, architectural symmetry, and robust, centralized validation.

## Contents
<ul>
    <li>1. Run the Program (for devs)</li>
    <li>2. Architectural Goal</li>
    <li>
        3. Form Architecture
        <ul>
            <li>
                3.1. The Master Switch (Form.tsx)
            </li>
            <li>
                3.2. Child Component Symmetry
                <ul>
                    <li>3.2.1. Non-Array Sections</li>
                    <li>3.2.2. Array-Based Sections</li>                    
                </ul>
            </li>
            <li>3.3. Standardized Terminology</li>
        </ul>
    </li>
    <li>
        4. Centralized Logic
        <ul>
            <li>4.1. Global Validators (validations.ts)</li>
            <li>4.2. State Management (onChanges.ts)</li>
            <li>4.3. Prop-Driven Feedback</li>
        </ul>
    </li>
    <li>
        5. Full-Stack Integration
        <ul>
            <li>5.1. Backend Express Server</li>
            <li>5.2. Portfolio Website Client</li>
        </ul>
    </li>
    <li>6. Conclusion</li>
    <li>
        7. Future Roadmap
        <ul>
            <li>7.1. Database Persistence</li>
            <li>7.2. Secure Authentication</li>
            <li>7.3. UI/UX Refinement</li>      
        </ul>
    </li>
</ul>

## 1. Run the Program (for devs)

The project is split into three main directories: `/form`, `/website/client`, and `/website/server`.

### 1.1. Setup
Navigate to each respective folder and run:
`npm i`

### 1.2. Execution
- **Form UI:** `npm run dev` (inside `/form`)
- **Website Client:** `npm run dev` (inside `/website/client`)
- **Backend Server:** `node app.js` (inside `/website/server`)

## 2. Architectural Goal

The hallmark of the MRD project is **Symmetry**. Every feature, whether it is a single input like a Bio or a complex list like Education, follows the exact same architectural pattern. This consistency ensures that the codebase is predictable, easy to maintain, and simple to extend.

## 3. Form Architecture

The form utilizes a "Lifted State" pattern where the main parent component controls all data and all validation feedback.

### 3.1. The Master Switch (Form.tsx)

The `Form.tsx` component is the brain of the application. It manages the global `formErrors` state and triggers validation for every field simultaneously when the user clicks the final confirm button.

```javascript
// ./form/src/app/components/Form.tsx

const handleConfirmAll = () => {
    const errors: FormErrors = {
        name: validations.validateName(formData.name),
        bio: validations.validateBio(formData.bio),
        // ... all other fields ...
        skills: validations.validateSkills(formData.skills),
    };
    setFormErrors(errors);
};
```

### 3.2. Child Component Symmetry

Child components are "pure views" that receive data and errors via props.

#### 3.2.1. Non-Array Sections

Single fields like `Bio` or `Major` receive an `itemErrors` array.

```javascript
// ./form/src/app/components/BioComponent.tsx

{itemErrors.length > 0 && (
    <>
        <p>BIO IS NOT VALID BECAUSE:</p>
        {printArray(itemErrors, "Bio")}
    </>
)}
```

#### 3.2.2. Array-Based Sections

Dynamic lists like `Skills` or `Educations` receive both `sectionErrors` (e.g., "max 5 items") and a nested `itemErrors` array for granular feedback per entry.

```javascript
// ./form/src/app/components/SkillsComponent.tsx

{skills.map((skill, index) => (
    <SkillComponent 
        key={index}
        errors={itemErrors[index] || []}
        // ...
    />
))}
```

### 3.3. Standardized Terminology

To maintain a professional and consistent interface, all interactive elements use "Confirm" terminology (e.g., "Confirm All Skills", "Confirm All Information").

## 4. Centralized Logic

All business rules and state update logic are extracted from the components into dedicated utility files.

### 4.1. Global Validators (validations.ts)

Validators are symmetric. Singular functions (e.g., `validateSkill`) handle individual rules, while plural functions (e.g., `validateSkills`) manage section-level constraints and map individual rules across arrays.

```javascript
// ./form/src/app/utils/validations.ts

export const validateSkills = (skills: string[]): { sectionErrors: string[], itemErrors: string[][] } => {
    const sectionErrors = skills.length > 10 ? ["Max 10 skills"] : [];
    const itemErrors = skills.map(skill => validateSkill(skill));
    return { sectionErrors, itemErrors };
};
```

### 4.2. State Management (onChanges.ts)

State updates are handled by centralized helpers that use the functional update pattern of `setFormData`, ensuring that updates to one field do not interfere with others.

### 4.3. Prop-Driven Feedback

Errors are never managed locally within children. They are "pushed" down from the parent's `formErrors` state, ensuring that the "Master Switch" can reveal every possible error in the form at once.

## 5. Full-Stack Integration

The form data is submitted to a backend and displayed on a separate public portfolio website.

### 5.1. Backend Express Server
A simple Express server (`/website/server`) acts as the data hub, receiving form submittals via POST and serving them via GET.

### 5.2. Portfolio Website Client
The client (`/website/client`) mirrors the structural symmetry of the form but is optimized for clean, professional data display rather than input.

## 6. Conclusion

MRD is more than just a form; it is a demonstration of how strict architectural symmetry and centralized logic can create a robust, scalable application. By isolating every field and unifying the validation flow, we have built a foundation that is ready for production-level features.

## 7. Future Roadmap

Planned improvements include:
- **7.1. Database Persistence:** Replacing in-memory storage with MongoDB/PostgreSQL.
- **7.2. Secure Authentication:** Implementing user accounts and login.
- **7.3. UI/UX Refinement:** Polishing the visual design and mobile responsiveness.

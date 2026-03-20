import { JSX } from "react"

export const printArray = (errors: string[], field: string): JSX.Element[] => {
    return (
        errors.map((error, index) => {
            return <p key = {`${field}[${index}]`}>{error}</p>
        })
    )
}
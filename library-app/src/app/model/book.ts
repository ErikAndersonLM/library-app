export interface Book{
    id: string
    title: string
    gender: string
    language: string
    release_year: Date
    synopsis: string
    author: string
    userEmail: string
    saveChecked?: boolean
    readChecked?: boolean
}
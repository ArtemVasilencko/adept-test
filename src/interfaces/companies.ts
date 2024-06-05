export type Companies = Company[]

export interface Employee {
    firstName: string
    lastName: string
    jobTitle: string
    checked: boolean
    id: string
}

export interface Company {
    id: string
    name: string
    employees: Employee[]
    employeesCount: number
    address: string
    checked: boolean
}

export type CompanyFieldNames = 'name' | 'address'
export type EmployeeFieldNames = 'firstName' | 'lastName' | 'jobTitle'

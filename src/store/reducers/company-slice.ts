import { createSlice } from '@reduxjs/toolkit'
import {
    Companies,
    CompanyFieldNames,
    EmployeeFieldNames,
} from '../../interfaces/companies'
import { v4 as uuidv4 } from 'uuid'

interface CompanySliceState {
    companies: Companies
    activeCompanyId: string
}

const initialState: CompanySliceState = {
    companies: [],
    activeCompanyId: '',
}

export const companySlice = createSlice({
    name: 'Company',
    initialState,
    reducers: {
        setInitialCompanies(state, action) {
            state.companies = action.payload
        },
        setActiveCompanyId(state, action) {
            const { id, isChecked } = action.payload
            if (isChecked) {
                state.activeCompanyId = id
            } else {
                state.activeCompanyId =
                    state.companies.find((company) => company.checked)?.id || ''
            }
        },
        toggleCompanyCheckbox(state, action) {
            state.companies = state.companies.map((company) =>
                company.id === action.payload
                    ? { ...company, checked: !company.checked }
                    : company
            )
        },
        toggleEmployeeCheckbox(state, action) {
            state.companies.forEach((company) => {
                const employeeIndex = company.employees.findIndex(
                    (employee) => employee.id === action.payload
                )
                if (employeeIndex !== -1) {
                    company.employees[employeeIndex].checked =
                        !company.employees[employeeIndex].checked
                }
            })
        },
        toggleAllCompanyCheckboxes(state, action) {
            const { isChecked } = action.payload
            state.companies.forEach((company) => {
                company.checked = isChecked
            })
            isChecked
                ? (state.activeCompanyId = state.companies[0].id)
                : (state.activeCompanyId = '')
        },
        toggleAllEmployeeCheckboxes(state, action) {
            state.companies.forEach((company) => {
                if (company.id === state.activeCompanyId) {
                    company.employees.forEach(
                        (employee) => (employee.checked = action.payload)
                    )
                }
            })
        },
        addNewCompany(state) {
            state.companies.push({
                id: uuidv4(),
                name: '',
                employees: [],
                employeesCount: 0,
                address: '',
                checked: false,
            })
        },
        deleteCheckedCompanies(state) {
            state.companies = state.companies.filter(
                (company) => !company.checked
            )
        },
        addNewEmployee(state) {
            state.companies.forEach((company) => {
                if (company.id === state.activeCompanyId) {
                    company.employees.push({
                        firstName: '',
                        lastName: '',
                        jobTitle: '',
                        checked: false,
                        id: uuidv4(),
                    })
                    company.employeesCount = company.employees.length
                }
            })
        },
        deleteCheckedEmployees(state) {
            state.companies.forEach((company) => {
                if (company.id === state.activeCompanyId) {
                    company.employees = company.employees.filter(
                        (employee) => !employee.checked
                    )
                    company.employeesCount = company.employees.length
                }
            })
        },
        handleCompanyFieldChange(state, action) {
            const { id, fieldName, value } = action.payload
            state.companies.forEach((company) => {
                if (company.id === id) {
                    company[fieldName as CompanyFieldNames] = value
                }
            })
        },
        handleEmployeeFieldChange(state, action) {
            const { id, fieldName, value } = action.payload
            state.companies.forEach((company) => {
                if (company.id === state.activeCompanyId) {
                    company.employees.forEach((employee) => {
                        if (employee.id === id) {
                            employee[fieldName as EmployeeFieldNames] = value
                        }
                    })
                }
            })
        },
    },
})

export const {
    setInitialCompanies,
    setActiveCompanyId,
    toggleCompanyCheckbox,
    toggleEmployeeCheckbox,
    toggleAllCompanyCheckboxes,
    toggleAllEmployeeCheckboxes,
    addNewCompany,
    deleteCheckedCompanies,
    addNewEmployee,
    deleteCheckedEmployees,
    handleCompanyFieldChange,
    handleEmployeeFieldChange,
} = companySlice.actions
export default companySlice.reducer

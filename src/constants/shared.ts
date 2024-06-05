export const MODES: Record<string, 'companies' | 'employees'> = {
    COMPANIES: 'companies',
    EMPLOYEES: 'employees',
}

export const URLS = {
    COMPANIES: 'http://localhost:3000/companies',
}

export const FIELD_NAMES = {
    NAME: 'name',
    ADDRESS: 'address',
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    JOB_TITLE: 'jobTitle',
}

export const TITLES = {
    COMPANY: 'Компании',
    EMPLOYEE: 'Сотрудники',
}

export const FIELD_PLACEHOLDERS = {
    NAME: 'Введите название компании',
    ADDRESS: 'Введите адрес компании',
    FIRST_NAME: 'Введите имя сотрудника',
    LAST_NAME: 'Введите фамилию сотрудника',
    JOB_TITLE: 'Введите должность сотрудника',
}

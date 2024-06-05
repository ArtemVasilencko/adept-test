import { Table } from '../../components/table/table'
import { TITLES } from '../../constants/shared'
import { TableCompany } from '../../components/table/ui/table-company/table-company'
import { TableEmployees } from '../../components/table/ui/table-employees/table-employees'
import { MODES, URLS } from '../../constants/shared'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setInitialCompanies } from '../../store/reducers/company-slice'
import { useEffect } from 'react'
import styles from './main-page.module.scss'

export default function MainPage() {
    const dispatch = useAppDispatch()
    const { companies, activeCompanyId } = useAppSelector(
        (state) => state.companyReducer
    )
    const activeCompany = companies.find(
        (company) => company.id === activeCompanyId
    )

    useEffect(() => {
        const fetchCompanies = async () => {
            const response = await fetch(URLS.COMPANIES)
            const initialCompanies = await response.json()
            dispatch(setInitialCompanies(initialCompanies))
        }

        fetchCompanies()
    }, [dispatch])

    return (
        <>
            <div className={styles.mainPage}>
                <Table
                    title={TITLES.COMPANY}
                    mode={MODES.COMPANIES}
                    component={<TableCompany companies={companies} />}
                />
                {!!activeCompany && (
                    <Table
                        title={TITLES.EMPLOYEE}
                        mode={MODES.EMPLOYEES}
                        activeCompanyId={activeCompanyId}
                        component={
                            <TableEmployees
                                activeCompany={activeCompany?.employees}
                            />
                        }
                    />
                )}
            </div>
        </>
    )
}

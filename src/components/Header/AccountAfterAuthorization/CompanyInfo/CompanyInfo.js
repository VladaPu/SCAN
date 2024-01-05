import React from 'react'
import { useSelector } from 'react-redux';
import './CompanyInfo.css';
const CompanyInfo = () => {
  const companyQuantityInfo = useSelector(state => state.profile.companyInfo);
  return (
    <div className='companyBox'>
      <div >
        <span className='companyBox__usedCompany'>Использовано компаний</span>
        <span className='companyBox__black'>{companyQuantityInfo.eventFiltersInfo.usedCompanyCount}</span>
      </div>
      <div>
        <span className='companyBox__usedCompany'>Лимит по компаниям</span>
        <span className='companyBox__green'>{companyQuantityInfo.eventFiltersInfo.companyLimit}</span>
      </div>
    </div>
  )
}

export default CompanyInfo

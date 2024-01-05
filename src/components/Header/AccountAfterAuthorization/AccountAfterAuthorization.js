import React from 'react';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import Avatar from './Avatar/Avatar';
import LoaderInfo from './LoaderInfo/LoaderInfo';
import './AccountAfterAuthorization.css'
import { useSelector } from 'react-redux';

const AccountAfterAuthorization = () => {

const companyInfo = useSelector(state => state.profile.companyInfo)
return (
    <div className='accountPanel'>      
      {companyInfo ? <CompanyInfo /> : <LoaderInfo />}
      <Avatar />
    </div>
  )
}

export default AccountAfterAuthorization

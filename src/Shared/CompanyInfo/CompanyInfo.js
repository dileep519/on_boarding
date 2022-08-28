import Company from '../../Common/Images/company.png';
import './CompanyInfo.css';

export const CompanyInfo = ()=>{
    return <div className='companyInfoContainer'>
        <img src={Company} alt="Error"/>
        <span className='companyName'>Eden</span>
    </div>
}
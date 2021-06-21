import React from 'react'
import './InfoButton.css';
import TAgButton from './TagButton'

const InfoButton = () => {
    return (
        <>
            <div className="buttonGroup container-fluid">
                <TAgButton classTag="btn btn-outline-primary" Text="Electronic" />
                <TAgButton classTag="btn btn-outline-secondary" Text="TVs" />
                <TAgButton classTag="btn btn-outline-danger" Text="Health & Beauty" />
                <TAgButton classTag="btn btn-outline-success" Text="Babies & Toys" />
                <TAgButton classTag="btn btn-outline-danger" Text="Home & Lifestyle" />
                <TAgButton classTag="btn btn-outline-warning" Text="Women's Fashion" />
                <TAgButton classTag="btn btn-outline-info" Text="Men's Fashion" />
                <TAgButton classTag="btn btn-outline-warning" Text="Sports" />
                <TAgButton classTag="btn btn-outline-danger" Text="Health" />
                <TAgButton classTag="btn btn-outline-success" Text="TVs" />
                <TAgButton classTag="btn btn-outline-secondary" Text="Babies" />
                <TAgButton classTag="btn btn-outline-primary" Text="Women" />
                <TAgButton classTag="btn btn-outline-dark" Text="Electronic" />


            </div>
        </>
    )
}

export default InfoButton

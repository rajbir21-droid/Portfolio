import React from 'react';
import CertificateCard from './CertificateCard';
import { certifications } from '../record';
import './styles.css/Certification.css'
const Cardlist=()=>{
    return(
        <div className="main-certi">
        <h1 className="project-heading">
          Certi<strong className="purple">fications </strong>
        </h1>
          <div className="certs-body-div">
          {certifications.certifications.map((cert) => {
                 return <CertificateCard certificate={cert}/>;
            })}
          </div>
        </div>
    )

}
/**/
/**/
export default Cardlist;
import React,{Component} from 'react';
import './styles.css/CertificationCard.css'
class CertificateCard extends Component {
    render() {
      const certificate = this.props.certificate;
      return (
          <div className="cert-card">
            <div className="content">
              <a
                href={certificate.certificate_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  style={{ backgroundColor: certificate.color_code }}
                >
                  <img
                    className="logo_img"
                    src={certificate.logo_path}
                    alt={certificate.alt_name}
                  />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title">
                    Certificate
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" >
                {certificate.title}
              </h2>
              <h3
                className="cert-body-subtitle"
              >
                {certificate.subtitle}
              </h3>
            </div>
          </div>
      );
    }
  }
export default CertificateCard
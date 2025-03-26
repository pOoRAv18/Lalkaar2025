import React from 'react';
import styles from './Footer.module.css';
import {
  FaMapMarker,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <section id="contactus">
      <footer
        className={`${styles.ftco_footer} ${styles.ftco_section} ${styles.img}`}
      >
        <div className={`${styles.container}`}>
          <li className={`${styles.row}`}>
            <div
              className={`${styles.col_lg_6} ${styles.col_md_6} ${styles.mb_5} ${styles.mb_md_5}`}
            >
              <div className={`${styles.ftco_footer_widget} ${styles.mb_4}`}>
                <h2 className={`${styles.ftco_heading} ${styles.h2}`}>
                  ADDRESS
                </h2>
                <div className={`${styles.block_23} ${styles.mb_3}`}>
                  {/* <div> */}
                  <span>
                    <FaMapMarker className={`${styles.icons}`}></FaMapMarker>
                    <div
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                     NIT Hamirpur ,  Anu , Distt. Hamirpur 
                    </div>
                  </span>
                  <span
                    className={`${styles.text}`}
                    style={{ wordSpacing: '0.4em' }}
                  >
                    &emsp; 177005
                  </span>
                  {/* </div> */}

                  <br />

                  <div>
                    <span>
                      <FaPhoneAlt className={`${styles.icons}`}></FaPhoneAlt>
                      <span
                        className={`${styles.text}`}
                        style={{ wordSpacing: '0.4em' }}
                      >
                        Enquiry:
                      </span>
                    </span>

                    <br />

                    {/* <div> */}
                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="tel:+917876273862"
                      >
                      &emsp;&emsp;+91&#8209;7876273862
                      </a>
                    </span>

                    <div>{'\n'}</div>

                   

                    <div>{'\n'}</div>

                 

                    <div>{'\n'}</div>

                    {/* <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="tel:+917238856930"
                      >
                        &emsp;&emsp;+91&#8209;7238856930
                      </a>
                    </span> */}
                    <br />

                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      &emsp;&nbsp;Branding&nbsp;&amp;&nbsp;Communications:
                    </span>

                    <div />

                    {/* <div> */}
                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="tel:+917018388633"
                      >
                        &emsp;&emsp;+91&#8209;7018388633
                      </a>
                    </span>
                    <br />
                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      &emsp;&nbsp;Events:
                    </span>

                    <div />

                    {/* <div> */}
                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="tel:+918219831072"
                      >
                        &emsp;&emsp;+91&#8209;8219831072
                      </a>
                    </span>
                    {/* </div> */}
                  </div>

                  <br />

                  <div>
                    <span>
                      <FaEnvelope className={`${styles.icons}`}></FaEnvelope>
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="mailto: convener.lalkaar@nith.ac.in"
                      >
                        lalkaar@nith.ac.in
                      </a>
                    </span>
                  </div>
                </div>

                <h2 className={`${styles.ftco_heading} ${styles.h2}`}>
                  FOLLOW US
                </h2>
                <div
                  className={`${styles.ftco_footer_social} ${
                    styles.list_unstyled
                  } ${styles.float_md_left} ${styles.float_lft} ${
                    styles.mt - 2
                  }`}
                >
                 
              
                  <span>
                    <a
                      href="https://www.instagram.com/lalkaar_nith?igsh=MTJiZzh3eDh5dXN5eA=="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className={`${styles.icons_lower}`} />
                
                    </a>
                   
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`${styles.col_lg_6} ${styles.col_md_6} ${styles.mb_5} ${styles.mb_md_5}`}
            >
              <div className={`${styles.ftco_footer_widget} ${styles.mb_4}`}>
                <h2 className={`${styles.ftco_heading} ${styles.h2}`}>MAP</h2>
                <div className={`${styles.block_23} ${styles.mb_3}`}>
                  <iframe
                    title="google_map"
                    className={`${styles.gmap}`}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.2732826408082!2d76.52477767460273!3d31.708429074128432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a1%3A0x395f92d3a202a7d0!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1709669056628!5m2!1sen!2sin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </li>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

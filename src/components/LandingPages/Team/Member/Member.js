import React from 'react';
import styles from './Member.module.css';


function Member({ post, name, phone, id, mail, image, linkedin }) {
  return (
    <>
      <div
        className={`${styles.mobile} col-lg-3 col-md-3 col-sm-4 col-6 px-1 py-1`}
      >
        <div className={`${styles.staff} justify-content-center`}>
          <img
            src={`${image}`}
            alt={`${name}`}
            className={`${styles.img} mb-2 ms-auto`}
            width="200px"
          />
          <div className="info text-center">
            <h3 className={`p-0 m-0 text-uppercase ${styles.head}`}>
              {post && (
                <>
                  <b>{post}</b> <br />
                </>
              )}
              {name}
            </h3>
            <span className="position p-0 m-0">
              <a href={`tel:${phone}`} className={styles.links}>
                +91&#8209;{phone}
              </a>
            </span>
            <div>
              
            
             
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;

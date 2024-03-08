import React from 'react';
import styles from './About.module.css';
import Greencounter from '../GreenCounter/Greencounter';

const About = () => {
  return (
    <>
      <div id="about">
        <section id={styles['about']} className="ftco-section">
          <div className={styles['container']}>
            <div
              className={`${styles.row}
                    ${styles.justify_content_center}
                    ${styles.align_items_center}
                    ${styles.mb - 5}
                    ${styles.pb - 3}`}
            >
              <div
                className={`${styles.col_md_7} ${styles.heading_section} ${styles.text_center}`}
              >
                <h3
                  className={`${styles.subheading_mt - 5} ${styles.pt - 5}`}
                  style={{
                    color: '#6db549',
                    fontFamily: 'League Spartan',
                    marginTop: '75px',
                    fontWeight: '800',
                    letterSpacing: '2px',
                  }}
                >
                  &nbsp;
                </h3>
                <h2
                  className={styles['mb-1']}
                  style={{
                    color: 'white',
                    // fontSize: '3.5em',
                    fontfamily: 'League spartan',
                    fontWeight: '900',
                    marginBottom: '1em',
                    letterSpacing: '2px',
                  }}
                >
                  ABOUT US
                </h2>
              </div>
            </div>

            <div className={styles['row']}>
              <div className={styles['col-md-12']}>
                <div className={styles['block-7'] } id={styles['borderline']}>
                  <div className={styles['text-justify']}>
                    <p
                      style={{
                        fontFamily: 'Open Sans',
                        fontSize: '18px',
                        lineHeight: '1.8',
                        fontWeight: '500',
                        color: 'white',
                      }}
                    >
                    LALKAAR is the annual sports festival at NIT Hamirpur in Himachal Pradesh
                    Over time, Lalkaar has developed into the biggest and most anticipated campus event
                    where it attracts participants from all branches and year.
                    A remarkable display of extraordinary fervour in athletic skill is produced each year
                    when hundreds of competitors participate in a variety of sporting activities,
                    including track events, shot put, javelin throw, and many more.
                    The occasion, which was attended by one of the greatest assemblies of well-known athletes
                    and an enthusiastic crowd, has always inspired a desire to keep reaching new heights in the
                    quest of excellence and vitality among all persons.
                    Gear up yourself to witness the thrilling and frolicsome LALKAAR.
                    </p>
                  </div>
                </div>
              </div>

        

              

            
            </div>
          </div>
        </section>
      </div>
      <Greencounter />
    </>
  );
};

export default About;

import { useRef, useEffect, useState } from 'react'
import styles from './About.module.css'

function useFadeIn(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

const EDUCATION = [
  {
    degree: 'M.S.',
    field: 'Biomedical Engineering',
    sub: 'Human Factors Engineering',
    school: 'UNIST',
    period: 'Sep 2019 – Aug 2021',
    note: 'supervised by Prof. Dooyoung Jung, MD, PhD',
  },
  {
    degree: 'B.S.',
    field: 'Integrated Industrial Design Engineering',
    sub: 'Affective & Human Factors Engineering',
    school: 'UNIST',
    period: 'Mar 2011 – Feb 2017',
    note: '',
  },
]

const CERTIFICATIONS = [
  {
    year: '2018',
    title: 'Certified Ergonomics Engineer',
    title_ko: '인간공학기사',
    issuer: 'HRD Korea',
    type: 'cert',
  },
]

const TRAININGS = [
  {
    year: '2023',
    title: 'Medical Device RA Specialist Training',
    issuer: 'NIDS (National Institute of Medical Device Safety Information)',
    type: 'training',
  },
  {
    year: '2023',
    title: 'SaMD GMP Essentials',
    issuer: 'KTL (Korea Testing Laboratory)',
    type: 'training',
  },
]

export default function About() {
  const [headerRef, headerVisible] = useFadeIn()
  const [contentRef, contentVisible] = useFadeIn(0.05)

  return (
    <section id="about" className={`section grid-bg ${styles.section}`}>
      <div className="container">

        {/* Header */}
        <div ref={headerRef} className={`${styles.header} ${headerVisible ? styles.visible : ''}`}>
          <span className={styles.sectionLabel}>Background</span>
          <h2 className={styles.sectionTitle}>Academic & Credentials</h2>
        </div>

        <div ref={contentRef} className={`${styles.content} ${contentVisible ? styles.visible : ''}`}>

          {/* Education */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Education</h3>
            <div className={styles.eduList}>
              {EDUCATION.map(ed => (
                <div key={ed.field} className={styles.eduItem}>
                  <div className={styles.eduLeft}>
                    <span className={styles.degree}>{ed.degree}</span>
                  </div>
                  <div className={styles.eduRight}>
                    <p className={styles.eduField}>{ed.field}</p>
                    <p className={styles.eduSub}>{ed.sub}</p>
                    <p className={styles.eduMeta}>
                      <span className={styles.school}>{ed.school}</span>
                      <span className={styles.metaDot}>·</span>
                      <span className={styles.period}>{ed.period}</span>
                    </p>
                    {ed.note && <p className={styles.eduNote}>{ed.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Certification</h3>
            <div className={styles.credList}>
              {CERTIFICATIONS.map(c => (
                <div key={c.title} className={styles.credItem}>
                  <span className={styles.credYear}>{c.year}</span>
                  <div className={styles.credBody}>
                    <p className={styles.credTitle}>
                      {c.title}
                      {c.title_ko && <span className={styles.credTitleKo}> · {c.title_ko}</span>}
                    </p>
                    <p className={styles.credIssuer}>{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Training</h3>
            <div className={styles.credList}>
              {TRAININGS.map(t => (
                <div key={t.title} className={styles.credItem}>
                  <span className={styles.credYear}>{t.year}</span>
                  <div className={styles.credBody}>
                    <p className={styles.credTitle}>{t.title}</p>
                    <p className={styles.credIssuer}>{t.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

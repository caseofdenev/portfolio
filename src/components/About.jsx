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

const COMPETENCIES = [
  {
    area: 'SaMD Product Management',
    items: ['Regulatory strategy (MFDS, CE)', 'SLO & reliability governance', 'MVP scoping & roadmap', 'Clinical workflow integration'],
  },
  {
    area: 'AI & Clinical Domain',
    items: ['Digital pathology (WSI, IHC)', 'Orthopedic imaging (X-ray, OA)', 'AI-to-Report workflow design', 'Model output UX translation'],
  },
  {
    area: 'Human Factors & UX',
    items: ['Usability testing in clinical settings', 'Task analysis & workflow mapping', 'Interaction design for clinicians', 'iF Design Award (2020 & 2024)'],
  },
]

const CREDENTIALS = [
  { year: '2025', label: 'Product Manager, CONNECTEVE Inc.', note: 'Knee OA Diagnosis SaMD' },
  { year: '2021–25', label: 'PM · UX Designer, DeepBio Inc.', note: 'Cancer Diagnosis AI SaMD' },
  { year: '2021', label: 'M.S. Biomedical Eng. (Human Factors)', note: 'UNIST · Prof. Dooyoung Jung, MD, PhD' },
  { year: '2017', label: 'B.S. Industrial Design Eng. & Human Factors', note: 'UNIST' },
  { year: '2023', label: 'Medical Device RA Specialist Training', note: 'NIDS, Korea' },
  { year: '2023', label: 'SaMD GMP Essentials', note: 'KTL, Korea' },
  { year: '2018', label: 'Certified Ergonomics Engineer', note: 'HRD, Korea' },
]

export default function About() {
  const [headerRef, headerVisible] = useFadeIn()
  const [contentRef, contentVisible] = useFadeIn(0.05)

  return (
    <section id="about" className={`section grid-bg ${styles.section}`}>
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`${styles.header} ${headerVisible ? styles.visible : ''}`}
        >
          <span className={styles.sectionLabel}>About</span>
          <h2 className={styles.sectionTitle}>Background</h2>
        </div>

        <div
          ref={contentRef}
          className={`${styles.content} ${contentVisible ? styles.visible : ''}`}
        >
          {/* Intro column */}
          <div className={styles.introCol}>
            <div className={styles.introCard}>
              <p className={styles.introText}>
                I design and ship <strong>AI-powered Software as a Medical Device</strong> that
                clinicians actually use — bridging deep clinical workflow knowledge,
                human factors engineering, and regulatory-aware product thinking.
              </p>
              <p className={styles.introText}>
                With a background spanning industrial design, human factors, and biomedical
                engineering, I bring a systems perspective to complex healthcare AI products —
                from model output to patient outcome.
              </p>

              {/* Credential timeline */}
              <div className={styles.timeline}>
                {CREDENTIALS.map(({ year, label, note }) => (
                  <div key={label} className={styles.timelineItem}>
                    <span className={styles.timelineYear}>{year}</span>
                    <div className={styles.timelineBody}>
                      <p className={styles.timelineLabel}>{label}</p>
                      <p className={styles.timelineNote}>{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Competencies column */}
          <div className={styles.compCol}>
            {COMPETENCIES.map(({ area, items }) => (
              <div key={area} className={styles.compCard}>
                <h3 className={styles.compArea}>{area}</h3>
                <ul className={styles.compList}>
                  {items.map(item => (
                    <li key={item} className={styles.compItem}>
                      <span className={styles.compBullet} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

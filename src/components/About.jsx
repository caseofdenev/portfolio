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

/* ─── Data ────────────────────────────────────────────── */

const EDUCATION = [
  {
    badge: 'M.S.',
    period: 'Sep 2019',
    period2: '– Aug 2021',
    title: 'Biomedical Engineering',
    sub: 'Human Factors Engineering',
    school: 'UNIST',
    note: 'supervised by Prof. Dooyoung Jung, MD, PhD',
  },
  {
    badge: 'B.S.',
    period: 'Mar 2011',
    period2: '– Feb 2017',
    title: 'Integrated Industrial Design Engineering',
    sub: 'Affective & Human Factors Engineering',
    school: 'UNIST',
    note: '',
  },
]

const CERTIFICATIONS = [
  {
    badge: 'Cert',
    period: '2018',
    period2: '',
    title: 'Certified Ergonomics Engineer',
    sub: '인간공학기사',
    school: 'HRD Korea',
    note: '',
  },
]

const TRAININGS = [
  {
    badge: 'TR',
    period: '2023',
    period2: '',
    title: 'Medical Device RA Specialist Training',
    sub: '',
    school: 'NIDS (National Institute of Medical Device Safety Information)',
    note: '',
  },
  {
    badge: 'TR',
    period: '2023',
    period2: '',
    title: 'SaMD GMP Essentials',
    sub: '',
    school: 'KTL (Korea Testing Laboratory)',
    note: '',
  },
]

/* ─── Row sub-component ───────────────────────────────── */

function CredRow({ badge, period, period2, title, sub, school, note, isLast }) {
  return (
    <div className={`${styles.row} ${isLast ? styles.rowLast : ''}`}>
      <div className={styles.badge}>
        <span className={styles.badgeText}>{badge}</span>
      </div>
      <div className={styles.periodCol}>
        <span className={styles.yearText}>{period}</span>
        {period2 && <span className={styles.durationText}>{period2}</span>}
      </div>
      <div className={styles.colDivider} />
      <div className={styles.rowContent}>
        <p className={styles.rowTitle}>{title}</p>
        {sub && <p className={styles.rowSub}>{sub}</p>}
        <p className={styles.rowMeta}>
          <span className={styles.rowSchool}>{school}</span>
        </p>
        {note && <p className={styles.rowNote}>{note}</p>}
      </div>
    </div>
  )
}

/* ─── Section header row ──────────────────────────────── */

function SectionRow({ label }) {
  return (
    <div className={styles.sectionRow}>
      <span className={styles.sectionRowLabel}>{label}</span>
    </div>
  )
}

/* ─── Main component ──────────────────────────────────── */

export default function About() {
  const [headerRef, headerVisible] = useFadeIn()
  const [boardRef, boardVisible] = useFadeIn(0.05)

  return (
    <section id="about" className={`section grid-bg ${styles.section}`}>
      <div className="container">

        {/* Header */}
        <div ref={headerRef} className={`${styles.header} ${headerVisible ? styles.visible : ''}`}>
          <span className={styles.sectionLabel}>Background</span>
          <h2 className={styles.sectionTitle}>Academic & Credentials</h2>
        </div>

        {/* Board */}
        <div ref={boardRef} className={`${styles.board} ${boardVisible ? styles.visible : ''}`}>

          {/* EDUCATION */}
          <SectionRow label="Education" />
          {EDUCATION.map((item, i) => (
            <CredRow key={item.title} {...item} isLast={i === EDUCATION.length - 1} />
          ))}

          {/* CERTIFICATION */}
          <SectionRow label="Certification" />
          {CERTIFICATIONS.map((item, i) => (
            <CredRow key={item.title} {...item} isLast={i === CERTIFICATIONS.length - 1} />
          ))}

          {/* TRAINING */}
          <SectionRow label="Training" />
          {TRAININGS.map((item, i) => (
            <CredRow key={item.title} {...item} isLast={i === TRAININGS.length - 1} />
          ))}

        </div>

      </div>
    </section>
  )
}

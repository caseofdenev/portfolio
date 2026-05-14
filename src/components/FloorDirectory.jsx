import { useState, useRef, useEffect } from 'react'
import styles from './FloorDirectory.module.css'

const FLOORS = [
  {
    floor: '5F',
    year: '2025',
    duration: '10 mos',
    org: 'CONNECTEVE Inc.',
    project: 'Knee Osteoarthritis Decision Support SaMD',
    role: 'Product Manager',
    tags: ['SaMD', 'Orthopedic AI', 'Clinical Workflow'],
    slug: 'connecteve',
    available: false,
    accent: '#0E8A5E',
  },
  {
    floor: '4F',
    year: '2021 – 2025',
    duration: '3 yrs 6 mos',
    org: 'DeepBio Inc.',
    project: 'Cancer Diagnosis AI SaMD × 5 Products',
    role: 'Product Manager · UX Designer',
    tags: ['SaMD', 'Digital Pathology', 'Regulatory', 'AI'],
    slug: 'deepbio',
    available: true,
    accent: '#6B21A8',
    featured: true,
  },
  {
    floor: '3F',
    year: '2020 – 2021',
    duration: '8 mos',
    org: 'HAI Lab, UNIST',
    project: 'MYLE — Occupational Preventive Care Platform',
    role: 'UX Researcher · Designer',
    tags: ['UX Design', 'Preventive Care', 'Web · App'],
    slug: 'myle',
    available: false,
    accent: '#1A6FD4',
    award: 'iF Design Award 2024',
  },
  {
    floor: '2F',
    year: '2019',
    duration: '6 mos',
    org: 'HAI Lab, UNIST',
    project: 'PRIVY — Clinical Voiding Sound AI App',
    role: 'UX Researcher · Designer',
    tags: ['UX Design', 'AI', 'Mobile', 'Clinical'],
    slug: 'privy',
    available: false,
    accent: '#1A6FD4',
    award: 'iF Design Award 2020 · IDEA Finalist',
  },
  {
    floor: 'B1',
    year: '2015 – 2016',
    duration: '1 yr',
    org: 'Routin Inc.',
    project: 'UX Matchmaking Platform for Designers & SMBs',
    role: 'Founder',
    tags: ['Startup', 'Platform', 'UX Market'],
    slug: 'routin',
    available: false,
    accent: '#888888',
    basement: true,
  },
]

function useFadeIn() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return [ref, visible]
}

export default function FloorDirectory() {
  const [activeFloor, setActiveFloor] = useState(null)
  const [headerRef, headerVisible] = useFadeIn()
  const [boardRef, boardVisible] = useFadeIn()

  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className="container">

        {/* Section header */}
        <div ref={headerRef} className={`${styles.header} ${headerVisible ? styles.visible : ''}`}>
          <span className={styles.sectionLabel}>Floor Map</span>
          <h2 className={styles.sectionTitle}>Career Trajectory</h2>
          <p className={styles.sectionSub}>
            Each floor is a chapter. Navigate by role, domain, or time.
          </p>
        </div>

        {/* Building board */}
        <div ref={boardRef} className={`${styles.board} ${boardVisible ? styles.visible : ''}`}>

          {/* Building header */}
          <div className={styles.buildingHeader}>
            <div className={styles.buildingLabel}>
              <span className={styles.buildingIcon}>⊞</span>
              <span>Clinical AI Career Building</span>
            </div>
            <div className={styles.buildingMeta}>
              <span>SaMD PM · UX Designer · Founder</span>
              <span className={styles.metaDot}>·</span>
              <span>2015 – present</span>
            </div>
          </div>

          {/* Floor rows */}
          <div className={styles.floors}>
            {FLOORS.map((item, i) => (
              <div
                key={item.floor}
                className={`
                  ${styles.floorRow}
                  ${activeFloor === item.floor ? styles.active : ''}
                  ${item.basement ? styles.basementRow : ''}
                  ${item.featured ? styles.featuredRow : ''}
                `}
                style={{ '--accent': item.accent, animationDelay: `${i * 60}ms` }}
                onMouseEnter={() => setActiveFloor(item.floor)}
                onMouseLeave={() => setActiveFloor(null)}
                onClick={() => item.available && (window.location.hash = `/${item.slug}`)}
                role={item.available ? 'link' : undefined}
                tabIndex={item.available ? 0 : undefined}
              >
                {/* Floor number */}
                <div className={styles.floorNum}>
                  <span className={styles.floorNumText}>{item.floor}</span>
                </div>

                {/* Period column */}
                <div className={styles.periodCol}>
                  <span className={styles.yearText}>{item.year}</span>
                  <span className={styles.durationText}>{item.duration}</span>
                </div>

                {/* Vertical divider */}
                <div className={styles.colDivider} />

                {/* Main content */}
                <div className={styles.floorContent}>
                  <div className={styles.floorOrg}>{item.org}</div>
                  <div className={styles.floorProject}>{item.project}</div>
                  <div className={styles.floorMeta}>
                    <span className={styles.floorRole}>{item.role}</span>
                    {item.award && (
                      <>
                        <span className={styles.metaDot}>·</span>
                        <span className={styles.floorAward}>◈ {item.award}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Tags column */}
                <div className={styles.tagsCol}>
                  {item.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                {/* CTA column */}
                <div className={styles.ctaCol}>
                  {item.available
                    ? <span className={styles.ctaArrow}>→</span>
                    : <span className={styles.ctaSoon}>–</span>
                  }
                </div>

                {/* Active accent bar */}
                <div className={styles.accentBar} />
              </div>
            ))}
          </div>

          {/* Board footer */}
          <div className={styles.boardFooter}>
            <span>→ indicates available case study</span>
            <span className={styles.metaDot}>·</span>
            <span>Some materials have been anonymized for confidentiality.</span>
          </div>
        </div>

      </div>
    </section>
  )
}

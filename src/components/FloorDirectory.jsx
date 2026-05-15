import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './FloorDirectory.module.css'

const FLOORS = [
  {
    floor: '5F',
    period: '2025 · 10 mos',
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
    period: '2021 – 2025 · 3y 6m',
    org: 'DeepBio Inc.',
    project: 'Cancer Diagnosis AI SaMD × 5 Products',
    role: 'PM · UX Designer',
    tags: ['Digital Pathology', 'SaMD', 'Regulatory'],
    slug: 'deepbio',
    available: true,
    accent: '#6B21A8',
    featured: true,
  },
  {
    floor: '3F',
    period: '2020 – 2021 · 8 mos',
    org: 'HAI Lab, UNIST',
    project: 'MYLE — Occupational Preventive Care Platform',
    role: 'UX Researcher · Designer',
    tags: ['UX Design', 'Preventive Care'],
    slug: 'myle',
    available: false,
    accent: '#1A6FD4',
    award: 'iF Design Award 2024',
  },
  {
    floor: '2F',
    period: '2019 · 6 mos',
    org: 'HAI Lab, UNIST',
    project: 'PRIVY — Clinical Voiding Sound AI App',
    role: 'UX Researcher · Designer',
    tags: ['UX Design', 'AI', 'Mobile'],
    slug: 'privy',
    available: false,
    accent: '#1A6FD4',
    award: 'iF Design Award 2020 · IDEA Finalist',
  },
  {
    floor: 'B1',
    period: '2015 – 2016 · 1 yr',
    org: 'Routin Inc.',
    project: 'UX Matchmaking Platform for Designers & SMBs',
    role: 'Founder',
    tags: ['Startup', 'Platform'],
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
  const navigate = useNavigate()
  const [hoveredFloor, setHoveredFloor] = useState(null)
  const [headerRef, headerVisible] = useFadeIn()
  const [buildingRef, buildingVisible] = useFadeIn()

  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className="container">

        {/* Section header */}
        <div ref={headerRef} className={`${styles.header} ${headerVisible ? styles.visible : ''}`}>
          <span className={styles.sectionLabel}>Floor Map</span>
          <h2 className={styles.sectionTitle}>Career Trajectory</h2>
          <p className={styles.sectionSub}>Each floor is a chapter. Navigate by role, domain, or time.</p>
        </div>

        {/* Building */}
        <div ref={buildingRef} className={`${styles.building} ${buildingVisible ? styles.visible : ''}`}>

          {/* Roof beam */}
          <div className={styles.buildingRoof} />

          {/* Building header */}
          <div className={styles.buildingHeader}>
            <span className={styles.buildingLabel}>Clinical AI Career Building</span>
            <span className={styles.buildingMeta}>SaMD PM · UX Designer · Founder · 2015 – present</span>
          </div>

          {/* Floors */}
          {FLOORS.map((item) => {
            const isHovered = hoveredFloor === item.floor
            return (
              <div
                key={item.floor}
                className={`${styles.floor} ${item.basement ? styles.basement : ''} ${item.featured ? styles.featured : ''}`}
                style={{ '--accent': item.accent }}
                onMouseEnter={() => setHoveredFloor(item.floor)}
                onMouseLeave={() => setHoveredFloor(null)}
                onClick={() => item.available && navigate(`/${item.slug}`)}
                role={item.available ? 'link' : undefined}
                tabIndex={item.available ? 0 : undefined}
                data-hovered={isHovered || undefined}
              >
                {/* Floor number column */}
                <div className={styles.floorNum}>
                  <span className={styles.floorNumText}>{item.floor}</span>
                </div>

                {/* Accent bar */}
                <div className={styles.accentBar} />

                {/* Card content */}
                <div className={styles.cardContent}>
                  <div className={styles.cardHead}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardOrg}>{item.org}</span>
                      <span className={styles.cardSep}>·</span>
                      <span className={styles.cardPeriod}>{item.period}</span>
                    </div>
                    {item.available && (
                      <span className={styles.ctaArrow}>→</span>
                    )}
                  </div>
                  <p className={styles.cardProject}>{item.project}</p>
                  <p className={styles.cardRole}>{item.role}</p>
                  <div className={styles.cardBottom}>
                    <div className={styles.cardTags}>
                      {item.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    {item.award && (
                      <span className={styles.awardTag}>◈ {item.award}</span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}

          {/* Base beam */}
          <div className={styles.buildingBase} />

          {/* Footer */}
          <div className={styles.boardFooter}>
            → indicates available case study · Some materials have been anonymized for confidentiality.
          </div>

        </div>
      </div>
    </section>
  )
}

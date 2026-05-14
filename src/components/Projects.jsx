import { useRef, useEffect, useState } from 'react'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    index: '03',
    org: 'CONNECTEVE Inc.',
    slug: 'connecteve',
    title: 'Released a Multi-AI Platform SaMD for Knee Osteoarthritis Diagnosis Support',
    description:
      'Translated AI findings into clinician–patient interaction features. Supported orthopedic surgeons in X-ray assessment workflow integration. Defined MVP scope and rollout strategy.',
    roles: ['Product Manager'],
    period: 'Feb 2025 – Dec 2025',
    duration: '10 months',
    domain: 'Orthopedic AI',
    tags: ['SaMD', 'Knee OA', 'AI Diagnostics', 'Clinical Workflow'],
    color: '#0E8A5E', // CONNECTEVE accent (teal/green)
    comingSoon: true,
  },
  {
    index: '02',
    org: 'DeepBio Inc.',
    slug: 'deepbio',
    title: 'Sculpted 5 AI SaMD Products for Cancer Assessment with Tissue Pathology AI',
    description:
      'Led product design across prostate biopsy, frozen section (breast, lymph node, lung), and IHC Ki-67 quantification. Architected AI-to-Report workflow increasing reporting throughput 9×. Contributed to MFDS and CE regulatory submissions.',
    roles: ['Product Manager', 'UX Designer'],
    period: 'Jul 2021 – Jan 2025',
    duration: '3 yrs 6 mos',
    domain: 'Digital Pathology',
    tags: ['SaMD', 'Digital Pathology', 'AI', 'Regulatory', 'UX'],
    color: '#6B21A8', // DeepBio accent (purple)
    comingSoon: false,
    featured: true,
  },
  {
    index: '01b',
    org: 'HAI Lab, UNIST',
    slug: 'myle',
    title: 'MYLE — Occupational Preventive Care Platform',
    description:
      'Designed an integrated occupational health platform for workplace preventive care. Awarded iF Design Award 2024.',
    roles: ['UX Researcher', 'UX Designer'],
    period: '2020 – 2021',
    duration: '',
    domain: 'Occupational Health',
    tags: ['UX Design', 'Preventive Care', 'Web · App'],
    award: 'iF Design Award 2024',
    color: '#1A6FD4',
    comingSoon: true,
  },
  {
    index: '01a',
    org: 'HAI Lab, UNIST',
    slug: 'privy',
    title: 'PRIVY — Clinical Voiding Sound AI App',
    description:
      'Research and UX for a clinical app using AI to analyze voiding sound patterns for urological screening.',
    roles: ['UX Researcher', 'UX Designer'],
    period: '2019',
    duration: '',
    domain: "Women's & Urological Health",
    tags: ['UX Design', 'AI', 'Mobile', 'Clinical Research'],
    award: 'iF Design Award 2020 · IDEA Finalist',
    color: '#1A6FD4',
    comingSoon: true,
  },
  {
    index: '00',
    org: 'Routin Inc.',
    slug: 'routin',
    title: 'Founded a Matchmaking Platform Connecting UX Designers and Small Businesses',
    description:
      'Founded "UX Market," a crowdsourced UX research platform. Secured government funding (2015).',
    roles: ['Founder'],
    period: '2015 – 2016',
    duration: '',
    domain: 'Platform · Marketplace',
    tags: ['Founder', 'UX Platform', 'Startup'],
    color: '#888888',
    comingSoon: true,
    compact: true,
  },
]

// Intersection Observer hook for fade-in
function useFadeIn() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return [ref, visible]
}

function ProjectCard({ project, delay }) {
  const [ref, visible] = useFadeIn()
  const {
    index, org, title, description, roles, period, duration,
    domain, tags, award, color, comingSoon, featured, compact,
  } = project

  return (
    <article
      ref={ref}
      className={`
        ${styles.card}
        ${featured ? styles.featured : ''}
        ${compact ? styles.compact : ''}
        ${visible ? styles.visible : ''}
      `}
      style={{ '--project-color': color, animationDelay: `${delay}ms` }}
    >
      <div className={styles.cardInner}>
        {/* Index + org row */}
        <div className={styles.cardMeta}>
          <span className={styles.cardIndex}>{index}</span>
          <span className={styles.cardOrg}>{org}</span>
          {featured && <span className={styles.featuredBadge}>Featured</span>}
        </div>

        {/* Domain */}
        <p className={styles.cardDomain}>{domain}</p>

        {/* Title */}
        <h3 className={styles.cardTitle}>{title}</h3>

        {/* Description — hidden on compact */}
        {!compact && <p className={styles.cardDesc}>{description}</p>}

        {/* Award */}
        {award && (
          <div className={styles.awardBadge}>
            <span className={styles.awardIcon}>◈</span>
            <span>{award}</span>
          </div>
        )}

        {/* Footer row */}
        <div className={styles.cardFooter}>
          <div className={styles.cardTags}>
            {roles.map(r => (
              <span key={r} className={styles.roleTag}>{r}</span>
            ))}
            {tags.map(t => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
          <div className={styles.cardPeriod}>
            <span>{period}</span>
            {duration && <span className={styles.duration}>· {duration}</span>}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cardCta}>
          {comingSoon ? (
            <span className={styles.comingSoon}>Case study coming soon</span>
          ) : (
            <a href={`#/${project.slug}`} className={styles.ctaLink}>
              View case study →
            </a>
          )}
        </div>
      </div>

      {/* Color accent bar */}
      <div className={styles.accentBar} />
    </article>
  )
}

export default function Projects() {
  const [headerRef, headerVisible] = useFadeIn()

  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className="container">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} ${headerVisible ? styles.visible : ''}`}
        >
          <span className={styles.sectionLabel}>Work</span>
          <h2 className={styles.sectionTitle}>Case Studies</h2>
          <p className={styles.sectionSub}>
            End-to-end PM and UX work across AI diagnostics, clinical workflow design,
            and regulated software as a medical device.
          </p>
        </div>

        {/* Project grid */}
        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 80} />
          ))}
        </div>

        <p className={styles.disclaimer}>
          Some materials have been anonymized for confidentiality.
        </p>
      </div>
    </section>
  )
}

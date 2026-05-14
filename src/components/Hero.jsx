import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef(null)

  // Parallax on scroll (subtle)
  useEffect(() => {
    const el = heroRef.current
    const onScroll = () => {
      const y = window.scrollY
      if (el) el.style.setProperty('--scroll-y', `${y * 0.3}px`)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="top" className={`grid-bg ${styles.hero}`} ref={heroRef}>
      <div className={`container ${styles.inner}`}>
        {/* Korean name tag */}
        <p className={styles.nameKo} aria-hidden="true">김도경 · Kim Do Kyung</p>

        {/* Main heading */}
        <h1 className={styles.name}>Denev Kim</h1>

        {/* Role lines */}
        <div className={styles.roleBlock}>
          <p className={styles.roleMain}>SaMD Product Manager</p>
          <p className={styles.roleSub}>for Clinical Workspaces</p>
        </div>

        {/* Tagline */}
        <p className={styles.tagline}>Architect of AI Workflows in Healthcare</p>

        {/* Competency chips */}
        <div className={styles.chips}>
          {[
            'AI SaMD', 'Digital Pathology', 'Orthopedic AI',
            'Clinical Workflow', 'Human Factors', 'Regulatory-Aware',
          ].map(chip => (
            <span key={chip} className={styles.chip}>{chip}</span>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <a href="#work" className={styles.ctaPrimary}>View Work</a>
          <a href="#about" className={styles.ctaSecondary}>About Me</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#work" className={styles.scrollDown} aria-label="Scroll to work">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </a>

      {/* Decorative stat strip */}
      <div className={styles.statStrip}>
        <div className={`container ${styles.stats}`}>
          <div className={styles.stat}>
            <span className={styles.statNum}>5</span>
            <span className={styles.statLabel}>AI SaMD Products</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>9×</span>
            <span className={styles.statLabel}>Reporting Throughput</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>2</span>
            <span className={styles.statLabel}>iF Design Awards</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>7+</span>
            <span className={styles.statLabel}>Years in Healthcare</span>
          </div>
        </div>
      </div>
    </section>
  )
}

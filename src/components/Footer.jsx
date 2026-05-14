import { useEffect, useRef } from 'react'
import styles from './Footer.module.css'

// Email obfuscation — 크롤러 수집 방지
// 실제 이메일은 JS로 조합, HTML에 직접 노출하지 않음
function ObfuscatedEmail() {
  const linkRef = useRef(null)

  useEffect(() => {
    // 이메일을 역순 배열로 저장 후 런타임에 조합
    const parts = ['moc', '.liamg', '@vened', 'foeseac'].reverse()
    const email = parts.join('')
    const el = linkRef.current
    if (el) {
      el.href = `mailto:${email}`
      el.textContent = email
    }
  }, [])

  return (
    <a
      ref={linkRef}
      className={styles.emailLink}
      aria-label="Send email to Denev Kim"
      href="#contact"
    >
      {/* populated by JS */}
    </a>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className={`grid-bg ${styles.footer}`}>
      <div className={`container ${styles.inner}`}>
        {/* Contact section */}
        <div className={styles.contactBlock}>
          <span className={styles.sectionLabel}>Contact</span>
          <h2 className={styles.contactTitle}>Let's connect.</h2>
          <p className={styles.contactSub}>
            Open to SaMD PM opportunities in Singapore and globally.
          </p>

          <div className={styles.contactRow}>
            <div className={styles.contactItem}>
              <span className={styles.contactItemLabel}>Email</span>
              <ObfuscatedEmail />
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactItemLabel}>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/case-of-denev"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                @case-of-denev ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Denev DoKyung Kim. All rights reserved.
          </p>
          <p className={styles.confidential}>
            Some materials have been anonymized for confidentiality.
          </p>
          <p className={styles.built}>
            Built with React · Deployed on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  )
}

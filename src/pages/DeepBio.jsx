import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import styles from './DeepBio.module.css'

/* ─── Data ────────────────────────────────────────────── */

const OVERVIEW = [
  { label: 'Organization', value: 'DeepBio Inc.' },
  { label: 'Role', value: 'PM · UX Designer' },
  { label: 'Co-work with', value: 'Dev and AI Eng., Designer, RA · Pathologists in European Diagnostic Organization' },
  { label: 'Period', value: 'Jul. 2021 – Jan. 2025 (3y6m)' },
]


const WORKFLOW_POINTS = [
  'Analyzes histopathology images to precisely detect malignant cells within tissue specimens.',
  'Identifies diagnostically relevant findings to assess cancer presence and severity.',
  'Structures and summarizes these findings into a comprehensive diagnostic report.',
  'Automates the end-to-end workflow to reduce turnaround time and clinician workload.',
]

const CASES = [
  {
    id: 'case-1',
    indication: 'Prostate Biopsy',
    title: 'Re-architected an AI-to-Clinical Translation Architecture',
    subtitle: 'Cancer Diagnosis Decision Support SaMD (Prostate)',
    image: 'ppt-11.svg',
    problem: [
      'Clinical measurement standards were not embedded in the AI workflow.',
      'AI outputs were disconnected from diagnostic documentation, requiring manual bridging by pathologists.',
    ],
    solution: [
      'Redesigned the end-to-end diagnostic workflow and reporting logic from AI inference to structured report.',
      'Built a structured, traceable AI-to-report pipeline within a regulated SaMD framework.',
    ],
    outcome: [
      'Reduced cognitive translation effort between image interpretation and documentation.',
      'Improved structural consistency and strengthened clinical and regulatory readiness.',
    ],
  },
  {
    id: 'case-2',
    indication: 'Prostate · Enterprise Deployment',
    title: 'Operationalized Enterprise AI Reporting in a European Diagnostic Organization',
    subtitle: 'Cancer Diagnosis Decision Support SaMD (Prostate)',
    image: 'ppt-12.svg',
    problem: [
      'AI reporting had to align with institutional documentation standards not reflected in the base product.',
      'Manual report synthesis created significant workflow bottlenecks for pathologists.',
    ],
    solution: [
      'Led Clinical Co-Development sessions over 6 months with a practicing pathologist and cross-functional teams.',
      'Iterated monthly RUO alpha builds with practicing pathologists.',
      'Architected a configurable reporting framework aligned with institutional formats.',
      'Proposed and led development of a lesion distribution visualization.',
    ],
    outcome: [
      'Reduced reporting time from 30+ to ~5 minutes per case. Validated by European pathologists.',
      'Enabled scalable enterprise deployment across the organization.',
    ],
    metric: { value: '9×', label: 'Reporting throughput improvement' },
  },
  {
    id: 'case-3',
    indication: 'Frozen Section · IHC Ki-67',
    title: 'Expanded Clinical Indications to IHC Quantification and Frozen Section',
    subtitle: 'Expanded AI SaMD Portfolio Across Diagnostic Indications',
    image: 'ppt-13.svg',
    problem: [
      'Required to translate increasingly complex AI outputs — continuous Ki-67 scores and intraoperative frozen section findings — into regulated SaMD processes.',
      'Each indication had distinct clinical workflows, urgency levels, and reporting conventions.',
    ],
    solution: [
      'Led product design across IHC Ki-67 quantification and frozen section (breast, lymph node, lung) indications.',
      'Established indication-specific report structures balancing clinical utility with regulatory traceability.',
      'Coordinated alignment between AI model outputs, UX, and regulatory documentation across indications.',
    ],
    outcome: [
      'Achieved regulatory submission readiness for Ki-67 IHC quantification and frozen section products.',
      'Expanded the AI SaMD portfolio to 5 diagnostic indications under a unified platform architecture.',
    ],
  },
  {
    id: 'case-4',
    indication: 'Cross-functional · Governance',
    title: 'Aligned Engineering Velocity with Executive Oversight and Cross-Functional Readiness',
    subtitle: 'Established Release Control and Risk Governance',
    image: 'ppt-14.svg',
    problem: [
      'A release proceeded without explicit approval — exposing gaps in sign-off processes.',
      'Rapid release cycles increased misalignment between engineering and BD teams.',
      'No structured risk classification or escalation thresholds existed across the organization.',
    ],
    solution: [
      'Release Control Protocol: Instituted mandatory executive sign-off prior to launch. Designed structured Release Prep document summarizing As-Is to To-Be product changes. Embedded inclusive communication into monthly deployment cadence.',
      'Incident & Risk Governance: Led organizational-scale postmortems and documentation. Defined escalation thresholds for leadership reporting. Implemented clinical-impact-based risk-level classification.',
    ],
    outcome: [
      'Improved release confidence for a multi-AI integrated SaMD platform.',
      'Established a repeatable cross-functional QA and release process adopted across the engineering org.',
    ],
  },
]

/* ─── Sub-components ──────────────────────────────────── */

function PSO({ problem, solution, outcome }) {
  return (
    <div className={styles.pso}>
      <div className={styles.psoBlock}>
        <h4 className={styles.psoLabel}>Problem discovery</h4>
        <ul className={styles.psoList}>
          {problem.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
      <div className={styles.psoBlock}>
        <h4 className={styles.psoLabel}>Solution / Strategy</h4>
        <ul className={styles.psoList}>
          {solution.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
      <div className={`${styles.psoBlock} ${styles.outcomeBlock}`}>
        <h4 className={styles.psoLabel}>Outcome</h4>
        <ul className={styles.psoList}>
          {outcome.map((o, i) => <li key={i}>{o}</li>)}
        </ul>
      </div>
    </div>
  )
}

/* ─── Main page ───────────────────────────────────────── */

export default function DeepBio() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <main className={styles.main}>

        {/* ── Cover ── */}
        <section className={`grid-bg ${styles.cover}`}>
          <div className={`container ${styles.coverInner}`}>
            <div className={styles.coverTop}>
              <div className={styles.logoMark}>deepbio</div>
              <span className={styles.tag}>Pathology</span>
            </div>
            <h1 className={styles.coverTitle}>
              SaMD supporting cancer diagnosis through<br />
              AI-based digital pathology analysis
            </h1>
            <div className={styles.overviewTable}>
              {OVERVIEW.map(({ label, value }) => (
                <div key={label} className={styles.overviewRow}>
                  <span className={styles.overviewLabel}>{label}</span>
                  <span className={styles.overviewValue}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Clinical Workflow ── */}
        <section className={styles.workflowSection}>
          <div className="container">
            <div className={styles.workflowHeader}>
              <span className={styles.sectionLabel}>Context</span>
              <h2 className={styles.sectionTitle}>Clinical Workflow Context in Histopathology</h2>
            </div>

            {/* Flow diagram — illustration from slide */}
            <div className={styles.workflowImage}>
              <img
                src="./images/deepbio/ppt-10.svg"
                alt="Clinical Workflow Context in Histopathology"
                className={styles.workflowImg}
                loading="lazy"
              />
            </div>

            <div className={styles.workflowStatement}>
              <p>
                <strong>Supports pathologists in making accurate and timely diagnostic decisions
                for cancer confirmation and clinical reporting.</strong>
              </p>
            </div>

            <ol className={styles.workflowPoints}>
              {WORKFLOW_POINTS.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ol>

            <p className={styles.disclaimer}>*Some materials have been anonymized for confidentiality.</p>
          </div>
        </section>

        {/* ── Cases ── */}
        {CASES.map((c, i) => (
          <section
            key={c.id}
            id={c.id}
            className={`${styles.caseSection} ${i % 2 === 1 ? styles.caseSectionAlt : ''}`}
          >
            <div className="container">
              {/* Case header */}
              <div className={styles.caseHeader}>
                <div className={styles.caseHeaderLeft}>
                  <span className={styles.indicationTag}>{c.indication}</span>
                  <p className={styles.caseSubtitle}>{c.subtitle}</p>
                  <h2 className={styles.caseTitle}>{c.title}</h2>
                </div>
                {c.metric && (
                  <div className={styles.metricBox}>
                    <span className={styles.metricValue}>{c.metric.value}</span>
                    <span className={styles.metricLabel}>{c.metric.label}</span>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className={styles.caseImage}>
                <img
                  src={`./images/deepbio/${c.image}`}
                  alt={c.subtitle}
                  className={styles.caseImg}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>

              {/* Problem / Solution / Outcome */}
              <PSO
                problem={c.problem}
                solution={c.solution}
                outcome={c.outcome}
              />
            </div>
          </section>
        ))}

        {/* ── Back nav ── */}
        <div className={`container ${styles.backNav}`}>
          <button onClick={() => navigate('/')} className={styles.backBtn}>
            ← Back to all work
          </button>
          <p className={styles.disclaimer}>Some materials have been anonymized for confidentiality.</p>
        </div>

      </main>
      <Footer />
    </>
  )
}

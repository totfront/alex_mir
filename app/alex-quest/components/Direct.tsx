import { C, FONT_PIXEL, FONT_BODY, screenBase } from '../lib/theme';
import { CV } from '../data/cv';
import { PixelButton } from './PixelButton';

const linkStyle: React.CSSProperties = {
  color: C.cyan,
  textDecoration: 'none',
  borderBottom: `1px dotted ${C.cyan}`,
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: FONT_PIXEL,
        fontSize: 12,
        color: C.magenta,
        letterSpacing: 1,
        margin: '0 0 16px',
        paddingBottom: 6,
        borderBottom: `1px dashed ${C.line}`,
      }}
    >
      {children}
    </div>
  );
}

export function Direct({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ ...screenBase, display: 'block', overflowY: 'auto', padding: 0 }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(20px,4vw,32px) clamp(14px,4vw,24px) clamp(60px,10vw,80px)' }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: FONT_PIXEL, fontSize: 9, color: C.cyan, background: 'none',
            border: `2px solid ${C.cyan}`, padding: '8px 12px', cursor: 'pointer', marginBottom: 28,
          }}
        >
          ← BACK
        </button>

        <div style={{ borderBottom: `3px solid ${C.magenta}`, paddingBottom: 20, marginBottom: 28 }}>
          <h1 style={{ fontFamily: FONT_PIXEL, fontSize: 'clamp(20px,4vw,30px)', color: C.ink, margin: 0, textShadow: `3px 3px 0 ${C.magenta}` }}>
            {CV.name}
          </h1>
          <div style={{ fontFamily: FONT_BODY, color: C.amber, fontSize: 18, marginTop: 10, fontWeight: 600 }}>
            {CV.title} · {CV.location}
          </div>
          <div style={{ fontFamily: FONT_BODY, color: C.inkDim, fontSize: 14, marginTop: 8, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href={`mailto:${CV.email}`} style={linkStyle}>{CV.email}</a>
            <a href={CV.linkedin} target="_blank" rel="noreferrer" style={linkStyle}>LinkedIn</a>
            <span>{CV.phone}</span>
          </div>
        </div>

        <p style={{ fontFamily: FONT_BODY, color: C.ink, fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
          {CV.summary}
        </p>

        <SectionTitle>Experience</SectionTitle>
        {CV.experience.map((job, i) => (
          <div key={i} style={{ marginBottom: 26 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'baseline' }}>
              <div style={{ fontFamily: FONT_BODY, fontSize: 18, color: C.ink, fontWeight: 700 }}>
                {job.role} <span style={{ color: C.cyan, fontWeight: 500 }}>· {job.company}</span>
              </div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.inkDim }}>{job.when} · {job.mode}</div>
            </div>
            {job.groups.map((g, gi) => (
              <div key={gi} style={{ marginTop: 12, paddingLeft: 14, borderLeft: `2px solid ${C.line}` }}>
                <div style={{ fontFamily: FONT_BODY, fontSize: 15, color: C.amber, fontWeight: 600 }}>
                  {g.product}{g.blurb && <span style={{ color: C.inkDim, fontWeight: 400, fontSize: 13 }}> — {g.blurb}</span>}
                </div>
                <ul style={{ margin: '8px 0 0', paddingLeft: 18 }}>
                  {g.points.map((p, pi) => (
                    <li key={pi} style={{ fontFamily: FONT_BODY, fontSize: 14.5, color: C.ink, lineHeight: 1.6, marginBottom: 5 }}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        <SectionTitle>Skills</SectionTitle>
        <div style={{ marginBottom: 30 }}>
          {Object.entries(CV.skills).map(([cat, items]) => (
            <div key={cat} style={{ marginBottom: 14 }}>
              <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.cyan, fontWeight: 700, marginBottom: 6 }}>{cat}</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {items.map((s) => (
                  <span key={s} style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.ink, background: C.panel, border: `1px solid ${C.line}`, padding: '4px 10px', borderRadius: 4 }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SectionTitle>Community &amp; Speaking</SectionTitle>
        <ul style={{ margin: '0 0 30px', paddingLeft: 18 }}>
          {CV.extras.map((e, i) => (
            <li key={i} style={{ fontFamily: FONT_BODY, fontSize: 14.5, color: C.ink, lineHeight: 1.6, marginBottom: 5 }}>{e}</li>
          ))}
        </ul>

        <SectionTitle>Education</SectionTitle>
        {CV.education.map((ed, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 8 }}>
            <span style={{ fontFamily: FONT_BODY, fontSize: 14.5, color: C.ink }}>{ed.what} <span style={{ color: C.cyan }}>· {ed.where}</span></span>
            <span style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.inkDim }}>{ed.when}</span>
          </div>
        ))}

        <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <PixelButton color={C.magenta} onClick={() => { window.location.href = `mailto:${CV.email}`; }}>Email Alex</PixelButton>
          <PixelButton color={C.cyan} onClick={() => window.open(CV.linkedin, '_blank')}>LinkedIn</PixelButton>
        </div>
      </div>
    </div>
  );
}

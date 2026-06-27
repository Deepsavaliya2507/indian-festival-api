export const metadata = {
  title: 'Indian Festival API — Free REST API for Indian Festivals & Holidays',
  description:
    'Free, open-source REST API for Indian festivals, national holidays, and auspicious dates. Filter by religion, month, state, and more.',
};

// const BASE = 'https://indian-festival-api.vercel.app';

const BASE = '';

const endpoints = [
  {
    method: 'GET',
    path: '/api/festivals',
    desc: 'Get all festivals',
    example: `${BASE}/api/festivals`,
  },
  {
    method: 'GET',
    path: '/api/festivals?month=10',
    desc: 'Festivals in October',
    example: `${BASE}/api/festivals?month=10`,
  },
  {
    method: 'GET',
    path: '/api/festivals?religion=hindu',
    desc: 'Filter by religion (hindu / islam / christian / sikh / buddhist / jain / national)',
    example: `${BASE}/api/festivals?religion=hindu`,
  },
  {
    method: 'GET',
    path: '/api/festivals?state=Gujarat',
    desc: 'Filter by Indian state',
    example: `${BASE}/api/festivals?state=Gujarat`,
  },
  {
    method: 'GET',
    path: '/api/festivals?national_holiday=true',
    desc: 'Only national public holidays',
    example: `${BASE}/api/festivals?national_holiday=true`,
  },
  {
    method: 'GET',
    path: '/api/festivals?upcoming=true',
    desc: 'Next 10 upcoming festivals from today',
    example: `${BASE}/api/festivals?upcoming=true`,
  },
  {
    method: 'GET',
    path: '/api/festivals?date=2026-10-23',
    desc: 'Festival on a specific date (YYYY-MM-DD)',
    example: `${BASE}/api/festivals?date=2026-10-23`,
  },
  {
    method: 'GET',
    path: '/api/festivals?tag=harvest',
    desc: 'Filter by tag',
    example: `${BASE}/api/festivals?tag=harvest`,
  },
  {
    method: 'GET',
    path: '/api/festivals/:id',
    desc: 'Get single festival by ID',
    example: `${BASE}/api/festivals/1`,
  },
  {
    method: 'GET',
    path: '/api/search?q=diwali',
    desc: 'Search festivals by name, description, or local name',
    example: `${BASE}/api/search?q=diwali`,
  },
  {
    method: 'GET',
    path: '/api/meta',
    desc: 'Available religions, states, tags, and total count',
    example: `${BASE}/api/meta`,
  },
];

const sampleResponse = `{
  "success": true,
  "count": 1,
  "data": [
    {
      "id": 31,
      "name": "Diwali",
      "local_names": {
        "hindi": "दीपावली",
        "gujarati": "દિવાળી",
        "tamil": "தீபாவளி"
      },
      "date_2026": "2026-11-01",
      "month": 11,
      "day": 1,
      "fixed_date": false,
      "type": "festival",
      "religion": "hindu",
      "national_holiday": false,
      "restricted_holiday": true,
      "states": ["all"],
      "description": "Festival of lights...",
      "also_known_as": ["Deepavali", "Festival of Lights"],
      "tags": ["lights", "fireworks", "diyas", "lakshmi"]
    }
  ]
}`;

export default function Home() {
  return (
    <main style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: '#0f0f0f', color: '#e8e8e8', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffcd3c 100%)', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '8px' }}>🪔</div>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, color: '#fff', margin: '0 0 16px 0', lineHeight: 1.2 }}>
          Indian Festival API
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Free, open-source REST API for Indian festivals, national holidays &amp; auspicious dates.
          No API key required.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/YOUR_GITHUB/indian-festival-api"
            style={{ background: '#fff', color: '#0f0f0f', padding: '12px 28px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}
          >
            ⭐ GitHub
          </a>
          <a
            href="/api/festivals"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '15px', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            Try API →
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#1a1a1a', padding: '40px 24px', borderBottom: '1px solid #2a2a2a' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px', textAlign: 'center' }}>
          {[
            { num: '40+', label: 'Festivals' },
            { num: '7', label: 'Religions' },
            { num: '28+', label: 'States Covered' },
            { num: '0', label: 'API Key Needed' },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: '36px', fontWeight: 800, color: '#ff6b35' }}>{s.num}</div>
              <div style={{ fontSize: '14px', color: '#888', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>
          ⚡ Quick Start
        </h2>
        <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '20px', marginBottom: '32px' }}>
          <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#888' }}>Fetch all festivals — no auth needed:</p>
          <code style={{ color: '#ffcd3c', fontSize: '15px', fontFamily: 'monospace' }}>
            GET https://indian-festival-api.vercel.app/api/festivals
          </code>
        </div>

        {/* Endpoints */}
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#fff' }}>
          📡 Endpoints
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '48px' }}>
          {endpoints.map((ep) => (
            <div key={ep.path} style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ background: '#1d4a2a', color: '#4ade80', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                  {ep.method}
                </span>
                <code style={{ color: '#ff6b35', fontFamily: 'monospace', fontSize: '14px' }}>{ep.path}</code>
              </div>
              <p style={{ margin: 0, color: '#aaa', fontSize: '13px' }}>{ep.desc}</p>
              <a href={ep.example} target="_blank" rel="noopener noreferrer" style={{ color: '#ffcd3c', fontSize: '12px', textDecoration: 'none' }}>
                Try it →
              </a>
            </div>
          ))}
        </div>

        {/* Sample Response */}
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>
          📦 Sample Response
        </h2>
        <pre style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '20px', overflowX: 'auto', fontSize: '13px', color: '#a8d8a0', fontFamily: 'monospace', lineHeight: 1.6 }}>
          {sampleResponse}
        </pre>

        {/* Field Reference */}
        <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '48px 0 16px', color: '#fff' }}>
          📋 Field Reference
        </h2>
        <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', overflow: 'hidden', marginBottom: '48px' }}>
          {[
            ['id', 'number', 'Unique festival ID'],
            ['name', 'string', 'English name of the festival'],
            ['local_names', 'object', 'Names in regional Indian languages'],
            ['date_2026', 'string', 'YYYY-MM-DD date for year 2026'],
            ['month', 'number', '1–12'],
            ['day', 'number', 'Day of the month'],
            ['fixed_date', 'boolean', 'True if date is same every year'],
            ['type', 'string', 'festival | national_holiday'],
            ['religion', 'string', 'hindu | islam | christian | sikh | buddhist | jain | national'],
            ['national_holiday', 'boolean', 'True if it is a gazetted public holiday'],
            ['states', 'string[]', '"all" or specific Indian state names'],
            ['also_known_as', 'string[]', 'Other popular names'],
            ['tags', 'string[]', 'Searchable tags'],
          ].map(([field, type, desc], i) => (
            <div key={field} style={{ display: 'grid', gridTemplateColumns: '140px 80px 1fr', padding: '12px 20px', borderBottom: i < 12 ? '1px solid #2a2a2a' : 'none', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <code style={{ color: '#ff6b35', fontFamily: 'monospace', fontSize: '13px' }}>{field}</code>
              <span style={{ color: '#888', fontSize: '12px' }}>{type}</span>
              <span style={{ color: '#ccc', fontSize: '13px' }}>{desc}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', padding: '32px 0', borderTop: '1px solid #2a2a2a', color: '#555', fontSize: '14px' }}>
          <p>Open source under MIT License · Built for Indian developers by <a href="https://github.com/YOUR_GITHUB" style={{ color: '#ff6b35' }}>YOUR_GITHUB</a></p>
          <p style={{ marginTop: '8px' }}>
            <a href="https://github.com/YOUR_GITHUB/indian-festival-api/issues" style={{ color: '#888' }}>Report an Issue</a>
            {' · '}
            <a href="https://github.com/YOUR_GITHUB/indian-festival-api" style={{ color: '#888' }}>Contribute</a>
          </p>
        </div>
      </section>
    </main>
  );
}
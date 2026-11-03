import { useId, useState } from 'react'
import './index.css'

// 로고 이미지 (흰색, 투명 배경)
import logoImg from './assets/images/Logo.png'

// 포트폴리오 이미지
import tripsimImg from './assets/images/tripsim-home.png'
import gnfortressImg from './assets/images/gnfortress-logo.png'
import flytoxImg from './assets/images/flytox-home.png'
import skTenableImg from './assets/images/sk-tenable-home.png'
import skTrendmicroImg from './assets/images/sk-trendmicro-home.png'
import skTxoneImg from './assets/images/sk-txone-home.png'
import wonjaksoImg from './assets/images/wonjakso-home.png'

const FORM_ENDPOINT = 'https://formspree.io/f/mwvvkpjb'
const CONTACT_EMAIL = 'benkim08@lunamarketinglab.com'

const nav = [
  { id: 'services', label: '서비스' },
  { id: 'portfolio', label: '수행 사례' },
  { id: 'process', label: '진행 방식' },
  { id: 'contact', label: '문의' },
]

// SK쉴더스 총판 랜딩 3건은 한 카드로 묶고, 벤더는 작은 마크로만 표시한다
const skVendors = [
  { key: 'trendmicro', mark: 'TM', name: 'Trend Micro', img: skTrendmicroImg },
  { key: 'tenable', mark: 'T', name: 'Tenable', img: skTenableImg },
  { key: 'txone', mark: 'TX', name: 'TXOne', img: skTxoneImg },
]

const portfolioItems = [
  { key: 'tripsim', img: tripsimImg, alt: 'TripSIM', category: 'B2C 여행/통신', title: 'TripSIM', desc: 'eSIM 서비스. 브랜드 네이밍부터 앱 런칭, SNS 마케팅까지 전 과정을 맡아 직접 운영합니다.' },
  { key: 'flytox', img: flytoxImg, alt: 'FlytoX', category: 'B2C 여행/AI', title: 'FlytoX', desc: 'AI 여행 플래너. 네이밍, 웹사이트 제작, 광고·SNS 마케팅까지 직접 운영합니다.', url: 'https://flytox.co.kr' },
  { key: 'sk', category: 'B2B 보안 솔루션 총판', title: 'SK쉴더스 채널 솔루션', desc: '보안 솔루션 국내 총판 SEO/GEO 랜딩. 실무자 검색 키워드를 공략하고 상담·PoC 전환까지 설계했습니다.', vendors: skVendors, wide: true },
  { key: 'wonjakso', img: wonjaksoImg, alt: '원작소', category: 'B2C 웹소설/콘텐츠', title: '원작소', desc: '웹소설 플랫폼. 네이밍, 웹사이트, 작가 모집과 콘텐츠 기획, 광고·SNS까지 직접 운영합니다.', url: 'https://wonjakso.com' },
  { key: 'gnfortress', img: gnfortressImg, alt: 'GNFortress', category: 'B2B 클라우드 보안', title: 'GNFortress', desc: '금융권 레퍼런스 확보를 목표로 B2B 브랜딩과 웹사이트 UX를 개선했습니다.', contain: true },
]

const principles = [
  { name: 'Data-Driven', desc: '판단은 감이 아니라 데이터로 합니다.' },
  { name: 'Simplicity', desc: '복잡한 문제는 간결하게 풀어 드립니다.' },
  { name: 'Transparency', desc: '진행 과정과 결과를 숨김없이 공유합니다.' },
  { name: 'Integrity', desc: '약속한 범위에 책임을 지는 파트너가 됩니다.' },
]

const services = [
  { name: '브랜드 전략', work: '포지셔닝 전략, 브랜드 아이덴티티, 슬로건과 톤앤매너 정의' },
  { name: '퍼포먼스 마케팅', work: 'Meta/TikTok Ads, 타겟 세그멘테이션, A/B 테스트' },
  { name: 'SNS 운영', work: '콘텐츠 캘린더, 크리에이티브 제작, 채널 운영' },
  { name: '데이터 분석', work: 'GA4 설정, KPI 대시보드, ROAS 최적화' },
  { name: '웹사이트·검색 노출', work: '랜딩 페이지 제작, SEO/GEO, 상담 전환 설계' },
]

const steps = [
  { name: '분석', desc: '시장, 경쟁사, 타겟 고객을 살펴봅니다.' },
  { name: '전략', desc: '측정할 KPI를 합의하고 실행 계획을 세웁니다.' },
  { name: '실행', desc: '캠페인을 운영하고 콘텐츠를 만듭니다.' },
  { name: '최적화', desc: '데이터로 성과를 확인하고 예산을 옮깁니다.' },
]

const terms = [
  { label: '상담', value: '온라인·오프라인 미팅 모두 가능, 요청 후 24시간 안에 연락' },
  { label: '계약', value: '프로젝트 단위 또는 월 단위 운영' },
  { label: '비용', value: '대행비와 광고비는 별도' },
  { label: '분야', value: 'B2B IT·보안, 스타트업, SMB, 소비재, 여행·뷰티' },
]

const faqs = [
  { q: '상담은 어떻게 진행되나요?', a: '온라인과 오프라인 미팅이 모두 가능합니다. 메일이나 아래 문의 양식으로 요청하시면 24시간 안에 연락드립니다.' },
  { q: '최소 계약 기간이 있나요?', a: '프로젝트 단위 계약과 월 단위 운영 계약 중에서 고르실 수 있습니다.' },
  { q: '광고 집행 비용은 포함인가요?', a: '대행비와 광고비는 별도로 진행됩니다.' },
  { q: '어떤 산업을 주로 하나요?', a: 'B2B IT·보안, 스타트업, SMB, 소비재, 여행·뷰티 분야를 중심으로 진행합니다.' },
]

const emptyForm = { company: '', name: '', email: '', message: '' }

// 두 폼(첫 화면 간이 요청, 하단 문의서)이 같은 Formspree 주소로 보낸다
function useInquiry() {
  const [data, setData] = useState(emptyForm)
  const [status, setStatus] = useState('idle')

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          회사명: data.company,
          담당자명: data.name,
          이메일: data.email,
          문의내용: data.message,
        }),
      })
      if (response.ok) {
        setStatus('success')
        setData(emptyForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return { data, status, onChange, onSubmit }
}

// 루나(달)를 상징하는 오렌지 초승달 마크
function Moon({ className = '' }) {
  const maskId = `moon-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
  return (
    <svg className={`moon ${className}`} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <mask id={maskId}>
          <rect width="100" height="100" fill="#fff" />
          <circle cx="66" cy="38" r="40" fill="#000" />
        </mask>
      </defs>
      <circle cx="50" cy="50" r="46" fill="currentColor" mask={`url(#${maskId})`} />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M5.5 4H12v6.5" /></svg>
  )
}

function App() {
  const [activeFaq, setActiveFaq] = useState(0)
  const quick = useInquiry()
  const full = useInquiry()

  const go = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="nav">
        <a href="#hero" className="nav-logo" onClick={(e) => go(e, 'hero')}>
          <img src={logoImg} alt="Luna Marketing Lab" />
        </a>
        <nav aria-label="주요 메뉴">
          <ul className="nav-list">
            {nav.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} onClick={(e) => go(e, n.id)}>{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="pill pill-light nav-cta" onClick={(e) => go(e, 'contact')}>
          상담 요청
        </a>
      </header>

      <main>
        {/* 첫 화면 */}
        <section className="hero" id="hero" aria-labelledby="hero-title">
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-reel">
              {[tripsimImg, flytoxImg, wonjaksoImg, skTrendmicroImg, tripsimImg, flytoxImg, wonjaksoImg, skTrendmicroImg].map((src, i) => (
                <img key={i} src={src} alt="" />
              ))}
            </div>
          </div>

          <div className="hero-inner">
            <p className="hero-place">서울 여의도, 데이터 기반 마케팅 에이전시</p>

            <h1 className="hero-title" id="hero-title">
              <span className="hero-line">Data-driven</span>
              <span className="hero-line hero-line-2">
                Marketing <Moon className="hero-moon" /> Lab
              </span>
              <span className="sr-only">감이 아니라 데이터로 판단하는 마케팅, 루나 마케팅 랩</span>
            </h1>

            <div className="hero-mid">
              <p className="hero-lead">감이 아니라 데이터로 판단하는 마케팅.<br />KPI를 먼저 합의하고, 작게 검증하고, 효과가 확인된 곳에 예산을 늘립니다.</p>
              <div className="hero-actions">
                <a href="#contact" className="pill pill-accent" onClick={(e) => go(e, 'contact')}>
                  상담 요청<span className="pill-icon"><ArrowIcon /></span>
                </a>
                <a href="#portfolio" className="pill pill-light" onClick={(e) => go(e, 'portfolio')}>수행 사례 보기</a>
              </div>
            </div>

            <div className="hero-cards">
              <div className="glass hero-proof">
                <Moon className="hero-proof-moon" />
                <p>직접 운영하는 서비스에서 먼저 검증한 방법만 제안합니다.</p>
                <span className="hero-proof-names">TripSIM, FlytoX, 원작소</span>
              </div>

              <a className="hero-shot" href="#portfolio" onClick={(e) => go(e, 'portfolio')}>
                <img src={tripsimImg} alt="TripSIM 서비스 화면" />
                <span>TripSIM 네이밍부터 앱 런칭까지</span>
              </a>

              <form className="glass hero-form" onSubmit={quick.onSubmit} aria-label="간단 상담 요청">
                <p className="hero-form-title">24시간 안에 회신드립니다</p>
                <label>
                  <span className="sr-only">회사명</span>
                  <input name="company" placeholder="회사명" value={quick.data.company} onChange={quick.onChange} required autoComplete="organization" />
                </label>
                <label>
                  <span className="sr-only">이메일</span>
                  <input type="email" name="email" placeholder="회신받을 이메일" value={quick.data.email} onChange={quick.onChange} required autoComplete="email" />
                </label>
                <button type="submit" className="pill pill-accent" disabled={quick.status === 'submitting'}>
                  {quick.status === 'submitting' ? '보내는 중' : '상담 요청 보내기'}
                </button>
                <p className="form-note" role="status">
                  {quick.status === 'success' && '접수되었습니다. 24시간 안에 담당자가 회신드립니다.'}
                  {quick.status === 'error' && <span className="is-error">전송되지 않았습니다. 잠시 후 다시 보내시거나 {CONTACT_EMAIL} 로 메일 주세요.</span>}
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* 서비스 띠 */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((k) => (
              <span key={k}>
                {services.map((s) => (
                  <span className="ticker-item" key={s.name}>{s.name}<Moon className="ticker-moon" /></span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* 회사 소개 */}
        <section className="block about" id="about" aria-labelledby="about-title">
          <h2 className="block-kicker" id="about-title">회사 소개</h2>
          <p className="about-statement">
            Luna Marketing Lab은 데이터 분석, 브랜드 전략, 퍼포먼스 마케팅으로 B2B·B2C 기업의 성장을 돕습니다.
            <span> 이론보다 직접 운영하며 확인한 방법을 먼저 씁니다.</span>
          </p>
          <ul className="principles">
            {principles.map((p) => (
              <li key={p.name}>
                <strong>{p.name}</strong>
                <span>{p.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 서비스 */}
        <section className="block" id="services" aria-labelledby="services-title">
          <div className="block-head">
            <h2 className="display" id="services-title">Services</h2>
            <p className="block-lead">브랜드 기획부터 성과 최적화까지, 필요한 단계만 골라 맡기실 수 있습니다.</p>
          </div>
          <ul className="service-list">
            {services.map((s) => (
              <li key={s.name}>
                <a href="#contact" onClick={(e) => go(e, 'contact')}>
                  <span className="service-name">{s.name}</span>
                  <span className="service-work">{s.work}</span>
                  <span className="service-go">이 업무로 문의<span className="pill-icon"><ArrowIcon /></span></span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* 수행 사례 */}
        <section className="block" id="portfolio" aria-labelledby="portfolio-title">
          <div className="block-head">
            <h2 className="display" id="portfolio-title">Selected work</h2>
            <p className="block-lead">직접 운영하며 검증했거나 클라이언트와 함께 진행한 프로젝트입니다.</p>
          </div>
          <ul className="work-grid">
            {portfolioItems.map((item) => {
              const Wrap = item.url ? 'a' : 'div'
              const linkProps = item.url ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' } : {}
              return (
                <li className={`work${item.wide ? ' work-wide' : ''}`} key={item.key}>
                  {item.vendors ? (
                    <div className="work-media work-stack">
                      {item.vendors.map((v) => (
                        <img key={v.key} src={v.img} alt={`SK쉴더스 × ${v.name} 랜딩 화면`} loading="lazy" />
                      ))}
                    </div>
                  ) : (
                    <Wrap className={`work-media${item.contain ? ' is-contain' : ''}`} {...linkProps}>
                      <img src={item.img} alt={`${item.alt} 화면`} loading="lazy" />
                    </Wrap>
                  )}
                  <div className="work-body">
                    <p className="work-cat">{item.category}</p>
                    <h3 className="work-title">{item.title}</h3>
                    <p className="work-desc">{item.desc}</p>
                    {item.vendors && (
                      <ul className="vendor-marks" aria-label="함께한 솔루션">
                        {item.vendors.map((v) => (
                          <li key={v.key}><span className="vendor-mark" aria-hidden="true">{v.mark}</span>{v.name}</li>
                        ))}
                      </ul>
                    )}
                    {item.url && (
                      <a className="work-link" href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.url.replace('https://', '')}<span className="pill-icon"><ArrowIcon /></span>
                      </a>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </section>

        {/* 진행 방식 */}
        <section className="block" id="process" aria-labelledby="process-title">
          <div className="block-head">
            <h2 className="display" id="process-title">How we work</h2>
            <p className="block-lead">분석에서 최적화까지 같은 순서로 진행합니다.</p>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.name}>
                <span className="step-num">{i + 1}</span>
                <strong>{s.name}</strong>
                <span>{s.desc}</span>
              </li>
            ))}
          </ol>

          <div className="terms-faq">
            <dl className="terms">
              {terms.map((t) => (
                <div key={t.label}><dt>{t.label}</dt><dd>{t.value}</dd></div>
              ))}
            </dl>

            <div className="faq">
              <h3 className="faq-title">자주 묻는 질문</h3>
              {faqs.map((item, index) => {
                const open = activeFaq === index
                return (
                  <div className={`faq-item${open ? ' is-open' : ''}`} key={item.q}>
                    <h4>
                      <button
                        type="button"
                        className="faq-q"
                        aria-expanded={open}
                        aria-controls={`faq-a-${index}`}
                        onClick={() => setActiveFaq(open ? null : index)}
                      >
                        {item.q}
                        <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M8 3v10" /></svg>
                      </button>
                    </h4>
                    <div className="faq-a" id={`faq-a-${index}`} hidden={!open}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 문의 */}
        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-head">
            <h2 className="display contact-display" id="contact-title">Let’s talk <Moon className="contact-moon" /></h2>
            <p className="block-lead">문의서를 보내 주시면 24시간 안에 담당자가 연락드립니다.</p>
            <dl className="office">
              <div><dt>사무실</dt><dd>서울시 영등포구 국제금융로 10, 43층 (3IFC)</dd></div>
              <div><dt>이메일</dt><dd><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd></div>
              <div><dt>업무 시간</dt><dd>월–금 09:00–18:00</dd></div>
            </dl>
          </div>

          <form className="contact-form" onSubmit={full.onSubmit}>
            <div className="field-row">
              <label className="field">
                <span>회사명</span>
                <input name="company" value={full.data.company} onChange={full.onChange} required autoComplete="organization" />
              </label>
              <label className="field">
                <span>담당자명</span>
                <input name="name" value={full.data.name} onChange={full.onChange} required autoComplete="name" />
              </label>
            </div>
            <label className="field">
              <span>이메일</span>
              <input type="email" name="email" value={full.data.email} onChange={full.onChange} required autoComplete="email" />
            </label>
            <label className="field">
              <span>문의 내용</span>
              <textarea name="message" rows={5} placeholder="프로젝트와 고민을 간단히 적어 주세요" value={full.data.message} onChange={full.onChange} required />
            </label>
            <div className="contact-foot">
              <p className="form-note" role="status">
                {full.status === 'success' && '접수되었습니다. 24시간 안에 연락드리겠습니다.'}
                {full.status === 'error' && <span className="is-error">전송되지 않았습니다. 잠시 후 다시 보내시거나 메일로 보내 주세요.</span>}
              </p>
              <button type="submit" className="pill pill-accent" disabled={full.status === 'submitting'}>
                {full.status === 'submitting' ? '보내는 중' : '문의서 보내기'}
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-mark" aria-hidden="true">Luna <Moon className="footer-moon" /> Marketing Lab</p>
        <div className="footer-row">
          <img src={logoImg} alt="Luna Marketing Lab" />
          <span>© {new Date().getFullYear()} Luna Marketing Lab. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}

export default App

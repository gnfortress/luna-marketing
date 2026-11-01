import { useState } from 'react'
import './index.css'

// 로고 이미지
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

const toc = [
  { id: 'about', num: 'Ⅰ', label: '개요' },
  { id: 'services', num: 'Ⅱ', label: '서비스' },
  { id: 'portfolio', num: 'Ⅲ', label: '수행 사례' },
  { id: 'process', num: 'Ⅳ', label: '추진 절차' },
  { id: 'contact', num: 'Ⅴ', label: '검토 요청' },
]

const portfolioItems = [
  { key: 'tripsim', img: tripsimImg, alt: 'TripSIM', category: 'B2C · 여행/통신', title: 'TripSIM - eSIM 서비스', desc: '브랜드 네이밍부터 앱 런칭, SNS 마케팅까지 전 과정 담당', tags: ['브랜딩', 'SNS', '광고'] },
  { key: 'gnfortress', img: gnfortressImg, alt: 'GNFortress', category: 'B2B · 클라우드 보안', title: 'GNFortress - 보안 솔루션', desc: '금융권 레퍼런스 확보, B2B 브랜딩 및 웹사이트 UX 개선', tags: ['B2B', '웹사이트', '전략'], contain: true },
  { key: 'flytox', img: flytoxImg, alt: 'FlytoX', category: 'B2C · 여행/AI', title: 'FlytoX - AI 여행 플래너', desc: '브랜드 네이밍부터 웹사이트 제작, 광고·SNS 마케팅까지 전 과정 담당', tags: ['브랜딩', '웹사이트', '광고'], url: 'https://flytox.co.kr' },
  { key: 'sk-tenable', img: skTenableImg, alt: 'SK쉴더스 Tenable 랜딩', category: 'B2B · SK쉴더스 총판', title: 'SK쉴더스 × Tenable', desc: '노출 관리 솔루션 국내 총판 SEO/GEO 랜딩, 상담·PoC 전환 설계', tags: ['B2B', 'SEO/GEO', '랜딩'] },
  { key: 'sk-trendmicro', img: skTrendmicroImg, alt: 'SK쉴더스 트렌드마이크로 랜딩', category: 'B2B · SK쉴더스 총판', title: 'SK쉴더스 × 트렌드마이크로', desc: 'Vision One·Deep Security·TippingPoint 총판 채널 랜딩', tags: ['B2B', 'SEO/GEO', '랜딩'] },
  { key: 'sk-txone', img: skTxoneImg, alt: 'SK쉴더스 TXOne 랜딩', category: 'B2B · SK쉴더스 총판', title: 'SK쉴더스 × TXOne', desc: '제조 현장 OT 보안 솔루션 총판 랜딩, 실무자 검색 키워드 공략', tags: ['B2B', 'OT 보안', '랜딩'] },
  { key: 'wonjakso', img: wonjaksoImg, alt: '원작소', category: 'B2C · 웹소설/콘텐츠', title: '원작소 - 웹소설 플랫폼', desc: '브랜드 네이밍, 웹사이트 제작, 작가 모집·콘텐츠 기획부터 광고·SNS 마케팅까지 전 과정 담당', tags: ['브랜딩', '콘텐츠', 'SNS'], url: 'https://wonjakso.com' }
]

const principles = [
  { name: 'Data-Driven', desc: '판단은 데이터 기반으로' },
  { name: 'Simplicity', desc: '복잡한 문제는 간결하게' },
  { name: 'Transparency', desc: '명확한 프로세스와 소통' },
  { name: 'Integrity', desc: '책임있는 파트너십' },
]

const services = [
  { name: '브랜드 전략', work: '포지셔닝 전략, 브랜드 아이덴티티, 슬로건·톤앤매너 정의' },
  { name: '퍼포먼스 마케팅', work: 'Meta/TikTok Ads, 타겟 세그멘테이션, A/B 테스트' },
  { name: 'SNS 운영', work: '콘텐츠 캘린더, 크리에이티브 제작, 채널 운영' },
  { name: '데이터 분석', work: 'GA4 설정, KPI 대시보드, ROAS 최적화' },
  { name: '웹사이트·검색 노출', work: '랜딩 페이지 제작, SEO/GEO, 상담 전환 설계' },
]

const steps = [
  { name: '분석', desc: '시장, 경쟁사, 타겟 고객 분석' },
  { name: '전략', desc: '목표 설정 및 실행 계획 수립' },
  { name: '실행', desc: '캠페인 운영 및 콘텐츠 제작' },
  { name: '최적화', desc: '데이터 기반 성과 분석' },
]

const terms = [
  { label: '상담 방식', value: '온라인/오프라인 미팅 가능, 요청 후 24시간 내 연락' },
  { label: '계약 형태', value: '프로젝트 단위 계약 또는 월 단위 운영 계약' },
  { label: '비용 구조', value: '대행비와 광고비는 별도' },
  { label: '주요 분야', value: 'B2B IT·보안, 스타트업, SMB, 소비재, 여행·뷰티' },
]

const faqs = [
  { q: '상담은 어떻게 진행되나요?', a: '온라인/오프라인 미팅 가능하며, 메일로 미팅 요청 연락주시면 24시간 내 연락드립니다.' },
  { q: '최소 계약 기간이 있나요?', a: '프로젝트 단위 계약 또는 월 단위 운영 계약 모두 가능합니다.' },
  { q: '광고 집행 비용은 포함인가요?', a: '대행비와 광고비는 별도로 진행됩니다.' },
  { q: '어떤 산업을 전문으로 하나요?', a: 'B2B IT·보안, 스타트업, SMB, 소비재, 여행·뷰티 분야 등을 중심으로 진행합니다.' }
]

const emptyForm = { company: '', name: '', email: '', message: '' }

// 두 폼(첫 화면 간이 요청, 하단 신청서)이 같은 Formspree 주소로 보낸다
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
          문의내용: data.message
        })
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

function Stamp({ children, className = '' }) {
  return <span className={`stamp ${className}`} aria-hidden="true">{children}</span>
}

function Sheet({ id, page, title, num, children }) {
  return (
    <section className="sheet" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="sheet-title" id={`${id}-title`}>
        <span className="sheet-num">{num}.</span> {title}
      </h2>
      {children}
      <div className="folio" aria-hidden="true">- {page} -</div>
    </section>
  )
}

function App() {
  const [activeFaq, setActiveFaq] = useState(null)
  const quick = useInquiry()
  const full = useInquiry()

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="desk">
      <header className="toc">
        <div className="toc-inner">
          <a href="#hero" className="toc-logo" onClick={(e) => scrollToSection(e, 'hero')}>
            <img src={logoImg} alt="Luna Marketing Lab" />
          </a>
          <nav aria-label="목차">
            <ol className="toc-list">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} onClick={(e) => scrollToSection(e, t.id)}>
                    <span className="toc-num">{t.num}</span>{t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <a href="#contact" className="btn btn-ink toc-cta" onClick={(e) => scrollToSection(e, 'contact')}>상담 요청</a>
        </div>
      </header>

      <main>
        {/* 1면: 요약 보고 */}
        <article className="sheet sheet-cover" id="hero" aria-labelledby="hero-title">
          <div className="cover-head">
            <dl className="doc-meta">
              <div><dt>문서</dt><dd>마케팅 파트너 검토 자료</dd></div>
              <div><dt>작성</dt><dd>Luna Marketing Lab</dd></div>
              <div><dt>분야</dt><dd>B2B · B2C 디지털 마케팅</dd></div>
            </dl>

            <figure className="approval">
              <table>
                <thead>
                  <tr><th scope="col">담당</th><th scope="col">검토</th><th scope="col">대표</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="approval-empty">귀사</span></td>
                    <td><span className="approval-empty">귀사</span></td>
                    <td className="approval-ceo">
                      <Stamp className="stamp-seal">LUNA<small>MARKETING<br />LAB</small></Stamp>
                    </td>
                  </tr>
                </tbody>
              </table>
            </figure>
          </div>

          <h1 className="cover-title" id="hero-title">감이 아니라 데이터로<br className="br-wide" /> 판단하는 마케팅</h1>

          <ul className="report">
            <li>
              <p className="report-main"><b>목표</b> 측정할 수 있는 KPI를 먼저 합의하고 시작합니다</p>
              <p className="report-sub">GA4 설정과 KPI 대시보드로 같은 기준에서 성과를 봅니다</p>
            </li>
            <li>
              <p className="report-main"><b>방법</b> 작게 검증하고, 효과가 확인된 곳에 예산을 늘립니다</p>
              <p className="report-sub">타겟 세그멘테이션, A/B 테스트, ROAS 최적화</p>
            </li>
            <li>
              <p className="report-main"><b>근거</b> 직접 운영하며 검증한 방법론을 그대로 적용합니다</p>
              <p className="report-sub">TripSIM·FlytoX·원작소를 네이밍부터 광고·SNS까지 직접 운영</p>
            </li>
          </ul>

          <form className="request" onSubmit={quick.onSubmit} aria-label="간단 상담 요청">
            <div className="request-label">검토 요청</div>
            <label className="request-field">
              <span className="sr-only">회사명</span>
              <input name="company" placeholder="회사명" value={quick.data.company} onChange={quick.onChange} required autoComplete="organization" />
            </label>
            <label className="request-field">
              <span className="sr-only">이메일</span>
              <input type="email" name="email" placeholder="회신받을 이메일" value={quick.data.email} onChange={quick.onChange} required autoComplete="email" />
            </label>
            <button type="submit" className="btn btn-red request-btn" disabled={quick.status === 'submitting'}>
              {quick.status === 'submitting' ? '보내는 중…' : '상담 요청'}
            </button>
            {quick.status === 'success' && <Stamp className="stamp-received">접수</Stamp>}
          </form>
          <p className="request-note" role="status">
            {quick.status === 'success' && '접수되었습니다. 24시간 내 담당자가 회신드립니다.'}
            {quick.status === 'error' && <span className="is-error">전송하지 못했습니다. 잠시 후 다시 시도하시거나 benkim08@lunamarketinglab.com 으로 메일 주세요.</span>}
            {(quick.status === 'idle' || quick.status === 'submitting') && '회사명과 이메일만 남기시면 24시간 내 회신드립니다.'}
          </p>

          <div className="folio" aria-hidden="true">- 1 -</div>
        </article>

        <Sheet id="about" page={2} num="Ⅰ" title="회사 개요">
          <div className="two-col">
            <ul className="report">
              <li>
                <p className="report-main">데이터 분석, 브랜드 전략, 퍼포먼스 마케팅을 중심으로 B2B·B2C 기업의 성장을 돕는 디지털 마케팅 컨설팅 그룹입니다</p>
              </li>
              <li>
                <p className="report-main">직접 운영하는 서비스에서 먼저 검증한 방법만 제안합니다</p>
                <p className="report-sub">이론이 아닌, 실전에서 확인한 방법론을 제공합니다</p>
              </li>
              <li>
                <p className="report-main">다양한 클라이언트 프로젝트에서 쌓은 경험으로 귀사의 성장 파트너가 되겠습니다</p>
              </li>
            </ul>

            <table className="grid-table">
              <caption>운영 원칙</caption>
              <thead><tr><th scope="col">원칙</th><th scope="col">의미</th></tr></thead>
              <tbody>
                {principles.map((p) => (
                  <tr key={p.name}><th scope="row">{p.name}</th><td>{p.desc}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </Sheet>

        <Sheet id="services" page={3} num="Ⅱ" title="제공 서비스">
          <p className="sheet-lead">브랜드 기획부터 성과 최적화까지, 필요한 단계만 골라 맡기실 수 있습니다.</p>
          <table className="grid-table services-table">
            <thead><tr><th scope="col">구분</th><th scope="col">주요 업무</th><th scope="col"><span className="sr-only">문의</span></th></tr></thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.name}>
                  <th scope="row">{s.name}</th>
                  <td>{s.work}</td>
                  <td className="cell-action">
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>이 업무로 문의</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Sheet>

        <Sheet id="portfolio" page={4} num="Ⅲ" title="수행 사례">
          <p className="sheet-lead">직접 운영하며 검증했거나 클라이언트와 함께 진행한 프로젝트입니다.</p>
          <ol className="cases">
            {portfolioItems.map((item, i) => {
              const Wrap = item.url ? 'a' : 'div'
              const linkProps = item.url ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' } : {}
              return (
                <li className="case" key={item.key}>
                  <figure className="case-fig">
                    <Wrap className={`case-img${item.contain ? ' is-contain' : ''}`} {...linkProps}>
                      <img src={item.img} alt={`${item.alt} 화면`} loading="lazy" />
                    </Wrap>
                    <figcaption>[그림 {i + 1}] {item.alt}</figcaption>
                  </figure>
                  <dl className="case-body">
                    <div><dt>프로젝트</dt><dd className="case-title">{item.title}</dd></div>
                    <div><dt>분야</dt><dd>{item.category}</dd></div>
                    <div><dt>수행 내용</dt><dd>{item.desc}</dd></div>
                    <div><dt>키워드</dt><dd>{item.tags.join(' · ')}</dd></div>
                    {item.url && (
                      <div><dt>사이트</dt><dd><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url.replace('https://', '')}</a></dd></div>
                    )}
                  </dl>
                </li>
              )
            })}
          </ol>
        </Sheet>

        <Sheet id="process" page={5} num="Ⅳ" title="추진 절차 및 조건">
          <h3 className="sub-title">1. 추진 절차</h3>
          <ol className="flow">
            {steps.map((s, i) => (
              <li key={s.name}>
                <strong><span className="flow-step">{i + 1}.</span> {s.name}</strong>
                <span>{s.desc}</span>
              </li>
            ))}
          </ol>

          <h3 className="sub-title">2. 계약 조건</h3>
          <table className="grid-table terms-table">
            <tbody>
              {terms.map((t) => (
                <tr key={t.label}><th scope="row">{t.label}</th><td>{t.value}</td></tr>
              ))}
            </tbody>
          </table>

          <h3 className="sub-title">3. 자주 묻는 질문</h3>
          <div className="faq">
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
                      <span className="faq-mark">Q.</span>
                      <span className="faq-text">{item.q}</span>
                      <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 6l5 5 5-5" /></svg>
                    </button>
                  </h4>
                  <div className="faq-a" id={`faq-a-${index}`} hidden={!open}>
                    <span className="faq-mark">A.</span><p>{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Sheet>

        <Sheet id="contact" page={6} num="Ⅴ" title="검토 요청서">
          <p className="sheet-lead">아래 신청서를 보내 주시면 24시간 내 담당자가 연락드립니다.</p>
          <form className="apply" onSubmit={full.onSubmit}>
            <table className="grid-table apply-table">
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="f-company">회사명</label></th>
                  <td><input id="f-company" name="company" placeholder="회사명을 입력하세요" value={full.data.company} onChange={full.onChange} required autoComplete="organization" /></td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="f-name">담당자명</label></th>
                  <td><input id="f-name" name="name" placeholder="성함을 입력하세요" value={full.data.name} onChange={full.onChange} required autoComplete="name" /></td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="f-email">이메일</label></th>
                  <td><input id="f-email" type="email" name="email" placeholder="회신받을 이메일" value={full.data.email} onChange={full.onChange} required autoComplete="email" /></td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="f-message">문의 내용</label></th>
                  <td><textarea id="f-message" name="message" rows={5} placeholder="프로젝트에 대해 간단히 설명해주세요" value={full.data.message} onChange={full.onChange} required /></td>
                </tr>
              </tbody>
            </table>
            <div className="apply-foot">
              <p className="apply-status" role="status">
                {full.status === 'success' && '접수되었습니다. 24시간 내 연락드리겠습니다.'}
                {full.status === 'error' && <span className="is-error">전송하지 못했습니다. 잠시 후 다시 시도하시거나 메일로 보내 주세요.</span>}
              </p>
              {full.status === 'success' && <Stamp className="stamp-received">접수</Stamp>}
              <button type="submit" className="btn btn-red" disabled={full.status === 'submitting'}>
                {full.status === 'submitting' ? '보내는 중…' : '요청서 보내기'}
              </button>
            </div>
          </form>

          <dl className="office">
            <div><dt>사무실</dt><dd>서울시 영등포구 국제금융로 10, 43층 (3IFC, 서울 국제 금융 센터)</dd></div>
            <div><dt>이메일</dt><dd><a href="mailto:benkim08@lunamarketinglab.com">benkim08@lunamarketinglab.com</a></dd></div>
            <div><dt>업무 시간</dt><dd>월–금 09:00–18:00</dd></div>
          </dl>
          <p className="doc-end">끝.</p>
        </Sheet>
      </main>

      <footer className="colophon">
        <span>LUNA MARKETING LAB</span>
        <span>© {new Date().getFullYear()} Luna Marketing Lab. All rights reserved.</span>
      </footer>
    </div>
  )
}

export default App

import { useState } from 'react'
import './index.css'

// 로고 이미지
import logoImg from './assets/images/Logo.png'

// 포트폴리오 이미지
import tripsimImg from './assets/images/tripsim-home.png'
import gnfortressImg from './assets/images/gnfortress-logo.png'
import airpassImg from './assets/images/airpass-kcontent.png'

function App() {
  const [activeFaq, setActiveFaq] = useState(null)
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('idle')

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    try {
      const response = await fetch('https://formspree.io/f/mwvvkpjb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          회사명: formData.company,
          담당자명: formData.name,
          이메일: formData.email,
          문의내용: formData.message
        })
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({ company: '', name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="nav-logo" onClick={(e) => scrollToSection(e, 'hero')}>
            <img src={logoImg} alt="Luna Marketing Lab" className="nav-logo-img" />
          </a>
          <ul className="nav-menu">
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
            <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
            <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')}>Portfolio</a></li>
            <li><a href="#process" onClick={(e) => scrollToSection(e, 'process')}>Process</a></li>
            <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>FAQ</a></li>
          </ul>
          <a href="#contact" className="nav-cta" onClick={(e) => scrollToSection(e, 'contact')}>문의하기</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-tag">LUNA MARKETING LAB</div>
            <h1 className="hero-headline">Make<br/>the <span>future</span></h1>
            <p className="hero-desc">B2B부터 B2C까지, 실 데이터 기반의<br/>Full-Funnel 디지털 마케팅</p>
            <div className="hero-cta">
              <a href="#contact" className="btn-primary" onClick={(e) => scrollToSection(e, 'contact')}>프로젝트 문의 →</a>
              <a href="#portfolio" className="btn-secondary" onClick={(e) => scrollToSection(e, 'portfolio')}>포트폴리오 보기</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="stat-label">통합 마케팅</div>
                <div className="stat-value">B2B + B2C</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
                <div className="stat-label">의사결정 기준</div>
                <div className="stat-value highlight">실 데이터 중심</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
                <div className="stat-label">서비스 범위</div>
                <div className="stat-value">기획부터 성과까지</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about" id="about">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">ABOUT US</div>
            <h2 className="section-title">검증된 마케팅, 측정 가능한 성장</h2>
            <p className="section-subtitle">데이터와 성과로 증명하는 디지털 마케팅 전문 그룹</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>Luna Marketing Lab은 데이터 분석, 브랜드 전략, 퍼포먼스 마케팅을 중심으로 B2B·B2C 기업의 지속 가능한 성장을 만들어내는 디지털 마케팅 컨설팅 그룹입니다.</p>
              <div className="about-highlight">
                <p>우리는 직접 운영하는 서비스를 통해 마케팅 전략을 검증합니다. 이론이 아닌, 실전에서 증명된 방법론을 제공합니다.</p>
              </div>
              <p>다양한 클라이언트 프로젝트를 통해 쌓은 경험을 바탕으로, 귀사의 성장 파트너가 되겠습니다.</p>
            </div>
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
                <div className="feature-title">Data-Driven</div>
                <div className="feature-desc">판단은 데이터 기반으로</div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
                <div className="feature-title">Simplicity</div>
                <div className="feature-desc">복잡한 문제는 간결하게</div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </div>
                <div className="feature-title">Transparency</div>
                <div className="feature-desc">명확한 프로세스와 소통</div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div className="feature-title">Integrity</div>
                <div className="feature-desc">책임있는 파트너십</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services" id="services">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">SERVICES</div>
            <h2 className="section-title">무엇을 도와드릴까요?</h2>
            <p className="section-subtitle">브랜드 기획부터 성과 최적화까지, 성장의 모든 단계를 함께합니다</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <div className="service-title">브랜드 전략</div>
              <div className="service-desc">포지셔닝 전략, 브랜드 아이덴티티, 슬로건·톤앤매너 정의</div>
              <a href="#contact" className="service-link" onClick={(e) => scrollToSection(e, 'contact')}>자세히 보기 →</a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              </div>
              <div className="service-title">퍼포먼스 마케팅</div>
              <div className="service-desc">Meta/TikTok Ads, 타겟 세그멘테이션, A/B 테스트</div>
              <a href="#contact" className="service-link" onClick={(e) => scrollToSection(e, 'contact')}>자세히 보기 →</a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <div className="service-title">SNS 운영</div>
              <div className="service-desc">콘텐츠 캘린더, 크리에이티브 제작, 채널 운영</div>
              <a href="#contact" className="service-link" onClick={(e) => scrollToSection(e, 'contact')}>자세히 보기 →</a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"/>
                </svg>
              </div>
              <div className="service-title">데이터 분석</div>
              <div className="service-desc">GA4 설정, KPI 대시보드, ROAS 최적화</div>
              <a href="#contact" className="service-link" onClick={(e) => scrollToSection(e, 'contact')}>자세히 보기 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section portfolio" id="portfolio">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">PORTFOLIO</div>
            <h2 className="section-title">직접 운영하며 검증했습니다</h2>
            <p className="section-subtitle">클라이언트와 함께 만들어낸 성과</p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-card">
              <div className="portfolio-image tripsim">
                <img src={tripsimImg} alt="TripSIM" />
              </div>
              <div className="portfolio-info">
                <div className="portfolio-category">B2C · 여행/통신</div>
                <div className="portfolio-title">TripSIM - eSIM 서비스</div>
                <div className="portfolio-desc">브랜드 네이밍부터 앱 런칭, SNS 마케팅까지 전 과정 담당</div>
                <div className="portfolio-tags">
                  <span className="portfolio-tag">브랜딩</span>
                  <span className="portfolio-tag">SNS</span>
                  <span className="portfolio-tag">광고</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-image gnfortress">
                <img src={gnfortressImg} alt="GNFortress" />
              </div>
              <div className="portfolio-info">
                <div className="portfolio-category">B2B · 클라우드 보안</div>
                <div className="portfolio-title">GNFortress - 보안 솔루션</div>
                <div className="portfolio-desc">금융권 레퍼런스 확보, B2B 브랜딩 및 웹사이트 UX 개선</div>
                <div className="portfolio-tags">
                  <span className="portfolio-tag">B2B</span>
                  <span className="portfolio-tag">웹사이트</span>
                  <span className="portfolio-tag">전략</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-image airpass">
                <img src={airpassImg} alt="AirPass VPN" />
              </div>
              <div className="portfolio-info">
                <div className="portfolio-category">B2C · 보안/VPN</div>
                <div className="portfolio-title">AirPass VPN - VPN 서비스</div>
                <div className="portfolio-desc">K-콘텐츠 타겟 포지셔닝, ASO 및 마케팅 크리에이티브</div>
                <div className="portfolio-tags">
                  <span className="portfolio-tag">ASO</span>
                  <span className="portfolio-tag">크리에이티브</span>
                  <span className="portfolio-tag">광고</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process" id="process">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">PROCESS</div>
            <h2 className="section-title">이렇게 진행됩니다</h2>
            <p className="section-subtitle">체계적인 프로세스로 명확한 결과를 만들어갑니다</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-title">분석</div>
              <div className="step-desc">시장, 경쟁사, 타겟 고객 분석</div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-title">전략</div>
              <div className="step-desc">목표 설정 및 실행 계획 수립</div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-title">실행</div>
              <div className="step-desc">캠페인 운영 및 콘텐츠 제작</div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-title">최적화</div>
              <div className="step-desc">데이터 기반 성과 분석</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq" id="faq">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title">자주 묻는 질문</h2>
          </div>
          <div className="faq-list">
            {[
              { q: 'Q. 상담은 어떻게 진행되나요?', a: '온라인/오프라인 미팅 가능하며, 메일로 미팅 요청 연락주시면 24시간 내 연락드립니다.' },
              { q: 'Q. 최소 계약 기간이 있나요?', a: '프로젝트 단위 계약 또는 월 단위 운영 계약 모두 가능합니다.' },
              { q: 'Q. 광고 집행 비용은 포함인가요?', a: '대행비와 광고비는 별도로 진행됩니다.' },
              { q: 'Q. 어떤 산업을 전문으로 하나요?', a: 'B2B IT·보안, 스타트업, SMB, 소비재, 여행·뷰티 분야 등을 중심으로 진행합니다.' }
            ].map((item, index) => (
              <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={index}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <div className="faq-q-text">{item.q}</div>
                  <div className="faq-toggle">+</div>
                </div>
                <div className="faq-answer">
                  <div className="faq-a-text">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact" id="contact">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">CONTACT</div>
            <h2 className="section-title">프로젝트를 시작해보세요</h2>
            <p className="section-subtitle">24시간 내 담당자가 연락드립니다</p>
          </div>
          <div className="contact-content">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">회사명</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="회사명을 입력하세요"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">담당자명</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="성함을 입력하세요"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">이메일</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="이메일을 입력하세요"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">문의 내용</label>
                  <textarea 
                    className="form-textarea" 
                    placeholder="프로젝트에 대해 간단히 설명해주세요"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                {status === 'success' ? (
                  <div className="form-success">✓ 문의가 접수되었습니다. 24시간 내 연락드리겠습니다.</div>
                ) : (
                  <button type="submit" className="form-submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? '전송 중...' : '문의하기'}
                  </button>
                )}
                {status === 'error' && (
                  <div className="form-error">전송에 실패했습니다. 다시 시도해주세요.</div>
                )}
              </form>
            </div>
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="info-title">Office</div>
                <div className="info-value">서울시 영등포구 국제금융로 10, 43층<br/>(3IFC, 서울 국제 금융 센터)</div>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="info-title">Email</div>
                <div className="info-value">benkim08@lunamarketinglab.com</div>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="info-title">Business Hours</div>
                <div className="info-value">Monday - Friday: 9am - 6pm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo-text">LUNA MARKETING LAB</div>
          <div className="footer-links">
            <a href="#about" className="footer-link" onClick={(e) => scrollToSection(e, 'about')}>About</a>
            <a href="#services" className="footer-link" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
            <a href="#portfolio" className="footer-link" onClick={(e) => scrollToSection(e, 'portfolio')}>Portfolio</a>
            <a href="#contact" className="footer-link" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          </div>
          <div className="footer-copy">© 2025 Luna Marketing Lab. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}

export default App
import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="page">
    <header class="hero">
      <p class="eyebrow">안녕하세요!</p>
      <h1>나를 소개합니다 ✦</h1>
      <p class="hero-text">
        감각적인 색감과 새로운 시도를 사랑하는 크리에이터입니다.
        이곳에 나만의 이야기를 가볍게 적어두고, 한눈에 경력도 정리해 보세요.
      </p>
      <div class="hero-tags">
        <span>#Creativity</span>
        <span>#Passion</span>
        <span>#ColorfulLife</span>
      </div>
    </header>

    <main class="content">
      <section class="section about">
        <div class="section-title">
          <h2>간단 소개</h2>
          <p>나를 표현하는 짧은 문장을 여기에 적어 보세요.</p>
        </div>
        <div class="about-grid">
          <article class="about-card">
            <h3>키워드</h3>
            <ul>
              <li>도전과 실험을 즐기는 성격</li>
              <li>사람들과 소통하며 성장</li>
              <li>디자인과 기획을 두루 경험</li>
            </ul>
          </article>
          <article class="about-card highlight">
            <h3>현재 관심사</h3>
            <p>
              색채감각을 살린 브랜드 디자인, 인터랙티브 웹 경험,
              그리고 나만의 스토리를 담은 프로젝트에 몰두 중입니다.
            </p>
          </article>
          <article class="about-card">
            <h3>연락처 메모</h3>
            <p>이메일, SNS, 포트폴리오 링크 등을 깔끔하게 적어주세요.</p>
          </article>
        </div>
      </section>

      <section class="section experience">
        <div class="section-title">
          <h2>활동 경력</h2>
          <p>시간 순서대로 정리하면 한눈에 보여요.</p>
        </div>
        <div class="timeline">
          <article class="timeline-card">
            <div class="timeline-dot"></div>
            <div>
              <p class="timeline-period">2024 — 현재</p>
              <h3>컬러풀 스튜디오 · 크리에이티브 리드</h3>
              <p>
                브랜드 아이덴티티와 웹 인터랙션을 총괄하며, 다채로운 색감의 캠페인을
                기획·제작했습니다.
              </p>
            </div>
          </article>
          <article class="timeline-card">
            <div class="timeline-dot"></div>
            <div>
              <p class="timeline-period">2022 — 2024</p>
              <h3>프리랜서 디자이너 & 기획자</h3>
              <p>
                스타트업과 협업해 브랜드 런칭, 전시 공간 연출, 콘텐츠 전략 등
                다양한 프로젝트를 수행했습니다.
              </p>
            </div>
          </article>
          <article class="timeline-card">
            <div class="timeline-dot"></div>
            <div>
              <p class="timeline-period">2019 — 2022</p>
              <h3>XYZ Lab · 주니어 디자이너</h3>
              <p>
                UI/UX 디자인과 시각 언어를 배우며 팀과 함께 성장했습니다.
                첫 전시를 기획했던 소중한 시간!
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  </div>
`

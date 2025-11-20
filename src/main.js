import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="page">
    <header class="hero">
      <p class="eyebrow">안녕하세요!</p>
      <h1>나를 소개합니다 ✦</h1>
      <p class="hero-text">
        아무 웹 앱을 만들고 있답니다!
      </p>
      <div class="hero-tags">
        <span>#교사</span>
        <span>#대학원생</span>
        <span>#웹앱</span>
      </div>
    </header>

    <main class="content">
      <section class="section about">
        <div class="section-title">
          <h2>간단 소개</h2>
          <p>지금은 배포하는 걸하고 있어요요</p>
        </div>
        <div class="about-grid">
          <article class="about-card">
            <h3>키워드</h3>
            <ul>
              <li>도전과 실험을 즐기는 성격</li>
              <li>사람들과 소통하며 성장</li>
            </ul>
          </article>
          <article class="about-card highlight">
            <h3>현재 관심사</h3>
            <p>
              curor ai를 활용한 웹 앱 만들기기
            </p>
          </article>
          <article class="about-card">
            <h3>연락처 메모</h3>
            <p>010-0000-0000</p>
          </article>
        </div>
      </section>

      <section class="section experience">
        <div class="section-title">
          <h2>활동 경력</h2>
        </div>
        <div class="timeline">
          <article class="timeline-card">
            <div class="timeline-dot"></div>
            <div>
              <p class="timeline-period"> — 현재</p>
              <h3>중학교 근무</h3>
              <p>
                중학교에서 수학을 가르치고 있습니다.
              </p>
            </div>
          </article>
          <article class="timeline-card">
            <div class="timeline-dot"></div>
            <div>
              <p class="timeline-period">2025 — 현재</p>
              <h3>대학원생</h3>
              <p>
                근무와 공부를 병행하고 있습니다.
              </p>
            </div>
          </article>
      </section>
    </main>
  </div>
`

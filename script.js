// Keep the footer current without introducing a runtime dependency.
document.getElementById('year').textContent = new Date().getFullYear();

const translations = [
	['.skip', '본문으로 건너뛰기'],
	['.nav nav a:nth-of-type(1)', '경력'],
	['.nav nav a:nth-of-type(2)', '언어'],
	['.nav nav a:nth-of-type(3)', '가본 곳'],
	['.nav nav a:nth-of-type(4)', '포트폴리오'],
	['.nav-contact', '연락하기 <span aria-hidden="true">↗</span>'],
	['.hero .eyebrow', '개발자 · 언어 학습자 · 사람과 사람을 연결하는 사람'],
	['.hero h1', '프로그램을 짜고,<br><span>세계를 연결하기.</span>'],
	['.intro', '저는 임한석 입니다. Johns Hopkins에서 컴퓨터 과학을 공부하는 개발자입니다. 기술과 세심한 소통으로 일상의 경험을 더 나아지게 만드는 방법에 관심이 있습니다.'],
	['.actions .primary', '작업 살펴보기 <span aria-hidden="true">↓</span>'],
	['.resume-link', '이력서 다운로드 <span aria-hidden="true">↗</span>'],
	['.profile-top span:nth-child(1)', '임한석 / 한눈에 보기'],
	['.profile-bottom > p', 'IT능력과 언어 늘역을 활용해<br>세상을 연결하고 인생을 더 편하게 만들기.'],
	['.profile-line:nth-of-type(1) > span', '현재 학업'],
	['.profile-line:nth-of-type(1) strong', '컴퓨터 과학 석사<br>Johns Hopkins University'],
	['.profile-line:nth-of-type(2) > span', '관심 분야'],
	['.profile-line:nth-of-type(2) strong', '개발 · 항공 서비스<br>의료 코디네이션 및 통역'],
	['.credentials .credential-inner > span', '이전 경력'],
	['#work .section-heading .eyebrow', '04 / 주요 작업'],
	['#work .section-heading h2', '유용한 도구.<br>현실의 문제를 위해.'],
	['#work .section-heading > p', '이동을 돕는 일부터 연구 데이터를 쉽게 살펴보는 일까지, 실질적인 필요를 중심으로 만듭니다.'],
	['.project:nth-child(1) .project-meta span:nth-child(1)', '의료 + AI'],
	['.project:nth-child(1) h3', 'Discovery Agent 1.0'],
	['.project:nth-child(1) > p:nth-of-type(1)', 'Johns Hopkins 블룸버그 공중보건대학과 NIH 지원 프로젝트로 개발한 A2CPS 만성 통증 연구 데이터셋용 자연어 인터페이스입니다.'],
	['.project:nth-child(1) > p:nth-of-type(2)', '환자 개인정보와 HIPAA 요건을 고려해 검색 증강 생성으로 질문을 SQL로, 조회 결과를 자연어로 변환했습니다.'],
	['.project:nth-child(1) .project-foot', '연구 프로젝트 · 2026년 1월–5월'],
	['.project:nth-child(2) .project-meta span:nth-child(1)', '여행 + 커뮤니티'],
	['.project:nth-child(2) h3', 'HopShare'],
	['.project:nth-child(2) > p:nth-of-type(1)', 'Johns Hopkins 학생들이 비슷한 목적지로 가는 차량을 함께 이용하고 비용을 나눌 수 있도록 돕는 웹 앱입니다.'],
	['.project:nth-child(2) > p:nth-of-type(2)', 'Google 로그인과 지도 연동으로 더 편리한 차량 공유 경험을 지원합니다.'],
	['.project:nth-child(2) .project-foot', '학생 차량 공유 플랫폼'],
	['.project:nth-child(3) .project-meta span:nth-child(1)', '의료 + 운영'],
	['.project:nth-child(3) h3', '치과 자원봉사자 포털'],
	['.project:nth-child(3) > p', '지역 치과와 함께 자원봉사자 일정, 정보, 통계를 관리하는 행정 포털을 개발했습니다.'],
	['.project:nth-child(3) .project-foot', '자원봉사자 관리 시스템'],
	['.project:nth-child(4) .project-meta span:nth-child(1)', '항공 + 데이터'],
	['.project:nth-child(4) h3', 'Clearcost Flights'],
	['.project:nth-child(4) > p', '실시간 Google Flights 가격과 적립 마일리지 등을 함께 보여주어 여행 비용을 더 넓게 비교할 수 있는 항공편 비교 사이트입니다.'],
	['.project:nth-child(4) .tags span:nth-child(2)', '항공권 가격'],
	['.project:nth-child(4) .project-foot', '여행 의사결정 지원'],
	['.github', 'GitHub 방문하기 <span aria-hidden="true">↗</span>'],
	['#experience .eyebrow', '01 / 경력'],
	['#experience h2', '탄탄한 기술 기반.<br>실용적인 관점.'],
	['.section-intro', '소프트웨어를 만들고, 학생을 가르치고, 팀을 지원해 온 경험이 있습니다.'],
	['.education:nth-of-type(1) .eyebrow', '학력'],
	['.education:nth-of-type(2) .eyebrow', '학력'],
	['.education:nth-of-type(3) .eyebrow', '어학연수'],
	['.education:nth-of-type(1) p:nth-of-type(1)', '컴퓨터 과학 석사<br>2027년 12월 졸업 예정'],
	['.education:nth-of-type(2) p', '컴퓨터 과학 학사<br>2019년 8월 – 2023년 5월'],
	['.education:nth-of-type(3) p', '중국어 교육 센터<br>2026년 12월 - 2027년 2월'],
	['.timeline article:nth-child(1) h3', 'AI 엔지니어'],
	['.timeline article:nth-child(1) > p:not(.company)', '자연어 질의와 설명을 통해 만성 통증 연구 데이터를 더 쉽게 활용하도록 지원했으며, 정확성과 환자 개인정보 보호에 집중했습니다.'],
	['.timeline article:nth-child(2) h3', 'IT 컨설턴트'],
	['.timeline article:nth-child(2) > p:not(.company)', 'AI 및 서비스 혁신 팀의 프로젝트 관리를 지원했습니다. Azure DevOps 사용자 스토리와 백로그를 정리해 언어를 일관되게 유지하고 애자일 소프트웨어 개발업무를 지원했습니다.'],
	['.timeline article:nth-child(3) h3', '소프트웨어 엔지니어 인턴'],
	['.timeline article:nth-child(3) > p:not(.company)', 'Alexa를 통한 Audible 도서 구매용 Kotlin API를 리팩터링해 운영 환경의 지연 시간을 약 100ms 줄였습니다. 문서 구조도 정리해 홈 페이지에서 세 번 안에 모든 문서에 도달하도록 했습니다.'],
	['.timeline article:nth-child(4) h3', '튜터'],
	['.timeline article:nth-child(4) > p:not(.company)', '중학생들과 고등학생들에게 Python, Java, JavaScript, HTML, CSS를 가르쳤습니다.'],
	['.timeline article:nth-child(5) h3', '조교'],
	['.timeline article:nth-child(5) > p:not(.company)', '오피스아워와 시험 대비 세션을 진행하고 과제와 시험을 채점했습니다.'],
	['.skills .eyebrow', '기술 도구'],
	['#languages .section-heading .eyebrow', '02 / 코드 너머'],
	['#languages .section-heading h2', '언어는<br>또 다른 문을 엽니다.'],
	['#languages .section-heading > p', '언어를 배우는 일은 제 삶의 장기적인 여정입니다. 낯선 장소와 과정을 헤쳐 나가는 사람들을 돕는 일에도 그 꾸준함을 이어가고 싶습니다.'],
	['.language-grid article:nth-child(1) h3', '영어'],
	['.language-grid article:nth-child(1) p', '미국 시민권자, 주 사용 언어'],
	['.language-grid article:nth-child(2) h3', '한국어'],
	['.language-grid article:nth-child(2) p', '모국어'],
	['.language-grid article:nth-child(3) h3', '중국어'],
	['.language-grid article:nth-child(3) p', 'HSK 5급 인증 · 말하기와 듣기 실력을 계속 키우는 중'],
	['.direction .eyebrow', '기여하고 싶은 분야'],
	['.direction > div:first-child h3', '사람을 직접 만나는 일,<br>기술적 관점과 함께.'],
	['.direction h4:nth-of-type(1)', '공항 여객 서비스 / GHA'],
	['.direction p:nth-of-type(1)', '국제 여행객을 돕고, 명확한 소통을 지원하며, 여객 서비스 운영을 배우는 일에 관심이 있습니다. 여행 관련 프로젝트는 항공 분야에 대한 더 넓은 관심을 보여줍니다.'],
	['.direction h4:nth-of-type(2)', '의료 코디네이션 및 언어 지원'],
	['.direction p:nth-of-type(2)', '의료 코디네이터와 통역 역할도 알아보고 있습니다. 의료 기술 프로젝트를 통해 명확한 정보, 체계적인 업무 흐름, 개인정보를 고려한 서비스에 대한 관심이 커졌습니다.'],
	['#places .section-heading .eyebrow', '03 / 여행지와 관점'],
	['#places .section-heading h2', '세상을 바라보는 방식을<br>만들어 준 장소들.'],
	['#places .section-heading > p', '살아본 곳부터 여행한 도시까지. <span data-place-count="lived">9</span>곳에서 살았고, <span data-place-count="visited">34</span>곳을 방문했으며, 앞으로도 더 많은 곳을 발견하고 싶습니다.'],
	['.map-filters button[data-map-filter="all"]', '전체 <span data-place-count="total">43</span>'],
	['.map-filters button[data-map-filter="lived"]', '<span class="map-key lived-key" aria-hidden="true"></span>살아본 곳 <span data-place-count="lived">9</span>'],
	['.map-filters button[data-map-filter="visited"]', '<span class="map-key visited-key" aria-hidden="true"></span>방문한 곳 <span data-place-count="visited">34</span>'],
	['#map-reset', '지도 초기화 ↗'],
	['#map-status', '<span data-place-count="total">43</span>곳 · 핀이나 아래 도시를 선택해 보세요.'],
	['.map-caption > span', '드래그하여 탐색 · + / −로 확대/축소'],
	['.place-directory summary', '도시 목록 살펴보기 <span><span data-place-count="total">43</span>곳</span>'],
	['.place-groups > div:nth-child(1) h3', '<span class="map-key lived-key" aria-hidden="true"></span>살아본 곳'],
	['.place-groups > div:nth-child(2) h3', '<span class="map-key visited-key" aria-hidden="true"></span>방문한 곳'],
	['noscript p', '지도를 탐색하려면 JavaScript를 활성화해 주세요. 모든 도시가 위에 나열되어 있습니다.'],
	['#contact .eyebrow', '04 / 연락하기'],
	['#contact h2', '함께<br><em>유용한 것</em>을 만듭시다.'],
	['#contact .wrap > p:not(.eyebrow)', '개발 기회, 국제 서비스 직무,<br class="desktop-break"> 또는 두 분야가 만나는 지점에 대한 이야기를 나누고 싶다면 연락해 주세요.'],
	['.contact-links a:nth-child(3)', '이력서 ↓'],
	['footer span:last-of-type', '코드. 언어. 연결.'],
	['footer a', '맨 위로 ↑']
];

const languageAttributes = [
	['.map-filters', 'aria-label', '여행지 필터'],
	['#travel-map', 'aria-label', '살아본 곳과 방문한 곳을 보여주는 인터랙티브 세계 지도']
];

const chineseAttributes = new Map([
	['.map-filters|aria-label', '旅行地筛选'],
	['#travel-map|aria-label', '显示住过和去过地点的互动世界地图']
]);

const chineseTranslations = new Map([
	['.skip', '跳转到正文'],
	['.nav nav a:nth-of-type(1)', '经历'],
	['.nav nav a:nth-of-type(2)', '语言'],
	['.nav nav a:nth-of-type(3)', '旅行地'],
	['.nav nav a:nth-of-type(4)', '作品'],
	['.nav-contact', '联系我 <span aria-hidden="true">↗</span>'],
	['.hero .eyebrow', '开发者 · 语言学习者 · 连接人与人的人'],
	['.hero h1', '构建软件。<br><span>连接世界。</span>'],
	['.intro', '我是 Han，一名开发者，也是 Johns Hopkins 的计算机科学研究生。我关注如何通过技术和用心的沟通，让日常体验变得更好。'],
	['.actions .primary', '查看我的作品 <span aria-hidden="true">↓</span>'],
	['.resume-link', '下载简历 <span aria-hidden="true">↗</span>'],
	['.profile-top span:nth-child(1)', 'Han Lim / 一览'],
	['.profile-bottom > p', '技术是我的背景。<br>语言是我一生的追求。'],
	['.profile-line:nth-of-type(1) > span', '目前学习'],
	['.profile-line:nth-of-type(1) strong', '计算机科学硕士<br>Johns Hopkins University'],
	['.profile-line:nth-of-type(2) > span', '探索方向'],
	['.profile-line:nth-of-type(2) strong', '软件开发 · 航空服务<br>医疗协调与翻译'],
	['.credentials .credential-inner > span', '曾经工作的地方'],
	['#work .section-heading .eyebrow', '04 / 精选作品'],
	['#work .section-heading h2', '实用的工具。<br>真实的场景。'],
	['#work .section-heading > p', '从协调出行到让研究数据更易于探索，我始终围绕实际需求进行构建。'],
	['.project:nth-child(1) .project-meta span:nth-child(1)', '医疗 + AI'],
	['.project:nth-child(1) h3', 'Discovery Agent 1.0'],
	['.project:nth-child(1) > p:nth-of-type(1)', '这是一个面向 A2CPS 慢性疼痛研究数据集的自然语言界面，与 Johns Hopkins Bloomberg 公共卫生学院合作开发，项目由 NIH 资助。'],
	['.project:nth-child(1) > p:nth-of-type(2)', '在关注患者隐私和 HIPAA 要求的前提下，使用检索增强生成将问题转换为 SQL，并将查询结果转换为自然语言。'],
	['.project:nth-child(1) .project-foot', '研究项目 · 2026年1月–5月'],
	['.project:nth-child(2) .project-meta span:nth-child(1)', '旅行 + 社区'],
	['.project:nth-child(2) h3', 'HopShare'],
	['.project:nth-child(2) > p:nth-of-type(1)', '帮助 Johns Hopkins 学生协调前往相似目的地的拼车并分摊费用的网页应用。'],
	['.project:nth-child(2) > p:nth-of-type(2)', '通过 Google 登录和地图集成，提供更便捷的拼车体验。'],
	['.project:nth-child(2) .project-foot', '学生拼车平台'],
	['.project:nth-child(3) .project-meta span:nth-child(1)', '医疗 + 运营'],
	['.project:nth-child(3) h3', '牙科诊所志愿者门户'],
	['.project:nth-child(3) > p', '与当地牙科诊所合作开发的管理门户，用于管理志愿者班次、信息和统计数据。'],
	['.project:nth-child(3) .project-foot', '志愿者管理系统'],
	['.project:nth-child(4) .project-meta span:nth-child(1)', '航空 + 数据'],
	['.project:nth-child(4) h3', 'Clearcost Flights'],
	['.project:nth-child(4) > p', '一个航班比价网站，将实时 Google Flights 价格与可获得的里程等信息结合起来，更全面地呈现旅行成本。'],
	['.project:nth-child(4) .tags span:nth-child(2)', '航班价格'],
	['.project:nth-child(4) .project-foot', '旅行决策支持'],
	['.github', '访问我的 GitHub <span aria-hidden="true">↗</span>'],
	['#experience .eyebrow', '01 / 经历'],
	['#experience h2', '扎实的技术基础。<br>务实的工作方式。'],
	['.section-intro', '拥有交付软件、教授学生以及支持团队的经验。'],
	['.education:nth-of-type(1) .eyebrow', '教育经历'],
	['.education:nth-of-type(2) .eyebrow', '教育经历'],
	['.education:nth-of-type(3) .eyebrow', '补充教育'],
	['.education:nth-of-type(1) p:nth-of-type(1)', '计算机科学硕士<br>预计2027年12月毕业'],
	['.education:nth-of-type(2) p', '计算机科学学士<br>2019年8月 – 2023年5月'],
	['.education:nth-of-type(3) p', '普通话培训中心<br>2026年12月 - 2027年2月'],
	['.timeline article:nth-child(1) h3', 'AI 工程师'],
	['.timeline article:nth-child(1) > p:not(.company)', '通过自然语言查询和解释，让慢性疼痛研究数据更易于使用，并重点关注准确性和患者隐私。'],
	['.timeline article:nth-child(2) h3', '技术顾问'],
	['.timeline article:nth-child(2) > p:not(.company)', '为 AI 和服务创新团队提供项目管理支持。整理 Azure DevOps 用户故事和待办列表，保持语言一致并支持敏捷交付。'],
	['.timeline article:nth-child(3) h3', '软件工程实习生'],
	['.timeline article:nth-child(3) > p:not(.company)', '重构通过 Alexa 购买 Audible 书籍的 Kotlin API，使生产环境延迟降低约 100 毫秒。同时重新整理团队文档，让任何文档都能在三次点击内从主页找到。'],
	['.timeline article:nth-child(4) h3', '导师'],
	['.timeline article:nth-child(4) > p:not(.company)', '为六至十二年级的学生教授 Python、Java、JavaScript、HTML 和 CSS。'],
	['.timeline article:nth-child(5) h3', '助教'],
	['.timeline article:nth-child(5) > p:not(.company)', '主持答疑和考前复习课程，并批改作业和考试。'],
	['.skills .eyebrow', '技术工具'],
	['#languages .section-heading .eyebrow', '02 / 代码之外'],
	['#languages .section-heading h2', '语言打开<br>另一扇门。'],
	['#languages .section-heading > p', '学习语言是我人生中长期坚持的一部分。我希望将这份投入带入能够帮助人们应对陌生地点和流程的工作中。'],
	['.language-grid article:nth-child(1) h3', '英语'],
	['.language-grid article:nth-child(1) p', '美国公民，主要使用语言'],
	['.language-grid article:nth-child(2) h3', '韩语'],
	['.language-grid article:nth-child(2) p', '母语'],
	['.language-grid article:nth-child(3) h3', '普通话'],
	['.language-grid article:nth-child(3) p', '通过 HSK 五级认证 · 持续提升口语和听力能力'],
	['.direction .eyebrow', '希望贡献的领域'],
	['.direction > div:first-child h3', '与人面对面的工作，<br>结合技术视角。'],
	['.direction h4:nth-of-type(1)', '机场旅客服务 / GHA'],
	['.direction p:nth-of-type(1)', '我希望帮助国际旅客、支持清晰沟通，并了解旅客服务的运营环节。我的旅行项目体现了我对航空领域更广泛的兴趣。'],
	['.direction h4:nth-of-type(2)', '医疗协调与语言支持'],
	['.direction p:nth-of-type(2)', '我也在探索医疗协调员和翻译相关职位。医疗科技项目加深了我对清晰信息、有序工作流程以及重视隐私的服务的兴趣。'],
	['#places .section-heading .eyebrow', '03 / 旅行地与视角'],
	['#places .section-heading h2', '塑造我眼界的<br>一些地方。'],
	['#places .section-heading > p', '从我生活过的地方，到我探索过的城市。住过 <span data-place-count="lived">10</span> 个地方，去过 <span data-place-count="visited">33</span> 个地方，还有更多等待发现。'],
	['.map-filters button[data-map-filter="all"]', '全部 <span data-place-count="total">43</span>'],
	['.map-filters button[data-map-filter="lived"]', '<span class="map-key lived-key" aria-hidden="true"></span>住过 <span data-place-count="lived">10</span>'],
	['.map-filters button[data-map-filter="visited"]', '<span class="map-key visited-key" aria-hidden="true"></span>去过 <span data-place-count="visited">33</span>'],
	['#map-reset', '重置地图 ↗'],
	['#map-status', '<span data-place-count="total">43</span> 个地方 · 请选择一个标记或下方的城市。'],
	['.map-caption > span', '拖动探索 · 使用 + / − 缩放'],
	['.place-directory summary', '浏览城市列表 <span><span data-place-count="total">43</span> 个地方</span>'],
	['.place-groups > div:nth-child(1) h3', '<span class="map-key lived-key" aria-hidden="true"></span>住过'],
	['.place-groups > div:nth-child(2) h3', '<span class="map-key visited-key" aria-hidden="true"></span>去过'],
	['noscript p', '请启用 JavaScript 以探索地图。上方列出了所有城市。'],
	['#contact .eyebrow', '05 / 联系我'],
	['#contact h2', '一起<br><em>创造有用的东西。</em>'],
	['#contact .wrap > p:not(.eyebrow)', '如果你想聊聊开发机会、国际服务岗位，<br class="desktop-break">或这两个领域交汇的可能，欢迎联系我。'],
	['.contact-links a:nth-child(3)', '简历 ↓'],
	['footer span:last-of-type', '代码。语言。连接。'],
	['footer a', '返回顶部 ↑']
]);

// Convert the complete Simplified Chinese set into Taiwan-style Traditional Chinese.
// Phrase substitutions run first so regional terms are natural rather than mechanical.
function toTraditionalChinese(text) {
	const phrases = [
		['软件', '軟體'], ['数据', '資料'], ['信息', '資訊'], ['项目', '專案'],
		['登录', '登入'], ['网页', '網頁'], ['网站', '網站'], ['普通话', '華語'],
		['计算机科学', '電腦科學'], ['联系', '聯絡'], ['拼车', '共乘'], ['待办列表', '待辦清單'],
		['技术顾问', '技術顧問'], ['简历', '履歷'], ['机场', '機場']
	];
	let converted = text;
	phrases.forEach(([simplified, traditional]) => { converted = converted.split(simplified).join(traditional); });
	const characters = {
		'业':'業','东':'東','两':'兩','严':'嚴','个':'個','为':'為','丽':'麗','举':'舉','么':'麼','义':'義','乌':'烏','乐':'樂','习':'習','书':'書','买':'買','乱':'亂','争':'爭','于':'於','亚':'亞','产':'產','亲':'親','仅':'僅','从':'從','仓':'倉','仪':'儀','们':'們','优':'優','会':'會','传':'傳','伤':'傷','体':'體','余':'餘','作':'作','使':'使','侧':'側','侦':'偵','便':'便','促':'促','保':'保','信':'信','修':'修','倾':'傾','储':'儲','儿':'兒','克':'克','党':'黨','兰':'蘭','关':'關','兴':'興','养':'養','兽':'獸','写':'寫','军':'軍','农':'農','冲':'衝','决':'決','况':'況','准':'準','几':'幾','击':'擊','则':'則','刚':'剛','创':'創','删':'刪','别':'別','制':'制','刷':'刷','券':'券','刹':'剎','剂':'劑','剧':'劇','办':'辦','务':'務','动':'動','励':'勵','劳':'勞','势':'勢','区':'區','协':'協','单':'單','卫':'衛','却':'卻','厂':'廠','历':'歷','压':'壓','县':'縣','参':'參','发':'發','变':'變','叠':'疊','叶':'葉','号':'號','后':'後','吗':'嗎','启':'啟','员':'員','呗':'唄','呼':'呼','响':'響','团':'團','园':'園','围':'圍','国':'國','图':'圖','圆':'圓','圣':'聖','场':'場','坚':'堅','块':'塊','址':'址','坏':'壞','坛':'壇','声':'聲','处':'處','备':'備','复':'復','头':'頭','夸':'誇','夹':'夾','夺':'奪','奋':'奮','奖':'獎','妇':'婦','娱':'娛','学':'學','实':'實','审':'審','宪':'憲','将':'將','层':'層','岁':'歲','岛':'島','岭':'嶺','币':'幣','帅':'帥','师':'師','帐':'帳','带':'帶','应':'應','庆':'慶','序':'序','库':'庫','废':'廢','广':'廣','异':'異','弃':'棄','开':'開','张':'張','强':'強','归':'歸','录':'錄','彩':'彩','彻':'徹','征':'徵','径':'徑','忆':'憶','忧':'憂','态':'態','总':'總','恋':'戀','恶':'惡','惊':'驚','惯':'慣','愿':'願','戏':'戲','战':'戰','户':'戶','护':'護','报':'報','担':'擔','拟':'擬','拥':'擁','择':'擇','指':'指','挥':'揮','损':'損','换':'換','据':'據','接':'接','推':'推','提':'提','揽':'攬','摊':'攤','操':'操','收':'收','效':'效','数':'數','斋':'齋','断':'斷','无':'無','时':'時','显':'顯','晓':'曉','暂':'暫','术':'術','机':'機','权':'權','条':'條','来':'來','构':'構','标':'標','样':'樣','档':'檔','检':'檢','楼':'樓','欢':'歡','欧':'歐','步':'步','残':'殘','气':'氣','汇':'匯','汉':'漢','汤':'湯','沟':'溝','没':'沒','泺':'潑','泽':'澤','洁':'潔','测':'測','济':'濟','浏':'瀏','涉':'涉','涂':'塗','消':'消','涛':'濤','涨':'漲','渐':'漸','渔':'漁','湾':'灣','湿':'濕','源':'源','滑':'滑','满':'滿','滤':'濾','滚':'滾','演':'演','潜':'潛','灭':'滅','灵':'靈','点':'點','炼':'煉','热':'熱','爱':'愛','状':'狀','独':'獨','现':'現','环':'環','电':'電','画':'畫','畅':'暢','疗':'療','监':'監','盘':'盤','着':'著','瞒':'矞','矩':'矩','破':'破','确':'確','礼':'禮','离':'離','种':'種','积':'積','程':'程','稳':'穩','端':'端','站':'站','竞':'競','笔':'筆','笼':'籠','简':'簡','签':'籤','管':'管','类':'類','精':'精','系':'系','级':'級','纪':'紀','红':'紅','纳':'納','线':'線','练':'練','组':'組','细':'細','终':'終','绍':'紹','经':'經','结':'結','绕':'繞','绘':'繪','给':'給','统':'統','继':'繼','续':'續','维':'維','综':'綜','编':'編','缘':'緣','缩':'縮','网':'網','置':'置','署':'署','考':'考','联':'聯','职':'職','肃':'肅','胜':'勝','脸':'臉','能':'能','致':'致','航':'航','节':'節','范':'範','荐':'薦','获':'獲','营':'營','蓝':'藍','虑':'慮','蚀':'蝕','补':'補','装':'裝','见':'見','观':'觀','规':'規','视':'視','览':'覽','觉':'覺','角':'角','解':'解','言':'言','计':'計','认':'認','讨':'討','记':'記','讲':'講','许':'許','论':'論','设':'設','访':'訪','证':'證','评':'評','识':'識','诉':'訴','诊':'診','词':'詞','译':'譯','试':'試','话':'話','询':'詢','该':'該','详':'詳','语':'語','误':'誤','说':'說','请':'請','课':'課','调':'調','谈':'談','谢':'謝','负':'負','贡':'貢','财':'財','责':'責','败':'敗','货':'貨','质':'質','购':'購','费':'費','资':'資','赋':'賦','赏':'賞','赞':'讚','赶':'趕','超':'超','趋':'趨','路':'路','车':'車','转':'轉','轻':'輕','载':'載','较':'較','辑':'輯','达':'達','过':'過','运':'運','近':'近','还':'還','进':'進','远':'遠','连':'連','迹':'跡','选':'選','递':'遞','逻':'邏','遗':'遺','邮':'郵','邻':'鄰','部':'部','配':'配','里':'裡','钟':'鐘','钥':'鑰','链':'鏈','锁':'鎖','错':'錯','键':'鍵','长':'長','门':'門','问':'問','间':'間','队':'隊','阳':'陽','阴':'陰','际':'際','陆':'陸','陈':'陳','险':'險','隐':'隱','难':'難','需':'需','静':'靜','韩':'韓','页':'頁','顶':'頂','项':'項','顺':'順','须':'須','顾':'顧','预':'預','领':'領','题':'題','额':'額','风':'風','飞':'飛','饭':'飯','饮':'飲','馆':'館','验':'驗','驻':'駐','驱':'驅','高':'高','鲜':'鮮','默':'默','齐':'齊'
	};
	return [...converted].map((character) => characters[character] || character).join('');
}

const traditionalChineseTranslations = new Map(
	[...chineseTranslations].map(([selector, text]) => [selector, toTraditionalChinese(text)])
);
const traditionalChineseAttributes = new Map(
	[...chineseAttributes].map(([key, text]) => [key, toTraditionalChinese(text)])
);

const originalText = new Map();
translations.forEach(([selector]) => {
	document.querySelectorAll(selector).forEach((element) => originalText.set(element, element.innerHTML));
});
const originalAttributes = new Map();
languageAttributes.forEach(([selector, attribute]) => {
	document.querySelectorAll(selector).forEach((element) => originalAttributes.set(`${selector}|${attribute}|${element}`, element.getAttribute(attribute)));
});

function getPlaceCounts() {
	const places = Array.isArray(window.portfolioPlaces) ? window.portfolioPlaces : [];
	return {
		total: places.length,
		lived: places.filter((place) => place.kind === 'lived').length,
		visited: places.filter((place) => place.kind === 'visited').length
	};
}

function updatePlaceCounts() {
	const counts = getPlaceCounts();
	document.querySelectorAll('[data-place-count]').forEach((element) => {
		element.textContent = counts[element.dataset.placeCount] ?? 0;
	});
}

function applyLanguage(language) {
	const isKorean = language === 'ko';
	const isSimplifiedChinese = language === 'zh-CN';
	const isTraditionalChinese = language === 'zh-TW';
	const isChinese = isSimplifiedChinese || isTraditionalChinese;
	document.documentElement.lang = language;
	document.title = isKorean ? 'Han Lim — 개발과 언어' : isTraditionalChinese ? 'Han Lim — 開發與語言' : isSimplifiedChinese ? 'Han Lim — 开发与语言' : 'Han Lim — Development & Languages';
	document.querySelector('meta[name="description"]').content = isKorean
		? 'Han Lim — 소프트웨어 개발자이자 Johns Hopkins 컴퓨터 과학 대학원생입니다.'
		: isTraditionalChinese
			? 'Han Lim — 軟體開發者，也是 Johns Hopkins 的電腦科學研究生，關注語言、航空和國際病患支援。'
			: isSimplifiedChinese
				? 'Han Lim — 软件开发者，也是 Johns Hopkins 的计算机科学研究生，关注语言、航空和国际患者支持。'
				: 'Han Lim — software developer and Johns Hopkins CS graduate student with interests in languages, aviation, and international patient support.';
	translations.forEach(([selector, koreanText]) => {
		document.querySelectorAll(selector).forEach((element) => {
			const chineseText = isTraditionalChinese ? traditionalChineseTranslations.get(selector) : chineseTranslations.get(selector);
			element.innerHTML = isKorean ? koreanText : isChinese ? chineseText : originalText.get(element);
		});
	});
	languageAttributes.forEach(([selector, attribute, koreanText]) => {
		document.querySelectorAll(selector).forEach((element) => {
			const original = originalAttributes.get(`${selector}|${attribute}|${element}`);
			const chineseText = (isTraditionalChinese ? traditionalChineseAttributes : chineseAttributes).get(`${selector}|${attribute}`);
			element.setAttribute(attribute, isKorean ? koreanText : isChinese ? chineseText : original);
		});
	});
	updatePlaceCounts();
	const languageMenuButton = document.getElementById('language-menu-button');
	const languageMenu = document.getElementById('language-menu');
	if (languageMenuButton) languageMenuButton.querySelector('span').textContent = language === 'ko' ? '한국어' : language === 'zh-CN' ? '简体中文' : language === 'zh-TW' ? '繁體中文' : 'English';
	languageMenu?.querySelectorAll('[data-language]').forEach((option) => {
		option.setAttribute('aria-selected', String(option.dataset.language === language));
	});
		document.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: { language } }));
	try { localStorage.setItem('portfolio-language', language); } catch { /* Storage may be unavailable. */ }
}

// Fade translated text only, leaving the map and greetings in place.
let languageChange = 0;
let languageAnimations = [];
const translatedElements = [...originalText.keys()];
const fadeTargets = translatedElements.filter(element =>
	!translatedElements.some(parent => parent !== element && parent.contains(element))
);
async function setLanguage(language) {
	if (!['en', 'ko', 'zh-CN', 'zh-TW'].includes(language)) return;
	const change = ++languageChange;
	languageAnimations.forEach(animation => animation.cancel());
	languageAnimations = [];
	if (document.documentElement.lang === language) return;
	const animate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
		&& fadeTargets.every(element => typeof element.animate === 'function');
	if (animate) {
		languageAnimations = fadeTargets.map(element => element.animate(
			[{ opacity: 1 }, { opacity: 0 }],
			{ duration: 130, easing: 'ease-out', fill: 'forwards' }
		));
		await Promise.all(languageAnimations.map(animation => animation.finished.catch(() => {})));
		if (change !== languageChange) return;
		languageAnimations.forEach(animation => animation.cancel());
	}
	applyLanguage(language);
	if (animate) {
		languageAnimations = fadeTargets.map(element => element.animate(
			[{ opacity: 0 }, { opacity: 1 }],
			{ duration: 220, easing: 'ease-in-out' }
		));
	}
}

const languageMenuButton = document.getElementById('language-menu-button');
const languageMenu = document.getElementById('language-menu');
if (languageMenuButton && languageMenu) {
	const closeLanguageMenu = () => {
		languageMenu.classList.remove('is-open');
		languageMenuButton.setAttribute('aria-expanded', 'false');
	};
	languageMenuButton.addEventListener('click', () => {
		const isOpen = languageMenu.classList.toggle('is-open');
		languageMenuButton.setAttribute('aria-expanded', String(isOpen));
		if (isOpen) languageMenu.querySelector('[aria-selected="true"]')?.focus();
	});
	languageMenu.querySelectorAll('[data-language]').forEach((option) => {
		option.addEventListener('click', () => {
			setLanguage(option.dataset.language);
			closeLanguageMenu();
		});
		option.addEventListener('keydown', (event) => {
			const options = [...languageMenu.querySelectorAll('[data-language]')];
			const index = options.indexOf(option);
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				setLanguage(option.dataset.language);
				closeLanguageMenu();
				languageMenuButton.focus();
			} else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
				event.preventDefault();
				options[(index + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length].focus();
			} else if (event.key === 'Escape') {
				event.preventDefault();
				closeLanguageMenu();
				languageMenuButton.focus();
			}
		});
	});
	document.addEventListener('click', (event) => {
		if (!event.target.closest('.language-dropdown')) closeLanguageMenu();
	});
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') closeLanguageMenu();
	});
}

let savedLanguage = 'en';
try {
	const storedLanguage = localStorage.getItem('portfolio-language');
	savedLanguage = ['en', 'ko', 'zh-CN', 'zh-TW'].includes(storedLanguage) ? storedLanguage : 'en';
} catch { /* Default to English. */ }
applyLanguage(savedLanguage);

// Keep the document and keyboard-reading order aligned with the visual story.
const mainContent = document.getElementById('main');
if (mainContent) {
	['experience', 'languages', 'places', 'work', 'contact'].forEach((sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) mainContent.appendChild(section);
	});
}

// Account for wrapped navigation and language changes when jumping to sections.
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
	const updateHeaderHeight = () => document.documentElement.style.setProperty(
		'--header-height', `${Math.ceil(siteHeader.getBoundingClientRect().height)}px`
	);
	updateHeaderHeight();
	if ('ResizeObserver' in window) new ResizeObserver(updateHeaderHeight).observe(siteHeader);
	else window.addEventListener('resize', updateHeaderHeight);
}

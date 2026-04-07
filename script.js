if (location.protocol === "http:" && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") { location.replace("https://" + location.host + location.pathname + location.search + location.hash); }</script>
  <title>PROanalyse</title>
  <style>:root{
  --bg:#0b1530;
  --bg2:#12224a;
  --bg3:#1b3d8f;
  --panel:#ffffff;
  --panel-soft:#f6f9ff;
  --text:#1f2a44;
  --muted:#5e6c84;
  --line:#d9e3f2;
  --primary:#4f8cff;
  --primary-dark:#1d4ed8;
  --accent:#6d4dff;
  --success:#16a34a;
  --shadow:0 16px 36px rgba(10,26,60,.12);
  --radius:24px;
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}

body{
  margin:0;
  font-family:Segoe UI, Arial, Helvetica, sans-serif;
  color:var(--text);
  background:
    radial-gradient(circle at top right, rgba(109,77,255,.24), transparent 28%),
    radial-gradient(circle at top left, rgba(59,130,246,.18), transparent 24%),
    linear-gradient(180deg, var(--bg), var(--bg2) 48%, var(--bg3));
  line-height:1.55;
}

.container{
  width:min(1380px,94%);
  margin:0 auto;
}

header{
  position:sticky;
  top:0;
  z-index:50;
  background:rgba(8,19,44,.84);
  backdrop-filter:blur(12px);
  border-bottom:1px solid rgba(255,255,255,.10);
}

main{
  padding:30px 0 70px;
}

nav{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:18px;
  padding:18px 0;
  flex-wrap:wrap;
}

.brand{
  font-size:1.35rem;
  font-weight:800;
  color:#fff;
  letter-spacing:.01em;
  white-space:nowrap;
}

.brand span{color:#8bb7ff}

.menu{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}

.menu-btn{
  border:1px solid rgba(255,255,255,.14);
  background:rgba(255,255,255,.06);
  color:#fff;
  border-radius:999px;
  padding:10px 16px;
  cursor:pointer;
  font-weight:700;
  transition:.2s ease;
  white-space:nowrap;
}

.menu-btn:hover{
  transform:translateY(-1px);
  background:rgba(255,255,255,.10);
}

.menu-btn.active{
  background:linear-gradient(135deg,#4f8cff,#76a8ff);
  border-color:transparent;
  box-shadow:0 12px 24px rgba(59,130,246,.28);
}


.main-panel{display:none}
.main-panel.active{display:block}

.hero{
  background:linear-gradient(135deg,#1e4fd1,#2d68f0 55%, #6d4dff);
  border-radius:30px;
  color:#fff;
  padding:34px 36px;
  box-shadow:0 18px 40px rgba(29,78,216,.30);
  margin-bottom:24px;
  border:1px solid rgba(255,255,255,.10);
}

.hero h1{
  margin:0 0 14px;
  font-size:2rem;
  line-height:1.18;
}

.hero p{
  margin:0;
  max-width:none;
  width:100%;
  color:rgba(255,255,255,.94);
  font-size:0.98rem;
  line-height:1.65;
}

.section-card{
  background:var(--panel);
  border:1px solid var(--line);
  border-radius:var(--radius);
  box-shadow:var(--shadow);
  padding:24px;
  margin-bottom:22px;
}

.badge{
  display:inline-block;
  font-size:.82rem;
  font-weight:800;
  color:var(--primary-dark);
  background:#eaf2ff;
  border:1px solid #d5e5ff;
  padding:8px 12px;
  border-radius:999px;
  margin-bottom:12px;
  text-transform:uppercase;
  letter-spacing:.06em;
}

h2,h3,h4{
  margin:0 0 10px;
  line-height:1.3;
}

p{
  margin:0 0 10px;
  color:var(--muted);
}

.small{
  font-size:.95rem;
  color:var(--muted);
}

.grid{display:grid; gap:18px}
.grid-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.grid-3{grid-template-columns:repeat(3,minmax(0,1fr))}

.mini-card{
  background:var(--panel-soft);
  border:1px solid var(--line);
  border-radius:20px;
  padding:18px;
}

label{
  display:block;
  font-weight:700;
  margin-bottom:7px;
  color:#24344f;
}

input, textarea, select{
  width:100%;
  border:1px solid #cfdaea;
  background:#fff;
  color:var(--text);
  border-radius:14px;
  padding:13px 14px;
  font:inherit;
  outline:none;
  transition:.2s ease;
}

input:focus, textarea:focus, select:focus{
  border-color:#9ec2ff;
  box-shadow:0 0 0 4px rgba(59,130,246,.10);
}

input[type="file"]{
  padding:12px;
  background:#f8fbff;
}

textarea{
  min-height:120px;
  resize:vertical;
}

.row{
  display:grid;
  gap:16px;
  margin:16px 0;
}

.row-2{grid-template-columns:repeat(2,minmax(0,1fr))}

.steps-nav{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin:18px 0 22px;
}

.risk-nav-wrap{
  position:relative;
  margin:18px 0 22px;
}

.risk-nav{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  width:100%;
}

.step-btn, .risk-btn{
  padding:10px 14px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.14);
  background:rgba(255,255,255,.08);
  color:#fff;
  cursor:pointer;
  font-weight:700;
  white-space:nowrap;
  min-width:0;
  text-align:center;
  font-size:14px;
  line-height:1.2;
}

.step-btn.active, .risk-btn.active{
  background:linear-gradient(135deg,#4f8cff,#76a8ff);
  color:#fff;
  border-color:transparent;
  box-shadow:0 10px 24px rgba(59,130,246,.22);
}

.step-btn.locked{
  background:rgba(255,255,255,.05);
  color:#b9c7df;
  cursor:not-allowed;
}

.step-panel, .risk-panel{display:none}
.step-panel.active, .risk-panel.active{display:block}

.info-callout{
  margin-top:16px;
  padding:16px 18px;
  background:#f8fbff;
  border:1px solid #dce8fa;
  border-left:5px solid var(--primary);
  border-radius:16px;
  color:var(--muted);
}

.save-msg{
  margin-top:14px;
  display:none;
  padding:13px 15px;
  border-radius:14px;
  background:#edfdf4;
  border:1px solid #ccefd8;
  color:#13653a;
  font-weight:600;
}

.check-group{
  border:1px solid var(--line);
  border-radius:20px;
  padding:18px;
  background:var(--panel-soft);
}

.check-list{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:10px 16px;
}

.check-list label{
  display:flex;
  align-items:flex-start;
  gap:8px;
  font-weight:500;
  margin:0;
}

input[type="checkbox"], input[type="radio"]{
  width:auto;
  margin-top:3px;
}

.table-wrap{
  overflow:auto;
  border:1px solid var(--line);
  border-radius:18px;
  margin-top:16px;
  background:#fff;
}

table{
  width:100%;
  border-collapse:collapse;
  min-width:1320px;
}

th, td{
  border:1px solid var(--line);
  padding:10px;
  vertical-align:top;
  text-align:left;
  font-size:.95rem;
}

thead th{
  background:#edf4ff;
  color:#24344f;
}

.subhead{
  background:#f6f9ff;
  text-align:center;
  font-size:.88rem;
}

.center{text-align:center}
.prejudice-name{min-width:260px; font-weight:700}
.choice-cell{min-width:150px; background:#fbfdff}
.choice-stack{display:grid; gap:6px; margin-top:8px}

.choice-stack label{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:8px;
  margin:0;
  font-weight:500;
}

.level-title{
  display:block;
  font-weight:700;
  color:#24344f;
  margin-bottom:6px;
}

.justification-box{min-width:250px}

.actions, .risk-actions{
  display:flex;
  justify-content:space-between;
  gap:12px;
  margin-top:22px;
  flex-wrap:wrap;
}

.risk-actions{justify-content:center}

button{
  border:none;
  border-radius:14px;
  padding:13px 18px;
  cursor:pointer;
  font:inherit;
  font-weight:800;
  background:linear-gradient(135deg,var(--primary),#5fa2ff);
  color:#fff;
  box-shadow:0 10px 20px rgba(59,130,246,.18);
}

button.secondary{
  background:#fff;
  color:var(--text);
  border:1px solid var(--line);
  box-shadow:none;
}

button:disabled{
  opacity:.55;
  cursor:not-allowed;
  box-shadow:none;
}

.progress-top{
  height:8px;
  background:rgba(255,255,255,.16);
  border-radius:999px;
  overflow:hidden;
  margin:12px 0 18px;
}

.progress-bar{
  height:100%;
  width:12.5%;
  background:linear-gradient(90deg,#7bb2ff,#c5dbff);
  border-radius:999px;
  transition:width .25s ease;
}

.risk-card{
  width:min(980px,100%);
  margin:0 auto;
  background:var(--panel);
  border:1px solid var(--line);
  border-radius:24px;
  box-shadow:var(--shadow);
  padding:28px;
}

.risk-subtitle{
  color:var(--accent);
  text-transform:uppercase;
  letter-spacing:.08em;
  font-weight:800;
  font-size:.82rem;
  margin-bottom:14px;
}

.admin-box{
  display:none;
  margin-top:18px;
  border-radius:18px;
  background:#f1f8ff;
  border:1px solid #d7e7fd;
  padding:18px;
}

.iso-section{margin-top:28px}
.iso-grid{display:grid; gap:18px}

.iso-card{
  display:grid;
  grid-template-columns:320px 1fr;
  gap:28px;
  align-items:center;
  background:#f3f7ff;
  border:1px solid #d8e4f8;
  border-radius:24px;
  padding:22px;
  box-shadow:var(--shadow);
}

.iso-visual{
  min-height:280px;
  border-radius:18px;
  background:#fff;
  border:1px solid #dde6f5;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  padding:20px;
  text-align:center;
}

.iso-visual .iso-mark{
  width:150px;
  height:150px;
  border:7px solid #111;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:3rem;
  font-weight:900;
  margin-bottom:18px;
  position:relative;
  background:#fff;
  z-index:1;
}

.iso-visual .iso-mark:before{
  content:"";
  position:absolute;
  inset:-16px;
  border:7px solid #111;
  border-radius:26%;
  transform:rotate(45deg);
  z-index:-1;
  background:#fff;
}

.iso-visual .iso-name{
  font-size:2rem;
  font-weight:900;
  color:#0f4ea6;
  line-height:1.1;
}

.iso-title{
  font-size:1.1rem;
  color:var(--accent);
  font-weight:900;
  margin-bottom:12px;
}

.iso-content h3{
  font-size:1.9rem;
  margin-bottom:4px;
  color:#111827;
}

.iso-check{
  display:flex;
  align-items:center;
  gap:12px;
  margin:18px 0 10px;
  font-size:1.05rem;
  color:#111827;
}

.iso-check .dot{
  width:34px;
  height:34px;
  border-radius:50%;
  background:var(--success);
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  font-weight:900;
}

.iso-link{
  display:inline-block;
  margin-top:12px;
  color:var(--primary);
  font-weight:800;
  text-decoration:none;
}

.iso-link:hover{text-decoration:underline}

.law-box{
  background:#f9fbff;
  border:1px solid #dbe7fa;
  border-radius:18px;
  padding:18px;
}

footer{
  text-align:center;
  color:#cbd5f5;
  margin-top:42px;
  padding:18px;
  font-size:14px;
}

ul{
  margin:8px 0 0 18px;
  color:var(--muted);
}

@media (max-width:1000px){
  .grid-2,.grid-3,.row-2,.iso-card{grid-template-columns:1fr}
  .iso-card{gap:20px}
  .iso-visual{min-height:220px}
}

@media (max-width:700px){
  .hero{
    padding:24px 22px;
  }
  .hero h1{font-size:1.6rem}
  .hero p{font-size:.95rem; line-height:1.6}
  .risk-card,.section-card{padding:18px}
  .check-list{grid-template-columns:1fr}
  .menu{width:100%}
  .menu-btn{flex:1 1 auto; text-align:center}
}


.grid-4{grid-template-columns:repeat(4,minmax(0,1fr))}

.dashboard-hero{display:flex;align-items:center;justify-content:space-between}
.hero-badge{display:inline-flex;align-items:center;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.22);font-size:.82rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin-bottom:12px}
.dashboard-shell{padding:26px}
.dashboard-toolbar{display:grid;grid-template-columns:1.2fr .8fr;gap:14px;margin-bottom:18px}
.dashboard-kpi-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;margin:20px 0 22px}
.dashboard-kpi-card{background:linear-gradient(180deg,#f7faff,#eef4ff);border:1px solid #d9e3f2;border-radius:22px;padding:22px;box-shadow:var(--shadow)}
.dashboard-kpi-card span{display:block;font-size:1rem;font-weight:700;color:#50627f;margin-bottom:14px}
.dashboard-kpi-card strong{display:block;font-size:2.5rem;line-height:1;color:#10244d}
.dashboard-table-wrap{position:relative;overflow:auto;border:1px solid var(--line);border-radius:20px;background:#fff}
.dashboard-table{width:100%;border-collapse:collapse;min-width:960px}
.dashboard-table th,.dashboard-table td{padding:16px 14px;border-bottom:1px solid #e4ebf5;text-align:left;font-size:.96rem}
.dashboard-table thead th{background:#edf3ff;color:#1f3663;font-weight:800}
.dashboard-table tbody tr:hover{background:#f8fbff}
.dashboard-empty{display:none;padding:26px;text-align:center;color:var(--muted)}
.status-pill{display:inline-flex;align-items:center;gap:8px;border-radius:999px;padding:8px 12px;font-size:.84rem;font-weight:800}
.status-pill.completed{background:#eaf8ee;color:#166534}
.status-pill.progress{background:#eaf2ff;color:#1d4ed8}
.confirmation-panel{margin-top:22px}
.confirmation-card p{margin-bottom:18px}
.confirmation-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:18px}
.confirmation-grid .mini-card span{display:block;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:800;margin-bottom:10px}
.confirmation-grid .mini-card strong{display:block;font-size:1rem;line-height:1.5;color:#12213f}
.confirmation-grid .full{grid-column:1 / -1}
.connexion-card{max-width:860px;margin:0 auto}
.hidden{display:none !important}

@media (max-width:1100px){
  .grid-4,.dashboard-kpi-grid,.confirmation-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:700px){
  .dashboard-toolbar,.grid-4,.dashboard-kpi-grid,.confirmation-grid{grid-template-columns:1fr}
  .confirmation-grid .full{grid-column:auto}
}
</style>
</head>
<body>
  <header>
    <div class="container">
      <nav>
        <div class="brand">PRO<span>analyse</span></div>

        <div class="menu">
          <button type="button" class="menu-btn active" onclick="openMainSection('intro-site', this)">Introduction</button>
          <button type="button" class="menu-btn" onclick="openMainSection('classification', this)">Classification</button>
          <button type="button" class="menu-btn" onclick="openMainSection('risque', this)">Analyse de risque</button>
          <button type="button" class="menu-btn" onclick="openMainSection('dashboard', this)">Suivi des demandes</button>
          <button type="button" class="menu-btn" onclick="openMainSection('connexion', this)">Connexion</button>
        </div>
      </nav>
    </div>
  </header>

  <main class="container">
    <section id="intro-site" class="main-panel active">
      <div class="hero">
        <h1>Plateforme de classification et d’analyse de risque</h1>
        <p>
          PROanalyse soutient la classification de l’information et la préparation d’une analyse de risque
          de façon simple, structurée et progressive. La plateforme permet de mieux comprendre les actifs
          informationnels, de soutenir une préévaluation des dossiers numériques et d’orienter la prise de
          décision afin d’assurer une meilleure gestion, une meilleure productivité et une utilisation plus
          sécuritaire des systèmes.
        </p>
      </div>

      <div class="grid grid-3">
        <div class="section-card">
          <div class="badge">Pourquoi utiliser ce site</div>
          <p>
            Pour soutenir la classification de l’information et l’analyse de risque, mieux comprendre
            la sensibilité des actifs informationnels et appuyer des décisions qui favorisent une utilisation
            sécuritaire, efficace et plus productive des systèmes.
          </p>
        </div>

        <div class="section-card">
          <div class="badge">À qui s’adresse-t-il</div>
          <p>
            Aux responsables de projets, aux responsables des actifs informationnels ainsi qu’aux
            intervenants appelés à réaliser une préévaluation des dossiers numériques et à documenter
            les éléments essentiels d’un projet ou d’un système.
          </p>
        </div>

        <div class="section-card">
          <div class="badge">Comment ça fonctionne</div>
          <p>
            Vous complétez les informations de façon progressive. L’outil structure les éléments
            nécessaires à la classification, à la préanalyse de risque et à la validation du contenu
            avec l’équipe de sécurité de l’information.
          </p>
        </div>
      </div>

      <div class="iso-section">
        <div class="section-card">
          <div class="badge">Normes et références</div>
          <h2>Normes, cadres de référence et exigences légales</h2>
          <p>
            Cette plateforme s’appuie sur des normes reconnues, des cadres de référence et des exigences
            légales afin d’assurer une approche rigoureuse, cohérente et conforme en sécurité de l’information.
          </p>
        </div>

        <div class="iso-grid">
          <div class="iso-card">
            <div class="iso-visual">
              <div class="iso-mark">ISO</div>
              <div class="iso-name">ISO/IEC 27001</div>
            </div>
            <div class="iso-content">
              <h3>ISO/IEC 27001:2022</h3>
              <div class="iso-title">ISO/IEC</div>
              <div class="iso-check">
                <span class="dot">✓</span>
                <strong>Description</strong>
              </div>
              <p>
                ISO/IEC 27001 est la norme internationale de référence pour les systèmes de gestion de la sécurité
                de l’information. Elle définit les exigences permettant d’établir, de mettre en œuvre, de maintenir
                et d’améliorer continuellement un système de gestion de la sécurité de l’information.
              </p>
              <p>
                Elle aide les organisations à protéger leurs informations sensibles, à gérer les risques liés à la sécurité
                et à démontrer une approche structurée et conforme.
              </p>
              <a class="iso-link" href="https://www.iso.org/standard/27001" target="_blank" rel="noopener noreferrer">Voir la norme</a>
            </div>
          </div>

          <div class="iso-card">
            <div class="iso-visual">
              <div class="iso-mark">ISO</div>
              <div class="iso-name">ISO/IEC 27002</div>
            </div>
            <div class="iso-content">
              <h3>ISO/IEC 27002</h3>
              <div class="iso-title">ISO/IEC</div>
              <div class="iso-check">
                <span class="dot">✓</span>
                <strong>Description</strong>
              </div>
              <p>
                ISO/IEC 27002 fournit des lignes directrices sur les contrôles de sécurité de l’information.
                Elle complète ISO/IEC 27001 en proposant des bonnes pratiques et des mesures de sécurité
                applicables à la protection des systèmes, des services et des données.
              </p>
              <a class="iso-link" href="https://www.iso.org/standard/75106.html" target="_blank" rel="noopener noreferrer">Voir la norme</a>
            </div>
          </div>

          <div class="iso-card">
            <div class="iso-visual">
              <div class="iso-mark">ISO</div>
              <div class="iso-name">ISO/IEC 42001</div>
            </div>
            <div class="iso-content">
              <h3>ISO/IEC 42001</h3>
              <div class="iso-title">ISO/IEC</div>
              <div class="iso-check">
                <span class="dot">✓</span>
                <strong>Description</strong>
              </div>
              <p>
                ISO/IEC 42001 porte sur les systèmes de management de l’intelligence artificielle.
                Elle vise à encadrer l’utilisation responsable de l’IA, la gouvernance, les risques,
                la conformité et le contrôle des usages de l’intelligence artificielle dans l’organisation.
              </p>
              <a class="iso-link" href="https://www.iso.org/standard/42001" target="_blank" rel="noopener noreferrer">Voir la norme</a>
            </div>
          </div>

          <div class="section-card law-box">
            <div class="badge">Exigences légales</div>
            <h3>Protection des renseignements personnels et vie privée</h3>
            <ul>
              <li>Loi 25 – Protection des renseignements personnels</li>
              <li>PRP – Protection des renseignements personnels</li>
              <li>EFVP – Évaluation des facteurs relatifs à la vie privée, lorsque requis selon la nature du projet</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="classification" class="main-panel">
      <div class="section-card">
        <div class="badge">Classification</div>
        <h2>Classification de l’information</h2>
        <p>Cette section vise à structurer la collecte des informations nécessaires à la classification des actifs informationnels.</p>
        <p>Elle permet de mieux comprendre la nature des données, les impacts potentiels et le niveau de sensibilité associé au projet ou au système.</p>
        <p>Les informations fournies serviront à orienter l’analyse de risque et à soutenir la prise de décision en matière de sécurité de l’information.</p>
        <p>En cas d’incertitude ou d’information incomplète, il est recommandé de valider les éléments auprès des ressources appropriées afin d’assurer l’exactitude des données.</p>
      </div>

      <div class="steps-nav">
        <button type="button" id="stepBtn1" class="step-btn active" onclick="openClassStep(1)">Étape 1 — Détails</button>
        <button type="button" id="stepBtn2" class="step-btn locked" onclick="openClassStep(2)">Étape 2 — Données</button>
        <button type="button" id="stepBtn3" class="step-btn locked" onclick="openClassStep(3)">Étape 3 — Préjudices</button>
      </div>

      <form id="classificationForm">
        <div id="classStep1" class="step-panel active">
          <div class="section-card">
            <h3>Détails de la demande</h3>
            <p>Merci de compléter les informations de base avant de poursuivre.</p>

            <div class="row row-2">
              <div>
                <label for="numero_demande">Numéro de demande / billet</label>
                <input id="numero_demande" type="text" placeholder="Ex. INC-2026-00125" />
              </div>
              <div>
                <label for="nom_systeme">Nom du système d’information</label>
                <input id="nom_systeme" type="text" />
              </div>
            </div>

            <div class="row row-2">
              <div>
                <label for="nom_objet">Nom de l’objet ou du projet</label>
                <input id="nom_objet" type="text" />
              </div>
              <div>
                <label for="date_classification">Date</label>
                <input id="date_classification" type="date" />
              </div>
            </div>

            <div>
              <label for="description">Description / contexte</label>
              <textarea id="description"></textarea>
            </div>

            <div>
              <label for="responsable">Responsable</label>
              <input id="responsable" type="text" />
            </div>

            <div class="actions">
              <div></div>
              <button type="button" onclick="saveStep1()">Enregistrer l’étape 1</button>
            </div>

            <div id="msgStep1" class="save-msg">Étape 1 enregistrée. Vous pouvez passer à l’étape 2.</div>

            <div class="info-callout">
              En cas d’incertitude, veuillez fournir les éléments disponibles.
              Les informations seront validées et complétées lors d’un appel de validation
              du contenu avec l’équipe de sécurité de l’information.
            </div>
          </div>
        </div>

        <div id="classStep2" class="step-panel">
          <div class="section-card">
            <h3>Types de données</h3>
            <p>Cochez uniquement les types de données présents dans votre projet ou votre système.</p>

            <div class="grid grid-2">
              <div class="check-group">
                <h4>Données sur l’identité des personnes</h4>
                <div class="check-list">
                  <label><input type="checkbox" /> Prénom</label>
                  <label><input type="checkbox" /> Nom</label>
                  <label><input type="checkbox" /> Adresse</label>
                  <label><input type="checkbox" /> Date de naissance</label>
                  <label><input type="checkbox" /> Courriel</label>
                  <label><input type="checkbox" /> Téléphone</label>
                  <label><input type="checkbox" /> NAS</label>
                  <label><input type="checkbox" /> NAM</label>
                </div>
              </div>

              <div class="check-group">
                <h4>Données de santé</h4>
                <div class="check-list">
                  <label><input type="checkbox" /> Numéro de dossier patient</label>
                  <label><input type="checkbox" /> Diagnostic</label>
                  <label><input type="checkbox" /> Traitement</label>
                  <label><input type="checkbox" /> Résultats de laboratoire</label>
                  <label><input type="checkbox" /> Observations médicales</label>
                  <label><input type="checkbox" /> Médecin traitant</label>
                </div>
              </div>

              <div class="check-group">
                <h4>Données administratives</h4>
                <div class="check-list">
                  <label><input type="checkbox" /> Notes internes</label>
                  <label><input type="checkbox" /> Contrats</label>
                  <label><input type="checkbox" /> Procédures</label>
                  <label><input type="checkbox" /> Documents technologiques</label>
                  <label><input type="checkbox" /> Guide</label>
                  <label><input type="checkbox" /> Soumissions</label>
                </div>
              </div>

              <div class="check-group">
                <h4>Données d’entreprise</h4>
                <div class="check-list">
                  <label><input type="checkbox" /> Renseignements financiers</label>
                  <label><input type="checkbox" /> Renseignements techniques</label>
                  <label><input type="checkbox" /> Matricule</label>
                  <label><input type="checkbox" /> Fonction</label>
                  <label><input type="checkbox" /> Adresse de l’entreprise</label>
                  <label><input type="checkbox" /> Téléphone de l’entreprise</label>
                </div>
              </div>
            </div>

            <div>
              <label for="autres_donnees">Autres données à préciser</label>
              <textarea id="autres_donnees" placeholder="Ajoutez ici les données qui ne figurent pas dans les listes ci-dessus."></textarea>
            </div>

            <div class="actions">
              <button type="button" class="secondary" onclick="openClassStep(1)">Retour à l’étape 1</button>
              <button type="button" onclick="saveStep2()">Enregistrer l’étape 2</button>
            </div>

            <div id="msgStep2" class="save-msg">Étape 2 enregistrée. Vous pouvez passer à l’étape 3.</div>
          </div>
        </div>

        <div id="classStep3" class="step-panel">
          <div class="section-card">
            <h3>Préjudices</h3>
            <p>Sélectionnez uniquement les préjudices applicables. Il n’est pas nécessaire de remplir tous les champs.</p>

            <div class="grid grid-2">
              <div class="mini-card">
                <h4>Conséquence directe</h4>
                <p>Résultat immédiat et directement attribuable à l’événement ou à la situation.</p>
              </div>
              <div class="mini-card">
                <h4>Conséquence indirecte</h4>
                <p>Résultat secondaire découlant des conséquences directes ou d’effets connexes.</p>
              </div>
            </div>

            <div class="table-wrap">
              <table id="prejudiceTable">
                <thead>
                  <tr>
                    <th rowspan="2" class="center">Actif</th>
                    <th rowspan="2">Préjudice</th>
                    <th colspan="5" class="center">Niveaux possibles</th>
                    <th rowspan="2">Justifications</th>
                  </tr>
                  <tr>
                    <th class="subhead">Très faible</th>
                    <th class="subhead">Faible</th>
                    <th class="subhead">Modéré</th>
                    <th class="subhead">Élevé</th>
                    <th class="subhead">Très élevé</th>
                  </tr>
                </thead>
                <tbody id="prejudiceBody"></tbody>
              </table>
            </div>

            <div class="actions">
              <button type="button" class="secondary" onclick="openClassStep(2)">Retour à l’étape 2</button>
              <button type="submit">Envoyer la classification</button>
            </div>

            <div class="admin-box" id="adminResult">
              <h4>Demande transmise</h4>
              <p>Merci pour les informations fournies.</p>
              <p>Votre demande <strong id="resumeDemande"></strong> a été transmise à l’équipe de sécurité de l’information.</p>
              <p>Un membre de l’équipe communiquera avec vous afin de valider les éléments fournis et, au besoin, compléter l’analyse.</p>
              <div class="small">Profil calculé : <strong id="profilCalc">-</strong></div>
            </div>
          </div>
        </div>
      </form>
    </section>

    <section id="risque" class="main-panel">
      <div class="section-card">
        <div class="badge">Analyse de risque</div>
        <h2>Questionnaire de préanalyse</h2>
        <p>Les questions suivantes servent de préanalyse en vue d’une rencontre avec l’équipe de sécurité de l’information. Elles permettent de mieux comprendre le contexte du projet et d’orienter l’analyse de risque.</p>
        <p>En cas d’information incomplète, veuillez fournir les éléments disponibles. Ceux-ci seront validés et complétés lors de la rencontre avec l’équipe de sécurité.</p>
        <div class="info-callout">Les informations fournies doivent être exactes et refléter la réalité du système. Elles seront utilisées comme base de validation par l’équipe de sécurité.</div>
      </div>

      <div class="progress-top"><div id="riskProgressBar" class="progress-bar"></div></div>

      <div class="risk-nav-wrap">
        <div class="risk-nav">
          <button type="button" id="riskBtn1" class="risk-btn active" onclick="openRiskStep(1)">Actifs</button>
          <button type="button" id="riskBtn2" class="risk-btn" onclick="openRiskStep(2)">Accès</button>
          <button type="button" id="riskBtn3" class="risk-btn" onclick="openRiskStep(3)">Dév sécurisé</button>
          <button type="button" id="riskBtn4" class="risk-btn" onclick="openRiskStep(4)">Données</button>
          <button type="button" id="riskBtn5" class="risk-btn" onclick="openRiskStep(5)">Environnements</button>
          <button type="button" id="riskBtn6" class="risk-btn" onclick="openRiskStep(6)">Vulnérabilités</button>
          <button type="button" id="riskBtn7" class="risk-btn" onclick="openRiskStep(7)">Sauvegardes</button>
          <button type="button" id="riskBtn8" class="risk-btn" onclick="openRiskStep(8)">Documentation</button>
        </div>
      </div>

      <form id="riskForm">
        <div id="riskStep1" class="risk-panel active"><div class="risk-card"><div class="risk-subtitle">Analyse de risque</div><h3>Actifs informationnels concernés</h3><p class="small">Veuillez préciser les principaux actifs concernés par le projet ou le système.</p><div><label for="actifs_principaux">Actifs concernés</label><textarea id="actifs_principaux" placeholder="Ex. Application, plateforme, base de données, outil, système, service, infrastructure, dossier numérique, etc."></textarea></div><div class="risk-actions"><button type="button" class="secondary" disabled>← Précédente</button><button type="button" onclick="openRiskStep(2)">Suivante →</button></div></div></div>
        <div id="riskStep2" class="risk-panel"><div class="risk-card"><div class="risk-subtitle">Gestion des accès</div><h3>Accès et authentification</h3><div class="row row-2"><div><label for="mode_acces">Comment les utilisateurs accèdent-ils au système ?</label><input id="mode_acces" type="text" placeholder="Ex. Navigateur web, VPN, application interne, accès distant" /></div><div><label for="authentification">Quel mécanisme d’authentification est utilisé ?</label><input id="authentification" type="text" placeholder="Ex. Compte corporatif, MFA, mot de passe" /></div></div><div class="row row-2"><div><label for="outil_acces">Quels outils sont utilisés pour gérer les accès ?</label><input id="outil_acces" type="text" placeholder="Ex. Active Directory, Entra ID, LDAP, outil interne" /></div><div><label for="rbac">Les accès sont-ils gérés par rôles ?</label><select id="rbac"><option value="">Sélectionner</option><option>Oui</option><option>Non</option><option>En cours</option></select></div></div><div class="row row-2"><div><label for="comptes_privileges">Des comptes à privilèges élevés existent-ils ?</label><select id="comptes_privileges"><option value="">Sélectionner</option><option>Oui</option><option>Non</option></select></div><div><label for="revue_acces">Les accès sont-ils revus périodiquement ?</label><select id="revue_acces"><option value="">Sélectionner</option><option>Oui</option><option>Non</option><option>En cours</option></select></div></div><div><label for="protection_acces">Des mécanismes de protection sont-ils en place ? Veuillez préciser.</label><textarea id="protection_acces" placeholder="Ex. Blocage après tentatives, alertes, surveillance, MFA, restriction d’accès, etc."></textarea></div><div class="risk-actions"><button type="button" class="secondary" onclick="openRiskStep(1)">← Précédente</button><button type="button" onclick="openRiskStep(3)">Suivante →</button></div></div></div>
        <div id="riskStep3" class="risk-panel"><div class="risk-card"><div class="risk-subtitle">Développement sécurisé</div><h3>Pratiques de développement</h3><div><label for="technologies_reconnues">Utilisez-vous des technologies et composants logiciels reconnus, maintenus et supportés ?</label><textarea id="technologies_reconnues" placeholder="Veuillez préciser les technologies, librairies ou composants utilisés."></textarea></div><div><label for="inventaire_composants">Existe-t-il un inventaire des composants utilisés (nom, version, dépendances) ?</label><textarea id="inventaire_composants" placeholder="Veuillez préciser."></textarea></div><div><label for="maj_composants">Existe-t-il un processus de mise à jour des composants ?</label><textarea id="maj_composants" placeholder="Veuillez décrire le processus de mise à jour, de patching ou de gestion des vulnérabilités."></textarea></div><div><label for="tests_avant_prod">Des contrôles de sécurité sont-ils réalisés avant la mise en production ?</label><textarea id="tests_avant_prod" placeholder="Ex. revue de code, tests automatisés, validation de sécurité."></textarea></div><div><label for="correctifs_securite">Existe-t-il un processus formel de gestion des correctifs de sécurité ?</label><textarea id="correctifs_securite" placeholder="Veuillez décrire."></textarea></div><div class="risk-actions"><button type="button" class="secondary" onclick="openRiskStep(2)">← Précédente</button><button type="button" onclick="openRiskStep(4)">Suivante →</button></div></div></div>
        <div id="riskStep4" class="risk-panel"><div class="risk-card"><div class="risk-subtitle">Protection des données</div><h3>Données et mécanismes de protection</h3><div class="row row-2"><div><label for="donnees_canada">Les données sont-elles hébergées ou stockées au Canada ?</label><select id="donnees_canada"><option value="">Sélectionner</option><option>Oui</option><option>Non</option><option>Partiellement</option></select></div><div><label for="localisation_donnees">Si applicable, préciser l’emplacement</label><input id="localisation_donnees" type="text" placeholder="Ex. Québec, Ontario, États-Unis, environnement infonuagique, etc." /></div></div><div><label for="chiffrement_transit">Les données sont-elles protégées en transit ?</label><textarea id="chiffrement_transit" placeholder="Veuillez préciser le protocole ou les mécanismes utilisés. Ex. TLS 1.2 / 1.3."></textarea></div><div><label for="chiffrement_repos">Les données sont-elles protégées au repos ?</label><textarea id="chiffrement_repos" placeholder="Veuillez préciser les mécanismes de chiffrement ou de protection appliqués."></textarea></div><div><label for="gestion_cles">Existe-t-il un mécanisme de gestion des clés de chiffrement ?</label><textarea id="gestion_cles" placeholder="Veuillez préciser."></textarea></div><div><label for="decommissionnement">Existe-t-il un processus sécurisé de suppression ou d’archivage des données ?</label><textarea id="decommissionnement" placeholder="Veuillez préciser."></textarea></div><div class="risk-actions"><button type="button" class="secondary" onclick="openRiskStep(3)">← Précédente</button><button type="button" onclick="openRiskStep(5)">Suivante →</button></div></div></div>
        <div id="riskStep5" class="risk-panel"><div class="risk-card"><div class="risk-subtitle">Environnements</div><h3>Séparation des environnements</h3><div class="row row-2"><div><label for="env_distincts">Les environnements de développement, test et production sont-ils distincts ?</label><select id="env_distincts"><option value="">Sélectionner</option><option>Oui</option><option>Non</option><option>En cours</option></select></div><div><label for="env_segmentes">Les environnements sont-ils isolés ou segmentés ?</label><select id="env_segmentes"><option value="">Sélectionner</option><option>Oui</option><option>Non</option><option>En cours</option></select></div></div><div class="row row-2"><div><label for="donnees_test">Les données utilisées en test sont-elles anonymisées ou dépersonnalisées ?</label><select id="donnees_test"><option value="">Sélectionner</option><option>Oui</option><option>Non</option><option>En cours</option></select></div><div><label for="donnees_prod_test">Des données de production sont-elles utilisées en test ?</label><select id="donnees_prod_test"><option value="">Sélectionner</option><option>Oui</option><option>Non</option></select></div></div><div class="risk-actions"><button type="button" class="secondary" onclick="openRiskStep(4)">← Précédente</button><button type="button" onclick="openRiskStep(6)">Suivante →</button></div></div></div>
        <div id="riskStep6" class="risk-panel"><div class="risk-card"><div class="risk-subtitle">Vulnérabilités</div><h3>Détection et suivi</h3><div><label for="analyse_vuln">Des analyses de vulnérabilités sont-elles réalisées ?</label><textarea id="analyse_vuln" placeholder="Veuillez préciser la fréquence, la portée ou les outils utilisés."></textarea></div><div><label for="gestion_vuln">Existe-t-il un processus de gestion des vulnérabilités ?</label><textarea id="gestion_vuln" placeholder="Veuillez préciser."></textarea></div><div><label for="incidents_securite">Des incidents de sécurité ont-ils déjà été observés ?</label><textarea id="incidents_securite" placeholder="Si oui, précisez brièvement la date, la nature de l’incident et les mesures correctives mises en place."></textarea></div><div><label for="journalisation">Les activités sont-elles journalisées ?</label><textarea id="journalisation" placeholder="Veuillez préciser les journaux, alertes ou mécanismes de surveillance disponibles."></textarea></div><div><label for="alertes">Des mécanismes d’alerte ou de surveillance sont-ils en place ?</label><textarea id="alertes" placeholder="Veuillez préciser."></textarea></div><div class="risk-actions"><button type="button" class="secondary" onclick="openRiskStep(5)">← Précédente</button><button type="button" onclick="openRiskStep(7)">Suivante →</button></div></div></div>
        <div id="riskStep7" class="risk-panel"><div class="risk-card"><div class="risk-subtitle">Sauvegardes</div><h3>Sauvegardes et continuité</h3><div class="row row-2"><div><label for="backup_possible">Des mécanismes de sauvegarde sont-ils en place ?</label><select id="backup_possible"><option value="">Sélectionner</option><option>Oui</option><option>Non</option></select></div><div><label for="frequence_sauvegardes">Fréquence des sauvegardes</label><input id="frequence_sauvegardes" type="text" placeholder="Ex. Quotidienne, hebdomadaire" /></div></div><div class="row row-2"><div><label for="localisation_sauvegardes">Localisation des sauvegardes</label><input id="localisation_sauvegardes" type="text" placeholder="Veuillez préciser." /></div><div><label for="tests_sauvegardes">Des tests de restauration sont-ils effectués ?</label><input id="tests_sauvegardes" type="text" placeholder="Veuillez préciser la fréquence ou les modalités." /></div></div><div><label for="rto_rpo">Des objectifs RTO / RPO sont-ils définis ?</label><textarea id="rto_rpo" placeholder="Veuillez préciser."></textarea></div><div><label for="pra_pca">Existe-t-il un plan de reprise ou de continuité ?</label><textarea id="pra_pca" placeholder="Veuillez préciser."></textarea></div><div class="risk-actions"><button type="button" class="secondary" onclick="openRiskStep(6)">← Précédente</button><button type="button" onclick="openRiskStep(8)">Suivante →</button></div></div></div>
        <div id="riskStep8" class="risk-panel"><div class="risk-card"><div class="risk-subtitle">Documentation</div><h3>Documentation et architecture</h3><div class="row row-2"><div><label for="doc_archi">Disposez-vous d’un document d’architecture à jour ?</label><select id="doc_archi"><option value="">Sélectionner</option><option>Oui</option><option>Non</option><option>En cours</option></select></div><div><label for="flux_donnees">Existe-t-il un schéma des flux de données ?</label><select id="flux_donnees"><option value="">Sélectionner</option><option>Oui</option><option>Non</option><option>En cours</option></select></div></div><div><label for="documents_architecture">Documents à joindre (architecture, flux, PRA/PCA)</label><input id="documents_architecture" type="file" multiple /><div class="info-callout">Ajoutez tout document pertinent permettant de mieux comprendre l’architecture du système : diagramme, flux de données, documentation technique, plan de reprise ou document équivalent.</div></div><div><label for="commentaires_risque">Commentaires additionnels</label><textarea id="commentaires_risque" placeholder="Ajoutez toute information complémentaire utile à l’analyse de risque."></textarea></div><div class="risk-actions"><button type="button" class="secondary" onclick="openRiskStep(7)">← Précédente</button><button type="submit">Soumettre le questionnaire</button></div></div></div>
      </form>
    </section>

    <section id="dashboard" class="main-panel">
      <div class="hero dashboard-hero">
        <div>
          <div class="hero-badge">Suivi des demandes</div>
          <h1>Tableau de bord des demandes</h1>
          <p>Consultez l’historique des classifications et des analyses de risque soumises, avec un suivi du statut, du projet et de la date.</p>
        </div>
      </div>

      <div class="section-card dashboard-shell">
        <div class="dashboard-toolbar">
          <input type="text" id="searchInput" placeholder="Rechercher une demande" />
          <select id="statusFilter">
            <option value="">Tous les statuts</option>
            <option value="En cours">En cours</option>
            <option value="Complétée">Complétée</option>
          </select>
        </div>

        <div class="dashboard-kpi-grid">
          <div class="dashboard-kpi-card">
            <span>Total des demandes</span>
            <strong id="kpiTotal">0</strong>
          </div>
          <div class="dashboard-kpi-card">
            <span>Classifications</span>
            <strong id="kpiClassification">0</strong>
          </div>
          <div class="dashboard-kpi-card">
            <span>Analyses de risque</span>
            <strong id="kpiRisque">0</strong>
          </div>
          <div class="dashboard-kpi-card">
            <span>Complétées</span>
            <strong id="kpiCompleted">0</strong>
          </div>
        </div>

        <div class="dashboard-table-wrap">
          <table class="dashboard-table" id="dashboardTable">
            <thead>
              <tr>
                <th>Numéro</th>
                <th>Type</th>
                <th>Projet</th>
                <th>Créateur</th>
                <th>Date</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody id="dashboardBody"></tbody>
          </table>
          <div class="dashboard-empty" id="dashboardEmpty">Aucune demande n’a encore été enregistrée.</div>
        </div>
      </div>
    </section>

    <section id="connexion" class="main-panel">
      <div class="section-card connexion-card">
        <div class="badge">Connexion</div>
        <h2>Accès à l’espace sécurisé</h2>
        <p>Cette section pourra être reliée ultérieurement à une authentification organisationnelle ou à Microsoft 365.</p>
        <div class="row row-2">
          <div>
            <label for="email_connexion">Adresse courriel</label>
            <input id="email_connexion" type="email" placeholder="nom@organisation.ca" />
          </div>
          <div>
            <label for="motdepasse_connexion">Mot de passe</label>
            <input id="motdepasse_connexion" type="password" placeholder="••••••••" />
          </div>
        </div>
        <div class="actions">
          <button type="button">Se connecter</button>
          <button type="button" class="secondary">Utiliser Microsoft</button>
        </div>
      </div>
    </section>

    <section id="merci-section" class="confirmation-panel hidden">
      <div class="section-card confirmation-card">
        <div class="badge">Demande enregistrée</div>
        <h2>Merci, votre demande a bien été soumise</h2>
        <p>Voici le récapitulatif de votre demande. Vous pouvez télécharger une copie du rapport.</p>
        <div class="confirmation-grid">
          <div class="mini-card"><span>Numéro</span><strong id="detailNumero">-</strong></div>
          <div class="mini-card"><span>Type</span><strong id="detailType">-</strong></div>
          <div class="mini-card"><span>Date</span><strong id="detailDate">-</strong></div>
          <div class="mini-card"><span>Projet</span><strong id="detailProjet">-</strong></div>
          <div class="mini-card"><span>Créateur</span><strong id="detailCreateur">-</strong></div>
          <div class="mini-card"><span>Direction / Service</span><strong id="detailDirection">-</strong></div>
          <div class="mini-card full"><span>Résumé</span><strong id="detailResume">-</strong></div>
        </div>
        <div class="actions">
          <button id="downloadReportBtn" type="button">Télécharger le rapport</button>
          <button id="openDashboardBtn" type="button" class="secondary">Voir le dashboard</button>
        </div>
      </div>
    </section>

    <footer>Créé par Sabrine Ezzemrani</footer>
  </main>

  <script>let step1Saved = false;
let step2Saved = false;
let currentReportData = null;

const prejudices = [
  { id: "T1", title: "Préjudice physique causé aux personnes physiques", levels: ["Aucun préjudice ou préjudice très faible","Inconfort physique","Douleurs physiques, blessures, traumatisme, difficultés, maladie","Incapacité physique, décès","Lourdes pertes de vie"] },
  { id: "T2", title: "Préjudice psychologique causé aux personnes physiques", levels: ["Aucun préjudice ou préjudice très faible","Stress","Détresse, traumatisme psychologique","Maladie ou trouble mental","Traumatisme psychologique généralisé"] },
  { id: "T3", title: "Perte financière pour des personnes physiques", levels: ["Aucun préjudice ou préjudice très faible","Stress ou inconfort","Incidence sur la qualité de vie","Sécurité financière compromise pour certains","Sécurité financière compromise pour beaucoup"] },
  { id: "T4", title: "Perte financière pour des entreprises et autres entités", levels: ["Aucun préjudice ou préjudice très faible","Incidence sur le rendement","Réduction de la compétitivité","Viabilité compromise pour certains","Viabilité compromise pour beaucoup"] },
  { id: "T8", title: "Préjudice causé aux services rendus à la population", levels: ["Aucun préjudice ou préjudice très faible","Incidence sur le rendement d’un service","Incidence sur les opérations d’autres organismes publics","Un ou plusieurs services indispensables à la population ne peuvent être rendus","Très élevé"] },
  { id: "T9", title: "Préjudice causé à la réputation", levels: ["Aucun préjudice ou préjudice très faible","Perte de la confiance du public","Embarras","Relations compromises","Atteinte majeure à la réputation"] }
];

document.addEventListener("DOMContentLoaded", function () {
  const confirmation = document.getElementById("merci-section");
  if (confirmation) confirmation.classList.add("hidden");
  const today = new Date().toISOString().split("T")[0];
  const dateField = document.getElementById("date_classification");
  if (dateField) dateField.value = today;

  openMainSection("intro-site", document.querySelector(".menu-btn.active"));
  buildPrejudiceTable();
  openRiskStep(1);
  loadDashboard();
  initDashboardFilters();
});

function openMainSection(sectionId, clickedBtn = null) {
  document.querySelectorAll(".main-panel").forEach(section => section.classList.remove("active"));
  document.querySelectorAll(".menu-btn").forEach(btn => btn.classList.remove("active"));

  const confirmation = document.getElementById("merci-section");
  if (confirmation) confirmation.classList.add("hidden");

  const section = document.getElementById(sectionId);
  if (section) section.classList.add("active");
  if (clickedBtn) clickedBtn.classList.add("active");

  if (sectionId === "classification") openClassStep(1, true);
  if (sectionId === "risque") openRiskStep(1);
}

function openClassStep(step, force = false) {
  if (!force) {
    if (step === 2 && !step1Saved) return;
    if (step === 3 && !step2Saved) return;
  }
  document.querySelectorAll(".step-panel").forEach(el => el.classList.remove("active"));
  document.getElementById(`classStep${step}`).classList.add("active");
  document.querySelectorAll(".step-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById(`stepBtn${step}`).classList.add("active");
}

function saveStep1() {
  const required = ["numero_demande","nom_systeme","nom_objet","date_classification","description","responsable"];
  const missing = required.some(id => !document.getElementById(id).value.trim());
  if (missing) { alert("Veuillez remplir tous les champs de l’étape 1."); return; }
  step1Saved = true;
  document.getElementById("msgStep1").style.display = "block";
  document.getElementById("stepBtn2").classList.remove("locked");
  openClassStep(2);
}

function saveStep2() {
  step2Saved = true;
  document.getElementById("msgStep2").style.display = "block";
  document.getElementById("stepBtn3").classList.remove("locked");
  openClassStep(3);
}

function buildPrejudiceTable() {
  const body = document.getElementById("prejudiceBody");
  if (!body) return;
  body.innerHTML = "";
  const levelNames = ["Très faible", "Faible", "Modéré", "Élevé", "Très élevé"];
  prejudices.forEach((p) => {
    const tr = document.createElement("tr");
    let cells = `<td class="center"><input type="checkbox" name="${p.id}_active" onchange="togglePrejudiceRow('${p.id}')"></td><td class="prejudice-name"><strong>${p.id}</strong><br>${p.title}</td>`;
    p.levels.forEach((txt, i) => {
      cells += `<td class="choice-cell ${p.id}-field" style="opacity:.45;"><span class="level-title">${levelNames[i]}</span><div class="small">${txt}</div><div class="choice-stack"><label><input type="radio" name="${p.id}_C" value="${i + 1}" disabled> C</label><label><input type="radio" name="${p.id}_I" value="${i + 1}" disabled> I</label><label><input type="radio" name="${p.id}_D" value="${i + 1}" disabled> D</label></div></td>`;
    });
    cells += `<td class="justification-box ${p.id}-field" style="opacity:.45;"><textarea name="${p.id}_justification" placeholder="Justification ${p.id}" disabled></textarea></td>`;
    tr.innerHTML = cells;
    body.appendChild(tr);
  });
}

function togglePrejudiceRow(id) {
  const active = document.querySelector(`input[name="${id}_active"]`).checked;
  const fields = document.querySelectorAll(`.${id}-field`);
  const inputs = document.querySelectorAll(`input[name="${id}_C"], input[name="${id}_I"], input[name="${id}_D"], textarea[name="${id}_justification"]`);
  fields.forEach(f => { f.style.opacity = active ? "1" : ".45"; });
  inputs.forEach(input => {
    input.disabled = !active;
    if (!active && input.type === "radio") input.checked = false;
    if (!active && input.tagName === "TEXTAREA") input.value = "";
  });
}

function prejudiceActif(id) { return document.querySelector(`input[name="${id}_active"]`)?.checked; }
function maxFor(id) {
  if (!prejudiceActif(id)) return null;
  let max = null;
  ["C","I","D"].forEach(letter => {
    const checked = document.querySelector(`input[name="${id}_${letter}"]:checked`);
    if (checked) {
      const val = Number(checked.value);
      max = max === null ? val : Math.max(max, val);
    }
  });
  return max;
}
function labelCID(v) { if (v === 1) return "Tf"; if (v === 2) return "F"; if (v === 3) return "M"; if (v === 4) return "E"; return "TE"; }

function openRiskStep(step) {
  document.querySelectorAll(".risk-panel").forEach(el => el.classList.remove("active"));
  document.getElementById(`riskStep${step}`).classList.add("active");
  document.querySelectorAll(".risk-btn").forEach(btn => btn.classList.remove("active"));
  const btn = document.getElementById(`riskBtn${step}`); if (btn) btn.classList.add("active");
  document.getElementById("riskProgressBar").style.width = `${(step / 8) * 100}%`;
}

function showConfirmation(data) {
  currentReportData = data;
  document.getElementById("detailNumero").textContent = data.numero || "-";
  document.getElementById("detailType").textContent = data.type || "-";
  document.getElementById("detailDate").textContent = data.date || "-";
  document.getElementById("detailProjet").textContent = data.projet || "-";
  document.getElementById("detailCreateur").textContent = data.createur || "-";
  document.getElementById("detailDirection").textContent = data.direction || "-";
  document.getElementById("detailResume").textContent = data.resume || "-";
  const section = document.getElementById("merci-section");
  section.classList.remove("hidden");
  section.scrollIntoView({behavior:"smooth", block:"start"});
}

function saveDashboard(items) { localStorage.setItem("proanalyse-demandes", JSON.stringify(items)); }
function getDashboardItems() { try { return JSON.parse(localStorage.getItem("proanalyse-demandes") || "[]"); } catch { return []; } }
function renderDashboard(items) {
  const body = document.getElementById("dashboardBody");
  const empty = document.getElementById("dashboardEmpty");
  if (!body) return;
  body.innerHTML = "";
  items.forEach(item => {
    const tr = document.createElement("tr");
    const statusClass = item.statut === "Complétée" ? "completed" : "progress";
    tr.innerHTML = `
      <td>${escapeHtml(item.numero || "-")}</td>
      <td>${escapeHtml(item.type || "-")}</td>
      <td>${escapeHtml(item.projet || "-")}</td>
      <td>${escapeHtml(item.createur || "-")}</td>
      <td>${escapeHtml(item.date || "-")}</td>
      <td><span class="status-pill ${statusClass}">${escapeHtml(item.statut || "En cours")}</span></td>`;
    body.appendChild(tr);
  });
  if (empty) empty.style.display = items.length ? "none" : "block";
  updateKpis(items);
}
function updateKpis(items) {
  document.getElementById("kpiTotal").textContent = items.length;
  document.getElementById("kpiClassification").textContent = items.filter(i => i.type === "Classification").length;
  document.getElementById("kpiRisque").textContent = items.filter(i => i.type === "Analyse de risque").length;
  document.getElementById("kpiCompleted").textContent = items.filter(i => i.statut === "Complétée").length;
}
function addDashboardItem(item) {
  const items = getDashboardItems();
  items.unshift(item);
  saveDashboard(items);
  renderDashboard(items);
}
function loadDashboard() { renderDashboard(getDashboardItems()); }
function initDashboardFilters() {
  const searchInput = document.getElementById("searchInput");
  const statusFilter = document.getElementById("statusFilter");
  if (!searchInput || !statusFilter) return;
  function apply() {
    const query = searchInput.value.trim().toLowerCase();
    const status = statusFilter.value.trim().toLowerCase();
    const all = getDashboardItems();
    const filtered = all.filter(item => {
      const blob = [item.numero,item.type,item.projet,item.createur,item.date,item.statut].join(" ").toLowerCase();
      const okQuery = !query || blob.includes(query);
      const okStatus = !status || (item.statut || "").toLowerCase().includes(status);
      return okQuery && okStatus;
    });
    renderDashboard(filtered);
  }
  searchInput.addEventListener("input", apply);
  statusFilter.addEventListener("change", apply);
}
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.getElementById("riskForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    numero: `RIS-${Date.now().toString().slice(-6)}`,
    type: "Analyse de risque",
    projet: document.getElementById("actifs_principaux").value.trim() || "Projet non précisé",
    createur: "-",
    date: new Date().toISOString().split("T")[0],
    direction: "-",
    resume: document.getElementById("commentaires_risque").value.trim() || "Questionnaire de préanalyse complété.",
    statut: "Complétée"
  };
  addDashboardItem(data);
  showConfirmation(data);
  alert("Le questionnaire d’analyse de risque a été préparé pour être transmis à l’équipe concernée.");
});

document.getElementById("classificationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const activeValues = prejudices.map(p => maxFor(p.id)).filter(v => v !== null);
  if (activeValues.length === 0) { alert("Veuillez sélectionner au moins un préjudice applicable."); return; }
  const max = Math.max(...activeValues);
  let niveau = "Pa"; if (max === 3) niveau = "Pb"; if (max >= 4) niveau = "Pc";
  let maxC = 1, maxI = 1, maxD = 1, hasCID = false;
  prejudices.forEach(p => {
    if (!prejudiceActif(p.id)) return;
    const c = document.querySelector(`input[name="${p.id}_C"]:checked`);
    const i = document.querySelector(`input[name="${p.id}_I"]:checked`);
    const d = document.querySelector(`input[name="${p.id}_D"]:checked`);
    if (c) { maxC = Math.max(maxC, Number(c.value)); hasCID = true; }
    if (i) { maxI = Math.max(maxI, Number(i.value)); hasCID = true; }
    if (d) { maxD = Math.max(maxD, Number(d.value)); hasCID = true; }
  });
  if (!hasCID) { alert("Veuillez choisir au moins un niveau C, I ou D pour un préjudice sélectionné."); return; }
  const profil = `${niveau}-${labelCID(maxC)}-${labelCID(maxI)}-${labelCID(maxD)}`;
  const numeroDemande = document.getElementById("numero_demande").value.trim();
  const nomProjet = document.getElementById("nom_objet").value.trim();
  document.getElementById("resumeDemande").textContent = `(${numeroDemande}) — ${nomProjet}`;
  document.getElementById("profilCalc").textContent = profil;
  document.getElementById("adminResult").style.display = "block";
  const data = {
    numero: numeroDemande || `CLS-${Date.now().toString().slice(-6)}`,
    type: "Classification",
    projet: nomProjet || "Projet non précisé",
    createur: document.getElementById("responsable").value.trim() || "-",
    date: document.getElementById("date_classification").value || new Date().toISOString().split("T")[0],
    direction: "-",
    resume: document.getElementById("description").value.trim() || `Profil calculé : ${profil}`,
    statut: "Complétée"
  };
  addDashboardItem(data);
  showConfirmation(data);
  alert("La classification a été préparée pour être envoyée à l’équipe concernée.");
});

document.getElementById("downloadReportBtn").addEventListener("click", function () {
  if (!currentReportData) return;
  const htmlContent = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>${escapeHtml(currentReportData.numero || 'rapport')} - Rapport</title><style>body{font-family:Arial,sans-serif;color:#101828;margin:0;padding:40px;background:#fff}.wrap{max-width:900px;margin:0 auto}.title{font-size:28px;margin:0 0 10px}.meta{color:#667085;font-size:14px;margin-bottom:24px}.table{width:100%;border-collapse:collapse;border:1px solid #e5eaf1}.table th,.table td{padding:14px 16px;border-bottom:1px solid #edf2f7;text-align:left;vertical-align:top}.table th{width:280px;background:#f8fafc}.note{margin-top:24px;padding:18px;border:1px solid #e5eaf1;border-radius:16px;background:#fafbfd;font-size:13px;line-height:1.7;color:#475467}</style></head><body><div class="wrap"><h1 class="title">${escapeHtml(currentReportData.type === 'Analyse de risque' ? 'Rapport d’analyse de risque' : 'Rapport de classification')}</h1><div class="meta">Numéro : ${escapeHtml(currentReportData.numero || '-')} | Date : ${escapeHtml(currentReportData.date || '-')}</div><table class="table"><tr><th>Type de demande</th><td>${escapeHtml(currentReportData.type || '-')}</td></tr><tr><th>Nom du projet</th><td>${escapeHtml(currentReportData.projet || '-')}</td></tr><tr><th>Créateur</th><td>${escapeHtml(currentReportData.createur || '-')}</td></tr><tr><th>Direction / Service</th><td>${escapeHtml(currentReportData.direction || '-')}</td></tr><tr><th>Résumé / informations fournies</th><td style="white-space:pre-wrap">${escapeHtml(currentReportData.resume || '-')}</td></tr></table><div class="note"><strong>Note :</strong> Ce rapport constitue une copie des données saisies par l’utilisateur.</div></div></body></html>`;
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${currentReportData.numero || 'rapport'}_rapport.html`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
});

document.getElementById("openDashboardBtn").addEventListener("click", function () {
  const dashboardBtn = Array.from(document.querySelectorAll(".menu-btn")).find(btn => btn.textContent.includes("Suivi des demandes"));
  openMainSection("dashboard", dashboardBtn || null);
  document.getElementById("merci-section").classList.add("hidden");
  window.scrollTo({top:0, behavior:"smooth"});
});

let step1Saved = false;
    let step2Saved = false;

    document.addEventListener("DOMContentLoaded", function () {
      const today = new Date().toISOString().split("T")[0];
      document.getElementById("date_classification").value = today;
      openMainSection('intro-site', document.querySelector('.menu-btn.active'));
      buildPrejudiceTable();
      openRiskStep(1);
    });

    function openMainSection(sectionId, clickedBtn = null) {
      document.querySelectorAll('.main-panel').forEach(section => section.classList.remove('active'));
      document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));

      const section = document.getElementById(sectionId);
      if (section) section.classList.add('active');
      if (clickedBtn) clickedBtn.classList.add('active');

      if (sectionId === 'classification') openClassStep(1, true);
      if (sectionId === 'risque') openRiskStep(1);
    }

    function openClassStep(step, force = false) {
      if (!force) {
        if (step === 2 && !step1Saved) return;
        if (step === 3 && !step2Saved) return;
      }
      document.querySelectorAll('.step-panel').forEach(el => el.classList.remove('active'));
      document.getElementById(`classStep${step}`).classList.add('active');
      document.querySelectorAll('.step-btn').forEach(btn => btn.classList.remove('active'));
      document.getElementById(`stepBtn${step}`).classList.add('active');
    }

    function saveStep1() {
      const required = ['numero_demande','nom_systeme','nom_objet','date_classification','description','responsable'];
      const missing = required.some(id => !document.getElementById(id).value.trim());
      if (missing) {
        alert("Veuillez remplir tous les champs de l’étape 1.");
        return;
      }
      step1Saved = true;
      document.getElementById('msgStep1').style.display = 'block';
      document.getElementById('stepBtn2').classList.remove('locked');
      openClassStep(2);
    }

    function saveStep2() {
      step2Saved = true;
      document.getElementById('msgStep2').style.display = 'block';
      document.getElementById('stepBtn3').classList.remove('locked');
      openClassStep(3);
    }

    const prejudices = [
      { id:"T1", title:"Préjudice physique causé aux personnes physiques", levels:["Aucun préjudice ou préjudice très faible","Inconfort physique","Douleurs physiques, blessures, traumatisme, difficultés, maladie","Incapacité physique, décès","Lourdes pertes de vie"]},
      { id:"T2", title:"Préjudice psychologique causé aux personnes physiques", levels:["Aucun préjudice ou préjudice très faible","Stress","Détresse, traumatisme psychologique","Maladie ou trouble mental","Traumatisme psychologique généralisé"]},
      { id:"T3", title:"Perte financière pour des personnes physiques", levels:["Aucun préjudice ou préjudice très faible","Stress ou inconfort","Incidence sur la qualité de vie","Sécurité financière compromise pour certains","Sécurité financière compromise pour beaucoup"]},
      { id:"T4", title:"Perte financière pour des entreprises et autres entités", levels:["Aucun préjudice ou préjudice très faible","Incidence sur le rendement","Réduction de la compétitivité","Viabilité compromise pour certains","Viabilité compromise pour beaucoup"]},
      { id:"T8", title:"Préjudice causé aux services rendus à la population", levels:["Aucun préjudice ou préjudice très faible","Incidence sur le rendement d’un service","Incidence sur les opérations d’autres organismes publics","Un ou plusieurs services indispensables à la population ne peuvent être rendus","Très élevé"]},
      { id:"T9", title:"Préjudice causé à la réputation", levels:["Aucun préjudice ou préjudice très faible","Perte de la confiance du public","Embarras","Relations compromises","Atteinte majeure à la réputation"]}
    ];

    function buildPrejudiceTable() {
      const body = document.getElementById("prejudiceBody");
      body.innerHTML = "";
      const levelNames = ["Très faible","Faible","Modéré","Élevé","Très élevé"];
      prejudices.forEach((p) => {
        const tr = document.createElement("tr");
        let cells = `
          <td class="center"><input type="checkbox" name="${p.id}_active" onchange="togglePrejudiceRow('${p.id}')"></td>
          <td class="prejudice-name"><strong>${p.id}</strong><br>${p.title}</td>
        `;
        p.levels.forEach((txt, i) => {
          cells += `
            <td class="choice-cell ${p.id}-field" style="opacity:.45;">
              <span class="level-title">${levelNames[i]}</span>
              <div class="small">${txt}</div>
              <div class="choice-stack">
                <label><input type="radio" name="${p.id}_C" value="${i+1}" disabled> C</label>
                <label><input type="radio" name="${p.id}_I" value="${i+1}" disabled> I</label>
                <label><input type="radio" name="${p.id}_D" value="${i+1}" disabled> D</label>
              </div>
            </td>
          `;
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
      fields.forEach(f => f.style.opacity = active ? "1" : ".45");
      inputs.forEach(input => {
        input.disabled = !active;
        if (!active && input.type === "radio") input.checked = false;
        if (!active && input.tagName === "TEXTAREA") input.value = "";
      });
    }

    function prejudiceActif(id) {
      return document.querySelector(`input[name="${id}_active"]`)?.checked;
    }

    function maxFor(id){
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

    function labelCID(v){
      if (v === 1) return "Tf";
      if (v === 2) return "F";
      if (v === 3) return "M";
      if (v === 4) return "E";
      return "TE";
    }

    function openRiskStep(step) {
      document.querySelectorAll('.risk-panel').forEach(el => el.classList.remove('active'));
      document.getElementById(`riskStep${step}`).classList.add('active');
      document.querySelectorAll('.risk-btn').forEach(btn => btn.classList.remove('active'));
      const btn = document.getElementById(`riskBtn${step}`);
      if (btn) {
        btn.classList.add('active');
      }
      document.getElementById('riskProgressBar').style.width = `${(step / 8) * 100}%`;
    }

    document.getElementById("riskForm").addEventListener("submit", function(e){
      e.preventDefault();
      alert("Le questionnaire d’analyse de risque a été préparé pour être transmis à l’équipe concernée.");
    });

    document.getElementById("classificationForm").addEventListener("submit", function(e){
      e.preventDefault();
      const activeValues = prejudices.map(p => maxFor(p.id)).filter(v => v !== null);
      if (activeValues.length === 0) {
        alert("Veuillez sélectionner au moins un préjudice applicable.");
        return;
      }

      const max = Math.max(...activeValues);
      let niveau = "Pa";
      if (max === 3) niveau = "Pb";
      if (max >= 4) niveau = "Pc";

      let maxC = 1, maxI = 1, maxD = 1;
      let hasCID = false;

      prejudices.forEach(p => {
        if (!prejudiceActif(p.id)) return;
        const c = document.querySelector(`input[name="${p.id}_C"]:checked`);
        const i = document.querySelector(`input[name="${p.id}_I"]:checked`);
        const d = document.querySelector(`input[name="${p.id}_D"]:checked`);
        if (c) { maxC = Math.max(maxC, Number(c.value)); hasCID = true; }
        if (i) { maxI = Math.max(maxI, Number(i.value)); hasCID = true; }
        if (d) { maxD = Math.max(maxD, Number(d.value)); hasCID = true; }
      });

      if (!hasCID) {
        alert("Veuillez choisir au moins un niveau C, I ou D pour un préjudice sélectionné.");
        return;
      }

      const profil = `${niveau}-${labelCID(maxC)}-${labelCID(maxI)}-${labelCID(maxD)}`;
      const numeroDemande = document.getElementById('numero_demande').value.trim();
      const nomProjet = document.getElementById('nom_objet').value.trim();

      document.getElementById("resumeDemande").textContent = `(${numeroDemande}) — ${nomProjet}`;
      document.getElementById("profilCalc").textContent = profil;
      document.getElementById("adminResult").style.display = "block";

      alert("La classification a été préparée pour être envoyée à l’équipe concernée.");
    });
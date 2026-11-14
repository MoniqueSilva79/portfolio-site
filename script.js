// Lista de projetos exibida no portfólio – edite à vontade
const projects = [
  { title: "Chatbot FAQ com Gemini", desc: "RAG simples que responde perguntas com base em documentos.", stack: "Python · Gemini · Streamlit", repo: "chatbot-faq-gemini" },
  { title: "Análise de Sentimento", desc: "Classificação de avaliações de clientes com Machine Learning.", stack: "Python · scikit-learn", repo: "sentiment-analysis-reviews" },
  { title: "API Serverless no Cloud Run", desc: "Encurtador de URL em container com CI/CD.", stack: "Cloud Run · Firestore · Cloud Build", repo: "cloud-run-url-shortener" },
  { title: "Pipeline GCS → BigQuery", desc: "Ingestão orientada a eventos com dashboard no Looker Studio.", stack: "Cloud Functions · BigQuery", repo: "gcs-bigquery-pipeline" },
  { title: "Agente de Suporte com Vertex AI", desc: "Triagem de chamados com Gemini e infraestrutura em Terraform.", stack: "Vertex AI · Terraform", repo: "vertex-ai-support-agent" },
  { title: "Dashboard Brasil em Dados", desc: "População por estado com dados do IBGE.", stack: "Streamlit · Plotly", repo: "brazil-public-data-dashboard" },
];

const GITHUB_USER = "MoniqueSilva79"; // troque pelo seu usuário do GitHub

const grid = document.getElementById("project-grid");
projects.forEach(({ title, desc, stack, repo }) => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = `https://github.com/${GITHUB_USER}/${repo}`;
  card.target = "_blank";
  card.rel = "noopener";
  card.style.textDecoration = "none";
  card.style.color = "inherit";
  card.innerHTML = `<h3></h3><p></p><div class="stack"></div>`;
  card.querySelector("h3").textContent = title;
  card.querySelector("p").textContent = desc;
  card.querySelector(".stack").textContent = stack;
  grid.appendChild(card);
});

// Tema claro/escuro com preferência salva
const btn = document.getElementById("theme");
const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
if (saved === "dark") document.documentElement.dataset.theme = "dark";
btn.textContent = document.documentElement.dataset.theme === "dark" ? "☀️" : "🌙";
btn.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  btn.textContent = dark ? "☀️" : "🌙";
  try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
});

document.getElementById("year").textContent = new Date().getFullYear();

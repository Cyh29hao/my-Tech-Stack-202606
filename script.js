const projects = [
  {
    name: "qianrushidazuoye",
    url: "https://github.com/Cyh29hao/qianrushidazuoye",
    lane: "embedded",
    tags: ["C", "TM4C1294", "Keil", "UART", "PyQt5"],
    zh: {
      lane: "嵌入式",
      summary: "ARM 智能联网时钟系统，包含 S800/TM4C1294 板端 C 程序和 Python/PyQt5 PC 上位机。",
      detail: "公开 README 记录了数码管显示、按键防抖、闹钟/编辑状态机、串口协议、事件上报、数字孪生、天气/网络对时和提交材料整理。",
      status: "课程大作业归档"
    },
    en: {
      lane: "Embedded",
      summary: "ARM intelligent networked clock system with S800/TM4C1294 firmware and a Python/PyQt5 PC host.",
      detail: "The public README documents display scanning, key debounce, alarm/edit state machines, serial protocol, event reporting, digital twin, weather/network time, and submission materials.",
      status: "Coursework archive"
    }
  },
  {
    name: "ARM-based-temperature-sensing-and-transmission-project",
    url: "https://github.com/Cyh29hao/ARM-based-temperature-sensing-and-transmission-project",
    lane: "embedded",
    tags: ["C", "ARM Cortex-M4", "LM75BD", "ADC", "TM1638"],
    zh: {
      lane: "嵌入式",
      summary: "ARM 温度采集与传输综合实验，保留双板 Keil 工程、共享编码模块和最终报告。",
      detail: "项目覆盖 LM75BD 温度采集、ADC/电压数据、LCD/TM1638 显示、双板编码传输、频率测量、红外输入和 PWM 蜂鸣器/音乐联动。",
      status: "公开最终归档"
    },
    en: {
      lane: "Embedded",
      summary: "ARM temperature sensing and transmission course archive with dual-board Keil projects and shared codec modules.",
      detail: "Covers LM75BD sensing, ADC/voltage data, LCD/TM1638 display, two-board encoded transmission, frequency measurement, infrared input, and PWM buzzer/music linkage.",
      status: "Public final archive"
    }
  },
  {
    name: "AMS-Assistant-for-Maritime-Service",
    url: "https://github.com/Cyh29hao/AMS-Assistant-for-Maritime-Service",
    lane: "automation",
    tags: ["Python", "Desktop", "Excel", "Word", "Automation"],
    zh: {
      lane: "自动化",
      summary: "面向航运服务流程的本地桌面自动化工作台。",
      detail: "公开 README 中的模块包括合同生成、通关查询回填、船期/港区入口、表格同步和私密业务包机制；定位是内部业务自动化原型。",
      status: "业务自动化原型"
    },
    en: {
      lane: "Automation",
      summary: "Local desktop automation workbench for maritime-service workflows.",
      detail: "The public README lists contract generation, customs-clearance query/backfill, schedule/port entry points, spreadsheet sync, and private business packs.",
      status: "Business automation prototype"
    }
  },
  {
    name: "Mail-Sorting-Assistant-for-Maritime-Service",
    url: "https://github.com/Cyh29hao/Mail-Sorting-Assistant-for-Maritime-Service",
    lane: "automation",
    tags: ["Python", "FastAPI", "SQLite", "IMAP", "Web UI"],
    zh: {
      lane: "自动化",
      summary: "航运邮件同步、抽取和查询 MVP。",
      detail: "实现 FastAPI 后端、SQLite 入库、IMAP 增量同步、规则抽取、查询 API 和网页聊天/列表界面。",
      status: "可运行 MVP"
    },
    en: {
      lane: "Automation",
      summary: "Mail sync, extraction, and query MVP for maritime-service messages.",
      detail: "Implements FastAPI, SQLite storage, IMAP incremental sync, rule-based extraction, query APIs, and a small chat/list web UI.",
      status: "Runnable MVP"
    }
  },
  {
    name: "Automatic-Sync-Assistant-for-Excel-Files",
    url: "https://github.com/Cyh29hao/Automatic-Sync-Assistant-for-Excel-Files",
    lane: "automation",
    tags: ["Python", "Excel", "GUI", "PyInstaller"],
    zh: {
      lane: "自动化",
      summary: "Excel Sync Manager V1，用于源表监听、列同步、锁文件重试和打包交付。",
      detail: "README 记录了任务创建/编辑、后台监听、公式显示值导出、WPS/Excel 锁文件重试和 release 构建流程。",
      status: "小型本地工具"
    },
    en: {
      lane: "Automation",
      summary: "Excel Sync Manager V1 for watched files, selected-column sync, lock retry, and packaged delivery.",
      detail: "The README documents task editing, background watching, formula display-value export, WPS/Excel lock retries, and release build flow.",
      status: "Small local utility"
    }
  },
  {
    name: "D2NN-ViT-KD-final",
    url: "https://github.com/Cyh29hao/D2NN-ViT-KD-final",
    lane: "research",
    tags: ["Jupyter", "PyTorch", "ViT", "D2NN", "KD"],
    zh: {
      lane: "研究",
      summary: "D2NN / ViT / KD 易复现包。",
      detail: "包含 notebook、requirements、数据路径、ViT-B/16 权重 cache、烟测脚本、GPU/JupyterLab 指南和报告。",
      status: "复现包"
    },
    en: {
      lane: "Research",
      summary: "Reproducible D2NN / ViT / KD package.",
      detail: "Includes notebooks, requirements, data paths, ViT-B/16 weight cache, smoke tests, GPU/JupyterLab guide, and reports.",
      status: "Reproducibility package"
    }
  },
  {
    name: "My-own-D2NN-Research-Practices",
    url: "https://github.com/Cyh29hao/My-own-D2NN-Research-Practices",
    lane: "research",
    tags: ["Jupyter", "D2NN", "ViT", "CIFAR-10"],
    zh: {
      lane: "研究",
      summary: "个人 D2NN 研究练习空间。",
      detail: "包含 D2NN single-layer/CIFAR-10、ViT with/without weights、comparison 文件夹、KD notebook 和设计笔记。",
      status: "研究练习"
    },
    en: {
      lane: "Research",
      summary: "Personal D2NN research-practice workspace.",
      detail: "Contains D2NN single-layer/CIFAR-10 work, ViT with/without weights, comparison folders, KD notebooks, and design notes.",
      status: "Research practice"
    }
  },
  {
    name: "The-SJTU-Intelligent-Optoelectronic-Computing-Lab",
    url: "https://github.com/Cyh29hao/The-SJTU-Intelligent-Optoelectronic-Computing-Lab",
    liveUrl: "https://opticompt-lab.sjtu.edu.cn",
    lane: "web",
    tags: ["Python", "HTML", "CSS", "Deployment"],
    zh: {
      lane: "网站",
      summary: "上海交大光电智能计算实验室网站仓库，可直接打开线上主站。",
      detail: "公开仓库 README 列出主站和备份部署地址；简历材料中记录了从页面开发到上线维护的工程交付经历。",
      status: "公开网站仓库"
    },
    en: {
      lane: "Web",
      summary: "Repository for the SJTU Intelligent Optoelectronic Computing Lab website, with a directly available live site.",
      detail: "The README lists the main site and backup deployments. Local profile materials record the page development, deployment, and maintenance work.",
      status: "Public website repo"
    }
  },
  {
    name: "Static-Online-Minesweeper-Game",
    url: "https://github.com/Cyh29hao/Static-Online-Minesweeper-Game",
    liveUrl: "https://cyh29hao.github.io/Static-Online-Minesweeper-Game/",
    lane: "web",
    tags: ["HTML", "JavaScript", "GitHub Pages"],
    zh: {
      lane: "网站",
      summary: "静态在线扫雷游戏，可直接在线游玩。",
      detail: "仓库包含 GitHub Pages 页面、index.html、app.js、puzzle audit 脚本、验证页面和 Supabase schema。",
      status: "静态游戏"
    },
    en: {
      lane: "Web",
      summary: "Static online Minesweeper game, directly playable on GitHub Pages.",
      detail: "The repo contains a GitHub Pages entry, index.html, app.js, puzzle audit script, verification page, and Supabase schema.",
      status: "Static game"
    }
  },
  {
    name: "clash-royale-card-balance-statistics",
    url: "https://github.com/Cyh29hao/clash-royale-card-balance-statistics",
    lane: "data",
    tags: ["Python", "Selenium", "Statistics", "LaTeX"],
    zh: {
      lane: "数据",
      summary: "基于 RoyaleAPI 的概率统计课程项目。",
      detail: "README 记录了 168 张卡牌、39,429,252 场加权 matchup 样本和加权 Pearson 相关系数 0.1476。",
      status: "可复现实验报告"
    },
    en: {
      lane: "Data",
      summary: "Probability/statistics course project based on RoyaleAPI matchup data.",
      detail: "The README reports 168 cards, 39,429,252 weighted matchup samples, and a weighted Pearson correlation of 0.1476.",
      status: "Reproducible report"
    }
  },
  {
    name: "shuixian-skill",
    url: "https://github.com/Cyh29hao/shuixian-skill",
    lane: "tooling",
    tags: ["Python", "Codex Skill", "Transcript"],
    zh: {
      lane: "工具",
      summary: "Codex self-mirror companion skill。",
      detail: "README 记录了 Codex builder skill、微信/iMessage/transcript 导入、关系画像、价值观线索报告和示例材料。",
      status: "工具 / skill 项目"
    },
    en: {
      lane: "Tooling",
      summary: "Codex self-mirror companion skill.",
      detail: "The README documents the builder skill, WeChat/iMessage/transcript imports, relationship reports, value-cue reports, and examples.",
      status: "Tool / skill project"
    }
  },
  {
    name: "Interesting-algorithms-in-my-OI-journey",
    url: "https://github.com/Cyh29hao/Interesting-algorithms-in-my-OI-journey",
    lane: "tooling",
    tags: ["C++", "Algorithms", "OI"],
    zh: {
      lane: "工具",
      summary: "OI 时代 C++ 算法旧档。",
      detail: "README 说明这些代码写于 AI coding 之前；文件名可见网络流、树链剖分、莫队等练习内容。",
      status: "算法 archive"
    },
    en: {
      lane: "Tooling",
      summary: "Older C++ algorithm archive from OI practice.",
      detail: "The README says these were written before AI coding. File names show network flow, tree-chain decomposition, and Mo's algorithm practice.",
      status: "Algorithm archive"
    }
  }
];

const body = document.body;
const grid = document.querySelector("#projectGrid");
const count = document.querySelector("#resultCount");
const search = document.querySelector("#projectSearch");
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const languageButtons = Array.from(document.querySelectorAll(".lang-button"));
const mobileLanguageButton = document.querySelector("#mobileLang");
let currentFilter = "all";

function getLanguage() {
  return body.dataset.lang === "en" ? "en" : "zh";
}

function projectMatches(project, query) {
  if (currentFilter !== "all" && project.lane !== currentFilter) return false;
  if (!query) return true;
  const lang = getLanguage();
  const haystack = [
    project.name,
    project.lane,
    project.tags.join(" "),
    project[lang].summary,
    project[lang].detail,
    project[lang].status
  ].join(" ").toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function renderProjects() {
  const lang = getLanguage();
  const query = search.value.trim();
  const shown = projects.filter((project) => projectMatches(project, query));
  grid.innerHTML = shown
    .map((project, index) => {
      const copy = project[lang];
      const tags = project.tags.map((tag) => `<span>${tag}</span>`).join("");
      const detailId = `project-detail-${index}`;
      const liveLink = project.liveUrl
        ? `<a class="project-live" href="${project.liveUrl}" target="_blank" rel="noreferrer">${lang === "zh" ? "打开网页" : "Live Site"}</a>`
        : "";
      return `
        <article class="project-card" data-project="${project.name}">
          <header>
            <span class="project-lane ${project.lane}">${copy.lane}</span>
            <h3>${project.name}</h3>
            <p>${copy.summary}</p>
          </header>
          <div class="project-body">
            <div class="tag-list">${tags}</div>
            <p class="project-detail" id="${detailId}">${copy.detail}<br /><strong>${copy.status}</strong></p>
          </div>
          <div class="project-footer">
            ${liveLink}
            <a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">
              ${lang === "zh" ? "打开仓库" : "Open Repo"}
            </a>
            <button class="project-toggle" type="button" aria-expanded="false" aria-controls="${detailId}">
              ${lang === "zh" ? "展开" : "Details"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
  count.textContent =
    lang === "zh"
      ? `当前显示 ${shown.length} / ${projects.length} 个项目`
      : `Showing ${shown.length} / ${projects.length} projects`;
}

function setLanguage(lang) {
  body.dataset.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  languageButtons.forEach((button) => button.classList.toggle("active", button.dataset.setLang === lang));
  mobileLanguageButton.textContent = lang === "zh" ? "EN" : "中文";
  renderProjects();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderProjects();
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.setLang));
});

mobileLanguageButton.addEventListener("click", () => {
  setLanguage(getLanguage() === "zh" ? "en" : "zh");
});

search.addEventListener("input", renderProjects);

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".project-toggle");
  if (!button) return;
  const card = button.closest(".project-card");
  const isOpen = card.classList.toggle("is-open");
  button.setAttribute("aria-expanded", String(isOpen));
  button.textContent = getLanguage() === "zh" ? (isOpen ? "收起" : "展开") : (isOpen ? "Close" : "Details");
});

const progress = document.querySelector("#scrollProgress");
function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${value}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

const canvas = document.querySelector("#signalCanvas");
const ctx = canvas.getContext("2d");
let width = 0;
let height = 0;
let nodes = [];
let pointer = { x: 0, y: 0, active: false };

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = canvas.clientWidth;
  height = canvas.clientHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const count = width < 720 ? 42 : 72;
  nodes = Array.from({ length: count }, (_, index) => ({
    x: (index * 137) % Math.max(width, 1),
    y: (index * 211) % Math.max(height, 1),
    vx: ((index % 7) - 3) * 0.05,
    vy: ((index % 5) - 2) * 0.05,
    r: 1.4 + (index % 4) * 0.35
  }));
}

function drawCanvas() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#111214";
  ctx.fillRect(0, 0, width, height);

  for (const node of nodes) {
    node.x += node.vx;
    node.y += node.vy;
    if (node.x < -20) node.x = width + 20;
    if (node.x > width + 20) node.x = -20;
    if (node.y < -20) node.y = height + 20;
    if (node.y > height + 20) node.y = -20;
  }

  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const a = nodes[i];
      const b = nodes[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 142) {
        const alpha = 0.22 * (1 - distance / 142);
        ctx.strokeStyle = `rgba(96, 231, 219, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  if (pointer.active) {
    ctx.strokeStyle = "rgba(255, 184, 76, 0.34)";
    ctx.lineWidth = 1;
    for (const node of nodes) {
      const distance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
      if (distance < 210) {
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(pointer.x, pointer.y);
        ctx.stroke();
      }
    }
  }

  for (const node of nodes) {
    ctx.fillStyle = "#8de8e8";
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
    ctx.fill();
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    requestAnimationFrame(drawCanvas);
  }
}

canvas.addEventListener("pointermove", (event) => {
  const rect = canvas.getBoundingClientRect();
  pointer = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
    active: true
  };
});

canvas.addEventListener("pointerleave", () => {
  pointer.active = false;
});

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawCanvas();
setLanguage(getLanguage());
updateProgress();

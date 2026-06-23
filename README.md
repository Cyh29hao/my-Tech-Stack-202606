# Cyh29hao Public Tech Stack Index

> Snapshot: 2026-06-24 (UTC+8). This repository is a factual index of the public repositories under [Cyh29hao](https://github.com/Cyh29hao). It summarizes what is visible from public GitHub repository metadata, README files, root-level structure, and GitHub language statistics.

This is not a complete resume. It is a technical map: what projects exist, what each project does, and which stacks are evidenced by public code or documentation.

## One-Page Summary

The current public GitHub footprint is concentrated in five directions:

1. **Embedded systems and PC-MCU integration**
   - ARM/TM4C1294/S800 coursework around MCU firmware, serial protocols, display/key/LED/buzzer control, and Python desktop host software.
   - The main completed public project here is [`qianrushidazuoye`](https://github.com/Cyh29hao/qianrushidazuoye), an intelligent networked clock system.
   - [`ARM-based-temperature-sensing-and-transmission-project`](https://github.com/Cyh29hao/ARM-based-temperature-sensing-and-transmission-project) has been created, but was still empty at this snapshot.

2. **Python local automation products**
   - Windows-oriented local tools for maritime-service workflows, Excel synchronization, mail/event extraction, contract generation, web query automation, and packaged desktop delivery.
   - Representative repositories: [`AMS-Assistant-for-Maritime-Service`](https://github.com/Cyh29hao/AMS-Assistant-for-Maritime-Service), [`Mail-Sorting-Assistant-for-Maritime-Service`](https://github.com/Cyh29hao/Mail-Sorting-Assistant-for-Maritime-Service), and [`Automatic-Sync-Assistant-for-Excel-Files`](https://github.com/Cyh29hao/Automatic-Sync-Assistant-for-Excel-Files).

3. **Optoelectronic computing and ML experiments**
   - D2NN, ViT comparison, knowledge distillation, CIFAR-10/MNIST notebooks, reproducibility packaging, and smoke-test scripts.
   - Representative repositories: [`D2NN-ViT-KD-final`](https://github.com/Cyh29hao/D2NN-ViT-KD-final), [`My-own-D2NN-Research-Practices`](https://github.com/Cyh29hao/My-own-D2NN-Research-Practices), and [`D2NN-Forked-`](https://github.com/Cyh29hao/D2NN-Forked-).

4. **Data analysis, statistics, and research deliverables**
   - Reproducible analysis scripts, public datasets, LaTeX/PDF reports, and course-material indexing.
   - Representative repositories: [`clash-royale-card-balance-statistics`](https://github.com/Cyh29hao/clash-royale-card-balance-statistics) and [`Aesthetics-Course-Essay-Preparation`](https://github.com/Cyh29hao/Aesthetics-Course-Essay-Preparation).

5. **Agent tooling, web, games, and algorithm notes**
   - Codex skill/tooling experiments, a lab website, a static online Minesweeper game, and older C++ OI algorithm notes.
   - Representative repositories: [`shuixian-skill`](https://github.com/Cyh29hao/shuixian-skill), [`The-SJTU-Intelligent-Optoelectronic-Computing-Lab`](https://github.com/Cyh29hao/The-SJTU-Intelligent-Optoelectronic-Computing-Lab), [`Static-Online-Minesweeper-Game`](https://github.com/Cyh29hao/Static-Online-Minesweeper-Game), and [`Interesting-algorithms-in-my-OI-journey`](https://github.com/Cyh29hao/Interesting-algorithms-in-my-OI-journey).

## Tech Stack Evidenced by Public Repositories

### Embedded / MCU

- C firmware for ARM/TM4C1294/S800-style embedded coursework.
- Keil/uVision project structure, MCU build artifacts, hex output, and board-side source organization.
- SysTick timing, dynamic digital-tube display, debounced keys, LEDs, buzzer, alarm/edit state machines, and UART protocol/event reporting.
- PC host integration through serial communication.

### Python Applications and Automation

- Python desktop applications and local-first workflow tools.
- PyQt5 and `pyserial` in the ARM intelligent-clock PC host.
- Excel/Word workflow automation, local file watching, task configuration, packaging, and release-folder generation.
- FastAPI + SQLite + IMAP for a maritime mail/event MVP.
- Selenium/browser automation for public-data collection and business-query workflows.
- PowerShell and Batch scripts for Windows launch/build/release ergonomics.

### Machine Learning / Research Computing

- Jupyter Notebook research workflows.
- PyTorch/torchvision experiments around D2NN, ViT-B/16 features, CIFAR-10, MNIST, and knowledge distillation.
- Reproducibility assets: requirements files, smoke-test scripts, CPU/GPU run guides, checkpoints/output directory conventions, and experiment reports.

### Web / Frontend / Static Delivery

- HTML, CSS, and JavaScript for web UI and static projects.
- GitHub Pages delivery for a static Minesweeper game.
- Lab website repository with public and backup deployment addresses.
- Lightweight web UI around local FastAPI services.

### Data, Reports, and Documentation

- LaTeX/TeX report writing, PDF deliverables, CSV/XLSX public datasets, and Markdown-based knowledge organization.
- Course-project style statistical modeling and reproducible analysis scripts.
- Public README and documentation structures for usage, deployment, release, and public/private boundary explanation.

### Algorithms and Systems Notes

- C++ algorithm notes from OI practice, including files for network flow, tree-chain decomposition, and Mo's algorithm-style practice.
- Python porting and agent-tooling experiments in public fork/workspace form.

## Language Footprint Snapshot

GitHub language statistics are byte-based Linguist counts, not a skill score. Large firmware files, notebooks, generated code, assets, and packaged research data can dominate the numbers.

The table below summarizes the non-fork, non-empty public code repositories visible at this snapshot, excluding this index repository and empty newly-created repositories.

| Language | Approx. share | Evidence |
| --- | ---: | --- |
| C | 53.72% | ARM intelligent-clock firmware repository |
| Jupyter Notebook | 32.73% | D2NN / ViT / KD research notebooks |
| Python | 10.45% | desktop tools, automation scripts, ML scripts, FastAPI, Codex skill tooling |
| HTML | 1.01% | web UIs, static game, lab website |
| Assembly | 0.60% | embedded coursework support files |
| TeX | 0.59% | statistics/reporting coursework |
| CSS | 0.33% | web UIs and lab/static projects |
| JavaScript | 0.25% | static game and small web UI pieces |
| Makefile / C++ / PowerShell / Batchfile / Shell | < 0.30% each | build glue, Windows launch scripts, algorithm notes, deployment helpers |

## Public Repository Index

| Repository | What it publicly contains | Tech keywords | Status |
| --- | --- | --- | --- |
| [`qianrushidazuoye`](https://github.com/Cyh29hao/qianrushidazuoye) | Intelligent networked clock system for ARM coursework. The README describes an S800/TM4C1294 board-side program plus a PyQt5 PC host, serial protocol, event reporting, digital twin, schedule/alarm functions, weather/network-time extension, submission docs, and release preparation. | C, ARM, TM4C1294, S800, Keil, UART, SysTick, PyQt5, `pyserial`, matplotlib, PowerShell | Active coursework deliverable; README states version `v2.2` preparation/closure. |
| [`ARM-based-temperature-sensing-and-transmission-project`](https://github.com/Cyh29hao/ARM-based-temperature-sensing-and-transmission-project) | Public repository exists, but at this snapshot GitHub reported `size=0`, no README, and no language statistics. | Pending public evidence | Created; content not yet public at this snapshot. |
| [`AMS-Assistant-for-Maritime-Service`](https://github.com/Cyh29hao/AMS-Assistant-for-Maritime-Service) | Local desktop automation workbench for maritime-service workflows: contract generation, customs-clearance query, schedule/port-matrix placeholder, Excel synchronization, private encrypted business packs, releases, and public/private boundary docs. | Python, Windows desktop delivery, Excel/Word automation, browser automation, HTML/CSS, Batch, release packaging | Public prototype / implementation repository; README explicitly frames it as an internal-business automation prototype rather than a general SaaS product. |
| [`Mail-Sorting-Assistant-for-Maritime-Service`](https://github.com/Cyh29hao/Mail-Sorting-Assistant-for-Maritime-Service) | Runnable MVP for maritime mail assistance: FastAPI backend, SQLite storage, IMAP incremental sync, rule-based event extraction, query API, and web chat/list UI. | Python, FastAPI, SQLite, IMAP, HTML, CSS, JavaScript, Batch | MVP; README lists current limitations around rule-based extraction and single-machine SQLite. |
| [`Automatic-Sync-Assistant-for-Excel-Files`](https://github.com/Cyh29hao/Automatic-Sync-Assistant-for-Excel-Files) | Excel Sync Manager V1: GUI task management, source-file watching, selected-column sync, formula display-value export, lock retry behavior, and PyInstaller-style release build flow. | Python, Excel automation, GUI, file watching, PyInstaller, PowerShell, Batch | Small local utility with release/build instructions. |
| [`The-SJTU-Intelligent-Optoelectronic-Computing-Lab`](https://github.com/Cyh29hao/The-SJTU-Intelligent-Optoelectronic-Computing-Lab) | Lab website repository. README lists the main site and two backup addresses, including a Render test/display deployment and a campus-network-only backup address. | Python, HTML, CSS, web deployment, Render, Shell/PowerShell helpers | Public website repository. |
| [`D2NN-ViT-KD-final`](https://github.com/Cyh29hao/D2NN-ViT-KD-final) | Ver11r reproducibility package: notebook, requirements, CIFAR-10/MNIST data locations, ViT-B/16 local weight cache, smoke-test scripts, teacher-distillation smoke test, run guide, report, and output directory conventions. | Jupyter Notebook, Python, PyTorch, torchvision, ViT-B/16, D2NN, CIFAR-10, MNIST, knowledge distillation | Reproducibility-focused final package. |
| [`My-own-D2NN-Research-Practices`](https://github.com/Cyh29hao/My-own-D2NN-Research-Practices) | Personal D2NN research-practice notebooks, including D2NN single-layer/CIFAR-10 work, ViT-with/without-weights tasks, comparison folders, and KD design notes. | Jupyter Notebook, D2NN, ViT, KD, CIFAR-10, MNIST | Research/practice workspace. |
| [`D2NN-Forked-`](https://github.com/Cyh29hao/D2NN-Forked-) | Forked/practice D2NN notebook repository. README discusses PyTorch environment, D2NN/beam-diffraction reading sequence, MNIST accuracy notes, 4F system D2NN, and CIFAR-10 ViT-vs-D2NN comparison scripts/notebooks. | Jupyter Notebook, Python, PyTorch, D2NN, Beam Diffraction, MNIST, CIFAR-10, ViT comparison | Forked practice/research repository. |
| [`clash-royale-card-balance-statistics`](https://github.com/Cyh29hao/clash-royale-card-balance-statistics) | Probability and statistics coursework using RoyaleAPI matchup data. README reports 168 cards, 39,429,252 weighted matchup samples, weighted Pearson correlation `0.1476`, public CSV/XLSX data, analysis script, crawler, and LaTeX/PDF paper. | Python, Selenium, TeX/LaTeX, statistics, CSV, XLSX, data visualization | Reproducible course analysis project. |
| [`Aesthetics-Course-Essay-Preparation`](https://github.com/Cyh29hao/Aesthetics-Course-Essay-Preparation) | Course-essay preparation materials based on lecture subtitles: topic index, writing-method manual, and PDF outputs. README states it is a classroom-material index rather than a topic recommendation list. | Markdown, PDF, course-note organization, information extraction | Documentation / study-material repository. |
| [`shuixian-skill`](https://github.com/Cyh29hao/shuixian-skill) | Codex skill for creating a self-mirror companion from language samples, relationship preferences, transcripts, and chat imports. README lists Codex builder skill, WeChat/iMessage/transcript import, reports, docs, prompts, examples, and release notes. | Python, Codex Skill, transcript import, WeChat/iMessage import, Markdown docs, CLI/tooling | Public tool/skill project; README states it is still updating. |
| [`claude-code`](https://github.com/Cyh29hao/claude-code) | Forked educational Python porting workspace. README says the active `src/` tree is Python-first and includes commands, tools, models, query engine, manifest, tests, and an essay on AI reimplementation/legitimacy. | Python, tests, CLI metadata, agent/tool porting | Fork; educational purpose stated in repository description. |
| [`Static-Online-Minesweeper-Game`](https://github.com/Cyh29hao/Static-Online-Minesweeper-Game) | Static online Minesweeper game with GitHub Pages link, `index.html`, `app.js`, puzzle audit script, verification HTML, and Supabase schema. | HTML, JavaScript, Python, GitHub Pages, Supabase schema | Static game project. |
| [`Interesting-algorithms-in-my-OI-journey`](https://github.com/Cyh29hao/Interesting-algorithms-in-my-OI-journey) | Older OI algorithm notes and C++ implementations. README says these were hand-written before AI coding; file names indicate network flow, tree-chain decomposition, Mo's algorithm, and summary practice. | C++, OI algorithms, network flow, tree-chain decomposition, Mo's algorithm | Small algorithm archive. |
| [`my-Tech-Stack-202606`](https://github.com/Cyh29hao/my-Tech-Stack-202606) | This repository: a public index of the repositories above and the technical stack evidenced by them. | Markdown, repository curation, technical portfolio | Index repository. |

## What These Projects Demonstrate

- Ability to connect embedded firmware, serial protocols, and desktop host software into one deliverable system.
- Ability to turn practical business workflows into local Python automation tools with GUI, packaging, release, and documentation considerations.
- Ability to build research-style ML notebooks and then package them into reproducible folders with smoke tests and run guides.
- Ability to collect, clean, analyze, and report data with reproducible scripts and course-paper outputs.
- Ability to maintain public documentation that states boundaries, limitations, and usage paths instead of only showing source code.
- Ability to work across C/C++, Python, notebooks, web UI, shell scripts, LaTeX, and Markdown depending on the project shape.

## Notes and Boundaries

- Some repositories are coursework or research-practice repositories, not production products.
- Some repositories are forks and are marked as such in the index.
- Some repositories include generated files, large notebooks, release assets, or course deliverables; GitHub language statistics should be read as repository composition, not personal proficiency percentages.
- The ARM-based temperature sensing repository is intentionally listed as pending because the public repository existed but contained no public files when this README was generated.

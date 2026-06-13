# Media & Democracy Simulation

An interactive educational web platform and simulation game designed to teach citizens and students how the media operates in a democracy and how to practice critical media literacy.

---

## 🔗 Deployment Link
You can access the live, deployed web application here:
👉 **[Live Simulation Portal (Netlify)](https://roleandinfluenceofmediaindemocracy.netlify.app/)**

---

## 📝 Project Description
The **Media & Democracy Simulation** is a serverless, interactive web application that bridges the gap between civic theory and real-world digital behaviors. The platform features an educational showcase where users learn about the various roles of the press and an interactive, scenario-based simulation game where players must make split-second decisions on simulated social feed posts to protect public safety and democratic stability.

---

## ⚠️ Problem Statement
In the modern digital public square, citizens are constantly bombarded with a high volume of unverified news, AI-generated deepfakes, sensationalized clickbait, and political rumors. 
* **Lack of Literacy**: Many internet users lack the structural criteria and checklist skills required to identify biased journalism, verify domains, and cross-reference stories.
* **Societal Consequences**: Sharing unverified information spreads mass panic, creates false voting agendas, and diminishes public trust in democratic institutions, severely weakening the civic health of the community.

---

## 💡 Solution (What This Project Does)
This project acts as an interactive trainer that builds digital media literacy:
1. **Teaches Media Roles**: It educates users on the 8 crucial functions of the free press (Watchdog, Informer, Public Forum, Gatekeeper, Agenda Setter, Mobilizer, Civic Educator, and Consensus Builder).
2. **Interactive Simulation**: It places users in the decision-making seat through a **5-round challenge game** (drawn from a 25-question pool).
3. **Immediate Impact Feedback**: It uses a real-time **Democracy Impact Dashboard** to demonstrate how verifying, sharing, ignoring, or reporting a post immediately affects community health, public trust, and democratic resilience.

---

## ✨ Features

### 1. Interactive Media Roles Showcase
Explore the 8 fundamental roles of news media in a democracy using an interactive layout complete with custom illustrations, explanation details, and real-world case studies of journalists making a difference.

### 2. Media Literacy Checklist Tool
A three-pillar investigative guidelines panel helping citizens inspect any article:
* **Identify Biases**: Spotting loaded words and one-sided reporting.
* **Verify Sources**: Checking author accountability and official domain extensions.
* **Cross-Reference**: Checking if other trusted mainstream outlets are reporting the same story.

### 3. Headline Challenge Arena (Simulation Game)
A 5-round interactive game where players evaluate headline cards containing verified news or unverified conspiracies:
* Read simulated social posts and check source URLs.
* Run a background fact-check inspection to uncover hidden source details.
* Lock in choices (A: Verify, B: Share, C: Ignore, D: Report) and watch the buttons dynamically transition inline without needing to scroll the dashboard.

### 4. Democracy Impact Dashboard
Witness the immediate result of your choice on a dynamic feedback card:
* **Direct Consequences**: Read bulleted consequences of your choices.
* **Global Statistics**: View dynamically updated bar charts of choices made by other users.
* **Community Civic Health**: A color-coded scale that changes dynamically depending on the wisdom of your action.

### 5. Round Breakdown Scorecard
Unlock a personal report card displaying your cumulative **Personal Civic Health** score, earned rank (e.g. *Master Fact-Checker*, *Digital Defender*), and a round-by-round review highlighting the original stories and correct choices.

---

## 🛠️ Tech Stack Used
* **Frontend**: HTML5, Vanilla CSS3 (Glassmorphic dark theme, responsive grids), Vanilla JavaScript (ES6)
* **Icons & Typography**: Lucide Icons, Google Fonts (*Outfit* and *Inter*)
* **Routing & Architecture**: Serverless Static App (100% client-side choice evaluation)
* **Local Storage**: HTML5 `localStorage` (simulates live database statistics in the browser)

---

## 🚀 How to Run the Project

### Option 1: Direct Execution (No Server Required)
1. Clone the repository:
   ```bash
   git clone https://github.com/Vikas-4777/Swechaap-S02-.git
   cd Swechaap-S02-
   ```
2. Double-click the `index.html` file in your system file manager to run the app directly in any web browser.

### Option 2: Deploy to Static Hosting (Netlify, Vercel, GitHub Pages)
Because the codebase is serverless, you can deploy the root folder directly to Netlify or Vercel. Netlify will automatically detect `index.html` at the root and publish the site.

### Option 3: Local Node/Express Server (For Development)
If you wish to run the project with the local developer server:
1. Make sure [Node.js](https://nodejs.org/) is installed.
2. Install Express dependencies:
   ```bash
   npm install
   ```
3. Start the Express server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📁 Project Structure
```text
├── assets/                  # High-fidelity isometric illustrations
├── app.js                   # Client logic (manages local states and game statistics)
├── content.js               # Questions database containing roles, tools, and 25 questions
├── index.html               # Homepage (Landing page with metrics grid and quotes)
├── learn.html               # Learning center (Role cards showcase details)
├── game.html                # Simulation game (Question feed & impact dashboard)
├── styles.css               # Global glassmorphic styling, typography & variables
├── backend/                 # Optional local Express.js backend server code
├── .gitignore               # Excludes node_modules and cache from commits
└── README.md                # Project documentation
```

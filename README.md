# Media & Democracy Simulation

An interactive educational web platform and simulation game designed to teach citizens and students how the media operates in a democracy and how to practice critical media literacy.

This application is built as a **fully static, serverless web app**—making it 100% compatible with static hosting providers like **Netlify**, **Vercel**, and **GitHub Pages** with zero configuration required.

---

## 🌟 Key Features

### 1. Interactive Media Roles Guide
Learn about the **8 core roles** that the press plays in maintaining a free and transparent democratic society:
* **The Watchdog**: Exposing corruption and holding power accountable.
* **The Informer**: Delivering verified, unbiased facts for civic decision-making.
* **The Public Forum**: Providing a public square for diverse community voices.
* **The Gatekeeper**: Fact-checking and filtering out false rumors before publishing.
* **The Agenda Setter**: Directing public focus to critical, ignored societal issues.
* **The Mobilizer**: Encouraging voter turnout and community engagement.
* **The Civic Educator**: Translating complex laws and bills into clear, everyday guides.
* **The Consensus Builder**: Bridging political divides and promoting civil debate.

### 2. Media Literacy Toolkit
An investigative checklist showing citizens how to evaluate news posts using three pillars:
* **Identifying Bias**: Spotting loaded language and one-sided views.
* **Verifying Sources**: Checking credentials, domain records, and author names.
* **Cross-Reference**: Looking up stories across other credible mainstream channels.

### 3. Headline Challenge Arena (Simulation Game)
An interactive game consisting of **5 random rounds** chosen from a pool of **25 distinct challenges** representing various media scenarios:
* Evaluate simulated social media feeds containing verified news or unverified rumors.
* Inspect source details, domain dates, and run background fact-check checks.
* Make your move by selecting A, B, C, or D (Verify, Share, Ignore, or Report).

### 4. Democracy Impact Dashboard
Witness the direct consequences of your digital actions in real-time:
* **Direct Consequences**: Read detailed logs showing the civic impact of your choice.
* **Community Decisions**: See simulated global statistics on how other citizens responded.
* **Community Civic Health**: Watch the community health meter react to your fact-checking or rumor-spreading habits.

### 5. Citizen Report Card & Round Breakdown
At the end of the game, unlock your final report card:
* Shows your cumulative **Personal Civic Health** percentage and earned rank (e.g., *Master Fact-Checker*, *Digital Defender*, *Rumor Spreader*).
* Delivers a **round-by-round breakdown** reviewing each headline, your selected options, correct answers, and specific health deltas (+25%, -25%).

---

## 🛠️ Technology Stack
* **Architecture**: Serverless, Static Single-Page & Multi-Page Client
* **Languages**: HTML5, Vanilla CSS3 (Glassmorphic Theme), Vanilla JavaScript (ES6)
* **Libraries**: Lucide Icons
* **Data Storage**: Client-side `localStorage` (simulates database stats persistently in the browser)
* **Fonts**: Google Fonts (*Outfit* and *Inter*)

---

## 🚀 How to Run the Project

### Option 1: Direct Local Execution (No Server Required)
Simply open `index.html` directly in any web browser of your choice. Double-clicking the file from your folder will launch the entire application and game.

### Option 2: Static Hosting Deployment (Netlify, Vercel, GitHub Pages)
Because the application is serverless, you can upload the root repository directly to Netlify or Vercel. 
* Netlify will automatically detect `index.html` at the root and host the app.
* No build commands or publish folder overrides are needed!

### Option 3: Local Node/Express Server (For Development)
If you prefer running the project on a local server environment:
1. Ensure [Node.js](https://nodejs.org/) is installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Express server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure
```text
├── assets/                  # High-fidelity isometric vector illustrations
├── app.js                   # Dynamic client script (manages choices & local stats)
├── content.js               # Client database containing roles, tools, and 25 questions
├── index.html               # Homepage (Landing page with metrics grid and quotes)
├── learn.html               # Learning center (Role cards showcase details)
├── game.html                # Simulation game (Question feed & impact dashboard)
├── styles.css               # Global glassmorphic styling, typography & variables
├── backend/                 # Optional local Express.js backend server code
├── .gitignore               # Excludes node_modules and system cache
└── README.md                # Project documentation
```

# Media & Democracy Simulation

An interactive educational web platform and simulation game designed to teach citizens and students how the media operates in a democracy and how to practice critical media literacy.

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
* **Cross-Referencing**: Looking up stories across other credible mainstream channels.

### 3. Headline Challenge Arena (Simulation Game)
A interactive game consisting of **5 random rounds** chosen from a pool of **25 distinct challenges** representing various media scenarios:
* Evaluate simulated social media feeds containing verified news or unverified rumors.
* Inspect source details, domain dates, and run background fact-check looks.
* Make your move by selecting A, B, C, or D (Verify, Share, Ignore, or Report).

### 4. Democracy Impact Dashboard
Witness the direct consequences of your digital actions in real-time:
* **Direct Consequences**: Read detailed logs showing the civic impact of your choice.
* **Community Decisions**: See global statistics on how other citizens responded.
* **Community Civic Health**: Watch the community health meter react to your fact-checking or rumor-spreading habits.

### 5. Citizen Report Card & Round Breakdown
At the end of the game, unlock your final report card:
* Shows your cumulative **Personal Civic Health** percentage and earned rank (e.g. *Master Fact-Checker*, *Digital Defender*, *Rumor Spreader*).
* Delivers a **round-by-round breakdown** reviewing each headline, your selected options, correct answers, and specific health deltas (+25%, -25%).

---

## 🛠️ Technology Stack
* **Backend**: Node.js & Express.js
* **Frontend**: HTML5, Vanilla CSS3 (Glassmorphic Theme), Vanilla JavaScript (ES6)
* **Icons**: Lucide Icons library
* **Fonts**: Google Fonts (*Outfit* and *Inter*)

---

## 🚀 Installation & Local Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Vikas-4777/Swechaap-S02-.git
   cd Swechaap-S02-
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Server**:
   ```bash
   npm start
   ```

4. **Play the Simulation**:
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📁 Project Structure
```text
├── backend/
│   ├── data/
│   │   └── stats.json       # Stores anonymous choice selections
│   ├── content.js           # Database of roles, tools, and 25 game challenges
│   └── server.js            # Express routing and API endpoints
├── frontend/
│   ├── assets/              # Role illustrations and UI graphics
│   ├── app.js               # Dynamic interaction and state machine script
│   ├── game.html            # Headline challenge simulation views
│   ├── index.html           # Landing page with metric cards and quote banners
│   ├── learn.html           # Media roles details card showcase
│   └── styles.css           # Global typography, color tokens, and layout styles
├── .gitignore               # Ignored local files (node_modules, etc.)
└── README.md                # Project documentation
```

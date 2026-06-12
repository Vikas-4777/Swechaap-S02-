const express = require('express');
const path = require('path');
const fs = require('fs');
const content = require('./content');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve static assets from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

const statsFilePath = path.join(__dirname, 'data/stats.json');

// Helper to read statistics
function readStats() {
  try {
    if (fs.existsSync(statsFilePath)) {
      const data = fs.readFileSync(statsFilePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading stats file:', error);
  }
  
  // Return dummy stats structure for 25 questions if file not found
  const defaultStats = {};
  for (let i = 1; i <= 25; i++) {
    defaultStats[i] = { A: 48, B: 24, C: 18, D: 30 };
  }
  return defaultStats;
}

// Helper to write statistics
function writeStats(stats) {
  try {
    fs.writeFileSync(statsFilePath, JSON.stringify(stats, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing stats file:', error);
  }
}

// GET API to fetch simulation content (delivers pool of 25 questions as challengePool)
app.get('/api/content', (req, res) => {
  res.json({
    idealRoles: content.idealRoles,
    toolkit: content.toolkit,
    challengePool: content.challengePool
  });
});

// POST API to submit user choice and fetch outcomes + stats
app.post('/api/choice', (req, res) => {
  const { questionId, choice } = req.body;

  if (!questionId || !choice || !['A', 'B', 'C', 'D'].includes(choice)) {
    return res.status(400).json({ error: 'Invalid payload. Must include questionId and choice (A, B, C, or D).' });
  }

  // Update choice stats for the specific question
  const stats = readStats();
  const qIdStr = String(questionId);
  
  if (!stats[qIdStr]) {
    stats[qIdStr] = { A: 0, B: 0, C: 0, D: 0 };
  }
  
  stats[qIdStr][choice] = (stats[qIdStr][choice] || 0) + 1;
  writeStats(stats);

  // Calculate percentages for the question
  const qStats = stats[qIdStr];
  const total = Object.values(qStats).reduce((sum, val) => sum + val, 0);
  const percentages = {
    A: total > 0 ? Math.round((qStats.A / total) * 100) : 0,
    B: total > 0 ? Math.round((qStats.B / total) * 100) : 0,
    C: total > 0 ? Math.round((qStats.C / total) * 100) : 0,
    D: total > 0 ? Math.round((qStats.D / total) * 100) : 0
  };

  // Find question details in pool
  const question = content.challengePool.find(q => q.id === Number(questionId));
  if (!question) {
    return res.status(404).json({ error: `Question ID ${questionId} not found in pool.` });
  }

  // Generate dynamic outcome based on question type (real vs fake) and choice
  let outcome = {};
  const isReal = question.type === 'real';

  if (choice === 'A') {
    outcome = {
      choiceLabel: "Fact-Checked First",
      badgeClass: "badge-success",
      badgeIcon: "award",
      badgeTitle: "🏆 Wise Choice! Fact-Checker",
      badgeText: isReal 
        ? "Even though this news is true, fact-checking first is the only way to defend the truth."
        : "By checking facts first, you stopped the rumor chain and protected your community.",
      civicHealthDelta: 25,
      consequences: isReal 
        ? [
            "**Verified Truth**: You confirmed the source was official, making you a trusted citizen.",
            "**Supported Democracy**: Informed citizens can act on real policies and help society run better."
          ]
        : [
            "**Halted Misinformation**: The chain of fake news stopped with you, reducing public confusion.",
            "**Protected Society**: Well-informed voters hold public officials accountable fairly."
          ]
    };
  } else if (choice === 'B') {
    outcome = {
      choiceLabel: "Shared Instantly",
      badgeClass: "badge-danger",
      badgeIcon: "alert-triangle",
      badgeTitle: isReal ? "📢 Lucky Choice! Informed but Risky" : "⚠️ Risky Choice! Rumor Spreader",
      badgeText: isReal
        ? "This news is true, so sharing it was helpful, but you took a risk by not checking the source first."
        : "Sharing unverified headlines spreads fear and weakens community trust.",
      civicHealthDelta: isReal ? 10 : -25,
      consequences: isReal
        ? [
            "**Spread Good News**: The community was informed about a real vaccination or safety drive.",
            "**Risky Habit**: If the news had been fake, you would have spread a rumor. Always verify first."
          ]
        : [
            "**Spread of Misinformation**: You contributed to a viral rumor that turned out to be false.",
            "**Damaged Public Trust**: Citizens lost trust in public institutions based on a fake story."
          ]
    };
  } else if (choice === 'C') {
    outcome = {
      choiceLabel: "Ignored & Scrolled",
      badgeClass: "badge-warning",
      badgeIcon: "eye-off",
      badgeTitle: "💤 Passive Choice! Silent Observer",
      badgeText: isReal
        ? "You ignored the post. While it didn't spread fake news, you missed out on important verified warnings."
        : "Ignoring prevents spreading rumors, but it doesn't help address fake news.",
      civicHealthDelta: 0,
      consequences: isReal
        ? [
            "**Missed Information**: You missed a verified government warning or helpful public update.",
            "**Passive Citizen**: Democracy needs active, informed citizens who engage with real news."
          ]
        : [
            "**Unchecked Rumors**: Although you didn't spread it, others will, and the rumor continues.",
            "**Missed Opportunity**: You missed the chance to report the post and stop the misinformation."
          ]
    };
  } else if (choice === 'D') {
    outcome = {
      choiceLabel: "Reported Post",
      badgeClass: isReal ? "badge-danger" : "badge-info",
      badgeIcon: isReal ? "x-circle" : "shield",
      badgeTitle: isReal ? "❌ Poor Choice! False Flag" : "🛡️ Proactive Choice! Digital Defender",
      badgeText: isReal
        ? "You reported verified news! Flagging real warnings as fake news hurts public safety campaigns."
        : "Reporting helps platforms label bad actors and limit the reach of fake news.",
      civicHealthDelta: isReal ? -15 : 15,
      consequences: isReal
        ? [
            "**Censored Truth**: You flagged actual public alerts, potentially blocking important info from others.",
            "**Damaged Trust**: Reporting verified news spreads confusion and delays vital public actions."
          ]
        : [
            "**Protected Community**: Fewer people will see this fake story in their newsfeeds.",
            "**Civic Action**: You took active responsibility to maintain a cleaner digital public square."
          ]
    };
  }

  // Calculate cumulative community health for this specific question
  const totalScorePotential = total * 25;
  const cumulativeWeightedScore = (qStats.A * 25) + (qStats.D * 15) + (qStats.C * 0) + (qStats.B * -25);
  
  const worstCase = total * -25;
  const bestCase = total * 25;
  const range = bestCase - worstCase;
  const communityCivicHealth = range > 0 
    ? Math.round(((cumulativeWeightedScore - worstCase) / range) * 100)
    : 50;

  res.json({
    choiceSelected: choice,
    outcome: outcome,
    stats: percentages,
    totalPlayers: total,
    communityCivicHealth: communityCivicHealth
  });
});

// Serves the learn page
app.get('/learn', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/learn.html'));
});

// Serves the game page
app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/game.html'));
});

// Handle catch-all for direct frontend navigation/routing if needed
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

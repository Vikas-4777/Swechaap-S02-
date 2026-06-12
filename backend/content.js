const content = {
  // Learn Page Content
  idealRoles: {
    title: "How Media Serves Democracy",
    subtext: "The press acts as a cornerstone of freedom by:",
    roles: [
      {
        id: "watchdog",
        title: "The Watchdog Role",
        shortDesc: "Exposing corruption & holding power accountable",
        icon: "shield-alert",
        detail: "Investigative journalists act as a watchdog by monitoring governments, politicians, and massive corporations. They expose illegal deals, corruption, and the abuse of power so citizens can demand justice.",
        usage: "🗳️ **How this influences democracy**: It keeps government officials honest, protects tax money from being stolen, and ensures that laws are applied equally to everyone, not just the rich.",
        example: "🔍 **Example Case**: Reporters uncovered how a city mayor was secretly awarding government construction contracts to his own relatives' companies. The news forced a full investigation and the mayor's resignation."
      },
      {
        id: "informer",
        title: "The Informer Role",
        shortDesc: "Providing verified facts for civic decisions",
        icon: "newspaper",
        detail: "The media reports on daily events, laws, economic updates, and foreign policy. This role focuses on delivering truthful, accurate, and unbiased facts so citizens can understand the world around them.",
        usage: "🗳️ **How this influences democracy**: It educates voters about candidate history and election manifestos, allowing citizens to cast informed votes rather than choosing based on rumors or emotional appeals.",
        example: "📢 **Example Case**: During a major election, a TV station hosts a series of deep-dive reports analyzing the actual budget costs of each candidate's promises for public healthcare reform."
      },
      {
        id: "public_forum",
        title: "The Public Forum Role",
        shortDesc: "Gives voice to diverse communities",
        icon: "users",
        detail: "The media acts as a public square, publishing letters to the editor, holding debates, and interviewing citizens from minority groups, ensuring all parts of society have a voice.",
        usage: "🗳️ **How this influences democracy**: It ensures that minority needs are not ignored by the majority government, and encourages peaceful public debate to resolve social conflicts rather than violence.",
        example: "💬 **Example Case**: A newspaper runs a weekly editorial section dedicated to letters from local farmers, helping urban citizens understand how new agricultural tariffs affect rural livelihoods."
      },
      {
        id: "gatekeeper",
        title: "The Gatekeeper Role",
        shortDesc: "Filtering and verifying rumors before publication",
        icon: "filter",
        detail: "Every day, thousands of rumors, leaks, and claims surface. The media filters this information, fact-checking claims with experts, government records, and documents before publishing only what is true.",
        usage: "🗳️ **How this influences democracy**: It protects citizens from panic and division by preventing fake news, unverified conspiracies, and foreign propaganda from dominating the public conversation.",
        example: "🛡️ **Example Case**: A newsroom receives an anonymous leak alleging a local business uses toxic paint. Editors refuse to run the story until lab tests verify the toxic content, preventing a false panic."
      },
      {
        id: "agenda_setter",
        title: "The Agenda Setter Role",
        shortDesc: "Directing public focus to critical ignored issues",
        icon: "target",
        detail: "By choosing what to publish on the front page or broadcast during prime time, the media decides which issues get the country's attention, elevating ignored struggles into national topics.",
        usage: "🗳️ **How this influences democracy**: It forces municipal councils, state assemblies, and parliaments to prioritize solving the actual problems of daily citizens rather than political games.",
        example: "🎯 **Example Case**: Investigative coverage showing high levels of school dropouts in rural schools forced the State Education Ministry to immediately allocate emergency funding for school bus networks."
      },
      {
        id: "mobilizer",
        title: "The Mobilizer Role",
        shortDesc: "Encouraging voter turnout and community engagement",
        icon: "megaphone",
        detail: "The press has a mobilizing influence by reminding citizens of their civic obligations. By highlighting registration dates, polling places, town hall meetings, and grassroots actions, media encourages active public participation rather than passive observation.",
        usage: "🗳️ **How this influences democracy**: It increases voter turnout, promotes public participation, and helps communities organize to solve local issues collectively.",
        example: "📢 **Example Case**: A community newspaper launched a non-partisan campaign mapping local polling stations, leading to a 35% increase in first-time voter turnout in that district."
      },
      {
        id: "educator",
        title: "The Civic Educator Role",
        shortDesc: "Breaking down complex laws, bills, and government systems",
        icon: "book-open",
        detail: "Bills, budgets, and government processes are often filled with jargon. The media acts as a civic educator by translating dry legal texts, clarifying how governmental branches work, and showing how policies affect citizens' lives.",
        usage: "🗳️ **How this influences democracy**: It raises public awareness of constitutional rights, helps citizens discuss policies with clear understanding, and prevents confusion about national laws.",
        example: "📖 **Example Case**: A digital media outlet created simple animated videos explaining a new complex data privacy bill, allowing thousands of citizens to submit feedback to their lawmakers."
      },
      {
        id: "consensus_builder",
        title: "The Consensus Builder Role",
        shortDesc: "Promoting respectful debate and bridging political divides",
        icon: "git-merge",
        detail: "In a polarized society, the media can act as a bridge by creating spaces for civil debate between opposing views, highlighting common-sense solutions, and focusing on shared community goals.",
        usage: "🗳️ **How this influences democracy**: It reduces hyper-polarization, builds trust between different social groups, and encourages a healthy political culture of dialogue and compromise.",
        example: "🤝 **Example Case**: A TV network hosted a structured debate where local environmental groups and industrial developers agreed on compromises for a new clean energy project."
      }
    ]
  },

  // Toolkit Content
  toolkit: {
    title: "Investigative Checklist",
    subtext: "Analyze articles using these three pillars:",
    tools: [
      {
        id: "bias",
        title: "Identify Biases",
        shortDesc: "Look for loaded language and one-sided views.",
        icon: "search",
        detail: "Biased articles use emotional or sensational words (like 'shocking', 'scandalous', 'traitor') to make you feel angry or excited. They also present only one side of a story without showing other perspectives.",
        tip: "💡 **Spotting Tip**: Ask yourself: 'Is the writer trying to report facts, or are they trying to make me feel a strong emotion like anger?'"
      },
      {
        id: "sources",
        title: "Check Sources",
        shortDesc: "Verify credentials and author accountability.",
        icon: "link",
        detail: "Reliable news stories name their sources (like experts, official reports, or eye-witnesses). If an article uses phrases like 'people are saying' or comes from an unknown website, it might not be true.",
        tip: "💡 **Spotting Tip**: Check the website's URL. A site ending in '.net' or '.co' that you've never heard of (like 'Anonymous-Blog-Post-102.net') is often less reliable than official news outlets."
      },
      {
        id: "cross_ref",
        title: "Cross-Reference",
        shortDesc: "Search if other credible outlets cover the story.",
        icon: "git-compare",
        detail: "If a massive event really happened, multiple independent news channels and newspapers will report on it. If only one unknown blog is reporting it, the story is highly likely to be fake or exaggerated.",
        tip: "💡 **Spotting Tip**: Copy the headline and search it online. See if trusted mainstream news organizations have published the same news."
      }
    ]
  },

  // 25 Question Pool for Simulation Game (with customized choices and outcomes)
  challengePool: [
    {
      id: 1,
      type: "real",
      headline: "Independent Audit Reveals Embezzlement of Public Park Infrastructure Budgets",
      source: "TheDailyTribute.com",
      desc: "This investigative report demonstrates the Watchdog role. A journalism team spends 3 months analyzing city budgets to expose how $2 million was diverted.",
      hint: "The Daily Tribute is a registered, independent newspaper. The article links directly to the municipal audit PDF. Fulfilling the Watchdog role holds power accountable.",
      question: "This article represents the Watchdog role. What is your next move?",
      choices: [
        { id: "A", label: "Review audit PDF", text: "Open the linked official audit report and verify the auditor credentials." },
        { id: "B", label: "Post immediate rant", text: "Share the link on social media calling for the arrest of the contractor without reading details." },
        { id: "C", label: "Scroll past", text: "Ignore the corruption report and keep scrolling." },
        { id: "D", label: "Report newspaper", text: "Report The Daily Tribute page for publishing fake news to attack developers." }
      ]
    },
    {
      id: 2,
      type: "real",
      headline: "State Regulatory Probe Finds High Levels of Toxic Waste Dumped in Rural River",
      source: "EcoMonitorPress.org",
      desc: "Fulfilling the Watchdog role, reporters monitored chemical discharges from local factories, finding heavy metals exceed safety limits by 200%.",
      hint: "The report names specific toxicologists and cites official EPA lab results. Exposing safety threats is a key watchdog function that holds factories accountable.",
      question: "This article represents the Watchdog role. What is your next move?",
      choices: [
        { id: "A", label: "Verify lab reports", text: "Cross-check the EPA registration and official lab results on the environmental safety database." },
        { id: "B", label: "Share alert instantly", text: "Forward the post immediately to warn friends without reading the specific safety guidelines." },
        { id: "C", label: "Scroll past warning", text: "Ignore the toxic waste warning and scroll past." },
        { id: "D", label: "Report source page", text: "Report the EcoMonitor page as false news attacking corporate manufacturers." }
      ]
    },
    {
      id: 3,
      type: "fake",
      headline: "WATCHDOG LEAK: Mayor Caught on Secret Tape Taking Cash Bribes from Developers!",
      source: "LeakStormSecrets.net",
      desc: "A sensationalized post claiming to expose corruption (abusing the Watchdog role). An anonymous source posts a blurry 5-second audio clip alleging bribes.",
      hint: "The website domain was registered 2 days ago anonymously. Audio engineers confirmed the clip is a deepfake generated using AI voice cloning.",
      question: "This post claims to represent the Watchdog role. What is your next move?",
      choices: [
        { id: "A", label: "Check official sources", text: "Search verified news outlets and official city hall reports for municipal bribe investigations." },
        { id: "B", label: "Forward alert instantly", text: "Forward the leak to community groups saying, 'Look at this corrupt mayor!'" },
        { id: "C", label: "Scroll past leak", text: "Ignore the anonymous leak post and continue scrolling." },
        { id: "D", label: "Report deepfake", text: "Flag the post on the platform for sharing fabricated audio to defame officials." }
      ]
    },
    {
      id: 4,
      type: "real",
      headline: "Ministry of Health Launches Free Vaccination Drive for All Government School Children",
      source: "HealthDept.gov.in",
      desc: "An Informer role post providing verified facts. Local clinics will host free vaccination booths starting next Monday with parental consent.",
      hint: "The website ends in .gov.in (official government domain) and local schools confirmed receipt. The Informer role helps citizens get unbiased, health-saving facts.",
      question: "This post represents the Informer role. What is your next move?",
      choices: [
        { id: "A", label: "Verify on govt portal", text: "Check HealthDept.gov.in directly to download the official schedule sheet." },
        { id: "B", label: "Share with parents", text: "Share the notice instantly on class chats to encourage families to register." },
        { id: "C", label: "Ignore circular", text: "Skip reading the notification details and scroll past." },
        { id: "D", label: "Report as propaganda", text: "Flag the post as false health propaganda and ask others to boycott." }
      ]
    },
    {
      id: 5,
      type: "real",
      headline: "Department of Labor Releases Official Job Market Reports and Youth Training Guidelines",
      source: "LaborRegistry.gov.in",
      desc: "Fulfilling the Informer role, this official guide breaks down the new government employment program and provides lists of verified training centers.",
      hint: "This official government portal provides verified statistics and training center directories to help youth find jobs without getting scammed.",
      question: "This post represents the Informer role. What is your next move?",
      choices: [
        { id: "A", label: "Verify registry list", text: "Open LaborRegistry.gov.in to confirm the list of accredited vocational training partners." },
        { id: "B", label: "Share lists immediately", text: "Forward the youth job training notice instantly to all student group chats." },
        { id: "C", label: "Ignore registry post", text: "Skip reading the employment guidelines." },
        { id: "D", label: "Report as spam", text: "Report the labor registry link as fraudulent corporate spam." }
      ]
    },
    {
      id: 6,
      type: "fake",
      headline: "INFORMER WARNING: Local Water Supply Contaminated with Brain-Eating Parasites!",
      source: "Emergency-Health-Alert.blogspot.com",
      desc: "A sensationalized alarm mimicking the Informer role. The post urges residents to immediately boil all water and buy bottled water from specific brands.",
      hint: "This is a free blogspot site with no verified author. The municipal water department issued an alert confirming the water tests fully pass all safety codes.",
      question: "This post claims to represent the Informer role. What is your next move?",
      choices: [
        { id: "A", label: "Check municipal site", text: "Check the official city municipal utility board page to see if water alerts are active." },
        { id: "B", label: "Forward urgent warning", text: "Forward the warning instantly to warn family to stock up on bottled water." },
        { id: "C", label: "Ignore water warning", text: "Ignore the water warning and go to sleep." },
        { id: "D", label: "Report health panic", text: "Report the blog for spreading fabricated health scares to sell retail brands." }
      ]
    },
    {
      id: 7,
      type: "real",
      headline: "Local Community Voice: Rural Farmers Share How New Tariffs Impact Crop Seed Costs",
      source: "StateFarmersForum.org",
      desc: "Performing the Public Forum role. A digital newspaper publishes letters and video interviews with local farmers, giving them a voice to express rural challenges.",
      hint: "The platform hosts open editorials and verified farmer letters. The Public Forum role ensures that rural voices and agricultural challenges are not ignored.",
      question: "This article represents the Public Forum role. What is your next move?",
      choices: [
        { id: "A", label: "Verify farm statistics", text: "Search official agricultural department data to check seed tax listings." },
        { id: "B", label: "Share crop forum", text: "Share the farmers' editorial to support farming communities." },
        { id: "C", label: "Ignore crop forum", text: "Ignore the farmers' letters and scroll past." },
        { id: "D", label: "Report farm forum", text: "Report the portal for spreading anti-tariff propaganda." }
      ]
    },
    {
      id: 8,
      type: "real",
      headline: "Town Hall Debates: Citizens Discuss Pros and Cons of Proposed City Park Rezoning",
      source: "MetropolitanVoice.com",
      desc: "A Public Forum article hosting opinions from shopkeepers, parents, and environmentalists about converting a local green park into a retail parking lot.",
      hint: "This article is a classic example of the Public Forum role, offering balanced viewpoints from various community members to encourage debate.",
      question: "This article represents the Public Forum role. What is your next move?",
      choices: [
        { id: "A", label: "Verify zoning notices", text: "Open the city municipal corporation planning portal to check park rezoning filings." },
        { id: "B", label: "Share debate link", text: "Share the debate link to invite neighbors to watch." },
        { id: "C", label: "Ignore debates", text: "Ignore the park rezoning debate." },
        { id: "D", label: "Report voice forum", text: "Report the debate platform for publishing citizens' negative opinions about developers." }
      ]
    },
    {
      id: 9,
      type: "fake",
      headline: "PUBLIC FORUM LEAK: Local Residents Vote 99% to Boycott New Community Health Center!",
      source: "NeighbourhoodUnionAlert.net",
      desc: "Abusing the Public Forum role, this post claims a massive citizen poll rejected the hospital. It shows a screen grab of an unverified online poll with 10 votes.",
      hint: "The website has no registered editorial board. Official census records show over 10,000 residents, and local councils confirmed the poll is completely fabricated.",
      question: "This post claims to represent the Public Forum role. What is your next move?",
      choices: [
        { id: "A", label: "Check official votes", text: "Search municipal health filings to see if any official neighborhood votes were held." },
        { id: "B", label: "Forward boycott invite", text: "Share the post urging friends to join the health center boycott." },
        { id: "C", label: "Ignore health poll", text: "Ignore the boycott post." },
        { id: "D", label: "Report fake poll", text: "Report the page for sharing fabricated polls to mislead health authorities." }
      ]
    },
    {
      id: 10,
      type: "real",
      headline: "Fact-Checked: Rumor of Impending Fuel Shortage and Petrol Pump Closures is Completely False",
      source: "VerifiedPressFactCheck.in",
      desc: "Fulfilling the Gatekeeper role. A newsroom verifies anonymous WhatsApp claims of petrol shutdowns by interviewing refinery officials and state distributors.",
      hint: "The Gatekeeper role acts as a filter, protecting citizens from artificial panic. Refineries confirm supply lines are running at full capacity.",
      question: "This fact-check represents the Gatekeeper role. What is your next move?",
      choices: [
        { id: "A", label: "Verify fact-check source", text: "Verify fact-checker credentials on the International Fact-Checking Network registry." },
        { id: "B", label: "Share fact-check", text: "Share the fact-check link to calm down panicking school transport groups." },
        { id: "C", label: "Ignore fact-check", text: "Ignore the fact-check post." },
        { id: "D", label: "Report page", text: "Report the fact-checking portal as oil corporation propaganda." }
      ]
    },
    {
      id: 11,
      type: "real",
      headline: "Investigation: Viral WhatsApp Video of Kidnapping in Progress is Actually an Old Movie Clip",
      source: "DeceptiveFilterFactCheck.org",
      desc: "Acting in the Gatekeeper role, fact-checkers verify a viral video causing panic in parent groups. They locate the original movie source from 2018.",
      hint: "The Gatekeeper role filters out fabricated threats. Parents are reassured that police have received zero kidnapping reports in the area.",
      question: "This investigation represents the Gatekeeper role. What is your next move?",
      choices: [
        { id: "A", label: "Reverse-search frames", text: "Reverse-search the video frame to check its source origin on search engines." },
        { id: "B", label: "Share alert flyer", text: "Share the police alert to parent groups telling them to watch out without checking details." },
        { id: "C", label: "Ignore video", text: "Ignore the video post." },
        { id: "D", label: "Report check-site", text: "Report the fact-check page for hiding child crimes." }
      ]
    },
    {
      id: 12,
      type: "fake",
      headline: "GATEKEEPER CONFIDENTIAL: Newspaper Secretly Hiding Alien Spacecraft Sighting!",
      source: "ConspiracyObserver.org",
      desc: "Attacking the Gatekeeper role. The blogger claims newsrooms are filtering and hiding photos of flying objects because they are controlled by foreign agencies.",
      hint: "The photo shown is actually a solar energy reflection on a lens. Standard editorial guidelines require verifying images before publishing, which is correct gatekeeping.",
      question: "This post attacks the Gatekeeper role. What is your next move?",
      choices: [
        { id: "A", label: "Search lens flare physics", text: "Search scientific articles on camera lens flare and solar reflections." },
        { id: "B", label: "Share cover-up leak", text: "Share the post claiming the government is hiding alien space sightings." },
        { id: "C", label: "Ignore alien post", text: "Ignore the conspiracy blog." },
        { id: "D", label: "Report hoax", text: "Report the blog for spreading technology myths and unverified sky sightings." }
      ]
    },
    {
      id: 13,
      type: "fake",
      headline: "GATEKEEPER LEAK: Major News Channel Caught deleting comments exposing vaccine side effects!",
      source: "FreedomLeaksInfo.net",
      desc: "An article claiming that news gatekeepers are censoring citizens. It alleges comments showing vaccine harms are being scrubbed to keep the public compliant.",
      hint: "The channel deleted automated spam bots posting malware links under vaccine videos, which is standard community moderation and gatekeeping to protect readers.",
      question: "This post claims to expose gatekeeper censorship. What is your next move?",
      choices: [
        { id: "A", label: "Read channel moderation policies", text: "Read the channel's public policy on spam and bot comment deletions." },
        { id: "B", label: "Share censorship warning", text: "Share the blog warning that health channels are deleting feedback." },
        { id: "C", label: "Ignore censor warning", text: "Ignore the blog post." },
        { id: "D", label: "Report fake leak", text: "Report the blog for spreading fabricated censorship claims to direct traffic to malware sites." }
      ]
    },
    {
      id: 14,
      type: "real",
      headline: "Forgotten Schools: How Dilapidated Classrooms in Rural Towns Impede Student Learning",
      source: "TheDailyTribute.com",
      desc: "An example of the Agenda Setter role. By placing a deep-dive report on rural school safety on the front page, the press forces lawmakers to debate school funds.",
      hint: "The Agenda Setter role decides which issues get national focus, pushing governments to fix real problems rather than focusing only on political campaigns.",
      question: "This campaign represents the Agenda Setter role. What is your next move?",
      choices: [
        { id: "A", label: "Verify education bills", text: "Search the State Education Ministry budget listings to check rural school allocations." },
        { id: "B", label: "Share funding campaign", text: "Share the school campaign link with local educational advocacy groups." },
        { id: "C", label: "Ignore school report", text: "Ignore the school report." },
        { id: "D", label: "Report article", text: "Report the article for trying to discredit local municipal development councils." }
      ]
    },
    {
      id: 15,
      type: "real",
      headline: "Clean Water Crisis: Ignored High Levels of Fluoride in Drinking Wells of Eastern Villages",
      source: "ScienceAdvocatePress.org",
      desc: "Using the Agenda Setter role. Editors feature interviews with sick children and chemical analysis of village wells, forcing health departments to act.",
      hint: "Agenda setting helps ignored communities by bringing their struggles to national attention. The Health Department has now allocated emergency water filters.",
      question: "This report represents the Agenda Setter role. What is your next move?",
      choices: [
        { id: "A", label: "Check water charts", text: "Check water toxicity bulletins on the state pollution control board website." },
        { id: "B", label: "Share filter drive", text: "Share the volunteer filter campaign to raise money instantly." },
        { id: "C", label: "Ignore water report", text: "Ignore the water reports." },
        { id: "D", label: "Report research", text: "Report the scientific publication as an anti-government lobby alert." }
      ]
    },
    {
      id: 16,
      type: "fake",
      headline: "AGENDA EXCLUSIVE: Secret Government Plan to Replace Clean Energy with Nuclear Plants!",
      source: "PowerGridSecrets.co",
      desc: "A sensational agenda-setting post (abusing the role). The article claims a secret lobby is forcing clean energy initiatives out of the budget to build nuclear plants.",
      hint: "The budget filings show a 200% increase in solar and wind subsidies, and nuclear allocations remain unchanged. The article is trying to create artificial debate.",
      question: "This post claims to represent the Agenda Setter role. What is your next move?",
      choices: [
        { id: "A", label: "Check budget PDF", text: "Download the official state budget PDF files to verify energy subsidy funding." },
        { id: "B", label: "Share nuclear alert", text: "Share the blog warning that clean energy is being shutdown." },
        { id: "C", label: "Ignore grid post", text: "Ignore the nuclear grid alert." },
        { id: "D", label: "Report power hoax", text: "Report the portal for sharing fabricated budget logs to create public panic." }
      ]
    },
    {
      id: 17,
      type: "real",
      headline: "Civic Action: Non-Partisan 'Get Out the Vote' Campaign Maps Local Polling Booths",
      source: "ElectoralCommission.in",
      desc: "Acting in the Mobilizer role, this post encourages citizens to exercise their voting rights. It provides tools to verify polling booths and register voters.",
      hint: "The Mobilizer role aims to increase democratic participation. The website is the official Electoral Commission portal and provides non-partisan guidance.",
      question: "This initiative represents the Mobilizer role. What is your next move?",
      choices: [
        { id: "A", label: "Open booth finder", text: "Open the Electoral Commission tool and input your voter registry ID." },
        { id: "B", label: "Share registry tool", text: "Share the voter registration link to encourage other students to vote." },
        { id: "C", label: "Ignore voting post", text: "Ignore the voting registry reminders." },
        { id: "D", label: "Report commission", text: "Report the official Election Commission page as a scam." }
      ]
    },
    {
      id: 18,
      type: "real",
      headline: "Save Our Forests: Join the Community Tree Plantation Drive This Saturday",
      source: "GreenCivicNetwork.org",
      desc: "A Mobilizer role campaign. The local newsletter publishes a signup form and coordinates with environmental experts to help citizens plant 1,000 native trees.",
      hint: "The campaign is verified by local municipal councils. The Mobilizer role encourages active public engagement to solve community issues.",
      question: "This campaign represents the Mobilizer role. What is your next move?",
      choices: [
        { id: "A", label: "Verify event details", text: "Check the local municipal parks council registry for event permits." },
        { id: "B", label: "Share drive invite", text: "Forward the tree-planting flyer to all neighborhood chats." },
        { id: "C", label: "Ignore volunteering", text: "Ignore the tree planting notice." },
        { id: "D", label: "Report plantation", text: "Report the environmental event as corporate spam." }
      ]
    },
    {
      id: 19,
      type: "fake",
      headline: "MOBILIZER ALERT: Citizens Urged to Block Highway Tomorrow to Protest New Tax Laws!",
      source: "WhatsApp-Forward-Group",
      desc: "A WhatsApp forward abusing the Mobilizer role, calling for citizens to block emergency highways immediately without waiting for union notifications.",
      hint: "The local transport unions have stated they are in peaceful talks and warned citizens not to participate in dangerous, uncoordinated road blocks.",
      question: "This forward claims to represent the Mobilizer role. What is your next move?",
      choices: [
        { id: "A", label: "Check union portals", text: "Check the official city transport union web page to see if strike notices are active." },
        { id: "B", label: "Share protest flyer", text: "Share the WhatsApp forward to all contacts to call for roadblocks." },
        { id: "C", label: "Ignore block alert", text: "Ignore the roadblock alert." },
        { id: "D", label: "Report block chain", text: "Flag the user account or report the forward chain for inciting illegal public disruption." }
      ]
    },
    {
      id: 20,
      type: "real",
      headline: "EXPLAINED: How the New Municipal Bill Affects Local Shopkeeper Taxes",
      source: "CityPoliceTraffic.gov.in",
      desc: "A Civic Educator article breaking down a complex 300-page tax bill into simple guides, explaining what shopkeepers need to pay and where to apply.",
      hint: "The Civic Educator role translates legal jargon into clear facts. The bulletin is verified by the municipal tax department.",
      question: "This article represents the Civic Educator role. What is your next move?",
      choices: [
        { id: "A", label: "Verify tax sheets", text: "Check the municipal corporation's official taxation portal directly to cross-check rates." },
        { id: "B", label: "Share explainer", text: "Forward the tax guide instantly to local shopkeepers and traders." },
        { id: "C", label: "Ignore tax guide", text: "Ignore the tax explainer." },
        { id: "D", label: "Report tax guide", text: "Report the tax department guide as fraudulent billing spam." }
      ]
    },
    {
      id: 21,
      type: "real",
      headline: "Constitution Day Guide: Simple Infographics Explaining Your Basic Fundamental Rights",
      source: "StateEducationPortal.org",
      desc: "Fulfilling the Civic Educator role, this interactive portal features simple infographics showing citizen rights under police inspection or free speech.",
      hint: "This verified state portal educates citizens on their legal and constitutional rights, helping them interact with government officials safely.",
      question: "This guide represents the Civic Educator role. What is your next move?",
      choices: [
        { id: "A", label: "Cross-check clauses", text: "Verify the legal sections listed by checking official state law gazettes." },
        { id: "B", label: "Share guides", text: "Share the infographics link with classmates to spread awareness." },
        { id: "C", label: "Ignore rights guide", text: "Skip reading the civic rights guide." },
        { id: "D", label: "Report portal", text: "Report the state portal for posting anti-police propaganda." }
      ]
    },
    {
      id: 22,
      type: "fake",
      headline: "CIVIC EXPLAINER: New Law Allows Government to Confiscate Personal Property!",
      source: "StateLawsDecoded.blogspot.com",
      desc: "Mimicking the Civic Educator role, this blog post claims a new bill passed last night allows authorities to take personal land without court warrants.",
      hint: "The bill actually refers to land acquisitions for public highways with mandatory 200% market rate compensations and court appeals. The blog is misrepresenting the text.",
      question: "This post claims to represent the Civic Educator role. What is your next move?",
      choices: [
        { id: "A", label: "Verify gazette logs", text: "Check the state government's official bill gazette database to read the raw bill text." },
        { id: "B", label: "Share property warning", text: "Share the warning blog to warn land owners about property grabs." },
        { id: "C", label: "Ignore explainer", text: "Ignore the property blog." },
        { id: "D", label: "Report false decoder", text: "Report the blogger page for misrepresenting legal texts to trigger land disputes." }
      ]
    },
    {
      id: 23,
      type: "real",
      headline: "TV Debate: Environmentalists and Industry Reps Agree on Green Energy Zones",
      source: "StateEducationPortal.org",
      desc: "Demonstrating the Consensus Builder role, the network hosts a debate where both sides compromise on solar zone placements, preserving farm lands.",
      hint: "The Consensus Builder role aims to reduce hyper-polarization by highlighting common-sense solutions and bringing opposing views together.",
      question: "This debate represents the Consensus Builder role. What is your next move?",
      choices: [
        { id: "A", label: "Verify signed agreement", text: "Open the state renewable energy ministry portal to confirm the solar zone boundaries." },
        { id: "B", label: "Share compromises", text: "Share the video highlights showing positive collaboration between green lobbies and developers." },
        { id: "C", label: "Ignore debate", text: "Ignore the environmental debate." },
        { id: "D", label: "Report debate", text: "Report the television network for staging compromises to protect oil interests." }
      ]
    },
    {
      id: 24,
      type: "real",
      headline: "Community Mediation: Local Council and Residents Co-Design Waste Recycling Program",
      source: "ElectoralCommission.in",
      desc: "Fulfilling the Consensus Builder role, a local newsletter highlights compromises between residents wanting cleaner streets and councils wanting lower costs.",
      hint: "Highlighting collaborative solutions is a key consensus-building function that helps the community work together peacefully.",
      question: "This newsletter represents the Consensus Builder role. What is your next move?",
      choices: [
        { id: "A", label: "Verify recycling charts", text: "Check municipal recycling schedules and rates on the local city council website." },
        { id: "B", label: "Share recycling guide", text: "Share the compromises list to encourage households to start waste sorting." },
        { id: "C", label: "Ignore recycling", text: "Ignore the waste recycling notices." },
        { id: "D", label: "Report mediation", text: "Report the council newsletter for sharing fake municipal surveys." }
      ]
    },
    {
      id: 25,
      type: "fake",
      headline: "CONSENSUS EXCLUSIVE: All Parties Secretly Agree to Double Politician Salaries!",
      source: "PoliticoLeaks.org",
      desc: "Abusing the Consensus Builder role, this post claims that rival parties compromised secretly to double their pay while cutting social benefits.",
      hint: "The assembly transcript shows the bill was proposed by an independent member and rejected by 95% of members. The story is fabricated to cause anger.",
      question: "This post claims to represent a consensus compromise. What is your next move?",
      choices: [
        { id: "A", label: "Verify assembly transcripts", text: "Open the legislative assembly's official digital archives to read the salary bill voting transcripts." },
        { id: "B", label: "Share salary leaks", text: "Forward the leaks to warning groups calling for assembly shutdowns." },
        { id: "C", label: "Ignore salary post", text: "Ignore the salary leak blog." },
        { id: "D", label: "Report fake leak", text: "Report the website for sharing fabricated votes to incite public anger against legislative boards." }
      ]
    }
  ]
};

module.exports = content;

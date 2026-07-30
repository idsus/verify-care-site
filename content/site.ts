/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO CHANGE THE SITE.
 *  All copy, numbers, and sources live here, in page order.
 *  Images live in /public/images. Colors and fonts: /app/globals.css + layout.
 *
 *  Page order: opening → story → problem → maps → card → paper → works
 *              → valley → getcare → plan → counting → risks → closing → sources
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  meta: {
    title: "VERIFY Care — Care found. Care reached?",
    description:
      "Help can exist on paper and still never reach the person it was written for. VERIFY Care tests the distance between available and reachable.",
  },

  nav: [
    { label: "The story", href: "#story" },
    { label: "The problem", href: "#problem" },
    { label: "Bad maps", href: "#maps" },
    { label: "The card", href: "#card" },
    { label: "Does it work", href: "#works" },
    { label: "The valley", href: "#valley" },
    { label: "Get help now", href: "#getcare" },
    { label: "The plan", href: "#plan" },
    { label: "Sources", href: "#sources" },
  ],

  phaseBanner:
    "Current phase: research design and national evidence review. Local field research begins next.",

  /* ── Hero ──────────────────────────────────────────────────────────────── */
  opening: {
    kicker: "VERIFY Care · a student healthcare-navigation research project",
    caseline: "Case file № 2026-SCV · healthcare access · opened July 2026",
    titleA: "Care found.",
    titleB: "Care reached?",
    body: "Help can exist on paper — a policy, a program, a listing — and still never reach the person it was written for. That's a national problem. We're testing the fix in one California valley first.",
    cta: "Start with a true story →",
    ctaHref: "#story",
    disclosure:
      "Every number here carries its source. Anything we haven't verified ourselves says so.",
    image: {
      src: "/images/frontdesk.jpg",
      alt: "An empty clinic reception desk, lights on, nobody at the window",
    },
  },

  /* ── 1. The story ──────────────────────────────────────────────────────── */
  story: {
    chapter: "Chapter 01 · The lawsuits",
    kicker: "A true story",
    heading: "Help existed. Nobody told them.",
    big: "14 of 20",
    bigCaption:
      "patients the Mayo Clinic sued for unpaid bills could have had those bills reduced or erased.",
    paras: [
      "In 2022, reporter Molly Castle Work interviewed twenty patients the Mayo Clinic had sued over unpaid medical bills. Fourteen of them qualified for the hospital's own charity care. Their incomes were low enough that the bills could have been forgiven.",
      "Most had no idea it existed. All but one paid anyway — often through wage garnishment.",
    ],
    pull: "The hospital existed. The money existed. Federal law required a policy. They still didn't reach it.",
    source:
      "Molly Castle Work, Rochester Post Bulletin, November 2022 — journalism, one hospital system, 20 interviews.",
  },

  /* ── 2. The problem ────────────────────────────────────────────────────── */
  problem: {
    chapter: "Chapter 02 · The pattern",
    heading: "That's not a Mayo problem. It's an American one.",
    stats: [
      {
        big: "29%",
        text: "of eligible patients ever receive hospital financial assistance. More than half say nobody at the hospital mentioned it.",
        src: "Dollar For, consumer survey, 2024",
      },
      {
        big: "$2.7B",
        text: "in bills sent by nonprofit hospitals to patients who probably qualified for free or discounted care.",
        src: "KFF Health News analysis of hospitals' IRS filings, 2019",
      },
      {
        big: "0.7%",
        text: "of revenue — the most it would cost hospitals, on average, to cover every eligible patient.",
        src: "Dollar For, The Bottom Line, 2025",
      },
    ],
    pull: "That's not a funding problem. That's a nobody-told-them problem.",
    bridge:
      "And it isn't only charity care. The directions Americans are given to reach care are wrong — and they stay wrong.",
    note: "Dollar For is a nonprofit that helps patients apply for assistance; its figures are consumer research, not peer-reviewed. The $2.7B comes from KFF Health News journalists analyzing hospitals' own IRS filings (2017-era data).",
  },

  /* ── 3. Bad maps ───────────────────────────────────────────────────────── */
  maps: {
    chapter: "Chapter 03 · Bad maps",
    heading: "Even the map is wrong.",
    lede: "Secret-shopper studies — researchers calling every listing the way a patient would — keep finding the same thing.",
    wall: [
      {
        big: "65.2%",
        text: "of verified listings had at least one error",
        src: "2,152 listings, PA marketplace, 2025",
      },
      {
        big: "44.8%",
        text: "of listings known to be wrong were still wrong 4–9 months later",
        src: "5,170 listings rechecked, 2024",
      },
      {
        big: "18%",
        text: "of Senate secret-shopper calls ended in an actual appointment",
        src: "U.S. Senate Finance Committee, 2023",
      },
      {
        big: "2×",
        text: "as likely to end up out-of-network after hitting a directory error",
        src: "National survey, Health Affairs 2020",
      },
    ],
    callLog: {
      heading: "One person's afternoon",
      rows: [
        ["01", "Number disconnected"],
        ["02", "Provider no longer practices there"],
        ["03", "Doesn't accept the listed insurance"],
        ["04", "Not accepting new patients"],
        ["05", "No callback"],
        ["06", "Appointment in 33 days"],
      ],
    },
    closing:
      "A bad listing doesn't just waste an afternoon. It lands at the exact moment someone was about to give up.",
    novelty:
      "Insurance directories have been audited at scale. Free clinics and safety-net listings — the ones people with the fewest options depend on — have not. We found no comparable large-scale U.S. audit. That's the gap this project tests.",
  },

  /* ── 4. The card ───────────────────────────────────────────────────────── */
  cardshow: {
    chapter: "Chapter 04 · The card",
    kicker: "So here's what we're building",
    titleA: "Not a directory.",
    titleB: "A card.",
    intro:
      "One page. One pathway. Verified by us, on the phone, with a date on it. Here's the first one, drafted from the state's own hospital-policy database:",
    card: {
      title: "Can't afford a hospital bill?",
      sub: "You may not have to pay all of it — even if you have insurance.",
      rows: [
        {
          k: "Who this is for",
          v: "California patients whose family income is at or below about 4× the federal poverty level. Insured people can qualify too. The policy has no immigration requirement.",
        },
        { k: "What to do", v: "Call the hospital billing office." },
        {
          k: "Say exactly this",
          v: "“I'd like to apply for financial assistance. Please send me the application.”",
        },
        {
          k: "Bring",
          v: "Recent pay stubs · the bill · your insurance card if you have one",
        },
        {
          k: "If they say no",
          v: "Ask about the discounted payment plan — that's a separate program. Apply for both.",
        },
        {
          k: "If nobody calls back in 5 days",
          v: "Call again and ask for a supervisor. Applications get lost.",
        },
      ],
      stamp: "Prototype · policy located (HCAI, eff. July 2026) · phone verification pending",
      stampNote:
        "The finished card gets a green ✓ and a date only after we verify every line by phone — including the exact immigration-status wording. Nothing ships stamped “verified” until it is.",
      caveat:
        "Applying isn't a guarantee. The hospital's current policy decides the amount, and doctor bills can follow a different policy. We never promise free care.",
    },
    contrast: {
      bad: "“Financial assistance may be available to qualifying patients.”",
      badSrc: "— what hospital websites typically say",
      punch:
        "One of those tells you nothing. The other tells you the sentence to say out loud.",
    },
    thatsIt:
      "That's the whole project. Find the help that already exists. Call and confirm it's real. Write down what a person actually does. Put it where they already are. Then find out if it worked.",
    methodLine: ["Identify", "Verify", "Translate", "Deliver", "Confirm"],
  },

  /* ── 5. Why paper ──────────────────────────────────────────────────────── */
  whypaper: {
    chapter: "Chapter 05 · Why paper",
    heading: "Why a card and not an app?",
    stat: "70.4%",
    statText:
      "of hospitalized patients with low health literacy needed help with at least one basic online task — even when they owned smartphones.",
    src: "Vollbrecht et al., 2020 · 502 patients · one hospital, not a population estimate",
    body: "Build an app, and you've invented a new barrier for the exact people you're trying to reach. Paper doesn't need a login. It goes in a wallet. Someone hands it to you at a food bank and says “call this.” A mobile version exists too — but paper leads.",
  },

  /* ── 6. Does it work ───────────────────────────────────────────────────── */
  works: {
    chapter: "Chapter 06 · Proof it can work",
    heading: "But does a better card actually change anything?",
    opener: "This is where we almost killed the project.",
    blocks: [
      {
        title: "A referral alone is close to a coin flip",
        text: "Researchers followed 1,235 people who called 211 — the national resource helpline — in Missouri. A month later, only about half said their problem was resolved. Among people who reached an agency and still got no help, the top reasons were that the agency had run out of money (34%) or the caller didn't actually qualify (25%). The referral was wrong for them from the start.",
        src: "Boyum, Kreuter, McQueen, Thompson & Greer, 2016",
      },
      {
        title: "Until somebody checks",
        text: "Then United Way of Greater Cleveland put 211 navigators into clinics and had them follow up. They reached 38% of referred patients — and among those they reached, 87% had a need resolved or in progress.",
        src: "United Way of Greater Cleveland clinic pilot, 2025 — program report, not a controlled study",
      },
    ],
    punch: "Same directories. Same resources. The difference was somebody checking.",
    rule: "That's why Confirm is a step in our method — not a nice-to-have.",
  },

  /* ── 7. The valley ─────────────────────────────────────────────────────── */
  valley: {
    chapter: "Chapter 07 · The valley",
    heading: "Where we're testing it first.",
    body: "The Santa Clarita Valley, California. Not because it's the worst — because it's bounded and checkable. One hospital. A handful of clinics. A published community health needs assessment we can measure our own findings against.",
    stats: [
      {
        big: "$123,062",
        text: "median household income in Santa Clarita — a comfortable average. Averages hide people. That's true here, and it's true everywhere.",
        src: "U.S. Census ACS 2019–2023",
      },
      {
        big: "24.4%",
        text: "of adult immigrants in the county planning area that includes this valley said they had avoided government benefits out of fear it would hurt their immigration case. Which is exactly why the card addresses immigration status on the front.",
        src: "Henry Mayo CHNA 2022, citing LA County SPA 2 survey data — a wider region than the valley itself",
      },
    ],
    localClaims: {
      heading: "What local listings claim — and what we'll check",
      published: [
        "“Sliding fee available”",
        "“No insurance necessary”",
        "“Financial assistance may be available”",
        "Address, phone, hours",
      ],
      checks: [
        "Does the number work — and can you reach a human?",
        "Who qualifies, with what documents?",
        "How is the fee actually calculated?",
        "Taking new patients? How long a wait?",
        "Is language help available?",
        "What if the first route fails?",
        "When was this last true?",
      ],
    },
    closing: "We start here so we can check our own work. The method is built to move.",
  },

  /* ── 8. Get help now ───────────────────────────────────────────────────── */
  getcare: {
    chapter: "Chapter 08 · Help you can use today",
    heading: "Breaking barriers, starting today.",
    lede: "The pilot will verify local pathways — but people need doors now. These are national starting points, matched to the barrier that's actually in the way. Published information, clearly marked. Phone verification is what our audit adds.",
    playbook: [
      {
        barrier: "“I'm worried about the cost”",
        moves: [
          "Every California hospital must offer charity care or discounted billing — ask billing for the application",
          "Ask any community clinic: “what's your sliding fee at my income?”",
          "Compare cash prices for prescriptions (GoodRx, Cost Plus Drugs)",
          "Apply for Medi-Cal any time of year at BenefitsCal.com",
        ],
        say: "I'd like to apply for financial assistance under your charity care or discount payment policy.",
      },
      {
        barrier: "“I can't miss work or caregiving”",
        moves: [
          "Ask for evening, weekend, or walk-in hours before booking",
          "Try telehealth first — no travel, no waiting room",
          "One call ahead can save a wasted afternoon: ask the real wait time",
        ],
        say: "What are your evening or weekend hours — and do you offer telehealth?",
      },
      {
        barrier: "“I don't have a ride”",
        moves: [
          "Medi-Cal members: free rides to appointments through your health plan — call member services",
          "Santa Clarita Transit routes connect at McBean Regional Transit Center",
          "Telehealth first; ask your pharmacy about delivery",
        ],
        say: "Does my plan cover transportation to medical appointments?",
      },
      {
        barrier: "“I don't know where to go”",
        moves: [
          "findahealthcenter.hrsa.gov — every sliding-scale health center near any ZIP",
          "Call 211 — free, 24/7, multilingual help finding local services",
          "findhelp.org — food, housing, and health programs by ZIP",
        ],
        say: "Are you taking new patients — and what would a first visit cost at my income?",
      },
      {
        barrier: "“I need another language — or someone in my corner”",
        moves: [
          "A qualified interpreter at no cost is your right at federally funded providers",
          "You can bring anyone with you, and ask for costs in writing",
          "You can request a different provider — and you can leave",
        ],
        say: "I need an interpreter in [language], please — at no cost.",
      },
      {
        barrier: "“I don't know if it's serious enough”",
        moves: [
          "Call the free nurse line on the back of your insurance card",
          "988: call or text, free, 24/7, for mental-health crisis",
          "Chest pain, trouble breathing, sudden weakness or confusion: 911, now",
        ],
        say: "These are my symptoms — do I need to be seen today?",
      },
    ],
    directory: [
      { name: "Find a Health Center", what: "Every HRSA sliding-scale clinic, searchable by ZIP", how: "findahealthcenter.hrsa.gov" },
      { name: "211", what: "Free 24/7 helpline for health, food, housing, transport", how: "Call 211 · 211la.org" },
      { name: "Findhelp", what: "Social programs by ZIP — food, bills, care", how: "findhelp.org" },
      { name: "BenefitsCal", what: "Apply for Medi-Cal year-round, online", how: "benefitscal.com" },
      { name: "Free & charitable clinics", what: "National free-clinic finder", how: "nafcclinics.org" },
      { name: "988 Lifeline", what: "Mental-health crisis support, call or text", how: "Dial 988" },
      { name: "Cost Plus Drugs / GoodRx", what: "Cash prices for prescriptions", how: "costplusdrugs.com" },
      { name: "Hospital financial aid", what: "Every CA hospital's policy, published by the state", how: "hcai.ca.gov" },
    ],
    directoryNote:
      "National services, published information — stable, but always confirm by phone. Emergencies: 911.",
  },

  /* ── 9. The plan ───────────────────────────────────────────────────────── */
  plan: {
    chapter: "Chapter 09 · The plan",
    heading: "The research plan",
    lede: "Seven stages. Ethics first, because the later ones depend on it.",
    stages: [
      { title: "Ethics first", text: "School/IRB determination. No personal data, and never immigration status. Verbal consent, and a plan if someone needs help right now." },
      { title: "Listen", text: "Short interviews at libraries, food distributions, laundromats — outside clinics, where people who avoid care actually are. One question: what made it hard?" },
      { title: "Audit", text: "Call and verify 20–30 local low-cost listings from HRSA, 211, Findhelp, county and clinic sites. Date-stamp every fact. Log every contradiction." },
      { title: "Build", text: "Three to five plain-language cards for the biggest barriers we find. Printed and mobile, bilingual." },
      { title: "Test", text: "Can someone find the right step, say it back in their own words, and spot the backup — without logging into anything?" },
      { title: "Track", text: "Contact → appointment → service received → need addressed. Every failed connection gets a recorded reason." },
      { title: "Sustain", text: "Re-check listings at 60–90 days to measure decay, send corrections upstream, hand editable ownership to a community partner." },
    ],
  },

  /* ── 10. What we're counting ───────────────────────────────────────────── */
  counting: {
    chapter: "Chapter 10 · What counts",
    heading: "What we're counting.",
    not: "Not cards handed out. Not website clicks. Those numbers can look great while helping nobody — the 211 study proves it.",
    items: [
      "What percent of local listings were wrong",
      "Whether someone can read the card and tell us the next step back",
      "Whether they made the call",
      "Whether they got the help",
      "How many corrections we send to 211 and Findhelp — and how many get accepted",
    ],
    last: "That last one matters most. If our fixes stick upstream, they outlive us.",
  },

  /* ── 11. What could go wrong ───────────────────────────────────────────── */
  risks: {
    chapter: "Chapter 11 · What could go wrong",
    heading: "What could go wrong.",
    items: [
      { b: "The help might be real but full.", t: "A perfect card can't create an appointment that doesn't exist." },
      { b: "Our verification expires.", t: "Right today, wrong in three months. That's why every card carries a date — and gets re-checked." },
      { b: "People might not answer follow-up.", t: "Then our outcome data has holes, and we say so." },
      { b: "Someone can understand the card and still not act.", t: "Fear, work, rides, and trust don't disappear because the paper got clearer." },
    ],
    note: "None of these kill the project. They tell us what we're allowed to claim.",
    honesty: {
      heading: "Said plainly",
      can: [
        "Barriers are real, national, and overlapping",
        "Directory errors are severe and persistent",
        "A referral can fail long before care happens",
        "Barrier-focused navigation has doubled completion in trials",
      ],
      cannot: [
        "Which barrier is most common here — yet",
        "How accurate local listings are — yet",
        "That our cards work — yet",
        "That any website can repair distrust",
      ],
      note: "A small community sample finds themes, not percentages. A phone audit captures one moment. Navigation evidence comes mostly from cancer screening. That's why this is a research project, not a launch.",
    },
  },

  /* ── 12. Closing ───────────────────────────────────────────────────────── */
  closing: {
    titleA: "Fourteen patients qualified for help",
    titleB: "nobody told them about.",
    failures: [
      "They didn't need a new hospital.",
      "They didn't need a new law.",
      "They needed one page that told them the truth.",
    ],
    body: "That's what we're making. Twenty phone calls. Five cards. One valley to start.",
    finalA: "A referral is not proof of access.",
    finalB: "A completed connection is.",
    image: { src: "/images/road.jpg", alt: "A long road rising toward the horizon at sunrise" },
  },

  /* ── Sources ───────────────────────────────────────────────────────────── */
  sources: {
    heading: "The research behind every number",
    lede: "Each entry lists the finding this site uses and its limitation — because honesty about evidence is part of the method.",
    entries: [
      { cite: "Work, M.C. (2022), Rochester Post Bulletin.", used: "14 of 20 patients sued by Mayo Clinic qualified for charity care; most didn't know; all but one paid anyway.", limit: "Journalism — 20 interviews, one hospital system.", id: "postbulletin.com, Nov 22, 2022" },
      { cite: "Dollar For (2024; 2025). The Path to Charity Care; The Bottom Line.", used: "29% of eligible patients receive assistance · >half told nothing by the hospital · ≤0.7% of revenue to cover all eligible.", limit: "Advocacy nonprofit's consumer survey and analysis — not peer-reviewed.", id: "dollarfor.org" },
      { cite: "Levey, N. (2019), KFF Health News. Analysis of nonprofit-hospital IRS filings.", used: "$2.7B billed to patients who probably qualified for assistance.", limit: "2017-era IRS data; an estimate, not a running annual total.", id: "kffhealthnews.org" },
      { cite: "Haeder & Zhu (2025). PA ACA mental-health networks, secret shopper.", used: "65.2% of 2,152 verified listings had at least one error.", limit: "One state, one market, mental health.", id: "PMID 40966601" },
      { cite: "Haeder & Zhu (2024), Health Affairs Scholar. 5,170 listings rechecked.", used: "44.8% still wrong after 117–280 days; only 11.6% fixed.", limit: "Not safety-net directories.", id: "PMID 38915809" },
      { cite: "Busch & Kyanko (2020), Health Affairs. National survey.", used: "Directory errors doubled out-of-network care (40% vs 20%).", limit: "Self-reported, specialty mental health.", id: "PMID 32479225" },
      { cite: "U.S. Senate Finance Committee (2023). “Ghost networks.”", used: "18% of secret-shopper calls ended in an appointment.", limit: "Small sample, mental-health focus.", id: "Senate report" },
      { cite: "Vollbrecht et al. (2020), JMIR. 502 hospitalized patients.", used: "70.4% of patients with low health literacy needed help with an online task.", limit: "One hospital; not a population estimate.", id: "PMID 32496196" },
      { cite: "Boyum, Kreuter, McQueen, Thompson & Greer (2016), J. Soc. Serv. Res. 1,235 Missouri 211 callers.", used: "~50% of problems resolved at 1 month; agency out of funds (34%), caller ineligible (25%).", limit: "One state, 2010–2012 data.", id: "PMID 28260823" },
      { cite: "United Way of Greater Cleveland (2025). Clinic–211 navigator pilot.", used: "Navigators reached 38% of referred patients; of those, 87% had a need resolved or in progress.", limit: "Program report, not a controlled study.", id: "unitedwaycleveland.org" },
      { cite: "Percac-Lima et al. (2009; 2018), J. Gen. Intern. Med.; Cancer Medicine. RCTs.", used: "Navigation roughly doubled completed screening (27% vs 12%; 31.0% vs 17.3%).", limit: "Cancer-screening settings — transfer is what our pilot tests.", id: "PMID 19067085 · 29464877" },
      { cite: "Ng, Adjaye-Gbewonyo & Dahlhamer (2024), NCHS. NHIS 2022.", used: "12.5% too busy · 10.6% no appointment available.", limit: "Five selected nonfinancial barriers only.", id: "PMID 39387854" },
      { cite: "Henry Mayo Newhall Hospital CHNA (2022); U.S. Census ACS 2019–2023.", used: "24.4% of SPA 2 adult immigrants avoided benefits out of fear · $123,062 SCV median household income.", limit: "SPA 2 is a wider LA County region than the valley itself.", id: "henrymayo.com · census.gov" },
      { cite: "HCAI Hospital Fair Billing database; NEVHC & Samuel Dixon websites.", used: "Henry Mayo policies eff. July 2026 · local published sliding-fee claims.", limit: "Provider claims are starting points, unverified.", id: "hcai.ca.gov" },
    ],
    fine: "VERIFY Care · student research project · July 2026 · This site doesn't provide medical, legal, or benefits advice.",
  },
};

export type Site = typeof site;

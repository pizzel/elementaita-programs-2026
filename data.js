// Data for Sentrim Lake Elementaita Workshops (16 - 20 November 2026)
const PROGRAMS_DATA = {
  meta: {
    venue: "Sentrim Lake Elementaita",
    dates: "16 – 20 November 2026",
    location: "Lake Elementaita, Nakuru County, Kenya",
    hosts: "The Oslo Center (TOC) & Christian Democratic International Centre (KIC)"
  },
  speakers: [
    {
      id: "asha-mwilu",
      name: "Asha Mwilu",
      title: "Consultant & Media Strategist",
      role: "Lead Trainer: Strategic Political Communication",
      bio: "Award-winning journalist, media innovator and communication strategist with extensive experience in public engagement, storytelling, and high-stakes media relations for political leaders."
    },
    {
      id: "barbara-malowa",
      name: "Barbara Malowa",
      title: "Political Governance Consultant",
      role: "Lead Trainer: Political Parties & Nominations",
      bio: "Seasoned political strategist specializing in political party dynamics, internal party democracy, nomination negotiation, and strategic positioning for aspiring leaders."
    },
    {
      id: "george-adulu",
      name: "George Adulu",
      title: "Leadership & Branding Consultant",
      role: "Lead Trainer: Personal Branding & Visibility",
      bio: "Expert advisor on political identity, public image architecture, leadership confidence, and strategic digital/grassroots visibility for elective candidates."
    },
    {
      id: "stephen-maribie",
      name: "Stephen Maribie",
      title: "Campaign Strategist & Management Advisor",
      role: "Lead Trainer: Campaign Planning & Management",
      bio: "Accomplished campaign manager and grassroots mobilization specialist guiding candidates to build structured, issue-based, and winning election operations."
    },
    {
      id: "phoebe-mungai",
      name: "Phoebe Mungai",
      title: "Gender & Electoral Security Specialist",
      role: "Lead Trainer: Preventing Violence Against Women in Politics",
      bio: "Specialist on gender-based political safety, election risk assessment, security protocols, and institutional response to electoral violence targeting women candidates."
    },
    {
      id: "salome-oyugi",
      name: "Salome Oyugi",
      title: "Electoral Law Consultant & Advocate",
      role: "Lead Trainer: Legal & Electoral Frameworks",
      bio: "Legal practitioner and electoral law expert providing actionable guidance on IEBC compliance, candidate eligibility, political finance regulation, and dispute resolution."
    },
    {
      id: "michael-sanya",
      name: "Michael Sanya",
      title: "The Oslo Center (TOC)",
      role: "Session Lead & Evaluator (WYDE Youth)",
      bio: "Senior governance and youth participation expert leading program design, evaluation, and facilitation at The Oslo Center."
    },
    {
      id: "daisy-mukung",
      name: "Daisy Mukung",
      title: "The Oslo Center (TOC)",
      role: "Session Lead & Facilitator (EWIP Kenya)",
      bio: "Program lead spearheading women's political empowerment, democratic accountability, and strategic capacity-building."
    },
    {
      id: "toc-team",
      name: "The Oslo Center Team",
      role: "Host & Facilitation Team",
      bio: "Facilitators and program coordinators ensuring seamless training delivery, climate setting, and daily assessments."
    }
  ],
  programs: {
    wyde: {
      id: "wyde",
      code: "WYDE Youth",
      badge: "WYDE Political Parties",
      title: "Navigating the Ballot: Advanced Political Strategy for Women and Youth",
      cohort: "2026 Cohort Training",
      targetAudience: "Aspiring Women & Young Political Leaders",
      themeColor: "#0284c7",
      bannerImage: "assets/images/wyde-header-banner.png",
      qrImage: "assets/qr/wyde-qr.png",
      qrSvg: "assets/qr/wyde-qr.svg",
      directUrl: "wyde.html",
      leadOrg: "WYDE Political Parties / Led by ENoP / Funded by the European Union",
      hostOrg: "The Oslo Center (TOC) with support from KIC",
      welcomeText: [
        "The Oslo Center (TOC), with support from the Christian Democratic International Centre (KIC), is pleased to welcome you to the inaugural Navigating the Ballot: Advanced Political Strategy for Women and Youth – 2026 Cohort Training.",
        "Implemented under the WYDE Political Parties programme, led by the European Network of Political Foundations (ENoP) and funded by the European Union, this initiative seeks to strengthen the electoral preparedness of aspiring women and young political leaders in Kenya as they prepare to pursue elective leadership.",
        "This three-day training is designed to equip participants with the practical strategic skills, knowledge and confidence required to navigate party structures, negotiate nomination processes, develop sustainable campaign strategies and effectively engage voters. Through interactive sessions and hands-on exercises, we will explore key areas including political power mapping, campaign financing, issue-based leadership, political storytelling, candidate branding and voter mobilization.",
        "Beyond technical training, the programme places strong emphasis on experiential learning, peer exchange and mentorship. Through engagements with experienced politicians, interactive discussions and facilitated fishbowl dialogues, participants will have an opportunity to learn from practical political experiences, reflect on the realities of electoral competition and strengthen their capacity to navigate the opportunities and challenges of political leadership.",
        "Our ambition is to support women and young political aspirants to move beyond political participation towards meaningful opportunities for elected representation, while fostering ethical, inclusive and value-driven leadership that responds to the needs and aspirations of their communities.",
        "Over the next three days, we encourage everyone to actively participate, share experiences, exchange ideas and learn from one another. Let us make this a space for meaningful engagement, practical learning and the development of strategies that will support our collective aspirations for more inclusive political leadership in Kenya.",
        "Welcome to the WYDE movement! Enjoy the training."
      ],
      days: [
        {
          dayNumber: 1,
          date: "2026-11-16",
          dayName: "Monday, 16 November",
          shortLabel: "Day 1 (Mon 16)",
          theme: "Arrival, Registration & Welcome Dinner",
          sessions: [
            {
              time: "12:00pm – 7:00pm",
              startTime: "12:00",
              endTime: "19:00",
              title: "Arrival and check in",
              description: "Delegate arrivals, room allocation, registration, and distribution of training materials at the hotel.",
              responsible: "The Oslo Center, Hotel",
              category: "admin",
              location: "Reception & Sentrim Lake Elementaita"
            },
            {
              time: "7:00pm – 9:30pm",
              startTime: "19:00",
              endTime: "21:30",
              title: "DINNER & NETWORKING",
              description: "Welcome dinner, informal introductions, and cohort networking.",
              responsible: "Hotel / All Participants",
              category: "meal",
              location: "Main Dining Hall"
            }
          ]
        },
        {
          dayNumber: 2,
          date: "2026-11-17",
          dayName: "Tuesday, 17 November",
          shortLabel: "Day 2 (Tue 17)",
          theme: "Media Engagement, Strategic Communication & Party Dynamics",
          sessions: [
            {
              time: "8:30am – 8:50am",
              startTime: "08:30",
              endTime: "08:50",
              title: "Introduction and Opening Remarks",
              description: "Official welcome, programme objectives, and expectations setting for the training cohort.",
              responsible: "Michael Sanya",
              category: "strategic",
              location: "Plenary Hall"
            },
            {
              time: "8:50am – 9:15am",
              startTime: "08:50",
              endTime: "09:15",
              title: "Training Climate setting",
              description: "Establishment of ground rules, safe space principles, and collective learning norms.",
              responsible: "TOC",
              category: "strategic",
              location: "Plenary Hall"
            },
            {
              time: "9:15am – 10:45am",
              startTime: "09:15",
              endTime: "10:45",
              title: "Political Communication, Messaging and Media Engagement",
              subtitle: "Strategic Political Communication, Media Relations and Public Engagement (Part 1)",
              description: "Crafting resonant political narratives, message discipline, media interview preparation, and digital communications strategy.",
              responsible: "Consultant: Asha Mwilu",
              category: "training",
              location: "Plenary Hall"
            },
            {
              time: "10:45am – 11:15am",
              startTime: "10:45",
              endTime: "11:15",
              title: "HEALTH BREAK",
              description: "Morning refreshments, tea, coffee, and informal peer discussions.",
              responsible: "Hotel",
              category: "meal",
              location: "Terrace Lounge"
            },
            {
              time: "11:15am – 1:00pm",
              startTime: "11:15",
              endTime: "13:00",
              title: "Political Communication, Messaging and Media Engagement",
              subtitle: "Strategic Political Communication, Media Relations and Public Engagement (Part 2)",
              description: "Hands-on simulations: on-camera interviews, press release drafting, crisis messaging, and public engagement drills.",
              responsible: "Consultant: Asha Mwilu",
              category: "training",
              location: "Plenary Hall"
            },
            {
              time: "1:00pm – 2:00pm",
              startTime: "13:00",
              endTime: "14:00",
              title: "LUNCH BREAK",
              description: "Networking lunch for participants and trainers.",
              responsible: "Hotel",
              category: "meal",
              location: "Main Dining Hall"
            },
            {
              time: "2:00pm – 4:30pm",
              startTime: "14:00",
              endTime: "16:30",
              title: "Navigating Political Parties and Securing Nominations",
              subtitle: "Political Party Dynamics, Strategic Positioning and Winning Party Nomination",
              description: "Analyzing party power hierarchies, party nomination rules, building internal party alliances, and strategic nomination campaign roadmaps.",
              responsible: "Consultant: Barbara Malowa",
              category: "training",
              location: "Plenary Hall"
            },
            {
              time: "4:30pm – 5:00pm",
              startTime: "16:30",
              endTime: "17:00",
              title: "WAY FORWARD & DAILY ASSESSMENT",
              description: "Daily learning synthesis, participant feedback, key takeaways, and preview of Day 3.",
              responsible: "TOC",
              category: "evaluation",
              location: "Plenary Hall"
            }
          ]
        },
        {
          dayNumber: 3,
          date: "2026-11-18",
          dayName: "Wednesday, 18 November",
          shortLabel: "Day 3 (Wed 18)",
          theme: "Personal Branding, Visibility & Campaign Management",
          sessions: [
            {
              time: "8:30am – 9:00am",
              startTime: "08:30",
              endTime: "09:00",
              title: "Recap of Day 2",
              description: "Participant-led reflections, summary of strategic communication and party positioning lessons.",
              responsible: "Day 2 Secretary",
              category: "strategic",
              location: "Plenary Hall"
            },
            {
              time: "9:00am – 10:30am",
              startTime: "09:00",
              endTime: "10:30",
              title: "Political Leadership, Personal Branding and Visibility",
              subtitle: "Building Political Identity, Leadership Confidence and Strategic Visibility (Part 1)",
              description: "Defining your unique value proposition as a youth/women leader, building authentic personal political brand, and presence.",
              responsible: "Consultant: George Adulu",
              category: "training",
              location: "Plenary Hall"
            },
            {
              time: "10:30am – 11:00am",
              startTime: "10:30",
              endTime: "11:00",
              title: "TEA BREAK",
              description: "Mid-morning tea, coffee, and cohort networking.",
              responsible: "Hotel",
              category: "meal",
              location: "Terrace Lounge"
            },
            {
              time: "11:00am – 1:00pm",
              startTime: "11:00",
              endTime: "13:00",
              title: "Political Leadership, Personal Branding and Visibility",
              subtitle: "Building Political Identity, Leadership Confidence and Strategic Visibility (Part 2)",
              description: "Visibility planning exercises: digital footprint audit, constituent perception management, and public leadership persona development.",
              responsible: "Consultant: George Adulu",
              category: "training",
              location: "Plenary Hall"
            },
            {
              time: "1:00pm – 2:00pm",
              startTime: "13:00",
              endTime: "14:00",
              title: "LUNCH BREAK",
              description: "Buffet lunch and peer mentorship exchange.",
              responsible: "Hotel",
              category: "meal",
              location: "Main Dining Hall"
            },
            {
              time: "2:00pm – 4:30pm",
              startTime: "14:00",
              endTime: "16:30",
              title: "Campaign Strategy, Planning and Management",
              subtitle: "Developing and Managing a Winning, Inclusive and Issue-Based Campaign",
              description: "Constituency mapping, voter targeting, budget planning, campaign team structuring, and volunteer management.",
              responsible: "Stephen Maribie",
              category: "training",
              location: "Plenary Hall"
            },
            {
              time: "4:30pm – 5:00pm",
              startTime: "16:30",
              endTime: "17:00",
              title: "WAY FORWARD & DAILY ASSESSMENT",
              description: "Daily evaluation, feedback collection, and logistical announcements.",
              responsible: "TOC",
              category: "evaluation",
              location: "Plenary Hall"
            }
          ]
        },
        {
          dayNumber: 4,
          date: "2026-11-19",
          dayName: "Thursday, 19 November",
          shortLabel: "Day 4 (Thu 19)",
          theme: "Safety, Violence Prevention, Legal Compliance & Graduation",
          sessions: [
            {
              time: "8:30am – 9:00am",
              startTime: "08:30",
              endTime: "09:00",
              title: "Recap of Day 3",
              description: "Cohort reflections on branding and campaign architecture.",
              responsible: "Day 3 Secretary",
              category: "strategic",
              location: "Plenary Hall"
            },
            {
              time: "9:00am – 10:30am",
              startTime: "09:00",
              endTime: "10:30",
              title: "Preventing and Responding to Violence Against Women in Politics",
              subtitle: "Political Safety, Security and Response to Violence Against Women in Elections (Part 1)",
              description: "Understanding physical, digital, and psychosocial forms of VAW-P/E; early threat warning systems, and personal security planning.",
              responsible: "Phoebe Mungai",
              category: "training",
              location: "Plenary Hall"
            },
            {
              time: "10:30am – 11:00am",
              startTime: "10:30",
              endTime: "11:00",
              title: "TEA BREAK",
              description: "Morning refreshments and recharge.",
              responsible: "Hotel",
              category: "meal",
              location: "Terrace Lounge"
            },
            {
              time: "11:00am – 1:00pm",
              startTime: "11:00",
              endTime: "13:00",
              title: "Preventing and Responding to Violence Against Women in Politics",
              subtitle: "Political Safety, Security and Response to Violence Against Women in Elections (Part 2)",
              description: "Practical response mechanisms: reporting channels, legal recourse, digital defense against cyberbullying, and support networks.",
              responsible: "Phoebe Mungai",
              category: "training",
              location: "Plenary Hall"
            },
            {
              time: "1:00pm – 2:00pm",
              startTime: "13:00",
              endTime: "14:00",
              title: "LUNCH BREAK",
              description: "Networking lunch.",
              responsible: "Hotel",
              category: "meal",
              location: "Main Dining Hall"
            },
            {
              time: "2:00pm – 4:00pm",
              startTime: "14:00",
              endTime: "16:00",
              title: "Legal and Electoral Framework for Aspiring Women Candidates",
              subtitle: "Understanding Electoral Laws, Candidate Eligibility and Compliance Requirements",
              description: "Kenya electoral jurisprudence, IEBC timelines, campaign finance limits, petition processes, and compliance checklists.",
              responsible: "Consultant: Salome Oyugi",
              category: "training",
              location: "Plenary Hall"
            },
            {
              time: "4:00pm – 4:30pm",
              startTime: "16:00",
              endTime: "16:30",
              title: "Reflections, Training Evaluation and Analysis",
              description: "Comprehensive cohort evaluation, assessment of learning outcomes, and impact survey.",
              responsible: "Michael Sanya",
              category: "evaluation",
              location: "Plenary Hall"
            },
            {
              time: "4:30pm – 5:00pm",
              startTime: "16:30",
              endTime: "17:00",
              title: "WAY FORWARD & CLOSING REMARKS",
              description: "Closing addresses, next steps under WYDE Political Parties programme, and presentation of certificates.",
              responsible: "TOC",
              category: "strategic",
              location: "Plenary Hall"
            }
          ]
        },
        {
          dayNumber: 5,
          date: "2026-11-20",
          dayName: "Friday, 20 November",
          shortLabel: "Day 5 (Fri 20)",
          theme: "Breakfast & Official Departure",
          sessions: [
            {
              time: "6:30am – 10:00am",
              startTime: "06:30",
              endTime: "10:00",
              title: "BREAKFAST AND DEPARTURE",
              description: "Farewell breakfast, hotel check-out, and departure from Sentrim Lake Elementaita.",
              responsible: "Hotel / All participants",
              category: "admin",
              location: "Main Dining Hall & Reception"
            }
          ]
        }
      ]
    },
    ewip: {
      id: "ewip",
      code: "EWIP Kenya",
      badge: "Empowering Women in Politics",
      title: "Empowering Women in Politics: Kenya (EWIP)",
      cohort: "Inaugural EWIP 2026 Cohort Training",
      targetAudience: "Elected Women & Aspiring Political Leaders",
      themeColor: "#c2410c",
      logoImage: "assets/images/ewip-logo.png",
      kicLogoImage: "assets/images/kic-logo.png",
      qrImage: "assets/qr/ewip-qr.png",
      qrSvg: "assets/qr/ewip-qr.svg",
      directUrl: "ewip.html",
      leadOrg: "Empowering Women in Politics (EWIP) Kenya",
      hostOrg: "The Oslo Center (TOC) with support from KIC",
      welcomeText: [
        "The Oslo Center (TOC), with support from the Christian Democratic International Centre (KIC), is pleased to host you for the inaugural EWIP 2026 Cohort training. This training is specifically designed for elected women and aspiring political leaders to enhance their skills and fulfil their ambitions for transformative leadership.",
        "Our aim is to equip participants with the strategic skills, knowledge, and confidence necessary to conduct competitive, value-driven campaigns. By engaging in knowledge sharing, interactive sessions, and hands-on exercises, this program aims to establish a solid foundation for women leaders who aspire not only to hold office but also to reshape their communities, challenge inequality, and inspire the next generation of women in politics.",
        "This training will take three days. Let us all contribute, learn from each other, and share our experiences.",
        "Welcome to the EWIP movement! Enjoy the training."
      ],
      days: [
        {
          dayNumber: 1,
          date: "2026-11-16",
          dayName: "Monday, 16 November",
          shortLabel: "Day 1 (Mon 16)",
          theme: "Arrival, Registration & Welcome Dinner",
          sessions: [
            {
              time: "12:00pm – 7:00pm",
              startTime: "12:00",
              endTime: "19:00",
              title: "Arrival and check in",
              description: "Arrival of delegates, room check-in, distribution of training kits, and welcome registration.",
              responsible: "The Oslo Center, Hotel",
              category: "admin",
              location: "Reception & Sentrim Lake Elementaita"
            },
            {
              time: "7:00pm – 9:30pm",
              startTime: "19:00",
              endTime: "21:30",
              title: "DINNER & NETWORKING",
              description: "Cohort welcome dinner and introductory fellowship.",
              responsible: "Hotel / All participants",
              category: "meal",
              location: "Main Dining Hall"
            }
          ]
        },
        {
          dayNumber: 2,
          date: "2026-11-17",
          dayName: "Tuesday, 17 November",
          shortLabel: "Day 2 (Tue 17)",
          theme: "Personal Branding, Political Identity & Party Dynamics",
          sessions: [
            {
              time: "8:30am – 8:50am",
              startTime: "08:30",
              endTime: "08:50",
              title: "Introduction and Opening Remarks",
              description: "Welcome address, setting cohort aspirations, and introduction of facilitators.",
              responsible: "Daisy Mukung",
              category: "strategic",
              location: "Executive Hall"
            },
            {
              time: "8:50am – 9:15am",
              startTime: "08:50",
              endTime: "09:15",
              title: "Training Climate setting",
              description: "Building cohort camaraderie, ground rules, confidentiality, and shared objectives.",
              responsible: "TOC",
              category: "strategic",
              location: "Executive Hall"
            },
            {
              time: "9:15am – 10:45am",
              startTime: "09:15",
              endTime: "10:45",
              title: "Political Leadership, Personal Branding and Visibility",
              subtitle: "Building Political Identity, Leadership Confidence and Strategic Visibility (Part 1)",
              description: "Carving out distinct political identity, leadership presence, projecting authority and authenticity as an elected/aspiring woman leader.",
              responsible: "Consultant: George Adulu",
              category: "training",
              location: "Executive Hall"
            },
            {
              time: "10:45am – 11:15am",
              startTime: "10:45",
              endTime: "11:15",
              title: "HEALTH BREAK",
              description: "Morning health break and informal networking.",
              responsible: "Hotel",
              category: "meal",
              location: "Lakeview Terrace"
            },
            {
              time: "11:15am – 1:00pm",
              startTime: "11:15",
              endTime: "13:00",
              title: "Political Leadership, Personal Branding and Visibility",
              subtitle: "Building Political Identity, Leadership Confidence and Strategic Visibility (Part 2)",
              description: "Strategic communication of accomplishments, navigating gender bias in public perceptions, and personal branding clinics.",
              responsible: "Consultant: George Adulu",
              category: "training",
              location: "Executive Hall"
            },
            {
              time: "1:00pm – 2:00pm",
              startTime: "13:00",
              endTime: "14:00",
              title: "LUNCH BREAK",
              description: "Lunch and informal peer discussions.",
              responsible: "Hotel",
              category: "meal",
              location: "Main Dining Hall"
            },
            {
              time: "2:00pm – 4:30pm",
              startTime: "14:00",
              endTime: "16:30",
              title: "Navigating Political Parties and Securing Nominations",
              subtitle: "Political Party Dynamics, Strategic Positioning and Winning Party Nomination",
              description: "Overcoming institutional barriers within political parties, negotiation tactics for ticket securing, party organ representation, and grassroots delegate engagement.",
              responsible: "Consultant: Barbara Malowa",
              category: "training",
              location: "Executive Hall"
            },
            {
              time: "4:30pm – 5:00pm",
              startTime: "16:30",
              endTime: "17:00",
              title: "WAY FORWARD & DAILY ASSESSMENT",
              description: "Review of Day 2 key learnings and daily evaluation survey.",
              responsible: "TOC",
              category: "evaluation",
              location: "Executive Hall"
            }
          ]
        },
        {
          dayNumber: 3,
          date: "2026-11-18",
          dayName: "Wednesday, 18 November",
          shortLabel: "Day 3 (Wed 18)",
          theme: "Media Engagement, Communication & Electoral Safety",
          sessions: [
            {
              time: "8:30am – 9:00am",
              startTime: "08:30",
              endTime: "09:00",
              title: "Recap of Day 2",
              description: "Reflection on personal branding and party nomination strategies.",
              responsible: "Day 2 Secretary",
              category: "strategic",
              location: "Executive Hall"
            },
            {
              time: "9:00am – 10:30am",
              startTime: "09:00",
              endTime: "10:30",
              title: "Political Communication, Messaging and Media Engagement",
              subtitle: "Strategic Political Communication, Media Relations and Public Engagement (Part 1)",
              description: "Public speaking mastery, message framing, television/radio interview techniques, and dealing with hostile press.",
              responsible: "Consultant: Asha Mwilu",
              category: "training",
              location: "Executive Hall"
            },
            {
              time: "10:30am – 11:00am",
              startTime: "10:30",
              endTime: "11:00",
              title: "TEA BREAK",
              description: "Tea, coffee, and cohort fellowship.",
              responsible: "Hotel",
              category: "meal",
              location: "Lakeview Terrace"
            },
            {
              time: "11:00am – 1:00pm",
              startTime: "11:00",
              endTime: "13:00",
              title: "Political Communication, Messaging and Media Engagement",
              subtitle: "Strategic Political Communication, Media Relations and Public Engagement (Part 2)",
              description: "Practical soundbite drills, social media strategy for women politicians, combating online trolling, and live simulations.",
              responsible: "Consultant: Asha Mwilu",
              category: "training",
              location: "Executive Hall"
            },
            {
              time: "1:00pm – 2:00pm",
              startTime: "13:00",
              endTime: "14:00",
              title: "LUNCH BREAK",
              description: "Buffet lunch.",
              responsible: "Hotel",
              category: "meal",
              location: "Main Dining Hall"
            },
            {
              time: "2:00pm – 4:30pm",
              startTime: "14:00",
              endTime: "16:30",
              title: "Preventing and Responding to Violence Against Women in Politics",
              subtitle: "Political Safety, Security and Response to Violence Against Women in Elections",
              description: "Identifying indicators of violence against women in politics (VAW-P), physical security contingency planning, digital privacy defenses, and rapid legal/community support mechanisms.",
              responsible: "Phoebe Mungai",
              category: "training",
              location: "Executive Hall"
            },
            {
              time: "4:30pm – 5:00pm",
              startTime: "16:30",
              endTime: "17:00",
              title: "WAY FORWARD & DAILY ASSESSMENT",
              description: "Synthesis of Day 3, safety action points, and daily evaluation.",
              responsible: "TOC",
              category: "evaluation",
              location: "Executive Hall"
            }
          ]
        },
        {
          dayNumber: 4,
          date: "2026-11-19",
          dayName: "Thursday, 19 November",
          shortLabel: "Day 4 (Thu 19)",
          theme: "Legal Compliance, Campaign Management & Graduation",
          sessions: [
            {
              time: "8:30am – 9:00am",
              startTime: "08:30",
              endTime: "09:00",
              title: "Recap of Day 3",
              description: "Cohort reflections on communication and security management.",
              responsible: "Day 3 Secretary",
              category: "strategic",
              location: "Executive Hall"
            },
            {
              time: "9:00am – 10:30am",
              startTime: "09:00",
              endTime: "10:30",
              title: "Legal and Electoral Framework for Aspiring Women Candidates",
              subtitle: "Understanding Electoral Laws, Candidate Eligibility and Compliance Requirements (Part 1)",
              description: "Navigating Kenyan statutory requirements, IEBC candidate qualification checklists, public officer resignation rules, and code of conduct.",
              responsible: "Consultant: Salome Oyugi",
              category: "training",
              location: "Executive Hall"
            },
            {
              time: "10:30am – 11:00am",
              startTime: "10:30",
              endTime: "11:00",
              title: "TEA BREAK",
              description: "Mid-morning refreshment break.",
              responsible: "Hotel",
              category: "meal",
              location: "Lakeview Terrace"
            },
            {
              time: "11:00am – 1:00pm",
              startTime: "11:00",
              endTime: "13:00",
              title: "Legal and Electoral Framework for Aspiring Women Candidates",
              subtitle: "Understanding Electoral Laws, Candidate Eligibility and Compliance Requirements (Part 2)",
              description: "Electoral dispute resolution mechanisms (PPDT, IEBC Committee, High Court), ballot protection, and agent deployment legal standards.",
              responsible: "Consultant: Salome Oyugi",
              category: "training",
              location: "Executive Hall"
            },
            {
              time: "1:00pm – 2:00pm",
              startTime: "13:00",
              endTime: "14:00",
              title: "LUNCH BREAK",
              description: "Fellowship lunch.",
              responsible: "Hotel",
              category: "meal",
              location: "Main Dining Hall"
            },
            {
              time: "2:00pm – 4:00pm",
              startTime: "14:00",
              endTime: "16:00",
              title: "Campaign Strategy, Planning and Management",
              subtitle: "Developing and Managing a Winning, Inclusive and Issue-Based Campaign",
              description: "Building an effective campaign team, fundraising and compliance, voter outreach roadmaps, and running competitive women-led campaigns.",
              responsible: "Stephen Maribie",
              category: "training",
              location: "Executive Hall"
            },
            {
              time: "4:00pm – 4:30pm",
              startTime: "16:00",
              endTime: "16:30",
              title: "Reflections, Training Evaluation and Analysis",
              description: "Evaluation of cohort achievements, confidence metrics, and training feedback.",
              responsible: "Stephen Maribie",
              category: "evaluation",
              location: "Executive Hall"
            },
            {
              time: "4:30pm – 5:00pm",
              startTime: "16:30",
              endTime: "17:00",
              title: "WAY FORWARD & CLOSING REMARKS",
              description: "Closing affirmations, EWIP movement network roadmap, certificate awarding ceremony.",
              responsible: "TOC",
              category: "strategic",
              location: "Executive Hall"
            }
          ]
        },
        {
          dayNumber: 5,
          date: "2026-11-20",
          dayName: "Friday, 20 November",
          shortLabel: "Day 5 (Fri 20)",
          theme: "Breakfast & Official Departure",
          sessions: [
            {
              time: "6:30am – 10:00am",
              startTime: "06:30",
              endTime: "10:00",
              title: "BREAKFAST AND DEPARTURE",
              description: "Final cohort breakfast, hotel check-out, and safe departures.",
              responsible: "Hotel / All participants",
              category: "admin",
              location: "Main Dining Hall & Reception"
            }
          ]
        }
      ]
    }
  }
};

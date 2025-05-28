"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "is"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "header.logo": "Healthiphi",

    // Hero Section
    "hero.title": "Add ten healthy years to Iceland—and to ",
    "hero.subtitle":
      "Whether you heal people or want to be first in line for next-gen care, your pledge moves the needle—on launch day and on national health-span.",
      "hero.cta": "your life's work.",
    "hero.joinTeam": "I want to join the team",
    "hero.backLaunch": "I want to back the launch",
    "hero.podcastTitle": "Just want the story? Hit play below.",
    "hero.podcastDescription": "3-minute podcast clip with CEO Pétur Haraldsson",

    // Problem Section
    "problem.title": "Why Iceland Needs a Fast-Moving Health Layer",
    "problem.subtitle":
      "Iceland's ambulances reach you in minutes; new science reaches the system in 8 – 12 years. While committees debate, lives shrink.",
    "problem.solution": "Healthiphi closes that gap.",
    "problem.ai.title": "AI-amplified coaching",
    "problem.ai.description": "Turn heart-rate blips into same-day guidance",
    "problem.ai.stats": "73% of early warning signs caught before symptoms appear",
    "problem.federated.title": "Federated learning",
    "problem.federated.description": "Upgrades medical algorithms every week, never exporting raw data",
    "problem.federated.stats": "11x faster implementation of new medical research",
    "problem.safeguards.title": "EU-AI-Act safeguards",
    "problem.safeguards.description": "Every action is wrapped in GDPR protection—so trust travels as fast as tech",
    "problem.safeguards.stats": "100% compliance with the strictest privacy regulations in the world",

    // Founder Pass Section
    "founder.title": "Become a Healthiphi Founder",
    "founder.subtitle":
      "Reserve the seats that match your ambition—one for yourself or twenty for the tribe you care about. Every seat you pledge moves the Progress Dial, funds the clinical launch, and locks in Founders-only benefits.",
    "founder.pickSeats": "1. Pick Your Seat Count",
    "founder.seats": "Seats",
    "founder.totalMonthly": "Total monthly:",
    "founder.vatIncluded": "VAT included · price locked for life · cancel anytime before activation",
    "founder.whoFits": "Who This Fits:",
    "founder.solo": "Your personal gateway to precision care",
    "founder.family": "Partners, best friends, small families",
    "founder.team": "Wellness champions, small teams, micro-influencers",
    "founder.community": "Company perks, sports clubs, community leaders",
    "founder.rewards": "2. Founder-Only Rewards",
    "founder.badge": "Founder badge · 15% lifetime discount",
    "founder.webinar": "Private onboarding webinar for your group",
    "founder.blueLagoon": "Invite to our Blue Lagoon Longevity Day",
    "founder.engraved": "Name engraved on our launch wall & future clinic app",
    "founder.zeroRisk": "3. Zero-Risk Crowd-Launch",
    "founder.cardVaulted": "Card vaulted now, never charged until the dial hits 400 pledged seats.",
    "founder.sevenDay": "You'll receive a 7-day email notice to review or cancel.",
    "founder.failSafe": "If we fail to reach the goal, your payment method is deleted automatically.",
    "founder.reserveSeats": "Reserve My Seats",

    // Talent Section
    "talent.title": "Calling Iceland's Brightest Health Professionals",
    "talent.subtitle": "Work that multiplies your impact—not your admin.",
    "talent.purpose.title": "Purpose over shifts",
    "talent.purpose.description": "Your dashboard shows urgent-care visits avoided, not call quotas.",
    "talent.ai.title": "AI rescues minutes",
    "talent.ai.description": "John Snow Labs drafts notes; you add empathy.",
    "talent.outcome.title": "Outcome boosters",
    "talent.outcome.description": "Automatic pay bumps when your panel's PHI stays high.",
    "talent.panel.title": "Pick-Your-Panel™",
    "talent.panel.description": "Define your ideal caseload and hours; the platform fills the rest.",
    "talent.apply": "Apply in 10 minutes",

    // Progress Band
    "progress.title": "Progress Dial:",
    "progress.ignition": "Ignition Ready",
    "progress.warming": "Warming Up",
    "progress.forming": "Core Crew Forming",
    "progress.imminent": "Launch Imminent",
    "progress.referral":
      "Share your unique link after checkout—every successful referral credits one free month to both you and your friend.",
    "progress.momentum": "More seats, more momentum, more healthy years for Iceland. How many will you spark?",

    // Testimonials
    "testimonials.title": "Proof in Human Stories",
    "testimonials.elin": "It's like having a Formula One pit crew for my body.",
    "testimonials.maria": "Admin load vanished. I spend my day changing habits, not charts.",
    "testimonials.jon": "The platform caught my pre-diabetic markers before my annual checkup would have.",
    "testimonials.kristin": "I can finally practice medicine the way I was trained to—preventatively.",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.why400.question": "Why 400 pledges?",
    "faq.why400.answer": "That covers core staffing & labs so we launch full-featured on day one.",
    "faq.charged.question": "When will I be charged?",
    "faq.charged.answer":
      "After the dial hits 100%, you'll receive a 7-day confirmation email before the first payment.",
    "faq.data.question": "Do you store my health data now?",
    "faq.data.answer":
      "No—only your email and vaulted card. Health data flows after activation and with your explicit consent.",
    "faq.different.question": "How is this different from my fitness tracker?",
    "faq.different.answer":
      "We combine multiple data streams with clinical expertise to provide personalized health guidance, not just activity tracking.",
    "faq.cancel.question": "Can I cancel my pledge?",
    "faq.cancel.answer":
      "Yes, you can cancel anytime before activation. After the service launches, you can cancel your subscription at any time.",
    "faq.qualifications.question": "What qualifications do your health professionals have?",
    "faq.qualifications.answer":
      "Our team includes licensed physicians, nurses, physiotherapists, and certified health coaches, all with specialized training in preventative care.",

    // Manifesto
    "manifesto.title": "Our Manifesto",
    "manifesto.health": "We believe health is a lifelong asset, not a reactive emergency.",
    "manifesto.ai": "We believe AI should amplify humans, never replace them.",
    "manifesto.data": "We believe the safest data is the data you control.",
    "manifesto.iceland": "We believe Iceland can prove the world's next health model—and export it everywhere.",
    "manifesto.join": "Join us.",
    "manifesto.backLaunch": "Back the Launch",
    "manifesto.joinTeam": "Join the Team",

    // Footer
    "footer.tagline": "One score. One coach. One Iceland—thriving.",
    "footer.links": "Links",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.about": "About Us",
    "footer.contact": "Contact",
    "footer.copyright": "All rights reserved.",

    // Application Form
    "apply.title": "Join the Healthiphi Team",
    "apply.subtitle": "Apply to be part of Iceland's health revolution.",
    "apply.timePromise": "It takes just 10 minutes.",
    "apply.noCv": "No CV required — just five quick questions.",
    "apply.backToHealthiphi": "Back to Healthiphi",
    "apply.saveExit": "Apply later? Save & exit",
    "apply.formTitle": "Application Form",
    "apply.fullName": "Full Name",
    "apply.email": "Email",
    "apply.profession": "Profession",
    "apply.professionHelper": "e.g., Physician, Nurse, Health Coach",
    "apply.experience": "Years of Experience",
    "apply.motivation": "Why do you want to join Healthiphi?",
    "apply.motivationPlaceholder": "Tell us what motivates you to be part of Iceland's health revolution...",
    "apply.minChars": "Minimum 50 characters",
    "apply.submit": "Submit Application",
    "apply.submitting": "Submitting Application...",
    "apply.timeLeft": "min left",
    "apply.secLeft": "sec left",

    // Success Page
    "success.title": "Application Submitted!",
    "success.thanks": "Thanks for applying to join the Healthiphi team!",
    "success.review": "We'll review your application and send next steps within 48 hours.",
    "success.inbox": "Keep an eye on your inbox (and spam folder) for updates from our team.",
    "success.whatNext": "What happens next?",
    "success.step1": "Our team reviews your application (24-48 hours)",
    "success.step2": "If selected, we'll schedule a brief video call",
    "success.step3": "Welcome to the team and onboarding begins!",
    "success.backHome": "Back to Homepage",
    "success.share": "Share with Friends",

    // Language Names
    "language.english": "English",
    "language.icelandic": "Íslenska",

    // About Page
    "about.title": "About Healthiphi",
    "about.subtitle": "We're building the future of preventative healthcare, starting with Iceland.",

    // Mission
    "about.mission.title": "Our Mission",
    "about.mission.description1":
      "Healthiphi exists to close the gap between cutting-edge health science and everyday care. While medical research advances rapidly, it takes 8-12 years for new discoveries to reach patients through traditional healthcare systems.",
    "about.mission.description2":
      "We're building a fast-moving health layer that brings the latest in AI-powered coaching, federated learning, and personalized medicine directly to Icelanders—with full privacy protection and regulatory compliance.",

    // Vision & Values
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "A world where every person has access to personalized, preventative healthcare that adapts in real-time to their unique needs and circumstances.",
    "about.values.title": "Our Values",
    "about.values.prevention": "Prevention over treatment",
    "about.values.privacy": "Privacy by design",
    "about.values.innovation": "Responsible innovation",
    "about.values.accessibility": "Healthcare for everyone",

    // Team
    "about.team.title": "Meet the Team",
    "about.team.petur.name": "Pétur Haraldsson",
    "about.team.petur.role": "CEO & Founder",
    "about.team.petur.bio":
      "Former healthcare technology executive with 15 years of experience building scalable health platforms.",
    "about.team.maria.name": "María Kristjánsdóttir",
    "about.team.maria.role": "Chief Medical Officer",
    "about.team.maria.bio":
      "Licensed physician and researcher specializing in preventative medicine and digital health interventions.",
    "about.team.jon.name": "Jón Sigurðsson",
    "about.team.jon.role": "Chief Technology Officer",
    "about.team.jon.bio":
      "AI and machine learning expert with deep experience in healthcare data privacy and federated learning systems.",

    // Iceland Focus
    "about.iceland.title": "Why Iceland?",
    "about.iceland.description1":
      "Iceland's unique combination of advanced healthcare infrastructure, tech-savvy population, and strong privacy regulations makes it the perfect testing ground for next-generation health technology.",
    "about.iceland.description2":
      "With a population of 380,000, we can create meaningful impact while maintaining the personal touch that makes healthcare truly effective.",
    "about.iceland.population": "380,000 people",
    "about.iceland.advantage": "Perfect scale for innovation",

    // Contact
    "about.contact.title": "Get in Touch",
    "about.contact.description": "Have questions about our mission or want to learn more about joining our team?",
    "about.contact.email": "Contact Us",
    "about.contact.careers": "Join Our Team",

    // About Page - New Content
    "about.purpose.title": "Our Purpose",
    "about.purpose.description":
      "We exist to add ten healthy years to every life we touch by turning the best of medical science into practical, everyday guidance—fast.",

    "about.why.title": "Why We're Building Healthiphi",
    "about.why.description":
      "Most health systems react once disease has already arrived. In Iceland that reaction is world-class; ambulances reach you in minutes. Yet new science still takes up to a decade to reach everyday care. Healthiphi was born to close that gap—pairing human empathy with real-time data so people act on tomorrow's evidence today.",

    "about.how.title": "How Healthiphi Works",
    "about.how.table.deliver": "What we deliver",
    "about.how.table.helps": "How it helps you",
    "about.how.phi.title": "PHI Scan",
    "about.how.phi.description": "a living Personal Health Index that fuses questionnaires, wearables and lab data",
    "about.how.phi.benefit": "Understand exactly where you stand and what matters next",
    "about.how.coaching.title": "AI-assisted Coaching & Telehealth",
    "about.how.coaching.description": "clinicians, coaches and specialists on one secure platform",
    "about.how.coaching.benefit": "Get personalised guidance and prescriptions without waiting rooms",
    "about.how.marketplace.title": "Curated Marketplace",
    "about.how.marketplace.description": "evidence-backed products and services mapped to your PHI gaps",
    "about.how.marketplace.benefit": "Act immediately with tools proven to move your score",
    "about.how.platform":
      "All services are delivered through a single cloud platform designed for privacy, speed and scale.",

    "about.strategy.title": "Our Go-to-Market Strategy",
    "about.strategy.subtitle": "Territory-Licensed, DTC-Backed Platform",
    "about.strategy.hq.title": "Healthiphi HQ",
    "about.strategy.hq.description": "owns the brand, technology stack and global standards.",
    "about.strategy.operators.title": "Licensed Territory Operators",
    "about.strategy.operators.description":
      "mission-driven entrepreneurs who localise pricing, recruit local professionals and ensure regulatory compliance.",
    "about.strategy.dtc.title": "Direct-to-Consumer Funnel",
    "about.strategy.dtc.description":
      'a universal "Add 10 Healthy Years" campaign drives traffic to region-specific landing pages where consumers secure an early-access Founder Pass.',
    "about.strategy.telehealth.title": "Scalable Telehealth Backbone",
    "about.strategy.telehealth.description":
      "the core clinical team and AI services sit centrally, giving every territory instant access to coaching, diagnostics and specialist consults.",
    "about.strategy.conclusion":
      "This model lets us launch fast in one region, then replicate quickly—all while keeping data residency, language and cultural nuance exactly where they belong: local.",

    "about.apart.title": "What Sets Us Apart",
    "about.apart.prevention.title": "Prevention Before Reaction",
    "about.apart.prevention.description": "we target root causes years before they become emergencies.",
    "about.apart.humans.title": "Humans × AI",
    "about.apart.humans.description": "technology clears the admin; clinicians bring the empathy.",
    "about.apart.evidence.title": "Evidence-Only Promise",
    "about.apart.evidence.description": "every recommendation meets a rigorous clinical bar.",
    "about.apart.data.title": "Your Data, Your Rules",
    "about.apart.data.description": "GDPR-first architecture, region-bound storage and user-controlled sharing.",

    "about.leadership.title": "Leadership",
    "about.leadership.petur.name": "Pétur Albert Haraldsson — Founder & CEO",
    "about.leadership.petur.description":
      "Serial health innovator dedicated to marrying clinical excellence with consumer-grade experience.",
    "about.leadership.team": "(Full founding team to be announced at launch.)",

    "about.invitation.title": "Invitation",
    "about.invitation.description":
      "Healthiphi is currently in stealth, assembling its first regional operators, clinicians and early members. If you'd like to:",
    "about.invitation.territory.title": "Found a Territory-License",
    "about.invitation.territory.description": "and lead Healthiphi in your region",
    "about.invitation.clinical.title": "Join the Clinical Core",
    "about.invitation.clinical.description": "as a coach, nurse or physician",
    "about.invitation.founder.title": "Secure a Founder Pass",
    "about.invitation.founder.description": "for early access and lifetime perks",
    "about.invitation.conclusion":
      "—reach out below. Together we'll prove that extra healthy years are not only possible, but scalable.",
    "about.invitation.contact.title": "Contact:",
    "about.invitation.location": "Healthiphi · Reykjavík, Iceland",

    // Privacy Page
    "privacy.title": "Privacy Policy",
    "privacy.subtitle": "How we collect, use, and protect your personal information.",
    "privacy.lastUpdated": "Last updated: January 2025",

    // Introduction
    "privacy.intro.title": "Introduction",
    "privacy.intro.description1":
      "Healthiphi ehf. ('we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.",
    "privacy.intro.description2":
      "Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.",

    // Information We Collect
    "privacy.collect.title": "Information We Collect",
    "privacy.collect.personal.title": "Personal Information",
    "privacy.collect.personal.item1": "Name and contact information (email address, phone number)",
    "privacy.collect.personal.item2": "Professional information (job title, years of experience)",
    "privacy.collect.personal.item3": "Payment information (processed securely through Stripe)",
    "privacy.collect.personal.item4": "Communication preferences and consent records",
    "privacy.collect.usage.title": "Usage Information",
    "privacy.collect.usage.item1": "Website usage data and analytics",
    "privacy.collect.usage.item2": "Device information and IP addresses",
    "privacy.collect.usage.item3": "Cookies and similar tracking technologies",

    // How We Use Information
    "privacy.use.title": "How We Use Your Information",
    "privacy.use.item1": "To provide and maintain our services",
    "privacy.use.item2": "To process applications and pledges",
    "privacy.use.item3": "To communicate with you about our services",
    "privacy.use.item4": "To improve our website and user experience",
    "privacy.use.item5": "To comply with legal obligations",

    // Information Sharing
    "privacy.sharing.title": "Information Sharing and Disclosure",
    "privacy.sharing.description":
      "We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:",
    "privacy.sharing.item1": "With service providers who assist in our operations (e.g., Stripe for payments)",
    "privacy.sharing.item2": "When required by law or to protect our rights",
    "privacy.sharing.item3": "In connection with a business transfer or acquisition",
    "privacy.sharing.item4": "With your explicit consent",

    // Data Security
    "privacy.security.title": "Data Security",
    "privacy.security.description":
      "We implement appropriate technical and organizational measures to protect your personal information:",
    "privacy.security.item1": "Encryption of data in transit and at rest",
    "privacy.security.item2": "Regular security assessments and updates",
    "privacy.security.item3": "Limited access to personal information on a need-to-know basis",

    // Your Rights
    "privacy.rights.title": "Your Rights (GDPR)",
    "privacy.rights.description": "Under the General Data Protection Regulation (GDPR), you have the following rights:",
    "privacy.rights.item1": "Right to access your personal information",
    "privacy.rights.item2": "Right to rectify inaccurate information",
    "privacy.rights.item3": "Right to erase your personal information",
    "privacy.rights.item4": "Right to restrict processing",
    "privacy.rights.item5": "Right to data portability",

    // Cookies
    "privacy.cookies.title": "Cookies and Tracking",
    "privacy.cookies.description":
      "We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.",

    // Contact
    "privacy.contact.title": "Contact Us",
    "privacy.contact.description":
      "If you have any questions about this Privacy Policy or our data practices, please contact us:",

    // Terms Page
    "terms.title": "Terms of Service",
    "terms.subtitle": "Legal terms and conditions for using Healthiphi services.",
    "terms.lastUpdated": "Last updated: January 2025",

    // Introduction
    "terms.intro.title": "Introduction",
    "terms.intro.description1":
      "These Terms of Service ('Terms') govern your use of the Healthiphi website and services operated by Healthiphi ehf. ('we', 'our', or 'us').",
    "terms.intro.description2":
      "By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the service.",

    // Acceptance
    "terms.acceptance.title": "Acceptance of Terms",
    "terms.acceptance.description":
      "By creating an account, making a pledge, or using any part of our service, you acknowledge that you have read, understood, and agree to be bound by these Terms.",

    // Services
    "terms.services.title": "Description of Services",
    "terms.services.description": "Healthiphi provides a platform for:",
    "terms.services.item1": "Collecting pledges for our healthcare service launch",
    "terms.services.item2": "Processing applications from healthcare professionals",
    "terms.services.item3": "Providing information about our upcoming health platform",
    "terms.services.item4": "Managing founder pass subscriptions and benefits",

    // User Obligations
    "terms.obligations.title": "User Obligations",
    "terms.obligations.description": "By using our services, you agree to:",
    "terms.obligations.item1": "Provide accurate and truthful information",
    "terms.obligations.item2": "Maintain the security of your account credentials",
    "terms.obligations.item3": "Use the service only for lawful purposes",
    "terms.obligations.item4": "Respect the intellectual property rights of others",

    // Payment Terms
    "terms.payment.title": "Payment Terms",
    "terms.payment.pledge.title": "Pledge System",
    "terms.payment.pledge.description":
      "Your payment method will be securely stored but not charged until we reach our goal of 400 pledged seats. You will receive 7 days notice before any charges.",
    "terms.payment.billing.title": "Billing",
    "terms.payment.billing.description":
      "Once activated, subscriptions are billed monthly in advance. All fees are non-refundable except as required by law.",
    "terms.payment.refunds.title": "Refunds",
    "terms.payment.refunds.description":
      "If we fail to reach our launch goal, all payment methods will be automatically deleted and no charges will occur.",

    // Intellectual Property
    "terms.ip.title": "Intellectual Property",
    "terms.ip.description":
      "The service and its original content, features, and functionality are and will remain the exclusive property of Healthiphi ehf. and its licensors.",

    // Limitation of Liability
    "terms.liability.title": "Limitation of Liability",
    "terms.liability.description":
      "In no event shall Healthiphi ehf., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.",

    // Termination
    "terms.termination.title": "Termination",
    "terms.termination.description":
      "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",

    // Governing Law
    "terms.law.title": "Governing Law",
    "terms.law.description":
      "These Terms shall be interpreted and governed by the laws of Iceland, without regard to its conflict of law provisions.",

    // Contact
    "terms.contact.title": "Contact Information",
    "terms.contact.description": "If you have any questions about these Terms of Service, please contact us:",
  },
  is: {
    // Header
    "header.logo": "Healthiphi",

    // Hero Section
    "hero.title": "Bættu tíu heilbrigðum árum við Ísland—og við lífsverkið þitt.",
    "hero.subtitle":
      "Hvort sem þú læknar fólk eða vilt vera fyrstur í röðinni fyrir næstu kynslóðar umönnun, þá færir loforðið þitt nálina—á opnunardegi og á þjóðarheilsu.",
    "hero.cta": "verk þitt.",
    "hero.joinTeam": "Ég vil ganga í liðið",
    "hero.backLaunch": "Ég vil styðja opnunina",
    "hero.podcastTitle": "Viltu bara söguna? Sláðu á play hér að neðan.",
    "hero.podcastDescription": "3 mínútna podcast klippa með forstjóranum Pétri Haraldssyni",

    // Problem Section
    "problem.title": "Af hverju Ísland þarf hraðvirkt heilbrigðislag",
    "problem.subtitle":
      "Sjúkrabílar Íslands ná til þín á mínútum; ný vísindi ná til kerfisins á 8 – 12 árum. Á meðan nefndir ræða, minnka líf.",
    "problem.solution": "Healthiphi lokar þessu bili.",
    "problem.ai.title": "Gervigreind-magnað þjálfun",
    "problem.ai.description": "Breyttu hjartslætti í leiðbeiningar sama dag",
    "problem.ai.stats": "73% af fyrstu viðvörunarmerki gripin áður en einkenni koma fram",
    "problem.federated.title": "Sambandskennsla",
    "problem.federated.description": "Uppfærir læknisfræðilega reiknirit í hverri viku, flytur aldrei út hrá gögn",
    "problem.federated.stats": "11x hraðari innleiðing nýrra læknisfræðilegra rannsókna",
    "problem.safeguards.title": "EU-AI-Act öryggisráðstafanir",
    "problem.safeguards.description": "Sérhver aðgerð er vafin í GDPR vernd—svo traust ferðast jafn hratt og tækni",
    "problem.safeguards.stats": "100% samræmi við ströngustu persónuverndarlög í heiminum",

    // Founder Pass Section
    "founder.title": "Verðu Healthiphi stofnandi",
    "founder.subtitle":
      "Pantaðu sætin sem passa við metnaðinn þinn—eitt fyrir þig eða tuttugu fyrir ættbálkinn sem þú hefur umhyggjur fyrir. Sérhvert sæti sem þú lofar færir framfaraskífuna, fjármagnar klíníska opnun og læsir inn stofnenda-eingöngu ávinningi.",
    "founder.pickSeats": "1. Veldu fjölda sæta",
    "founder.seats": "Sæti",
    "founder.totalMonthly": "Samtals mánaðarlega:",
    "founder.vatIncluded": "VSK innifalið · verð læst ævilangt · hætta hvenær sem er fyrir virkjun",
    "founder.whoFits": "Hverjum þetta hentar:",
    "founder.solo": "Þín persónulega hlið að nákvæmri umönnun",
    "founder.family": "Maka, bestu vinir, litlar fjölskyldur",
    "founder.team": "Vellíðunarhetjur, lítil teymi, öráhrifavaldar",
    "founder.community": "Fyrirtækjafríðindi, íþróttafélög, samfélagsleiðtogar",
    "founder.rewards": "2. Stofnenda-eingöngu verðlaun",
    "founder.badge": "Stofnendamerki · 15% ævilangt afsláttur",
    "founder.webinar": "Einkakynning fyrir hópinn þinn",
    "founder.blueLagoon": "Boð á Bláa lónið langlífisdaginn okkar",
    "founder.engraved": "Nafn þitt grafið á opnunarvegginn okkar og framtíðar klíník app",
    "founder.zeroRisk": "3. Núll-áhættu fjöldaopnun",
    "founder.cardVaulted": "Kort geymt núna, aldrei rukkað fyrr en skífan nær 400 lofuðum sætum.",
    "founder.sevenDay": "Þú færð 7 daga tölvupóst tilkynningu til að fara yfir eða hætta við.",
    "founder.failSafe": "Ef við náum ekki markmiðinu er greiðslumátinn þinn eytt sjálfkrafa.",
    "founder.reserveSeats": "Panta sætin mín",

    // Talent Section
    "talent.title": "Köllum á björtustu heilbrigðisstarfsmenn Íslands",
    "talent.subtitle": "Vinna sem margfaldar áhrifin þín—ekki stjórnunina þína.",
    "talent.purpose.title": "Tilgangur fram yfir vaktir",
    "talent.purpose.description":
      "Stjórnborðið þitt sýnir bráðaþjónustuheimsóknir sem forðast voru, ekki símtalstölur.",
    "talent.ai.title": "Gervigreind bjargar mínútum",
    "talent.ai.description": "John Snow Labs semur glósur; þú bætir við samúð.",
    "talent.outcome.title": "Útkoma-styrkjendur",
    "talent.outcome.description": "Sjálfvirkar launahækkanir þegar PHI hópurinn þinn helst hátt.",
    "talent.panel.title": "Veldu-þinn-hóp™",
    "talent.panel.description": "Skilgreindu kjörna sjúklingahópinn þinn og tíma; pallurinn fyllir restina.",
    "talent.apply": "Sækja um á 10 mínútum",

    // Progress Band
    "progress.title": "Framfaraskífa:",
    "progress.ignition": "Kveikjutilbúin",
    "progress.warming": "Að hitna upp",
    "progress.forming": "Kjarnahópur að myndast",
    "progress.imminent": "Opnun yfirvofandi",
    "progress.referral":
      "Deildu einstaka tenglinum þínum eftir kaup—sérhver árangursrík tilvísun gefur einn ókeypis mánuð til bæði þín og vinarins þíns.",
    "progress.momentum": "Fleiri sæti, meiri skriðþunga, fleiri heilbrigð ár fyrir Ísland. Hversu mörg muntu kveikja?",

    // Testimonials
    "testimonials.title": "Sönnun í mannlegum sögum",
    "testimonials.elin": "Þetta er eins og að hafa Formúlu einn viðgerðarteymi fyrir líkamann minn.",
    "testimonials.maria": "Stjórnunarálag hvarf. Ég eyði deginum mínum í að breyta venjum, ekki töflum.",
    "testimonials.jon": "Pallurinn greip fyrir-sykursýkismerkin mín áður en árleg skoðun hefði gert það.",
    "testimonials.kristin": "Ég get loksins stundað læknisfræði eins og ég var þjálfuð til—fyrirbyggjandi.",

    // FAQ
    "faq.title": "Algengar spurningar",
    "faq.why400.question": "Af hverju 400 loforð?",
    "faq.why400.answer": "Það nær yfir kjarnastafningu og rannsóknastofur svo við opnum fullbúin á fyrsta degi.",
    "faq.charged.question": "Hvenær verður ég rukkaður?",
    "faq.charged.answer":
      "Eftir að skífan nær 100%, færðu 7 daga staðfestingartölvupóst áður en fyrsta greiðsla fer fram.",
    "faq.data.question": "Geymið þið heilsugögnin mín núna?",
    "faq.data.answer":
      "Nei—aðeins tölvupóstinn þinn og geymda kortið. Heilsugögn flæða eftir virkjun og með þínu skýra samþykki.",
    "faq.different.question": "Hvernig er þetta öðruvísi en líkamsræktartækið mitt?",
    "faq.different.answer":
      "Við sameinum marga gagnastrauma með klínískri sérþekkingu til að veita persónulega heilsuleiðbeiningar, ekki bara virknirakningar.",
    "faq.cancel.question": "Get ég hætt við loforðið mitt?",
    "faq.cancel.answer":
      "Já, þú getur hætt við hvenær sem er fyrir virkjun. Eftir að þjónustan opnar geturðu hætt við áskriftina þína hvenær sem er.",
    "faq.qualifications.question": "Hvaða hæfni hafa heilbrigðisstarfsmennirnir ykkar?",
    "faq.qualifications.answer":
      "Teymið okkar inniheldur löggiltir lækna, hjúkrunarfræðinga, sjúkraþjálfara og vottaða heilsuþjálfara, allir með sérhæfða þjálfun í fyrirbyggjandi umönnun.",

    // Manifesto
    "manifesto.title": "Stefnuyfirlýsing okkar",
    "manifesto.health": "Við trúum því að heilsa sé ævilangt eign, ekki viðbragðsneyðarástand.",
    "manifesto.ai": "Við trúum því að gervigreind eigi að magna menn, aldrei skipta þeim út.",
    "manifesto.data": "Við trúum því að öruggust gögn séu gögnin sem þú stjórnar.",
    "manifesto.iceland": "Við trúum því að Ísland geti sannað næsta heilsulíkan heimsins—og flutt það út alls staðar.",
    "manifesto.join": "Gakktu til liðs við okkur.",
    "manifesto.backLaunch": "Styðja opnunina",
    "manifesto.joinTeam": "Ganga í liðið",

    // Footer
    "footer.tagline": "Ein einkunn. Einn þjálfari. Eitt Ísland—blómstrandi.",
    "footer.links": "Tenglar",
    "footer.privacy": "Persónuvernd",
    "footer.terms": "Skilmálar",
    "footer.about": "Um okkur",
    "footer.contact": "Samband",
    "footer.copyright": "Öll réttindi áskilin.",

    // Application Form
    "apply.title": "Gakktu til liðs við Healthiphi teymið",
    "apply.subtitle": "Sæktu um að vera hluti af heilsubyltingu Íslands.",
    "apply.timePromise": "Það tekur bara 10 mínútur.",
    "apply.noCv": "Engin ferilskrá þörf — bara fimm fljótlegar spurningar.",
    "apply.backToHealthiphi": "Til baka til Healthiphi",
    "apply.saveExit": "Sækja um seinna? Vista og fara út",
    "apply.formTitle": "Umsóknareyðublað",
    "apply.fullName": "Fullt nafn",
    "apply.email": "Tölvupóstur",
    "apply.profession": "Starfsgrein",
    "apply.professionHelper": "t.d., Læknir, Hjúkrunarfræðingur, Heilsuþjálfari",
    "apply.experience": "Ár í starfi",
    "apply.motivation": "Af hverju viltu ganga til liðs við Healthiphi?",
    "apply.motivationPlaceholder": "Segðu okkur hvað hvetur þig til að vera hluti af heilsubyltingu Íslands...",
    "apply.minChars": "Lágmark 50 stafir",
    "apply.submit": "Senda umsókn",
    "apply.submitting": "Sendi umsókn...",
    "apply.timeLeft": "mín eftir",
    "apply.secLeft": "sek eftir",

    // Success Page
    "success.title": "Umsókn send!",
    "success.thanks": "Takk fyrir að sækja um að ganga til liðs við Healthiphi teymið!",
    "success.review": "Við munum fara yfir umsóknina þína og senda næstu skref innan 48 klukkustunda.",
    "success.inbox": "Fylgstu með í innhólfinu þínu (og ruslpósti) fyrir uppfærslur frá teyminu okkar.",
    "success.whatNext": "Hvað gerist næst?",
    "success.step1": "Teymið okkar fer yfir umsóknina þína (24-48 klukkustundir)",
    "success.step2": "Ef þú ert valin, munum við skipuleggja stutt myndsímtal",
    "success.step3": "Velkomin í teymið og þjálfun hefst!",
    "success.backHome": "Til baka á heimasíðu",
    "success.share": "Deila með vinum",

    // Language Names
    "language.english": "English",
    "language.icelandic": "Íslenska",

    // About Page
    "about.title": "Um Healthiphi",
    "about.subtitle": "Við erum að byggja framtíð fyrirbyggjandi heilbrigðisþjónustu, byrjum á Íslandi.",

    // Mission
    "about.mission.title": "Verkefni okkar",
    "about.mission.description1":
      "Healthiphi er til til að loka bilinu á milli fremstu heilbrigðisvísinda og daglegrar umönnunar. Þó að læknisfræðilegar rannsóknir þróist hratt tekur það 8-12 ár fyrir nýjar uppgötvanir að ná til sjúklinga í gegnum hefðbundin heilbrigðiskerfi.",
    "about.mission.description2":
      "Við erum að byggja hraðvirkt heilbrigðislag sem færir það nýjasta í gervigreind-knúinni þjálfun, sambandskennslu og persónulegri læknisfræði beint til Íslendinga—með fullri persónuvernd og reglugerðarsamræmi.",

    // Vision & Values
    "about.vision.title": "Framtíðarsýn okkar",
    "about.vision.description":
      "Heimur þar sem sérhver einstaklingur hefur aðgang að persónulegri, fyrirbyggjandi heilbrigðisþjónustu sem aðlagast í rauntíma að einstökum þörfum þeirra og aðstæðum.",
    "about.values.title": "Gildi okkar",
    "about.values.prevention": "Forvarnir fram yfir meðferð",
    "about.values.privacy": "Persónuvernd í hönnun",
    "about.values.innovation": "Ábyrg nýsköpun",
    "about.values.accessibility": "Heilbrigðisþjónusta fyrir alla",

    // Team
    "about.team.title": "Kynntust teyminu",
    "about.team.petur.name": "Pétur Haraldsson",
    "about.team.petur.role": "Forstjóri og stofnandi",
    "about.team.petur.bio":
      "Fyrrverandi framkvæmdastjóri heilbrigðistækni með 15 ára reynslu af því að byggja skalanlega heilbrigðispalla.",
    "about.team.maria.name": "María Kristjánsdóttir",
    "about.team.maria.role": "Aðallæknir",
    "about.team.maria.bio":
      "Löggilt læknir og rannsakandi sem sérhæfir sig í fyrirbyggjandi læknisfræði og stafrænum heilbrigðisinngrip.",
    "about.team.jon.name": "Jón Sigurðsson",
    "about.team.jon.role": "Aðaltæknistjóri",
    "about.team.jon.bio":
      "Gervigreind og vélanámsérfræðingur með djúpa reynslu í persónuvernd heilbrigðisgagna og sambandskennslukerfum.",

    // Iceland Focus
    "about.iceland.title": "Af hverju Ísland?",
    "about.iceland.description1":
      "Einstök samsetning Íslands af háþróaðri heilbrigðisinnviðum, tæknivæddu þjóðinni og sterkum persónuverndarlögum gerir það að fullkomnum prófunarsvæði fyrir næstu kynslóðar heilbrigðistækni.",
    "about.iceland.description2":
      "Með 380.000 íbúa getum við skapað þýðingarmikil áhrif á meðan við viðhöldum persónulegu snertingunni sem gerir heilbrigðisþjónustu raunverulega árangursríka.",
    "about.iceland.population": "380.000 manns",
    "about.iceland.advantage": "Fullkomin stærð fyrir nýsköpun",

    // Contact
    "about.contact.title": "Hafðu samband",
    "about.contact.description":
      "Ertu með spurningar um verkefni okkar eða vilt læra meira um að ganga til liðs við teymið okkar?",
    "about.contact.email": "Hafðu samband",
    "about.contact.careers": "Gakktu í liðið okkar",

    // About Page - New Content
    "about.purpose.title": "Tilgangur okkar",
    "about.purpose.description":
      "Við erum til til að bæta tíu heilbrigðum árum við hvert líf sem við snertum með því að breyta því besta úr læknisfræði í hagnýtar, daglegar leiðbeiningar—hratt.",

    "about.why.title": "Af hverju við erum að byggja Healthiphi",
    "about.why.description":
      "Flest heilbrigðiskerfi bregðast við þegar sjúkdómur er þegar kominn. Á Íslandi er sú viðbrögð heimsklassa; sjúkrabílar ná til þín á mínútum. En ný vísindi taka samt allt að áratug að ná til daglegrar umönnunar. Healthiphi fæddist til að loka þessu bili—para saman mannlega samúð við rauntímagögn svo fólk bregðist við sönnunargögnum morgundagsins í dag.",

    "about.how.title": "Hvernig Healthiphi virkar",
    "about.how.table.deliver": "Það sem við afhendum",
    "about.how.table.helps": "Hvernig það hjálpar þér",
    "about.how.phi.title": "PHI skönnun",
    "about.how.phi.description":
      "lifandi persónuleg heilsuvísitala sem sameinar spurningalista, klæðanlega tækni og rannsóknargögn",
    "about.how.phi.benefit": "Skildu nákvæmlega hvar þú stendur og hvað skiptir máli næst",
    "about.how.coaching.title": "Gervigreind-aðstoðuð þjálfun og fjarlækningar",
    "about.how.coaching.description": "klínískir starfsmenn, þjálfarar og sérfræðingar á einum öruggum vettvangi",
    "about.how.coaching.benefit": "Fáðu persónulegar leiðbeiningar og lyfseðla án biðstofa",
    "about.how.marketplace.title": "Úrvals markaðstorg",
    "about.how.marketplace.description": "sönnunargagna-studdar vörur og þjónusta kortlögð við PHI eyður þínar",
    "about.how.marketplace.benefit": "Bregðist strax við með verkfærum sem sannað er að færa einkunnina þína",
    "about.how.platform":
      "Öll þjónusta er afhent í gegnum einn skýjavettvang hannaðan fyrir persónuvernd, hraða og umfang.",

    "about.strategy.title": "Markaðssetningarstefna okkar",
    "about.strategy.subtitle": "Svæðisleyfi, DTC-studd vettvangur",
    "about.strategy.hq.title": "Healthiphi höfuðstöðvar",
    "about.strategy.hq.description": "á vörumerkið, tæknistafla og alþjóðlega staðla.",
    "about.strategy.operators.title": "Leyfishafar svæðisrekstraraðilar",
    "about.strategy.operators.description":
      "verkefnisdrifnir frumkvöðlar sem staðfæra verðlagningu, ráða staðbundna sérfræðinga og tryggja reglugerðarsamræmi.",
    "about.strategy.dtc.title": "Beint-til-neytenda rás",
    "about.strategy.dtc.description":
      'alhliða "Bættu 10 heilbrigðum árum" herferð stýrir umferð á svæðisbundnar lendingarsíður þar sem neytendur tryggja sér snemma aðgang Stofnendapassa.',
    "about.strategy.telehealth.title": "Skalanlegt fjarlækningakerfi",
    "about.strategy.telehealth.description":
      "kjarna klíníska teymið og gervigreindþjónusta situr miðlægt og gefur hverju svæði tafarlausan aðgang að þjálfun, greiningu og sérfræðiráðgjöf.",
    "about.strategy.conclusion":
      "Þetta líkan gerir okkur kleift að opna hratt á einu svæði, síðan endurtaka hratt—allt á meðan við höldum gagnabúsetu, tungumáli og menningarlegu blæbrigði nákvæmlega þar sem þau eiga heima: staðbundið.",

    "about.apart.title": "Það sem aðgreinir okkur",
    "about.apart.prevention.title": "Forvarnir fyrir viðbrögð",
    "about.apart.prevention.description": "við miðum á rótarorsök árum áður en þær verða neyðartilvik.",
    "about.apart.humans.title": "Menn × gervigreind",
    "about.apart.humans.description": "tækni hreinsar stjórnunina; klínískir starfsmenn koma með samúðina.",
    "about.apart.evidence.title": "Eingöngu-sönnunargagna loforð",
    "about.apart.evidence.description": "sérhver tilmæli uppfylla strangt klínískt viðmið.",
    "about.apart.data.title": "Þín gögn, þínar reglur",
    "about.apart.data.description": "GDPR-fyrst arkitektúr, svæðisbundin geymsla og notendastýrð miðlun.",

    "about.leadership.title": "Forysta",
    "about.leadership.petur.name": "Pétur Albert Haraldsson — Stofnandi og forstjóri",
    "about.leadership.petur.description":
      "Raðfrumkvöðull í heilbrigðismálum tileinkaður því að gifta saman klíníska ágæti og neytendagæða upplifun.",
    "about.leadership.team": "(Fullt stofnteymi verður tilkynnt við opnun.)",

    "about.invitation.title": "Boð",
    "about.invitation.description":
      "Healthiphi er nú í leynd og safnar saman fyrstu svæðisrekstraraðilum sínum, klínískum starfsmönnum og snemma meðlimum. Ef þú vilt:",
    "about.invitation.territory.title": "Stofna svæðisleyfi",
    "about.invitation.territory.description": "og leiða Healthiphi á þínu svæði",
    "about.invitation.clinical.title": "Ganga til liðs við klíníska kjarnann",
    "about.invitation.clinical.description": "sem þjálfari, hjúkrunarfræðingur eða læknir",
    "about.invitation.founder.title": "Tryggja þér stofnendapassa",
    "about.invitation.founder.description": "fyrir snemma aðgang og ævilangt fríðindi",
    "about.invitation.conclusion":
      "—hafðu samband hér að neðan. Saman munum við sanna að aukaleg heilbrigð ár eru ekki bara möguleg, heldur skalanleg.",
    "about.invitation.contact.title": "Samband:",
    "about.invitation.location": "Healthiphi · Reykjavík, Ísland",

    // Privacy Page
    "privacy.title": "Persónuverndarstefna",
    "privacy.subtitle": "Hvernig við söfnum, notum og verndum persónuupplýsingar þínar.",
    "privacy.lastUpdated": "Síðast uppfært: Janúar 2025",

    // Introduction
    "privacy.intro.title": "Inngangur",
    "privacy.intro.description1":
      "Healthiphi ehf. ('við', 'okkar' eða 'okkur') skuldbindur sig til að vernda persónuvernd þína. Þessi persónuverndarstefna útskýrir hvernig við söfnum, notum, birtum og verndum upplýsingar þínar þegar þú heimsækir vefsíðuna okkar og notar þjónustu okkar.",
    "privacy.intro.description2":
      "Vinsamlegast lestu þessa persónuverndarstefnu vandlega. Ef þú samþykkir ekki skilmála þessarar persónuverndarstefnu, vinsamlegast ekki fara inn á síðuna eða nota þjónustu okkar.",

    // Information We Collect
    "privacy.collect.title": "Upplýsingar sem við söfnum",
    "privacy.collect.personal.title": "Persónuupplýsingar",
    "privacy.collect.personal.item1": "Nafn og tengiliðaupplýsingar (netfang, símanúmer)",
    "privacy.collect.personal.item2": "Starfsupplýsingar (starfsheiti, ár í starfi)",
    "privacy.collect.personal.item3": "Greiðsluupplýsingar (unnar á öruggan hátt í gegnum Stripe)",
    "privacy.collect.personal.item4": "Samskiptaval og samþykkisskrár",
    "privacy.collect.usage.title": "Notkunarupplýsingar",
    "privacy.collect.usage.item1": "Notkunargögn vefsíðu og greiningar",
    "privacy.collect.usage.item2": "Tækjaupplýsingar og IP tölur",
    "privacy.collect.usage.item3": "Vafrakökur og svipaðar rakningartækni",

    // How We Use Information
    "privacy.use.title": "Hvernig við notum upplýsingar þínar",
    "privacy.use.item1": "Til að veita og viðhalda þjónustu okkar",
    "privacy.use.item2": "Til að vinna úr umsóknum og loforðum",
    "privacy.use.item3": "Til að hafa samskipti við þig um þjónustu okkar",
    "privacy.use.item4": "Til að bæta vefsíðu okkar og notendaupplifun",
    "privacy.use.item5": "Til að fara eftir lagalegum skyldum",

    // Information Sharing
    "privacy.sharing.title": "Miðlun og birtingu upplýsinga",
    "privacy.sharing.description":
      "Við seljum ekki, verslunum eða flytjum á annan hátt persónuupplýsingar þínar til þriðja aðila nema við eftirfarandi aðstæður:",
    "privacy.sharing.item1": "Með þjónustuveitendum sem aðstoða við rekstur okkar (t.d. Stripe fyrir greiðslur)",
    "privacy.sharing.item2": "Þegar lög krefjast eða til að vernda réttindi okkar",
    "privacy.sharing.item3": "Í tengslum við viðskiptaflutning eða yfirtöku",
    "privacy.sharing.item4": "Með skýru samþykki þínu",

    // Data Security
    "privacy.security.title": "Gagnaöryggi",
    "privacy.security.description":
      "Við innleiðum viðeigandi tæknilegar og skipulagslegar ráðstafanir til að vernda persónuupplýsingar þínar:",
    "privacy.security.item1": "Dulkóðun gagna í flutningi og hvíld",
    "privacy.security.item2": "Reglulegt öryggismat og uppfærslur",
    "privacy.security.item3": "Takmarkaður aðgangur að persónuupplýsingum á þörf-að-vita grundvelli",

    // Your Rights
    "privacy.rights.title": "Réttindi þín (GDPR)",
    "privacy.rights.description": "Samkvæmt almennu persónuverndarlögunum (GDPR) hefur þú eftirfarandi réttindi:",
    "privacy.rights.item1": "Réttur til aðgangs að persónuupplýsingum þínum",
    "privacy.rights.item2": "Réttur til að leiðrétta rangar upplýsingar",
    "privacy.rights.item3": "Réttur til að eyða persónuupplýsingum þínum",
    "privacy.rights.item4": "Réttur til að takmarka vinnslu",
    "privacy.rights.item5": "Réttur til gagnaflutninga",

    // Cookies
    "privacy.cookies.title": "Vafrakökur og rakning",
    "privacy.cookies.description":
      "Við notum vafrakökur og svipaða tækni til að bæta upplifun þína á vefsíðu okkar. Þú getur stjórnað vafrakökustillingum í gegnum vafrastillingar þínar.",

    // Contact
    "privacy.contact.title": "Hafðu samband við okkur",
    "privacy.contact.description":
      "Ef þú hefur spurningar um þessa persónuverndarstefnu eða gagnavenjur okkar, vinsamlegast hafðu samband við okkur:",

    // Terms Page
    "terms.title": "Þjónustuskilmálar",
    "terms.subtitle": "Lagalegir skilmálar og skilyrði fyrir notkun Healthiphi þjónustu.",
    "terms.lastUpdated": "Síðast uppfært: Janúar 2025",

    // Introduction
    "terms.intro.title": "Inngangur",
    "terms.intro.description1":
      "Þessir þjónustuskilmálar ('Skilmálar') gilda um notkun þína á Healthiphi vefsíðu og þjónustu sem rekin er af Healthiphi ehf. ('við', 'okkar' eða 'okkur').",
    "terms.intro.description2":
      "Með því að fara inn á eða nota þjónustu okkar samþykkir þú að vera bundinn af þessum skilmálum. Ef þú ert ósammála einhverjum hluta þessara skilmála geturðu ekki farið inn á þjónustuna.",

    // Acceptance
    "terms.acceptance.title": "Samþykki skilmála",
    "terms.acceptance.description":
      "Með því að búa til reikning, gera loforð eða nota einhvern hluta þjónustu okkar viðurkennir þú að þú hafir lesið, skilið og samþykkt að vera bundinn af þessum skilmálum.",

    // Services
    "terms.services.title": "Lýsing á þjónustu",
    "terms.services.description": "Healthiphi veitir vettvang fyrir:",
    "terms.services.item1": "Söfnun loforða fyrir opnun heilbrigðisþjónustu okkar",
    "terms.services.item2": "Vinnsla umsókna frá heilbrigðisstarfsmönnum",
    "terms.services.item3": "Að veita upplýsingar um komandi heilsuvettvang okkar",
    "terms.services.item4": "Stjórnun stofnendapassa áskrifta og fríðinda",

    // User Obligations
    "terms.obligations.title": "Skuldbindingar notenda",
    "terms.obligations.description": "Með því að nota þjónustu okkar samþykkir þú að:",
    "terms.obligations.item1": "Veita nákvæmar og sannar upplýsingar",
    "terms.obligations.item2": "Viðhalda öryggi reikningsauðkenna þinna",
    "terms.obligations.item3": "Nota þjónustuna aðeins í löglegum tilgangi",
    "terms.obligations.item4": "Virða hugverkaréttindi annarra",

    // Payment Terms
    "terms.payment.title": "Greiðsluskilmálar",
    "terms.payment.pledge.title": "Loforðskerfi",
    "terms.payment.pledge.description":
      "Greiðslumáti þinn verður geymdur á öruggan hátt en ekki rukkaður fyrr en við náum markmiði okkar um 400 lofuð sæti. Þú færð 7 daga fyrirvara áður en einhverjar greiðslur fara fram.",
    "terms.payment.billing.title": "Reikningagerð",
    "terms.payment.billing.description":
      "Þegar virkjað er eru áskriftir rukkaðar mánaðarlega fyrirfram. Öll gjöld eru óendurgreiðanleg nema lög krefjist.",
    "terms.payment.refunds.title": "Endurgreiðslur",
    "terms.payment.refunds.description":
      "Ef við náum ekki opnunarmarkmiði okkar verða allir greiðslumátar sjálfkrafa eyttir og engar greiðslur fara fram.",

    // Intellectual Property
    "terms.ip.title": "Hugverkaréttur",
    "terms.ip.description":
      "Þjónustan og upprunalegt efni hennar, eiginleikar og virkni eru og verða áfram eign Healthiphi ehf. og leyfisveitenda þess.",

    // Limitation of Liability
    "terms.liability.title": "Takmörkun ábyrgðar",
    "terms.liability.description":
      "Í engum tilvikum skal Healthiphi ehf., né stjórnarmenn þess, starfsmenn, samstarfsaðilar, umboðsmenn, birgjar eða hlutdeildarfélög, bera ábyrgð á óbeinum, tilfallandi, sérstökum, afleiddum eða refsingarskaðabótum.",

    // Termination
    "terms.termination.title": "Uppsögn",
    "terms.termination.description":
      "Við getum sagt upp eða frestað reikningi þínum strax, án fyrirvara eða ábyrgðar, af hvaða ástæðu sem er, þar með talið án takmarkana ef þú brýtur skilmálana.",

    // Governing Law
    "terms.law.title": "Gildandi lög",
    "terms.law.description":
      "Þessir skilmálar skulu túlkaðir og stjórnaðir af lögum Íslands, án tillits til árekstralaga þeirra.",

    // Contact
    "terms.contact.title": "Tengiliðaupplýsingar",
    "terms.contact.description":
      "Ef þú hefur spurningar um þessa þjónustuskilmála, vinsamlegast hafðu samband við okkur:",
  },
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

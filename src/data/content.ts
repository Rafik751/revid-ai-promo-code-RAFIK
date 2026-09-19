// All page copy lives here. Edit this file to update the site.

export const site = {
  title: 'Revid AI Promo Code 2026 — RAFIK: 20% Off (Verified)',
  description:
    'Revid AI promo code RAFIK — 20% off the Ultra plan. Personally tested at checkout with screenshots and an honest review.',
  brand: 'Revid Promo',
  code: 'RAFIK',
  verified: 'September 2026',
  // Optional: set to your link (affiliate/referral links must be disclosed, see footer).
  checkoutUrl: '' as string,
};

export const nav = [
  { href: '#summary', label: 'Summary' },
  { href: '#proof', label: 'Proof' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export const hero = {
  title: 'Revid AI Promo Code RAFIK — 20% Off, Actually Tested',
  lead:
    "I ran the code RAFIK through Revid AI's real checkout. It works — but there's a catch most listicles won't tell you. Here's exactly what happened, with screenshots.",
  badges: ['Confirmed working', 'First cycle only'],
  plan: 'Ultra plan',
  was: '$199',
  now: '$159.20',
};

export const summary = {
  title: 'Verified coupon summary',
  intro: 'Everything you need at a glance before heading to checkout.',
  rows: [
    ['Coupon code', 'RAFIK'],
    ['Discount', '20% off'],
    ['Plan', 'Ultra ($199/mo)'],
    ['Duration', 'First billing cycle'],
    ['Verification', 'Personally tested'],
  ] as [string, string][],
  catchLabel: 'The catch',
  catch:
    'Revid’s checkout page itself displays the line “$199.00 per month after coupon expires” right above the discounted total. This is a first-cycle discount, not a permanent price cut.',
};

export const proof = {
  title: 'My real test and proof',
  intro: "Here's exactly what I did, step by step, on Revid AI's live Stripe-powered checkout.",
  steps: [
    {
      title: 'Selected the Ultra plan',
      body: 'Listed at $199.00/month with 12,000 credits, 4K exports, priority processing, and access to all 20+ video formats.',
      image: '' as string, // e.g. '/proof/step-1.png'
    },
    {
      title: 'Entered RAFIK at checkout',
      body: 'On the Stripe checkout page I typed RAFIK into the promo code field and hit Apply. The page updated within about 2 seconds.',
      image: '',
    },
    {
      title: 'Price dropped to $159.20',
      body: 'The total changed from $199.00 to $159.20 — a real $39.80 discount. Right below it, the disclaimer confirmed the price reverts after the first cycle.',
      image: '',
    },
    {
      title: 'Completed checkout',
      body: 'Payment went through. The discount appeared on my invoice and the first month was charged at the reduced rate. Months 2 and later returned to the standard $199/month.',
      image: '',
    },
  ],
};

export const features = {
  title: "What's included in Revid AI Ultra",
  intro: 'An end-to-end short-form video platform for TikTok, Instagram, and YouTube.',
  items: [
    { title: 'Fast generation', body: 'Videos render in about 1 minute — test 10 variations in the time most tools make 3.' },
    { title: '20+ video formats', body: 'Turn podcasts, blog posts, and scripts into clips, faceless videos, and more.' },
    { title: '12,000 credits', body: 'Ultra includes the largest monthly credit pool for high-volume content production.' },
    { title: '4K exports', body: 'Export at full 4K resolution with priority processing for faster turnaround.' },
    { title: 'Stock and AI visuals', body: 'Blend stock footage with AI-generated imagery for unique, on-brand video content.' },
    { title: 'Remix and schedule', body: 'Remix existing clips and schedule publications across your connected social accounts.' },
  ],
};

export const pricing = {
  title: 'Plan comparison with the discount',
  intro: 'The RAFIK code was tested on Ultra. Lower tiers are shown for reference — your results may vary.',
  plans: [
    {
      name: 'Hobby',
      tagline: 'For trying things out',
      price: '$39',
      discounted: '$31.20',
      features: ['Basic credits', 'Standard resolution', 'Core video formats'],
      verified: false,
    },
    {
      name: 'Growth',
      tagline: 'For regular creators',
      price: '$99',
      discounted: '$79.20',
      features: ['More monthly credits', 'HD exports', 'All video formats'],
      verified: false,
    },
    {
      name: 'Ultra',
      tagline: 'For power users and teams',
      price: '$199',
      discounted: '$159.20',
      features: ['12,000 credits / month', '4K exports + priority processing', 'All 20+ video formats', 'Remix and schedule'],
      verified: true,
    },
  ],
  footnote: 'Hobby and Growth figures are projected at 20% — not personally confirmed at checkout.',
};

export const faq = {
  title: 'Frequently asked',
  intro: 'The things people actually ask before trying a promo code.',
  items: [
    {
      q: 'Does the RAFIK code really work?',
      a: 'Yes — I personally applied it to the Ultra plan at checkout and the price dropped from $199 to $159.20. Screenshots from the live checkout confirmed it.',
    },
    {
      q: 'Is the discount permanent?',
      a: 'No. Revid’s checkout explicitly states “$199.00 per month after coupon expires.” It’s a first-billing-cycle discount only — subsequent months return to full price.',
    },
    {
      q: 'Does RAFIK work on the Hobby or Growth plan?',
      a: 'I only tested it on Ultra. The projected 20% figures for Hobby and Growth are shown for reference, but I have not personally confirmed the code on those tiers.',
    },
    {
      q: 'Where do I enter the code?',
      a: 'On Revid AI’s checkout page (powered by Stripe), there’s a promo code field. Type RAFIK, click Apply, and the total updates within a couple of seconds.',
    },
    {
      q: "What happens if the code doesn't work for me?",
      a: 'Promo codes can expire or be plan-specific. If RAFIK is rejected, Revid may have retired it since this test. Try contacting their support or checking for a newer active code.',
    },
    {
      q: 'Is Revid AI worth it even without the discount?',
      a: 'If you need fast, varied short-form video at scale, Revid’s speed and format variety are genuine strengths. The credit system means costs can vary, so factor that into your monthly volume estimate before committing to Ultra.',
    },
  ],
};

export const finalCta = {
  title: 'Ready to save 20% on Revid AI?',
  body: "Copy the code, head to Revid's checkout, and apply it on the Ultra plan.",
  note: 'First billing cycle only. Reverts to $199/mo after.',
};

export const disclaimer =
  "This is an independent review. I'm not affiliated with Revid AI. Promo codes can change at any time — always verify at checkout.";

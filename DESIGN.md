---
name: Clinical Innovation Portfolio
colors:
  surface: '#fff8f7'
  surface-dim: '#e6d6d8'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f1'
  surface-container: '#fbeaec'
  surface-container-high: '#f5e4e6'
  surface-container-highest: '#efdfe0'
  on-surface: '#22191b'
  on-surface-variant: '#544245'
  inverse-surface: '#382e2f'
  inverse-on-surface: '#feedee'
  outline: '#877275'
  outline-variant: '#d9c0c4'
  surface-tint: '#984159'
  primary: '#953f56'
  on-primary: '#ffffff'
  primary-container: '#b4576e'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb1c1'
  secondary: '#695b5b'
  on-secondary: '#ffffff'
  secondary-container: '#f1dede'
  on-secondary-container: '#6f6161'
  tertiary: '#106a34'
  on-tertiary: '#ffffff'
  tertiary-container: '#32844b'
  on-tertiary-container: '#f7fff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#ffb1c1'
  on-primary-fixed: '#3f0017'
  on-primary-fixed-variant: '#7b2a41'
  secondary-fixed: '#f1dede'
  secondary-fixed-dim: '#d4c2c2'
  on-secondary-fixed: '#231919'
  on-secondary-fixed-variant: '#504444'
  tertiary-fixed: '#a1f5b1'
  tertiary-fixed-dim: '#86d997'
  on-tertiary-fixed: '#00210b'
  on-tertiary-fixed-variant: '#005225'
  background: '#fff8f7'
  on-background: '#22191b'
  surface-variant: '#efdfe0'
  medical-pink-light: '#F9F1F2'
  clinical-white: '#FFFFFF'
  tech-gray-muted: '#8E8282'
  soft-blush-bg: '#EFE0DB'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1200px
  gutter: 24px
  margin-mobile: 16px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
---

## Brand & Style

The design system is engineered to represent "Medical Excellence meets Tech Innovation." It bridges the gap between the traditional trustworthiness of clinical practice and the forward-thinking nature of healthcare AI and content creation. The personality is authoritative yet empathetic, sophisticated yet accessible.

The visual style is **Corporate Modern with Minimalist influences**. It leverages generous whitespace to evoke clinical cleanliness, paired with refined typographic choices that suggest academic rigor. The interface uses subtle organic shapes—inspired by the circular motifs in the reference imagery—to soften the technical edges, creating a "Human-Centric Tech" aesthetic.

**Target Audience:**
- Healthcare tech recruiters and AI research leads.
- Medical conference organizers and academic peers.
- Clinical safety and patient advocacy organizations.

## Colors

The palette is rooted in a sophisticated interpretation of "Medical Pink." Instead of a neon or pastel pink, the primary color is a **dusty rose (#D47189)** derived from clinical scrubs, providing a warm, human touch. 

- **Primary:** Dusty Rose. Used for high-impact accents, call-to-action buttons, and key brand moments.
- **Secondary:** Deep Umber. A professional, near-neutral dark tone used for primary headings to ensure readability and an authoritative feel.
- **Tertiary/Neutral:** Soft Blush and Professional Grays. These are used for section backgrounds and subtle borders to maintain a soft, layered depth.
- **Backgrounds:** Use a combination of Clinical White for core content areas and Soft Blush (#EFE0DB) for differentiating large sections (e.g., the Hero or Footer).

## Typography

This design system uses a high-contrast typographic pairing to signal both "Heritage" and "Future."

**Headline Font: Libre Caslon Text**
A classic serif that conveys medical authority, academic excellence, and elegance. It should be used for all major headings and quotes. For a modern twist, use it with slightly tighter letter-spacing in display sizes.

**Body & UI Font: Hanken Grotesk**
A sharp, contemporary sans-serif that represents the "Tech Innovation" side of the brand. It is highly legible and provides a professional, functional contrast to the serif headings.

- **Scale:** Use `display-lg` exclusively for hero sections.
- **Labels:** Always use uppercase for `label-md` to create a clear architectural hierarchy, particularly for category tags or small sub-headers.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach for desktop to maintain a boutique, curated portfolio feel. 

- **Grid Model:** 12-column grid with a 24px gutter. Content is centered with a max-width of 1200px.
- **Vertical Rhythm:** Sections should be separated by generous vertical padding (120px on desktop) to allow the "Medical Excellence" message to breathe.
- **Responsive Behavior:** 
    - **Desktop:** Wide margins and asymmetrical layouts (e.g., text on the left, images breaking the grid on the right).
    - **Tablet:** 8-column grid; section padding reduces to 80px.
    - **Mobile:** Single column layout with 16px side margins. Serif headings should scale down to `headline-lg-mobile` to ensure they don't break across too many lines.

## Elevation & Depth

To maintain a "Tech-Forward" clinical vibe, depth is achieved through **Tonal Layering** rather than heavy shadows.

- **Surface Tiers:** Use subtle shifts in background color (White to Soft Blush) to define different content zones.
- **Soft Shadows:** If elevation is required for interactivity (like a card hover), use highly diffused, low-opacity shadows tinted with the secondary color: `box-shadow: 0 10px 30px rgba(74, 62, 62, 0.05)`.
- **Glassmorphism:** For navigation bars or modal overlays, use a backdrop-blur effect (20px) with a semi-transparent white fill (80% opacity) to create a clean, modern laboratory feel.

## Shapes

The shape language is **Rounded (Level 2)**. This specific degree of curvature strikes a balance between the organic "human" nature of medicine and the geometric precision of technology.

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) radius.
- **Containers:** Large cards and feature blocks use a 1rem (16px) radius.
- **Decorative Elements:** Use perfectly circular masks for profile photos or iconography containers to echo the "circular impact" theme found in the brand imagery.

## Components

### Buttons
- **Primary:** Solid Dusty Rose (#D47189) with White text. Medium padding (12px 24px), Hanken Grotesk Bold.
- **Secondary:** Outline in Dusty Rose with a subtle Blush fill on hover.

### Cards (Portfolio / Research)
- **Style:** White background, Level 1 roundedness, and a 1px border in `soft-blush-bg`. 
- **Hover:** Subtle lift via the soft shadow mentioned in Section 5.

### Chips / Tags
- **Style:** Used for "Medicine, Technology, Communication." 
- **Visual:** Light Blush background with Deep Umber text. Pill-shaped (Rounded Level 3) with `label-md` typography.

### Input Fields
- **Style:** Minimalist. Only a bottom border (2px) in `tech-gray-muted`, which transitions to Dusty Rose on focus.

### Icons
- Use thin-line (2pt) icons to maintain the sophisticated, high-tech clinical look. Icons should be colored in Deep Umber or Dusty Rose.

### Specialized Component: "Impact Metric"
- A large numerical display using `display-lg` serif typography, paired with a small `label-md` caption, used to highlight key career achievements or AI data points.
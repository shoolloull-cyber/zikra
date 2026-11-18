---
version: alpha
colors:
  paper: '#F5F1EA'
  ink: '#30271f'
  muted: '#766957'
  line: '#d7cdbf'
  accent: '#85643e'
  surface: '#ebe5da'
  error: '#a1362c'
typography:
  body:
    fontFamily: 'IBM Plex Sans Arabic, sans-serif'
  display:
    fontFamily: 'Noto Naskh Arabic, serif'
  latin:
    fontFamily: 'DM Sans, sans-serif'
rounded:
  control: '0px'
spacing:
  page: '5vw'
---
## Overview
Zikra is an Egyptian perfume storefront: a bilingual editorial brand shell and checkout, English by default. The supplied amber bottles, calligraphic logo and requested cream ground define the identity. Signature: oversized Arabic memory-led headline paired with unobstructed bottle photography. Avoid generic dashboard cards and invented fragrance claims.
## Colors
Runtime canonical owner: src/style.css :root. Frontmatter mirrors the same named CSS properties (--paper, --ink, --muted, --line, --accent, --surface, --error). Components consume variables. Gold-brown is an accent, never payment success. Sold-out is explicit text.
## Typography
body → --font-body, display → --font-display, latin → --font-latin. Arabic headlines use Naskh; form copy uses IBM Plex. Google Fonts may fall back to local serif/sans-serif. Latin perfume titles use Georgia to echo bottle typography.
## Layout
Desktop split hero, a seamless slow-moving category ribbon, three-column catalog. The ribbon uses native horizontal scrolling with mouse dragging and touch swiping, four repeated groups and 22px/second autoplay. Interaction pauses autoplay for 3.5 seconds; keyboard focus and reduced motion pause it. Arrow buttons provide a non-drag alternative. No visible pause control per owner request. Mobile stacked hero and two-column catalog. Checkout is a four-step modal drawer: cart, delivery, payment, review; native select popup geometry is intentionally OS-owned.
## Elevation & Depth
Flat product imagery. Backdrop and shadow only for modal isolation.
## Shapes
Rectangular controls and cards; circular social icons only.
## Components
Drawer owns focus isolation via native showModal, Escape, closing animation and scroll lock. Shared field rendering owns validation. src/order.js owns cart sanitization, money, totals and message generation. Native select owns governorate options. Global stylesheet owns scrollbars. One live toast owns action feedback.
## Do's and Don'ts
Preserve source images and supplied logo. Keep menu on the left and bag on the right regardless of RTL. Use reduced-motion overrides. Never treat opening WhatsApp as a confirmed order/payment. Never persist customer PII in localStorage.

Interaction refinement: src/interactions.css owns the bottle-shaped menu control, capped/uncapped hover motion, staggered menu links, modal entrance/exit, checkout typography and progress. Header remains visible for at least 4.5 seconds after adding a product; the count pulses once. Drawer is portaled to document.body, with a fixed heading and independently scrolling content. Native dialog supplies modality and focus restoration.

Product discovery: shared Drawer has a centered product-modal desktop variant and full-height mobile sheet. ProductDetails owns English descriptions, scent-note chips and labeled green/red flags supplied by the owner. Image/name buttons open details; quick-add remains independent. Menu switches English/Arabic for the entire storefront and checkout; preference persists locally.

Product cards use readable 22–25px names, 15–16px prices and 13–14px Inspired by references. Two complimentary 2 ml samples per order are selected independently from cart items or a store surprise. Samples never change prices; selections appear in review and WhatsApp. Shared SamplePolicy explains matching trials and unopened main-bottle returns without inventing deadlines or fees.

Catalog refinement: compact outlined add controls, natural width at every breakpoint; explicit available/sold-out labels below photos use muted green and warm neutral tones. Unavailable purchase controls remain disabled.

Header language shortcut: globe + destination EN/AR beside menu, same persistent locale provider as menu controls; subtle label entrance and globe rotation, reduced-motion safe. Logo remains centered.

2026-10-29: samplePlan in order.js owns automatic matching testers (one per purchased bottle) plus one choice for a single bottle or two choices for any larger order. Extra choices span available catalog items or store surprise. Shared ProductGallery supplies three photos per fragrance, arrows, dots, swipe and keyboard controls. Fixed Policies button opens shared Drawer with trial/return and payment copy.

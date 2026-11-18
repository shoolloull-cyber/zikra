# Zikra behavior
Authority: user's store brief and follow-up explicitly authorizing provisional prices and shipping. Product labels/sizes come from supplied bottle images. Transfer destinations remain unconfigured until the owner supplies them.

Canonical UI Map: Form = Checkout.jsx field helper + order.js validateCustomer; Select/Listbox = native governorate select; Scrollbar = style.css global baseline; Toast = App notice; Modal = Drawer using native dialog.

Categories filter all seven perfumes; New Arrivals includes all. URL query retains selection. Cart stores IDs and bounded quantities only, sanitized on load; sold-out products cannot enter totals. Prices always read from catalog.js, never client storage. No server-side stock reservation or payment verification is claimed.

Customer fields remain in component memory when drawer closes. Validation focuses the first invalid field, preserves inputs and associates errors. Review creates a message; a separate explicit WhatsApp link transfers the fields. Receipt attachment happens manually in WhatsApp. There is no order database or admin authentication. Seller must verify total, availability and actual receipt of money before fulfillment. Closing/reopening checkout does not lose edits. Reload discards customer data intentionally; cart persists when storage is available.

Empty cart offers catalog navigation. Clipboard failures show manual-copy guidance. External messaging availability cannot be guaranteed. Order reference persists for the current page session and is not a server-issued order identifier.

Checkout steps validate delivery fields before payment; payment consent is checked before review. Back/edit retains customer values. Changing the cart invalidates the message and returns to the cart step, preventing stale totals. Review has a separate explicit external WhatsApp action. Slider distinguishes clicks from drags at 7px, supports native touch/trackpad scrolling and mouse pointer capture; release waits 3.5 seconds before autoplay resumes. Header hold after add is 4.5 seconds.

## Canonical UI Map

| Capability | Canonical owner | Source of truth | Allowed variants | Verification |
|---|---|---|---|---|
| Form | Checkout.jsx field helper | UX-CONTRACT.md | delivery / payment | Browser invalid and valid transitions |
| Select/Listbox | Checkout.jsx governorate native select | UX-CONTRACT.md | native OS popup | Browser selection and totals |
| Scrollbar | style.css global baseline | DESIGN.md | drawer / ribbon geometry | Browser screenshots |
| Toast | App notice state | UX-CONTRACT.md | add / copy feedback | Browser add-to-cart |

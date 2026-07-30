
---

## A. Accessibility Contrast vs. Dominant Gold Backgrounds

### Recommended Action

Specify that:

* All body text on gold backgrounds uses **Rich Navy (#10233E)**.
* White is reserved for cards, buttons, and elevated surfaces—not directly on gold backgrounds.
* If white text must appear, place it on a dark overlay or gradient that meets WCAG contrast requirements.

---

## B. Purpose of "Warm Orange" Color

### Recommended Action

Redefine Warm Orange as an **accent-only color**, used for:

* gradients,
* hover highlights,
* glow effects,
* progress bar gradients,
* decorative accents,

and remove "Buttons" from its intended usage.

---

## C. Checklist Green Color

### Recommended Action

Add a note to the Color System stating:

> **Success Green (#28A745)** is a functional UI color reserved exclusively for positive feedback, checkmarks, form success states, and validation—not as a brand color.

---

## D. Card Layout Constraints vs. Card Count

### Recommended Action

Update the layout rule to:

> "Standard layouts should not exceed four cards per row. Exceptions are permitted where the narrative or visual design explicitly requires otherwise."

or make the Young Innovators section a **5-column specialized layout**.

---

## E. "The Big Idea" Section Discrepancy

### Recommended Action

Update the master page architecture everywhere as detailed in @big_idea.md

---

## F. Maximum Layout Width vs. Large Breakpoint Token

### Recommended Action

Clarify that:

* **1280px remains the maximum content width**, while
* **1440px+ only increases surrounding whitespace, decorative elements, and breathing room**, not the content container itself.

---

## G. Hardcoded Hover/Animation Durations vs. Motion Tokens

### Recommended Action

Replace all hardcoded durations with design tokens.

Example:

```text
Navigation Hover

Uses --duration-fast

Feature Card Hover

Uses --duration-medium

Hero Animation

Uses --duration-hero
```

This is standard design-system practice.

---

## H. Navigation Underline Indicator Interaction

### Recommended Action

Specify:

> If the active navigation item is hovered, the underline remains visible without replaying the animation. Only the text color may brighten slightly to acknowledge the hover state.

This prevents distracting or repetitive animations.
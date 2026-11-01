---
name: Luna Marketing Lab
description: A Korean one-page corporate report (개조식 1장 보고서) for a data-driven marketing agency, stacked as sheets on a desk.
colors:
  desk: "#DADDE0"
  paper: "#FBFBF9"
  ink: "#141414"
  ink-2: "#4A4D50"
  rule: "#141414"
  hair: "#C8C8C4"
  cell: "#EEEFEC"
  navy: "#1F3B63"
  navy-ink: "#E8EDF4"
  red: "#C2392E"
  red-deep: "#A12C22"
typography:
  display:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
    fontSize: "clamp(34px, 4.1vw, 56px)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
    fontSize: "clamp(22px, 2.4vw, 28px)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
    fontSize: "19px"
    fontWeight: 700
    letterSpacing: "-0.02em"
  report-main:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
    fontSize: "clamp(18px, 1.9vw, 22px)"
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: "-0.01em"
  report-sub:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
    fontSize: "clamp(15px, 1.4vw, 17px)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
  label:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
    fontSize: "14px"
    fontWeight: 700
    letterSpacing: "-0.01em"
  folio:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    letterSpacing: "-0.01em"
rounded:
  none: "0"
  seal: "50%"
spacing:
  cell-y: "14px"
  cell-x: "18px"
  sheet-pad: "clamp(20px, 5vw, 72px)"
  sheet-gap: "28px"
  band-after: "36px"
  section-gap: "48px"
  column-gap: "56px"
components:
  sheet:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "clamp(20px, 5vw, 72px) clamp(20px, 5vw, 72px) 72px"
    width: "1120px"
  title-band:
    backgroundColor: "{colors.navy}"
    textColor: "#FFFFFF"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  cover-band:
    backgroundColor: "{colors.navy}"
    textColor: "#FFFFFF"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "clamp(18px, 2.6vw, 28px) clamp(20px, 3vw, 36px)"
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "#FFFFFF"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "40px"
  button-ink-hover:
    backgroundColor: "{colors.navy}"
  label-cell:
    backgroundColor: "{colors.cell}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "10px 18px"
  field-cell:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "16px 18px"
  stamp-seal:
    textColor: "{colors.red}"
    rounded: "{rounded.seal}"
    size: "80px"
---

# Design System: Luna Marketing Lab

## Overview

**Creative North Star: "The Forwarded Report"**

The site is a finished Korean one-page corporate report (개조식 1장 보고서) that a marketing manager could forward upward without rewriting a line. Every surface is a sheet of cool off-white paper lying on a pale gray desk. A deep navy band heads each sheet. Content is set in the bureaucratic grammar Korean readers already trust: □ main points and ○ sub-points, ruled tables with gray label cells, a 결재란 approval box, page folios set as "- 1 -", and a closing "끝.".

Density is report density: tight, ruled, and scannable rather than airy. One family, Pretendard, carries everything; hierarchy comes from weight, size, and color, not from a change of typeface. Color is almost entirely ink on paper. Navy marks structure (title bands, numerals, links), and red is reserved for the seal and the act of submitting. Depth exists only between the sheet and the desk. Everything on the sheet is flat, square, and ruled.

Motion is a single physical gesture. A stamp presses into paper: the GMU seal lands in the 대표 cell on load, and a 접수 stamp lands on a form when it is received. Nothing else animates beyond short hover transitions.

**Key Characteristics:**
- Paper sheets (max 1120px) stacked on a desk-gray ground, each with a navy title band and a centered "- n -" folio.
- 개조식 bullets: □ for main points (600), ○ for indented sub-points (400, secondary ink).
- Tables as the primary container: 2px ink rules top and bottom, 1px hairline inner rules, gray label cells.
- Square corners everywhere. The only round shapes are the stamps.
- Red is stamp ink and the submit action. It is never decorative.
- Roman numerals (Ⅰ–Ⅴ) in navy 700 number the sections in both the TOC and the title bands.

## Colors

Ink on cool paper, structured by one navy and stamped by one red.

### Primary
- **Report Navy** (navy): Title bands on every sheet and the cover headline band, section numerals, step numbers, Q. marks, table action links, case links, the ink-button hover, text selection, and the focus outline. Navy is the color of structure.

### Secondary
- **Seal Red** (red): The GMU seal, the 접수 stamp, the primary submit buttons (상담 요청, 요청서 보내기), the 대표 caption tag, and the A. mark in the FAQ. White on red measures 5.36:1.
- **Pressed Red** (red-deep): Hover state of red buttons and error text (`is-error`).

### Neutral
- **Desk Gray** (desk): Page ground behind the sheets, and the translucent sticky TOC bar.
- **Report Paper** (paper): Every sheet surface. It is also the inset ring color inside the seal's double border.
- **Ink** (ink / rule): Body text, the 2px table and box rules, and the dark TOC button.
- **Secondary Ink** (ink-2): ○ sub-points, folios, figure captions, case-body labels, request notes, the colophon. 8.21:1 on paper.
- **Hairline** (hair): 1px inner rules between table rows and definition-list rows.
- **Label Cell Gray** (cell): Background of every label cell: table heads, row headers, the 결재란 header row, doc-meta terms, and the 검토 요청 label.
- **Navy Paper** (navy-ink): Roman numerals inside navy title bands.

### Named Rules
**The Stamp Ink Rule.** Red appears only where something is sealed, received, or sent: stamps, submit buttons, and the answer mark. It never fills a band, a background, or a heading.

**The Two Rules Rule.** Ink rules are 2px at the outer edges of a ruled block and 1px inside. Hairline gray is for row separation; ink 1px is for cell walls in boxed forms (결재란, request row).

## Typography

**Font:** Pretendard Variable (jsdelivr, orioncactus/pretendard@v1.3.9, variable dynamic subset; falling back to Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Malgun Gothic, sans-serif), weights 400/500/600/700. One token, `--font`, sets every surface.

**Character:** A single neutral Korean sans for the whole document. The report reads as one typed sheet, and its hierarchy is carried by weight, size, and color within the family: 700 for what names, labels, and operates, 600 for □ points, 400 for the argument's prose, and secondary ink for sub-points, folios, and captions. Body text tracks −0.01em; the cover headline and title bands tighten further.

### Hierarchy
- **Display** (700, clamp(34px, 4.1vw, 56px), 1.18, -0.03em, balanced wrap): The cover headline, set white on the navy cover band. Once per page.
- **Headline** (700, clamp(22px, 2.4vw, 28px), 1.3, -0.02em): Sheet title bands, preceded by a 700 roman numeral in Navy Paper.
- **Title** (700, 19px, -0.02em): Numbered sub-titles inside a sheet ("1. 추진 절차") and case project names. The flow step names run larger at 22px.
- **Report Main** (600, clamp(18px, 1.9vw, 22px), 1.55): □ bullet points. An optional lead-in keyword (목표, 방법, 근거) is set at 700 in navy.
- **Report Sub** (400, clamp(15px, 1.4vw, 17px), 1.6, secondary ink): ○ sub-points.
- **Lead** (400, 18px, 1.7, max 62ch): One-sentence introduction under a title band.
- **Body** (400, 16px, 1.6, -0.01em, tabular numerals): Table cells, form input, FAQ answers (16px/1.7), and the service descriptions (17px). FAQ questions are 17px 700.
- **Label** (700, 14px): Table heads, doc-meta terms, 결재란 headers, table action links. Case-body terms drop to 13px in secondary ink.
- **Folio** (400, 14px, secondary ink): "- n -" page numbers, figure captions at 13px ("[그림 n]").

### Named Rules
**The One Family Rule.** Every surface is Pretendard through `--font`. Hierarchy is weight, size, and color: 700 for anything that names, labels, or operates (titles, table heads, buttons, numerals, the closing "끝."), 600 for □ points, 500 for TOC labels, 400 for the report's prose (sub-points, leads, answers, descriptions, folios, captions). No second family, and nothing heavier than 700.

**The Numeral Rule.** Section and step numbers are 700 in navy: roman numerals Ⅰ–Ⅴ for sheets (Navy Paper inside the title bands, navy in the TOC), arabic step numbers in the flow, and "Q." for the FAQ, with its "A." in red.

## Layout

Sheets sit in a single centered column (max 1120px) with a 28px gap on a desk ground, under a sticky 64px TOC bar. Sheet padding is fluid, clamp(20px, 5vw, 72px), with 72px reserved at the bottom for the folio set 24px from the edge. Every sheet opens with its title band followed by 36px of space. Sub-sections inside a sheet are separated by 48px.

The cover sheet fills the first viewport (min(100svh − 96px, 960px)) as a flex column: doc-meta table left and 결재란 right, then the cover band, then three □ bullets, with the request row pushed to the bottom by `margin-top: auto`.

Inner layouts are table-like grids: a 1.25fr / 1fr two-column split (56px gap) for bullets beside a table, a 400px figure / text grid for case rows, and a four-up flow.

**Responsive.** At 960px and below, two-column splits and case rows stack, the flow becomes 2×2, and the request row becomes label / two fields / full-width button. At 640px and below, sheets go edge to edge (main padding 0, 12px gap), the cover head stacks with the 결재란 first at full width, the flow becomes a single column with downward arrows, the service table collapses each row to a stack, label columns narrow to 104px, and the TOC list scrolls horizontally behind a fading mask.

**Short viewports.** On desktops (min-width 961px) shorter than 940px, the cover compresses so the request row stays above the fold: tighter doc-meta rows, caption beside the 결재란, a smaller cover band, tighter bullet gaps, and 54px request controls. Below 760px tall, the doc-meta table is hidden, the seal shrinks to 64px, and the cover band is fixed at 40px.

## Elevation & Depth

Depth exists in exactly one place: the paper sheet lifting off the desk. Everything on a sheet is flat and separated by rules, never by shadow. The sticky TOC bar uses translucency and an 8px backdrop blur, not a shadow.

### Shadow Vocabulary
- **Sheet on desk** (`box-shadow: 0 1px 2px rgba(20, 24, 28, 0.12), 0 12px 32px -12px rgba(20, 24, 28, 0.22)`): Every sheet. A tight contact shadow plus a soft, low drop.
- **Seal double ring** (`box-shadow: inset 0 0 0 3px var(--paper), inset 0 0 0 4.5px currentColor`): The GMU seal's inner ring. This is a drawing device for the stamp, not elevation.

### Named Rules
**The Paper Only Rule.** Only sheets cast shadows. Tables, cards, buttons, and forms on a sheet stay flat.

## Shapes

Square and ruled. Every container, band, button, input, and image frame has a 0 radius. Structure is drawn with lines: 2px ink boxes for forms (결재란, request row, flow steps), 2px top and bottom rules for open tables and lists, 1px hairlines between rows, and a 1px ink frame around case screenshots (16:9). The only curves are the stamps: the 80px circular GMU seal rotated −9° and the 76px circular 접수 stamp rotated 8°, both drawn in red with a 2.5px border and multiply blending. Flow arrows are small navy triangles cut with `clip-path`, pointing right on desktop and down on mobile.

## Components

### Buttons
Blunt, square, and printed.
- **Shape:** Square corners (0), 700 at 16px, −0.01em tracking, 48px minimum height.
- **Primary (red):** Seal Red with white text, 0 24px padding. Used only for submitting a request. In the request row it is 60px tall at 17px. In the apply footer it is at least 200px wide.
- **Hover / Focus:** Background shifts to Pressed Red over 0.2s on the expo-out curve. Focus is the global 2px navy outline offset 2px. Disabled shows a progress cursor at 0.7 opacity with the label "보내는 중…".
- **Ink:** Ink background, white text, 40px tall, 0 18px, 15px. Used for the TOC 상담 요청 jump. Hover turns it navy.

### Sheets and Title Bands
- **Sheet:** Paper surface, no radius, the sheet shadow, fluid padding, and a centered folio "- n -" in secondary ink.
- **Title band:** Full-width navy block (14px 24px; 12px 16px on mobile) with a white 700 headline and a 700 roman numeral in Navy Paper.
- **Cover band:** The same navy block at display size, holding the h1.

### 결재란 and Seal (signature)
A three-column approval table (담당 / 검토 / 대표) boxed in a 2px ink rule with 1px ink cell walls, gray header cells (92px wide), and 92px-tall sign cells (84px on mobile, 76px and 68px on short desktops). The first two cells read "귀사" as placeholders at 13px in #6B6E71 (4.95:1 on paper). The 대표 cell holds the GMU seal, which presses in once on load: it scales from 1.6 to 1 with a 2px blur clearing, settling at 0.92 opacity over 0.9s after a 0.35s delay. A right-aligned caption under the table names the credential. The same press gesture, without delay, lands the red 접수 stamp on a form after a successful submission. Reduced motion collapses both to their final state.

### Report Bullets
A grid list with 18px gaps. □ main points hang in a 1.5em indent. ○ sub-points indent a further 1.6em, 6px below their main point, in secondary ink. Markers are typographic glyphs drawn by the stylesheet, and the □ glyph is set at weight 400 so it stays light beside bold text.

### Grid Tables
Full-width, collapsed borders, 2px ink rules at top and bottom, 1px hairline rows, 14px 18px cells (12px on mobile), top-aligned. Head cells and row headers sit on Label Cell Gray at 14px 700. Row-header columns are fixed width per table (200px services, 160px terms and apply). An optional caption sits above at 15px 700, left-aligned. A right-aligned navy action link may end a row ("이 업무로 문의").

### Inputs / Fields
Inputs live inside ruled cells instead of having boxes of their own.
- **Style:** Transparent background, no border, no radius, 16px ink, 16px 18px padding (request row: 60px tall, 0 18px). The surrounding cell rules are the field's border. Placeholder text is #66696C (5.33:1 on paper).
- **Focus:** The global navy outline pulled inward (offset −3px) so it sits inside the cell.
- **Error:** Status text below the form in Pressed Red 700. Success replaces the note with a confirmation sentence and the 접수 stamp.

### Request Row
The cover's working form is one boxed row: a gray "검토 요청" label cell (140px), two field cells, and a 200px red button, inside a 2px ink box with 1px ink cell walls. A note line below (14px, secondary ink) states the response promise and doubles as the live status region.

### Case Rows
An ordered list between 2px ink rules. Each row is a 16:9 framed screenshot (top-anchored cover, or contained with 16px padding for logos) above a "[그림 n]" caption (13px, secondary ink), beside a definition grid of 96px terms (13px 700, secondary ink) and regular values on hairline rows. The project name is 19px 700. Linked screenshots scale to 1.03 on hover over 0.6s.

### Flow
Four 2px-ruled boxes (16px 18px 18px) in a row with 28px gaps, each holding a navy step number and a 22px 700 name, above a regular secondary-ink description. Navy clip-path triangles sit in the gaps.

### FAQ
An accordion between 2px ink rules with hairline separators. Each question is a full-width 17px 700 button: a 700 navy "Q.", the text (underlined on hover), and a 16px stroked chevron that rotates 180° when open. The answer is regular 16px/1.7 led by a red "A.". Only one item is open at a time.

### Navigation (TOC bar)
A sticky 64px bar in translucent desk gray with an 8px backdrop blur and a 1px bottom rule. It holds the logo (rendered black, 36px), an ordered list of sections as "Ⅰ 개요" (navy 700 numeral and 15px 500 label, underlined on hover), and the ink button. On mobile the list scrolls horizontally behind a right-edge fade, and the labels drop to 14px.

## Do's and Don'ts

### Do:
- **Do** open every new content block as a sheet with a navy title band, a roman numeral, and a "- n -" folio.
- **Do** write arguments as 개조식 □ / ○ bullets (□ at 600, ○ at 400 in secondary ink), and put comparable facts in ruled grid tables with gray label cells.
- **Do** draw structure with rules: 2px ink at the outer edges, 1px hairline (#C8C8C4) between rows, 1px ink for walls inside boxed forms.
- **Do** keep red for stamps and submit actions, and keep the stamp gesture to the two moments it marks (seal on load, 접수 on success).
- **Do** keep the cover's request row above the fold, using the short-viewport compressions.
- **Do** set section and step numbers in navy 700.

### Don't:
- **Don't** round corners on anything except the stamps.
- **Don't** add shadows to anything on a sheet. Only the sheet lifts off the desk.
- **Don't** use red for bands, backgrounds, headings, or emphasis.
- **Don't** fill surfaces with decorative gradients. The only gradient is the functional fade mask on the mobile TOC.
- **Don't** add a second typeface or mark the report voice by switching families. Hierarchy stays in weight, size, and color within Pretendard, and nothing goes above 700.
- **Don't** give inputs their own borders or radius. They take the borders of their cells.

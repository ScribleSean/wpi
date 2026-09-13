# Assignment 1 - NBA Court Visualization with d3.js

<https://scriblesean.github.io/a1-ghd3/>

## Overview

I created an interactive NBA ba sketball court visualization using d3.js. The court is drawn to NBA dimensions and scales to fit the viewport. Hovering over the court highlights shooting zones by distance (0–3 ft, 3–10 ft, 10–16 ft, 16–3pt, 3pt+) with different color schemes on each side; a tooltip shows the zone label. Right-clicking a zone locks the highlight and shows a persistent label until another zone is right-clicked or the lock is cleared. Left-clicking anywhere on the court places a shot dot with the distance and zone label; the dot has a scale “pop” animation and a subtle pulse. The rims have a gentle pulse animation, and zone highlights fade in with transitions.

## Running

Open `index.html` in a browser, or serve the folder with a local server (e.g. `python3 -m http.server 8000`) and open <http://localhost:8000/index.html>.

## Technical Achievement Description

I used d3.js to draw the court with SVG primitives (circles, rectangles, lines, paths) and kept all dimensions in feet in a viewBox so the court scales responsively. I implemented zone detection by computing distance from the cursor to each basket and mapping that to five distance zones, with separate logic for the mirrored right half. I added mouse event handlers for mousemove (hover highlight + tooltip), contextmenu (right-click lock), and click (place shot). I used d3 transitions for zone opacity fade-in, demo shot radius “pop” (overshoot and settle), and demo-shot pulse animations, and d3.interval for the repeating pulse timers. I learned how to use SVG viewBox and preserveAspectRatio for dynamic scaling and how to position a tooltip and locked label in screen space while working with viewBox coordinates for the court.

## Design Achievement Description

I wanted to build a single-page visualization that felt like an interactive court diagram. I chose an NBA court so dimensions and zones would be meaningful, and used two color schemes (blue for the left side, orange for the right) so users can tell which basket each zone refers to. I added hover feedback (zone highlight + tooltip), right-click to lock a zone so users can compare or focus on one zone, and click-to-place a shot to show distance and zone. I used short transitions and a small “pop” on the placed shot so interactions feel responsive, and kept the rim and shot pulse subtle so the court feels alive without being distracting. The layout is minimal so the court stays the focus.

## Demo Video

https://github.com/user-attachments/assets/c8a989d8-f3bb-47e5-98c0-52a076b28bc2


## AI Usage

I used AI (GitHub Copilot and Cursor AI) to help with the following. I modified and finalized any generated code msyelf to fit it into the project.

- **NBA court dimensions and variables:** Prompts were used to generate or refine constants and layout values (court length/width, basket position, lane, three-point arc, etc.) so the court matches NBA standards.
- **Dynamic scaling of court size:** Prompts were used to implement responsive sizing using SVG viewBox and CSS so the court scales to the viewing screen.
- **Mouse event handlers:** Prompts were used to implement hover-based zone highlighting, tooltip positioning, right-click zone lock, and left-click shot placement (including coordinate mapping and zone/distance logic).

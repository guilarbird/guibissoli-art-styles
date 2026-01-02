# Design Concept: Personal Writing Site

## Selected Approach: Minimal Terminal x Wall Street

<response>
<text>

### Design Movement
**Minimal Terminal** - Swiss Design meets Unix Philosophy. A writer's space that feels like accessing a private server - clean, purposeful, with subtle hacker aesthetics that don't compromise professional credibility. Think a senior developer's personal blog that could also impress a VC partner.

### Core Principles
1. **"Do one thing well"**: Content is king, design serves the writing
2. **Typography-driven hierarchy**: Let the words speak, not the decorations
3. **Subtle terminal references**: Enough to signal tech credibility without being gimmicky
4. **Dark elegance**: Easy on the eyes, serious but not cold

### Color Philosophy
- **Background**: Rich dark (#0A0A0B) - not pure black, has depth
- **Primary text**: Soft white (#E8E8E8) - easy on eyes for long reads
- **Accent**: Cyan (#00D4FF) - tech but sophisticated, links and highlights
- **Secondary**: Warm gray (#9CA3AF) - metadata, dates, subtle info
- **Highlight**: Gold (#C9A227) - special elements, featured content
- **Terminal green**: (#10B981) - for "active" states, success indicators

### Layout Paradigm
- **Asymmetric grid** with generous left margin
- **Content-first**: Articles take center stage
- **Navigation as file paths**: /writings, /about, /newsletter
- **Metadata sidebar**: Dates, tags, reading time in monospace
- **No boxes**: Use border-left accents and spacing instead

### Signature Elements
1. **">" cursor**: Before active navigation items and on focus states
2. **Monospace metadata**: Dates, tags, reading time in JetBrains Mono
3. **Path-style navigation**: /home /writings /about
4. **Timestamp prefixes**: Articles show "2025.12.22" style dates
5. **Subtle blinking cursor**: On page title or active elements

### Interaction Philosophy
- Smooth, minimal transitions (150-200ms)
- Focus states that feel like terminal selection (background highlight)
- Keyboard navigation support (j/k for next/prev article)
- No unnecessary hover effects - purposeful only
- Links underline on hover, not by default

### Animation Guidelines
- **Page load**: Subtle fade-in, no dramatic effects
- **Scroll**: Content fades in gently as it enters viewport
- **Cursor blink**: 1s interval, subtle opacity change
- **Hover**: Slight color shift, no scale or movement
- **Transitions**: Ease-out timing, never bounce

### Typography System
- **Headlines**: Space Grotesk (600-700) - geometric, modern, slightly techy
- **Body**: Inter (400) - maximum readability for long-form content
- **Metadata/Code**: JetBrains Mono (400) - terminal feel for dates, tags
- **Scale**: 48/36/24/20/16/14px with clear hierarchy
- **Line height**: 1.7 for body text (comfortable reading)

</text>
<probability>0.06</probability>
</response>

## Site Structure

```
/home (landing)
├── Hero with name + tagline
├── Featured writing
└── Newsletter CTA

/writings
├── All articles list
├── Filter by topic
└── Search

/about
├── Bio
├── Current work (Coins.xyz)
└── Contact/Social links

/newsletter
├── Subscribe form
└── Archive preview
```

## Content Migration Plan
- Import articles from LinkedIn newsletter
- Maintain original publish dates
- Add proper tags: #web3 #stablecoins #fintech #global-south
- Feature image from LinkedIn or generate new ones

## Easter Eggs
- Konami code reveals matrix rain effect briefly
- Typing "ls" anywhere shows a terminal-style file listing
- "gui" in the design references "graphical user interface"

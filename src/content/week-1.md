---
title: "Week 1 Matchups"
slug: "week-1"
date: "2024-09-05"
---
```

Now the follow up question — **why the square brackets on `[slug].astro`?**

What do you think that tells Astro when it sees a file named that way? Think about it from Astro's perspective — it's looking at your pages folder and sees:
```
pages/
└── weeklymatchups/
    ├── index.astro      ← it knows what this is
    └── [slug].astro     ← what does this mean to Astro?
```

vs if you had named it:
```
    └── week-1.astro     ← this would only ever be ONE page
const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle, LevelFormat } = require("docx");

const doc = new Document({
  numbering: {
    config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 260, hanging: 200 } } } }] }],
  },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 720, bottom: 720, left: 720, right: 720 } } },
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 }, children: [new TextRun({ text: "NABINTOU S. FOFANA", bold: true, size: 32, color: "1A1A1A" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 }, children: [new TextRun({ text: "Plano, TX • nabintousfofana@gmail.com • 682-257-7208 • github.com/NabintouSFofana", size: 18, color: "555555" })] }),

      new Paragraph({ spacing: { before: 100, after: 100 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "1A1A1A" } }, children: [new TextRun({ text: "EDUCATION", bold: true, size: 22, color: "1A1A1A" })] }),

      new Paragraph({ spacing: { after: 20 }, children: [new TextRun({ text: "The University of Texas at Dallas", bold: true, size: 20 }), new TextRun({ text: " — ", size: 20 }), new TextRun({ text: "Expected May 2027", size: 20, italics: true })] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "B.S. in Software Engineering", size: 18 })] }),

      new Paragraph({ spacing: { before: 100, after: 100 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "1A1A1A" } }, children: [new TextRun({ text: "EXPERIENCE", bold: true, size: 22, color: "1A1A1A" })] }),

      new Paragraph({ spacing: { after: 20 }, children: [new TextRun({ text: "Full-Stack Developer, Schicgirl™", bold: true, size: 20 }), new TextRun({ text: " | March 2024 – Present", size: 18, italics: true })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text: "Built and maintain a bilingual (FR/EN) natural-hair brand's front end — 80+ live pages including storefront, sales pages, diagnostics, booking, and an AI assistant. All hand-written HTML/CSS/JS with no build step, hosted on GitHub Pages.", size: 18 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text: "Shipped CoilCare™ AI using Anthropic Claude API for streaming responses, custom prompts, and persistent chat history. Integrated Supabase auth with row-level security across 11 tables for a paid membership platform with private forum and 113-lesson studio.", size: 18 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 100 }, children: [new TextRun({ text: "Built admin dashboards with SHA-256 auth, usage analytics, and one-click GitHub publishing. Wired backends using Google Apps Script, Sheets, and self-hosted bilingual PDF delivery.", size: 18 })] }),

      new Paragraph({ spacing: { before: 100, after: 100 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "1A1A1A" } }, children: [new TextRun({ text: "SELECTED PROJECTS", bold: true, size: 22, color: "1A1A1A" })] }),

      new Paragraph({ spacing: { after: 20 }, children: [new TextRun({ text: "TerraScape — Unity/C# Procedural Terrain Sandbox", bold: true, size: 20 }), new TextRun({ text: " | 2026", size: 18, italics: true })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text: "Built click-to-place/rotate/delete object placement system using Physics.Raycast for mouse picking. Created fractal L-system engine — grammar data class and recursive turtle-graphics interpreter that grows tree geometry and space-filling curves (dragon curve, Koch, Hilbert, Sierpinski) from string-grammar rules.", size: 18 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 100 }, children: [new TextRun({ text: "Set up team's Git workflow: repo structure, Unity .gitignore, branch-per-feature convention, and onboarding docs so four teammates with varying Git experience could contribute without clashing on scene files.", size: 18 })] }),

      new Paragraph({ spacing: { after: 20 }, children: [new TextRun({ text: "InsightFlow — CSV-to-PDF Analytics App", bold: true, size: 20 }), new TextRun({ text: " | 2026", size: 18, italics: true })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text: "Flask web app and CLI that transforms messy CSVs into one-page PDF reports with summary stats, charts, and plain-English observations. Refactored single 500-line script into reusable modules (cleaner, insights, reporter).", size: 18 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 100 }, children: [new TextRun({ text: "Deployed on Render. Stack: Python, Flask, Pandas, Matplotlib, FPDF, Gunicorn.", size: 18 })] }),

      new Paragraph({ spacing: { after: 20 }, children: [new TextRun({ text: "Math Adventure — Spring Boot K–5 Math Platform", bold: true, size: 20 }), new TextRun({ text: " | 2025", size: 18, italics: true })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text: "Six-person Software Engineering course project. Returned solo to rebuild the back end: refactored static utility classes into Spring services with dependency injection, converted plain-string responses to JSON DTOs with proper HTTP status codes, split 635-line front-end into 8 ES modules.", size: 18 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 100 }, children: [new TextRun({ text: "Grew test suite from 30 to 50 cases. Stack: Java, Spring Boot, REST, JUnit, vanilla JavaScript.", size: 18 })] }),

      new Paragraph({ spacing: { before: 100, after: 100 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "1A1A1A" } }, children: [new TextRun({ text: "SKILLS", bold: true, size: 22, color: "1A1A1A" })] }),

      new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "Languages: ", bold: true, size: 18 }), new TextRun({ text: "Python, Java, JavaScript, C#, HTML, CSS, SQL", size: 18 })] }),
      new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "Frameworks: ", bold: true, size: 18 }), new TextRun({ text: "Flask, Spring Boot, Supabase, React (learning)", size: 18 })] }),
      new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "Tools & Platforms: ", bold: true, size: 18 }), new TextRun({ text: "Git/GitHub, Unity, Google Apps Script, Render, Pandas, Matplotlib, FPDF", size: 18 })] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "AI & Prompt Design: ", bold: true, size: 18 }), new TextRun({ text: "Claude API, prompt engineering, system prompts, few-shot learning", size: 18 })] }),

      new Paragraph({ spacing: { before: 100, after: 100 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "1A1A1A" } }, children: [new TextRun({ text: "LEADERSHIP", bold: true, size: 22, color: "1A1A1A" })] }),

      new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Math Adventure Back-End Rebuild — ", bold: true, size: 18 }), new TextRun({ text: "Led solo refactor of team project, demonstrating ownership and technical depth.", size: 18 })] }),
      new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: "Event Planning & Vendor Marketplace — ", bold: true, size: 18 }), new TextRun({ text: "Authored comprehensive project planning deliverables for 4-person team: 70-task Work Breakdown Structure, 232-day Critical Path schedule, 12-risk register with response plans, and Earned Value Management tracking (SPI/CPI).", size: 18 })] }),
    ]
  }]
});

Packer.toBuffer(doc).then((buffer) => {
  require("fs").writeFileSync("Nabintou_Fofana_resume.docx", buffer);
  console.log("Resume DOCX created");
});

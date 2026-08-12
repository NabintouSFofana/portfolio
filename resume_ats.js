const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle, LevelFormat } = require("docx");

const doc = new Document({
  numbering: {
    config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 240, hanging: 180 } } } }] }],
  },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 900, bottom: 900, left: 800, right: 800 } } },
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 }, children: [new TextRun({ text: "NABINTOU S. FOFANA", bold: true, size: 28 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: [new TextRun({ text: "Plano, TX · 682-257-7208 · nabintousfofana@gmail.com", size: 22 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: "github.com/NabintouSFofana · linkedin.com/in/nabintousfofana", size: 22 })] }),

      new Paragraph({ spacing: { before: 0, after: 60 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6 } }, children: [new TextRun({ text: "EDUCATION", bold: true, size: 24 })] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: "University of Texas at Dallas", bold: true, size: 22 }), new TextRun({ text: "  |  ", size: 22 }), new TextRun({ text: "B.S. Software Engineering", size: 22 }), new TextRun({ text: "  |  ", size: 22 }), new TextRun({ text: "Expected May 2027", italics: true, size: 22 })] }),

      new Paragraph({ spacing: { before: 0, after: 60 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6 } }, children: [new TextRun({ text: "EXPERIENCE", bold: true, size: 24 })] }),
      new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "Freelance Developer — Schicgirl™", bold: true, size: 22 }), new TextRun({ text: "  |  Mar 2024 – Present", italics: true, size: 22 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text: "Built and manage a bilingual natural-hair platform (80+ pages, 38 HTML sources) from the ground up using hand-written HTML/CSS/JS, no framework. Deployed on GitHub Pages.", size: 22 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text: "Architected Supabase backend with row-level security across 11 tables to gate a paid membership, forum, and interactive studio. Single login opens everything at once.", size: 22 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 120 }, children: [new TextRun({ text: "Caught and fixed production bugs: token expiry locking paying members out (refresh-before-expiry + retry), dropdown value mismatch causing silent data corruption, translated form fields storing different values per language.", size: 22 })] }),

      new Paragraph({ spacing: { before: 0, after: 60 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6 } }, children: [new TextRun({ text: "PROJECTS", bold: true, size: 24 })] }),
      new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "TerraScape — Unity/C# Terrain Sandbox", bold: true, size: 22 }), new TextRun({ text: "  |  Computer Graphics  |  2026", italics: true, size: 22 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text: "Built object placement system with Physics.Raycast for mouse picking. Implemented fractal L-system engine that generates procedural trees and space-filling curves (Koch, Sierpinski, dragon curve) from grammar rules.", size: 22 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 60 }, children: [new TextRun({ text: "Owned team Git workflow for 4 engineers: set up repo structure, .gitignore, branch conventions, and onboarding docs so teammates with different Git experience could work without colliding on scene files.", size: 22 })] }),

      new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "InsightFlow — CSV Analytics Tool", bold: true, size: 22 }), new TextRun({ text: "  |  2026", italics: true, size: 22 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text: "Flask app and CLI that turns messy CSVs into one-page PDF reports with stats, charts, and plain-English insights. Refactored a single 500-line script into reusable modules.", size: 22 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 60 }, children: [new TextRun({ text: "Deployed to Render. Stack: Python, Flask, Pandas, Matplotlib, FPDF.", size: 22 })] }),

      new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "Math Adventure — Spring Boot Platform", bold: true, size: 22 }), new TextRun({ text: "  |  Software Engineering Course  |  2025", italics: true, size: 22 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 120 }, children: [new TextRun({ text: "Came back solo after the initial team project to rebuild the backend: refactored utility classes into Spring services with dependency injection, converted responses to JSON DTOs with proper status codes, split 635-line frontend into 8 ES modules. Grew tests from 30 to 50 cases.", size: 22 })] }),

      new Paragraph({ spacing: { before: 0, after: 60 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6 } }, children: [new TextRun({ text: "SKILLS", bold: true, size: 24 })] }),
      new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Languages", bold: true, size: 22 }), new TextRun({ text: "  Python, Java, JavaScript, C#, HTML, CSS, SQL", size: 22 })] }),
      new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Frameworks", bold: true, size: 22 }), new TextRun({ text: "  Flask, Spring Boot, Supabase, React (learning)", size: 22 })] }),
      new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: "Tools", bold: true, size: 22 }), new TextRun({ text: "  Git, GitHub, Unity, Google Apps Script, Render, Pandas, Matplotlib, FPDF, Linux", size: 22 })] }),
    ]
  }]
});

Packer.toBuffer(doc).then((buffer) => {
  require("fs").writeFileSync("Nabintou_Fofana_Resume_NEW.docx", buffer);
  const fs = require("fs");
  fs.renameSync("Nabintou_Fofana_Resume_NEW.docx", "Nabintou_Fofana_resume.docx");
  console.log("Resume updated");
});

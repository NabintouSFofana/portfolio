from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

INK = colors.HexColor("#1A1A1A")
MUTE = colors.HexColor("#666666")
RULE = colors.HexColor("#CCCCCC")

FONT = "Helvetica"
FONT_B = "Helvetica-Bold"
FONT_I = "Helvetica-Oblique"

styles = {}
styles["name"] = ParagraphStyle("name", fontName=FONT_B, fontSize=18, leading=20, textColor=INK, alignment=TA_CENTER, spaceAfter=3)
styles["contact"] = ParagraphStyle("contact", fontName=FONT, fontSize=9.5, leading=11, textColor=MUTE, alignment=TA_CENTER, spaceAfter=12)
styles["section"] = ParagraphStyle("section", fontName=FONT_B, fontSize=11, leading=13, textColor=INK, spaceBefore=8, spaceAfter=4)
styles["titledate"] = ParagraphStyle("titledate", fontName=FONT_B, fontSize=10, leading=12, textColor=INK)
styles["subtitle"] = ParagraphStyle("subtitle", fontName=FONT_I, fontSize=9, leading=11, textColor=MUTE, spaceAfter=6)
styles["bullet"] = ParagraphStyle("bullet", fontName=FONT, fontSize=9.5, leading=11, textColor=INK, leftIndent=14, bulletIndent=4, spaceAfter=6)
styles["skillrow"] = ParagraphStyle("skillrow", fontName=FONT, fontSize=9.5, leading=11, textColor=INK, spaceAfter=4)

def hr_table():
    t = Table([[""]],colWidths=[7.5*inch])
    t.setStyle(TableStyle([
        ("LINEBELOW", (0,0), (-1,-1), 1, RULE),
        ("TOPPADDING", (0,0), (-1,-1), 0),
        ("BOTTOMPADDING", (0,0), (-1,-1), 4),
    ]))
    return t

def title_with_date(title, date):
    rows = [[Paragraph(title, styles["titledate"]), Paragraph(date, ParagraphStyle("date", fontName=FONT_I, fontSize=9, textColor=MUTE, alignment=TA_RIGHT))]]
    t = Table(rows, colWidths=[5.5*inch, 2*inch])
    t.setStyle(TableStyle([
        ("VALIGN", (0,0), (-1,-1), "TOP"),
        ("LEFTPADDING", (0,0), (-1,-1), 0),
        ("RIGHTPADDING", (0,0), (-1,-1), 0),
    ]))
    return t

def bullet(text):
    return Paragraph(f"• {text}", styles["bullet"])

story = []

# HEADER
story.append(Paragraph("NABINTOU S. FOFANA", styles["name"]))
story.append(Paragraph("Plano, TX • nabintousfofana@gmail.com • 682-257-7208 • github.com/NabintouSFofana", styles["contact"]))
story.append(hr_table())

# EDUCATION
story.append(Paragraph("EDUCATION", styles["section"]))
story.append(title_with_date("The University of Texas at Dallas", "Expected May 2027"))
story.append(Paragraph("B.S. in Software Engineering", styles["subtitle"]))
story.append(Spacer(1, 6))

# EXPERIENCE
story.append(Paragraph("EXPERIENCE", styles["section"]))
story.append(title_with_date("Full-Stack Developer, Schicgirl™", "March 2024 – Present"))
story.append(bullet("Built and maintain a bilingual (FR/EN) natural-hair brand's front end — 80+ live pages including storefront, sales pages, diagnostics, booking, and an AI assistant. All hand-written HTML/CSS/JS with no build step, hosted on GitHub Pages."))
story.append(bullet("Shipped CoilCare™ AI using Anthropic Claude API for streaming responses, custom prompts, and persistent chat history. Integrated Supabase auth with row-level security across 11 tables for a paid membership platform with private forum and 113-lesson studio."))
story.append(bullet("Built admin dashboards with SHA-256 auth, usage analytics, and one-click GitHub publishing. Wired backends using Google Apps Script, Sheets, and self-hosted bilingual PDF delivery."))
story.append(Spacer(1, 6))

# PROJECTS
story.append(Paragraph("SELECTED PROJECTS", styles["section"]))

story.append(title_with_date("TerraScape — Unity/C# Procedural Terrain Sandbox", "2026"))
story.append(bullet("Built click-to-place/rotate/delete object placement system using Physics.Raycast for mouse picking. Created fractal L-system engine — grammar data class and recursive turtle-graphics interpreter that grows tree geometry and space-filling curves (dragon curve, Koch, Hilbert, Sierpinski) from string-grammar rules."))
story.append(bullet("Set up team's Git workflow: repo structure, Unity .gitignore, branch-per-feature convention, and onboarding docs so four teammates with varying Git experience could contribute without clashing on scene files."))
story.append(Spacer(1, 4))

story.append(title_with_date("InsightFlow — CSV-to-PDF Analytics App", "2026"))
story.append(bullet("Flask web app and CLI that transforms messy CSVs into one-page PDF reports with summary stats, charts, and plain-English observations. Refactored single 500-line script into reusable modules (cleaner, insights, reporter)."))
story.append(bullet("Deployed on Render. Stack: Python, Flask, Pandas, Matplotlib, FPDF, Gunicorn."))
story.append(Spacer(1, 4))

story.append(title_with_date("Math Adventure — Spring Boot K–5 Math Platform", "2025"))
story.append(bullet("Six-person Software Engineering course project. Returned solo to rebuild the back end: refactored static utility classes into Spring services with dependency injection, converted plain-string responses to JSON DTOs with proper HTTP status codes, split 635-line front-end into 8 ES modules."))
story.append(bullet("Grew test suite from 30 to 50 cases. Stack: Java, Spring Boot, REST, JUnit, vanilla JavaScript."))
story.append(Spacer(1, 8))

# SKILLS
story.append(Paragraph("SKILLS", styles["section"]))
story.append(Paragraph("<b>Languages:</b> Python, Java, JavaScript, C#, HTML, CSS, SQL", styles["skillrow"]))
story.append(Paragraph("<b>Frameworks:</b> Flask, Spring Boot, Supabase, React (learning)", styles["skillrow"]))
story.append(Paragraph("<b>Tools & Platforms:</b> Git/GitHub, Unity, Google Apps Script, Render, Pandas, Matplotlib, FPDF", styles["skillrow"]))
story.append(Paragraph("<b>AI & Prompt Design:</b> Claude API, prompt engineering, system prompts, few-shot learning", styles["skillrow"]))
story.append(Spacer(1, 8))

# LEADERSHIP
story.append(Paragraph("LEADERSHIP", styles["section"]))
story.append(Paragraph("<b>Math Adventure Back-End Rebuild</b> — Led solo refactor of team project, demonstrating ownership and technical depth.", styles["skillrow"]))
story.append(Paragraph("<b>Event Planning & Vendor Marketplace</b> — Authored comprehensive project planning deliverables for 4-person team: 70-task Work Breakdown Structure, 232-day Critical Path schedule, 12-risk register with response plans, and Earned Value Management tracking (SPI/CPI).", styles["skillrow"]))

doc = SimpleDocTemplate(
    "Nabintou_Fofana_resume.pdf",
    pagesize=LETTER,
    topMargin=0.6*inch, bottomMargin=0.6*inch,
    leftMargin=0.6*inch, rightMargin=0.6*inch,
    title="Nabintou S. Fofana - Resume",
)
doc.build(story)
print("PDF created")

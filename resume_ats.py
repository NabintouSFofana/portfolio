from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT

INK = colors.HexColor("#000000")

styles = {}
styles["name"] = ParagraphStyle("name", fontName="Times-Bold", fontSize=16, leading=18, textColor=INK, alignment=TA_CENTER, spaceAfter=3)
styles["contact"] = ParagraphStyle("contact", fontName="Times-Roman", fontSize=11, leading=12, textColor=INK, alignment=TA_CENTER, spaceAfter=2)
styles["section"] = ParagraphStyle("section", fontName="Times-Bold", fontSize=12, leading=13, textColor=INK, spaceBefore=8, spaceAfter=4)
styles["titledate"] = ParagraphStyle("titledate", fontName="Times-Bold", fontSize=11, leading=13, textColor=INK, spaceAfter=4)
styles["bullet"] = ParagraphStyle("bullet", fontName="Times-Roman", fontSize=11, leading=13, textColor=INK, leftIndent=15, bulletIndent=3, spaceAfter=5)
styles["skillrow"] = ParagraphStyle("skillrow", fontName="Times-Roman", fontSize=11, leading=13, textColor=INK, spaceAfter=3)

def hr_table():
    t = Table([[""]],colWidths=[7.5*inch])
    t.setStyle(TableStyle([
        ("LINEBELOW", (0,0), (-1,-1), 0.5, colors.HexColor("#000000")),
        ("TOPPADDING", (0,0), (-1,-1), 0),
        ("BOTTOMPADDING", (0,0), (-1,-1), 2),
    ]))
    return t

def bullet(text):
    return Paragraph(f"• {text}", styles["bullet"])

story = []

# HEADER
story.append(Paragraph("NABINTOU S. FOFANA", styles["name"]))
story.append(Paragraph("Plano, TX · 682-257-7208 · nabintousfofana@gmail.com", styles["contact"]))
story.append(Paragraph("github.com/NabintouSFofana · linkedin.com/in/nabintousfofana", styles["contact"]))
story.append(Spacer(1, 6))
story.append(hr_table())
story.append(Spacer(1, 6))

# EDUCATION
story.append(Paragraph("EDUCATION", styles["section"]))
story.append(Paragraph("University of Texas at Dallas  |  B.S. Software Engineering  |  Expected May 2027", styles["titledate"]))
story.append(Spacer(1, 8))

# EXPERIENCE
story.append(Paragraph("EXPERIENCE", styles["section"]))
story.append(Paragraph("Freelance Developer — Schicgirl™  |  Mar 2024 – Present", styles["titledate"]))
story.append(bullet("Built and manage a bilingual natural-hair platform (80+ pages, 38 HTML sources) from the ground up using hand-written HTML/CSS/JS, no framework. Deployed on GitHub Pages."))
story.append(bullet("Architected Supabase backend with row-level security across 11 tables to gate a paid membership, forum, and interactive studio. Single login opens everything at once."))
story.append(bullet("Caught and fixed production bugs: token expiry locking paying members out (refresh-before-expiry + retry), dropdown value mismatch causing silent data corruption, translated form fields storing different values per language."))
story.append(Spacer(1, 8))

# PROJECTS
story.append(Paragraph("PROJECTS", styles["section"]))

story.append(Paragraph("TerraScape — Unity/C# Terrain Sandbox  |  Computer Graphics  |  2026", styles["titledate"]))
story.append(bullet("Built object placement system with Physics.Raycast for mouse picking. Implemented fractal L-system engine that generates procedural trees and space-filling curves (Koch, Sierpinski, dragon curve) from grammar rules."))
story.append(bullet("Owned team Git workflow for 4 engineers: set up repo structure, .gitignore, branch conventions, and onboarding docs so teammates with different Git experience could work without colliding on scene files."))
story.append(Spacer(1, 4))

story.append(Paragraph("InsightFlow — CSV Analytics Tool  |  2026", styles["titledate"]))
story.append(bullet("Flask app and CLI that turns messy CSVs into one-page PDF reports with stats, charts, and plain-English insights. Refactored a single 500-line script into reusable modules."))
story.append(bullet("Deployed to Render. Stack: Python, Flask, Pandas, Matplotlib, FPDF."))
story.append(Spacer(1, 4))

story.append(Paragraph("Math Adventure — Spring Boot Platform  |  Software Engineering Course  |  2025", styles["titledate"]))
story.append(bullet("Came back solo after the initial team project to rebuild the backend: refactored utility classes into Spring services with dependency injection, converted responses to JSON DTOs with proper status codes, split 635-line frontend into 8 ES modules. Grew tests from 30 to 50 cases."))
story.append(Spacer(1, 8))

# SKILLS
story.append(Paragraph("SKILLS", styles["section"]))
story.append(Paragraph("<b>Languages</b>  Python, Java, JavaScript, C#, HTML, CSS, SQL", styles["skillrow"]))
story.append(Paragraph("<b>Frameworks</b>  Flask, Spring Boot, Supabase, React (learning)", styles["skillrow"]))
story.append(Paragraph("<b>Tools</b>  Git, GitHub, Unity, Google Apps Script, Render, Pandas, Matplotlib, FPDF, Linux", styles["skillrow"]))

doc = SimpleDocTemplate(
    "Nabintou_Fofana_resume.pdf",
    pagesize=LETTER,
    topMargin=0.6*inch, bottomMargin=0.6*inch,
    leftMargin=0.65*inch, rightMargin=0.65*inch,
    title="Nabintou S. Fofana - Resume",
)
doc.build(story)
print("Resume updated")

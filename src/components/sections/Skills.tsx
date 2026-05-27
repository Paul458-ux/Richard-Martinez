import { Reveal } from "@/components/Reveal";
import { BarChart3, Database, Code2, Cloud, Bot, Users } from "lucide-react";

const categories = [
  {
    icon: BarChart3,
    title: "Analytics & Strategy",
    skills: [
      { name: "Marketplace Analytics", level: 95 },
      { name: "Conversion Funnel Analysis", level: 95 },
      { name: "Cohort & Retention Analysis", level: 92 },
      { name: "Pricing & Incentive Analysis", level: 90 },
      { name: "LTV / GMV / Unit Economics", level: 88 },
      { name: "A/B Testing & Experiment Design", level: 92 },
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: [
      { name: "SQL / T-SQL / PostgreSQL", level: 98 },
      { name: "ETL Pipelines & Data Modeling", level: 95 },
      { name: "Python / Pandas", level: 95 },
      { name: "Data Warehouse Concepts", level: 90 },
      { name: "Materialized Views / Indexing", level: 88 },
      { name: "API Data Integration", level: 92 },
    ],
  },
  {
    icon: Code2,
    title: "Software Engineering",
    skills: [
      { name: "C# / ASP.NET Core", level: 98 },
      { name: "React / TypeScript", level: 92 },
      { name: "REST APIs / GraphQL", level: 90 },
      { name: "Entity Framework", level: 88 },
      { name: "Microservices Architecture", level: 85 },
      { name: "Secure API Development", level: 88 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS Services", level: 92 },
      { name: "Azure & Azure DevOps", level: 90 },
      { name: "Docker / Kubernetes", level: 85 },
      { name: "CI/CD Pipelines", level: 88 },
      { name: "Git / GitHub Actions", level: 90 },
      { name: "Monitoring & Logging", level: 85 },
    ],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    skills: [
      { name: "OpenAI API / Azure OpenAI", level: 90 },
      { name: "AI-Assisted Analytics", level: 88 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Workflow Automation", level: 92 },
      { name: "Intelligent Reporting", level: 88 },
      { name: "Natural Language Queries", level: 82 },
    ],
  },
  {
    icon: Users,
    title: "Leadership & Collaboration",
    skills: [
      { name: "Product Partnership", level: 95 },
      { name: "Stakeholder Communication", level: 95 },
      { name: "Agile / Sprint Planning", level: 90 },
      { name: "Executive Readouts", level: 88 },
      { name: "Data Storytelling", level: 92 },
      { name: "Cross-Functional Ownership", level: 90 },
    ],
  },
];

const tools = [
  "SQL", "Python", "C#", "TypeScript", "React", "Angular", "Node.js",
  "PostgreSQL", "SQL Server", "MongoDB", "Redis", "MySQL",
  "AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Azure DevOps",
  "Power BI", "Tableau", "Sigma", "DBT", "Excel Modeling",
  "OpenAI", "Azure OpenAI", "REST APIs", "GraphQL", "Entity Framework",
  "Jira", "Agile", "CI/CD", "CloudWatch", "Application Insights",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="thread">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold">My <span className="text-gradient">Skills</span></h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-brand" />
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              A full-spectrum toolkit covering analytics, data engineering, full stack development,
              cloud infrastructure, AI-assisted workflows, and cross-functional leadership.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Reveal key={cat.title} variant="diamond" delay={idx * 0.08}>
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center text-cyan-glow group-hover:bg-gradient-brand group-hover:text-primary-foreground transition-all">
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm">{s.name}</span>
                        <span className="text-xs text-cyan-glow tabular-nums">{s.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-brand shadow-glow" style={{ width: `${s.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tools rows */}
        <Reveal variant="fade">
          <div className="mt-20">
            <h3 className="text-center text-2xl font-bold mb-2">Technologies & Tools I Use</h3>
            <p className="text-center text-muted-foreground text-sm mb-10">Day-to-day stack across engineering, analytics, and cloud infrastructure</p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((t, i) => (
                <Reveal key={t} variant="spinner" delay={i * 0.02}>
                  <span className="px-4 py-2 rounded-full border border-primary/30 bg-card text-sm text-foreground/90 hover:border-cyan-glow hover:text-cyan-glow hover:shadow-glow transition-all cursor-default">
                    {t}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

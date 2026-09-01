import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "HomeEase",
    subtitle:
      "A mobile-first app connecting locals to trusted home service providers — from plumbing to cleaning — in just a few taps.",
    role: "UI/UX Designer",
    tools: ["Figma", "Wireframing", "Usability Testing", "User Research"],
    tags: ["Mobile Design", "Service App", "User Research"],
    category: "Mobile Design",
    accentColor: "#0d9488",
    bgGradient: "linear-gradient(135deg, #0f766e 0%, #0d9488 60%, #14b8a6 100%)",
    imagePath: "/images/homeease/cover.png",
    imageAlt: "HomeEase — Local Service Discovery App",
    featured: true,
    buttonType: "case-study" as const,
    actionHref: "/work/homeease",
    figmaHref: "#", // Replace with your Figma prototype URL
  },
  {
    title: "MediQ",
    subtitle:
      "An AI-powered platform that simplifies medical appointment booking, symptom checking, and patient-doctor communication.",
    role: "UI/UX Designer & Developer",
    tools: ["Figma", "React", "User Research", "Prototyping"],
    tags: ["AI", "Healthcare", "Web App"],
    category: "Web Design",
    accentColor: "#7c3aed",
    bgGradient: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 60%, #a78bfa 100%)",
    imagePath: "/images/mediq/cover.png",
    imageAlt: "MediQ — AI-Powered Medical Appointment Platform",
    featured: false,
    buttonType: "project" as const,
    actionHref: "/work/mediq",
    figmaHref: "#", // Replace with your Figma prototype URL
  },
  {
    title: "Herald Sync",
    subtitle:
      "Mobile application UI/UX design completed during an internship at Herald Development Platform, focusing on improving the user experience.",
    role: "UI/UX Design Intern",
    tools: ["Figma", "Prototyping", "UI Design"],
    tags: ["Mobile Design", "Internship"],
    category: "Mobile Design",
    accentColor: "#2563eb",
    bgGradient: "linear-gradient(135deg, #1e40af 0%, #2563eb 60%, #60a5fa 100%)",
    imagePath: "/images/herald-sync/cover.png",
    imageAlt: "Herald Sync — Mobile Application Design",
    featured: false,
    buttonType: "project" as const,
    actionHref: "/work/herald-sync",
    figmaHref: "#", // Replace with your Figma prototype URL
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-28 px-6 bg-[#f8f8fb]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-500 mb-4 block">
                Portfolio
              </span>
              <h2 className="text-4xl font-bold text-stone-900 tracking-tight">
                Selected Work
              </h2>
            </div>
            <p className="text-stone-500 text-sm max-w-xs leading-relaxed">
              Projects that reflect my design thinking, user research process,
              and problem-solving approach.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

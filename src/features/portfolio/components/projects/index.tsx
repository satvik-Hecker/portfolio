import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PROJECTS } from "@/features/portfolio/data/projects"

import { ProjectCard } from "./project-card"
import { ProjectsScrollControls } from "./projects-scroll-controls"

const ID = "projects"
const SCROLLER_ID = "projects-scroller"

export function Projects() {
  return (
    <Panel id={ID}>
      <PanelHeader className="flex items-center justify-between gap-4">
        <PanelTitle>Projects</PanelTitle>
        <ProjectsScrollControls scrollerId={SCROLLER_ID} />
      </PanelHeader>

      <div
        id={SCROLLER_ID}
        tabIndex={0}
        aria-label="Projects, scroll sideways for more"
        className="flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto overscroll-x-contain p-4 outline-none [scrollbar-width:none] focus-visible:inset-ring-2 focus-visible:inset-ring-ring/50 [&::-webkit-scrollbar]:hidden"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Panel>
  )
}

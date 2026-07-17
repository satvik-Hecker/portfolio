import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PROJECTS } from "@/features/portfolio/data/projects"
import type { Project } from "@/features/portfolio/types/projects"

import { ProjectItem } from "./project-item"

const ID = "projects"
const MAX = 4

export function Projects() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          Projects
        </PanelTitle>
      </PanelHeader>

      <div className="p-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <ProjectList projects={PROJECTS.slice(0, MAX)} />
      </div>

      {PROJECTS.length > MAX && (
        <Collapsible className="p-4 group/collapsible ">
          <CollapsibleContent render={<div className="grid grid-cols-1 gap-6 sm:grid-cols-2" />}>
            <ProjectList projects={PROJECTS.slice(MAX)} />
          </CollapsibleContent>

          <div className="mt-6 flex items-center justify-center">
            <CollapsibleTrigger
              render={
                <Button
                  className="gap-2 pr-2.5 pl-3"
                  variant="secondary"
                  size="sm"
                >
                  <span className="hidden group-data-closed/collapsible:block">
                    Show more
                  </span>

                  <span className="hidden group-data-open/collapsible:block">
                    Show less
                  </span>

                  <ChevronDownIcon className="group-data-open/collapsible:rotate-180" />
                </Button>
              }
            />
          </div>
        </Collapsible>
      )}
    </Panel>
  )
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </>
  )
}

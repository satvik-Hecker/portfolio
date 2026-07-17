import Image from "next/image"
import { GlobeIcon, LinkIcon } from "lucide-react"
import { GitHubIcon } from "@/components/icons"
import { addQueryParams } from "@/utils/url"
import { UTM_PARAMS } from "@/config/site"
import { Tag } from "@/components/ui/tag"
import { Prose } from "@/components/base/ui/typography"
import { Markdown } from "@/components/markdown"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"

import type { Project, ProjectStatus } from "../../types/projects"

function getStatusStyles(status?: ProjectStatus) {
  switch (status) {
    case "live":
      return "bg-green-500/10 text-green-500 ring-green-500/20"
    case "in-progress": 
      return "bg-amber-500/10 text-amber-500 ring-amber-500/20"
    case "archived":
      return "bg-muted text-muted-foreground ring-line"
    default:
      return "bg-muted text-muted-foreground ring-line"
  }
}

export function ProjectItem({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  const displayImg = project.image || project.logo
  const statusStr = project.status ? project.status.replace("-", " ") : undefined

  return (
    <div
      className={`group flex h-full flex-col overflow-hidden  border border-line bg-card transition-all hover:border-muted-foreground/30 hover:shadow-sm ${className || ""}`}
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-line bg-muted/50">
        {displayImg ? (
          <Image
            src={displayImg}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={displayImg.endsWith('.svg')}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <GlobeIcon className="size-8 opacity-20" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="line-clamp-1 font-medium leading-snug text-foreground">
            {project.title}
          </h3>
          {statusStr && (
            <span
              className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[0.625rem] font-medium ring-1 ring-inset capitalize select-none ${getStatusStyles(project.status)}`}
            >
              {statusStr}
            </span>
          )}
        </div>

        {project.description && (
          <div className="mb-4 text-sm text-muted-foreground line-clamp-3">
            <Prose className="text-sm">
              <Markdown>{project.description}</Markdown>
            </Prose>
          </div>
        )}

        {project.skills && project.skills.length > 0 && (
          <ul className="mb-5 mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.skills.map((tech, index) => (
              <li key={index} className="flex">
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-line/50">
          {project.githubUrl && (
            <Tooltip>
              <TooltipTrigger render={
                <a
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="size-4" />
                  <span>Code</span>
                </a>
              } />
              <TooltipContent>View Repository</TooltipContent>
            </Tooltip>
          )}

          {project.liveUrl && (
            <Tooltip>
              <TooltipTrigger render={
                <a
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  href={addQueryParams(project.liveUrl, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="size-4" />
                  <span>Live</span>
                </a>
              } />
              <TooltipContent>Open Live Site</TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  )
}

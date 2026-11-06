import Image from "next/image"
import { ArrowUpRightIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { addQueryParams } from "@/utils/url"
import { HoverBrackets } from "@/components/hover-brackets"
import { GitHubIcon } from "@/components/icons"
import { Tag } from "@/components/ui/tag"

import { findTechIcon } from "../../tech-stack-icon"
import type { Project } from "../../types/projects"

function ProjectImage({ project }: { project: Project }) {
  const src = project.image ?? project.logo
  if (src) {
    return (
      <Image
        src={src}
        alt={`${project.title} preview`}
        fill
        sizes="320px"
        className="object-cover object-top transition-transform duration-300 ease-out group-hover/project:scale-[1.03]"
        unoptimized={src.endsWith(".svg")}
      />
    )
  }

  // Placeholder until a screenshot is added: dotted grid with the project name
  return (
    <div className="flex size-full items-center justify-center bg-muted bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] bg-size-[14px_14px] p-6">
      <span className="text-center font-pixel-square text-3xl leading-none text-foreground/80 transition-transform duration-300 ease-out group-hover/project:scale-105">
        {project.title}
      </span>
    </div>
  )
}

function TechTag({ name }: { name: string }) {
  const icon = findTechIcon(name)
  const iconClass =
    "size-3.5 object-contain grayscale transition-[filter] duration-300 group-hover/project:grayscale-0"
  return (
    <Tag className="gap-1">
      {icon && (
        <img
          src={icon.light}
          alt=""
          className={`${iconClass} ${icon.dark ? "dark:hidden" : ""}`}
          loading="lazy"
        />
      )}
      {icon?.dark && (
        <img
          src={icon.dark}
          alt=""
          className={`${iconClass} hidden dark:block`}
          loading="lazy"
        />
      )}
      {name}
    </Tag>
  )
}

const LINK_CLASS =
  "flex items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group/project group/brackets relative flex w-[280px] shrink-0 snap-start flex-col border border-line bg-card sm:w-[320px]">
      <HoverBrackets />

      <div className="relative aspect-16/10 overflow-hidden border-b border-line">
        <ProjectImage project={project} />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        {project.category && (
          <p className="font-mono text-xs text-muted-foreground">
            {project.category}
          </p>
        )}

        <h3 className="font-pixel-square text-2xl leading-none text-balance">
          {project.title}
        </h3>

        {project.description && (
          <p className="line-clamp-2 font-mono text-sm text-muted-foreground">
            {project.description}
          </p>
        )}

        {project.skills.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Tech stack">
            {project.skills.map((skill) => (
              <li key={skill} className="flex">
                <TechTag name={skill} />
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-center gap-4 border-t border-dashed border-line pt-3">
          {project.githubUrl && (
            <a
              className={LINK_CLASS}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub`}
            >
              <GitHubIcon className="size-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              className={LINK_CLASS}
              href={addQueryParams(project.liveUrl, UTM_PARAMS)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
            >
              <ArrowUpRightIcon className="size-4" />
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

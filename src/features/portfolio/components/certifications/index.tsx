import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"

import { CertificationItem } from "./certification-item"

const ID = "certs"

export function Certifications() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          Certifications
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={CERTIFICATIONS}
        max={6}
        renderItem={(item) => <CertificationItem certification={item} />}
      />
    </Panel>
  )
}

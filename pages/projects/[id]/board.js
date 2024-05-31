import { KanbanBoard } from "@/components/board/KanbanBoard"
import { ProjectTabs } from "@/components/tabs/project-tabs"

export default function ProjectBoardPage() {
  return (
    <div>
      <ProjectTabs />
      board
      <KanbanBoard />
    </div>
  )
}

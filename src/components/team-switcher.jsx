import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"
import { FaNoteSticky, FaRegNoteSticky } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function TeamSwitcher() {
  const { isMobile } = useSidebar()
  // const [activeTeam, setActiveTeam] = React.useState(teams[0])
  const { toogleSiderbar } = useSidebar();
  return (
    (<SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <div className="w-full flex justify-center items-center mt-3 gap-2 text-2xl">
            <FaRegNoteSticky className="text-center" />
            {/* {<span>SAIN NOTES</span>} */}
          </div>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>)
  );
}

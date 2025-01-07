import HomePage from "../components/HomePage"
import Sidebar from "../components/SideBar"

export default function Home() {

  return (
    <Sidebar>
      {<HomePage />}
    </Sidebar>
  )
}

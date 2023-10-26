import MenuSelection from "./components/indexComp/main/MenuSelection"
import MenuHeader from "./components/indexComp/header/MenuHeader"

export default function Home() {
  return (
    <main 
    className="main-background w-screen h-screen z-0 
    flex flex-col items-center lg:items-start 
    justify-center p-9 lg:gap-8 gap-8">
      <MenuHeader />
      <MenuSelection />
    </main>
  )
}

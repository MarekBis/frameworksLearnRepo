import { Button } from "flowbite-react"

function App() {

  return (
    <>

    <div className="w-full flex justify-center items-center h-screen">

      <div className="flex flex-wrap gap-2 w-fit bg-gray-300 p-10 rounded-2xl">
      <Button className="bg-violet-950 hover:bg-red-600">Click me</Button>
        <Button gradientMonochrome="success">Success</Button>
        <Button gradientMonochrome="cyan">Cyan</Button>
        <Button gradientMonochrome="teal">Teal</Button>
        <Button gradientMonochrome="lime">Lime</Button>
        <Button gradientMonochrome="failure">Failure</Button>
      </div>
    </div>

  </>
  )
}

export default App

import { Button } from "@/components/ui/button"

function ChaiPage() {
  return (
    <main className="h-full flex justify-center items-center flex-col"> 
      <div>
        ChaiPage 😘
      </div>
        <button className="px-6 py-2 bg-blue-500 rounded my-3 hover:bg-blue-700">Test button</button>
        <Button variant={"destructive"} size='sm'>Shadcn button</Button>
        <Button variant={'chai'} >Chai</Button>
    </main>
  )
}

export default ChaiPage

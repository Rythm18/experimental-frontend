import { useState } from 'react'

import './App.css'
import { Button } from "../components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"


import { RocketIcon } from "@radix-ui/react-icons" 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../components/ui/alert"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <Button>Hello</Button>
      <Accordion type="single" collapsible>
  <AccordionItem className=
"ml-6 mr-10" value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Alert className=
"ml-6 mr-10" variant="destructive">
<RocketIcon className="h-9 w-5" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
</Alert>
    </>
  )
}

export default App

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

type AccordionComponentProps = {
    title: string,
    item: React.ReactNode
}
export default function AccordionComponent({ title, item }: AccordionComponentProps) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="flex items-center justify-between w-full ">
                    <span className="font-bold mb-1">{title}</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent >
                    {item}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

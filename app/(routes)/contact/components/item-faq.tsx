import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ItemFaqProps {
  value: string
  title: string
  content: string | React.ReactNode
}

const ItemFaq: React.FC<ItemFaqProps> = ({
  value,
  content,
  title
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={value}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
 
export default ItemFaq;
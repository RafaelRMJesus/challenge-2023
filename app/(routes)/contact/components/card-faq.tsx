import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardFaqProps {
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  content?: React.ReactNode | string
}

const CardFaq: React.FC<CardFaqProps> = ({
  title,
  description,
  content,
}) => {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
    </Card>
  );
}
 
export default CardFaq;
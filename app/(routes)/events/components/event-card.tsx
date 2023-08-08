import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardEventProps {
  title?: string | React.ReactNode
  separator?: string | React.ReactNode
  description?: string | React.ReactNode
  content?: React.ReactNode | string
  footer?: React.ReactNode | string
}

const CardEvent: React.FC<CardEventProps> = ({
  title,
  description,
  content,
  separator
}) => {
  return (
    <div className="w-2/4">
      <Card className="">
        <CardHeader>
          <CardTitle className="font-extrabold text-3xl">
            {title}
            <div className="flex gap-x-2">
              <Badge variant={"outline"}>Hoje</Badge>
              <Badge variant={"outline"}>Amanhã</Badge>
              <Badge variant={"outline"}>Esta semana</Badge>
              <Badge variant={"outline"}>Nesse fim de semana</Badge>
              <Badge variant={"outline"}>Próxima semana</Badge>
            </div>
          </CardTitle>
          <CardDescription>{separator}</CardDescription>
        </CardHeader>
        <CardContent>
          {content}
        </CardContent>
      </Card>
    </div>
  );
}
 
export default CardEvent;
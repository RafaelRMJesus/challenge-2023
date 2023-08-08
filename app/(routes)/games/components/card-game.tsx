import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardGamesProps {
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  content?: React.ReactNode | string
}

const CardGames: React.FC<CardGamesProps> = ({
  title,
  description,
  content
}) => {
  return (
    <Card className="text-center">
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
 
export default CardGames;
import { Separator } from "@/components/ui/separator";
import CardGame from "./components/card-game";

export default function GamesPage() {
  return (
    <div className="py-8 px-24 mt-6">
      <div className="flex justify-center">
        <h1 
          className="mb-12 text-8xl font-extrabold tracking-tight leading-none" 
        >
           🎮 Games 🎮 
        </h1>
      </div>
      <ul className="gap-x-6 flex">
        <li>
          <CardGame 
            title="Escolha as Comidas Saudáveis 🍊🍏"
            description={<Separator />}
            content={
              <iframe 
                src="https://wordwall.net/pt/embed/bb660205fb904ff0b6c6bddd924d986c?themeId=22&templateId=45&fontStackId=0" 
                width="500" 
                height="380"
                className="rounded-md"
                allowFullScreen
              ></iframe>
            }
          />
        </li>
        <li>
        <CardGame 
            title="PacMan Sustentável 🕹️👻"
            description={<Separator />}
            content={
              <iframe 
                src="https://wordwall.net/pt/embed/3cf4624e7efc477db2b209377e35c181?themeId=23&templateId=49&fontStackId=0" 
                width="500" 
                height="380"
                className="rounded-md"
                allowFullScreen
              ></iframe>
            }
          />
        </li>
        <li>
        <CardGame 
            title="Quiz dos 5 R's 🧩"
            description={<Separator />}
            content={
              <iframe 
                src="https://wordwall.net/pt/embed/96f8ff22a88d415a9ecf2796bd0212a2?themeId=49&templateId=3&fontStackId=0" 
                width="500" 
                height="380"
                className="rounded-md"
                allowFullScreen
              ></iframe>
            }
          />
        </li>
      </ul>
    </div>
  )
}

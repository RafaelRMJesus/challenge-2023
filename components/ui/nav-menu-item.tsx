'use client'
 
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Zap } from "lucide-react"
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Games",
    href: "/games",
    description:
      "Aprofunde-se com jogos educativos sobre sustentabilidade.",
  },
  {
    title: "Sustentabilidade",
    href: "/sustentabilidade",
    description: "Nosso compromisso com um futuro sustentável através de soluções ecoeficientes.",
  },
  {
    title: "Contato",
    href: "/contact",
    description:
      "Fale conosco para suporte ou colaborações, descubra como podemos ajudar.",
  },
  {
    title: "Eventos e Atualizações",
    href: "/events",
    description:
      "Mantenha-se atualizado com nossos eventos e novidades mais recentes em gestão de energia e automação.",
  },
]
 
export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuTrigger>Início</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Zap className="h-6 w-6" strokeWidth={3}/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Schneider
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Nosso passado histórico de transformação define a essência do nosso lema atual: Life Is On!
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <Link href="https://www.se.com/br/pt/about-us/company-profile/history/schneider-electric-history.jsp">
                <ListItem  target="_blank"title="Quem somos nós?">
                    Líder em gestão de energia e automação.
                </ListItem>
              </Link>
              <Link href="https://www.se.com/br/pt/work/support/support-center.jsp">
                <ListItem title="Comece aqui!">
                  Entre em contato com um de nossos especialistas.
                </ListItem>
              </Link>
              <Link href="https://loja.se.com/?gclid=CjwKCAjww7KmBhAyEiwA5-PUSjtFzIurvXV4EpYfrCplS0yM7dUf-VpPbvzgr0axG2gmndzEh02VnxoCr08QAvD_BwE">
                <ListItem title="Onde comprar?">
                  Encontre facilmente um distribuidor Schneider Electric
                </ListItem>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explorar</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/video-pitch" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Video Pitch
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
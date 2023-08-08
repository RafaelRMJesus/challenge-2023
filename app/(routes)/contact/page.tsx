
import { Mail, Phone, User2 } from "lucide-react"
import CardFaq from "./components/card-faq"
import ItemFaq from "./components/item-faq"

import { Separator } from "@/components/ui/separator"
import Footer from "@/components/footer"




export default function ContactPage() {
  return (
    <>
    <div className="py-8 px-16 flex align-center justify-center gap-x-6 mt-12">
      <div className="mt-16">
       <h1 
          className="mb-4 text-8xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white" 
        >
          Duvidas Gerais 👉 
        </h1>
      </div>
      <div className="flex gap-x-6">
      <CardFaq 
        title="Cadastro"
        description={<Separator />}
        content={
        <>
          <ItemFaq 
            title="Duvidas?"
            content="lorem lorem lorem lorem lorem lorem lorme"
            value={'value-1'}
          />
          <ItemFaq 
            title="Duvidas?"
            content="lorem lorem lorem lorem lorem lorem lorme"
            value={'value-2'}
          />
           <ItemFaq 
            title="Duvidas?"
            content="lorem lorem lorem lorem lorem lorem lorme"
            value={'value-3'}
          />
            <ItemFaq 
            title="Duvidas?"
            content="lorem lorem lorem lorem lorem lorem lorme"
            value={'value-4'}
          />
        </>
        }
      />
      <CardFaq 
        title="Cadastro"
        description={<Separator />}
        content={
        <>
          <ItemFaq 
            title="Duvidas?"
            content="lorem lorem lorem lorem lorem lorem lorme"
            value={'value-1'}
          />
          <ItemFaq 
            title="Duvidas?"
            content="lorem lorem lorem lorem lorem lorem lorme"
            value={'value-2'}
          />
           <ItemFaq 
            title="Duvidas?"
            content="lorem lorem lorem lorem lorem lorem lorme"
            value={'value-3'}
          />
            <ItemFaq 
            title="Duvidas?"
            content="lorem lorem lorem lorem lorem lorem lorme"
            value={'value-4'}
          />
        </>
        }
      />
      <CardFaq 
        title="Cadastro"
        description={<Separator />}
        content={
        <>
          <ItemFaq 
            title="Duvidas?"
            content="lorem lorem lorem lorem lorem lorem lorme"
            value={'value-1'}
          />
          <ItemFaq 
            title="Duvidas?"
            content="lorem lorem lorem lorem lorem lorem lorme"
            value={'value-2'}
          />
           <ItemFaq 
            title="Duvidas?"
            content="lorem lorem lorem lorem lorem lorem lorme"
            value={'value-3'}
          />
            <ItemFaq 
            title="Duvidas?"
            content="lorem lorem lorem lorem lorem lorem lorme"
            value={'value-4'}
          />
        </>
        }
      />
      </div>
    </div>
    <div>
      <div className="flex justify-center mt-8">
        <h1 
          className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white" 
        >
            Entre em contato com o nosso time de atendimento!
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 
          className="mb-4 text-lg text-gray-900 dark:text-white" 
        >
            nosso time está disponível de segunda a sábado das 08h às 20h, exceto feriados.
        </h1>
      </div>
      <div className="flex justify-center mt-16">
        <ul className="flex gap-x-4">
          <li className="">
            <div className="flex justify-center mb-2 p-2">
              <User2 />
            </div>
            <p className="font-bold">Assitência virtual</p>
          </li>
          <Separator orientation='vertical'/>
          <li>
            <div className="flex justify-center mb-2 p-2">
              <Mail />
            </div>
            <p className="font-bold">E-mail</p>
          </li>
          <Separator orientation='vertical'/>
          <li>
            <div className="flex justify-center mb-2 p-2">
              <Phone />
            </div>
            <p className="font-bold">(11) 97263-8281</p>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

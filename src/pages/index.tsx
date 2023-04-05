import Image from "next/image";
import * as Tabs from '@radix-ui/react-tabs';
import logojs from "public/logojs.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row px-6 md:px-26 lg:px-36">
        <div className="flex flex-col gap-6 py-6 md:py-20 w-full md:w-2/5">
          <Image src={logojs} alt="logojs" width={150} />
          <Tabs.Root defaultValue="tab1">
            <Tabs.List className="flex flex-row gap-2">
              <Tabs.Trigger value="tab1" className="ease-in duration-300 px-2 py-1 flex rounded-full items-center justify-center text-sm font-semibold leading-none text-zinc-400 select-none hover:text-sky-500 data-[state=active]:text-sky-700 data-[state=active]:bg-sky-100 outline-none">
                Pagina inicial
              </Tabs.Trigger>
              <Tabs.Trigger value="tab2" className="ease-in duration-300 px-2 py-1 flex rounded-full items-center justify-center text-sm font-semibold leading-none text-zinc-400 select-none hover:text-sky-500 data-[state=active]:text-sky-700 data-[state=active]:bg-sky-100 outline-none">
                Dúvidas frequentes
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <div className="flex flex-col gap-6 pl-2 pt-6 text-zinc-600">
                <h1 className="text-5xl font-bold text-zinc-800">
                  Maranathá
                </h1>
                <span>
                  Maranathá é um retiro das missões Jovens Sarados Elias Fausto e Monte Mor, onde Deus vem ao nosso encontro e transforma nossas vidas e reescreve as nossas histórias.
                </span>
                <div className="flex justify-start items-center gap-4">
                  <span>
                    Quer fazer parte disso?
                  </span>
                  <Link href={"/register"}>
                  <button className="flex w-fit bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 border border-sky-600 rounded">
                    Cadastre-se
                  </button>
                  </Link>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content value="tab2">
            <div className="flex flex-col gap-6 pl-2 pt-6 text-zinc-600">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-sky-800">
                    Quando será o Maranthá?
                  </h2>
                  <span>
                    Dias 9, 10 e 11 de junho de 2023.
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-sky-800">
                    Onde acontecerá o retiro?
                  </h2>
                  <span>
                    R. Quatro, 401 - Chácaras Planalto, Monte Mor - SP, 13190-000
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-sky-800">
                    O que eu preciso levar?
                  </h2>
                  <span>
                    - Lista itens
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-sky-800">
                    Qual o valor da inscrição?
                  </h2>
                  <span>
                    R$ 50,00 por pessoa.
                  </span>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <span>
                    Não vai ficar de fora não é?
                  </span>
                  <Link href={"/register"}>
                  <button className="flex w-fit bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 border border-sky-600 rounded">
                    Cadastre-se
                  </button>
                  </Link>
                </div>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div className="flex mb-6 my-0 md:my-10 ml-0 md:ml-10 h-full w-full justify-center items-center 
        md:h-2/5 md:w-2/5
        lg:h-[540px] lg:w-[540px]">
          <div className="flex bg-zinc-200 rounded-md ease-in duration-300 h-[220px] w-[220px] hover:h-[230px] hover:w-[230px]
                          md:h-[520px] md:w-[520px] md:hover:h-[530px] md:hover:w-[530px] drop-shadow-md justify-center items-center">
            flyer aqui
          </div>
        </div>

      </div>


      <footer className="flex w-full h-28 bottom-0 bg-zinc-800 justify-center items-center text-zinc-400">
        <span>©2023 Yolanda Ferreira. Todos os direitos reservados</span>
      </footer>

    </div>
  )
}

import Image from "next/image";
import * as Tabs from '@radix-ui/react-tabs';
import logojs from "public/logojs.svg";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row pl-36">
        <div className="flex flex-col gap-6 py-20 w-2/5">
          <Image src={logojs} alt="logojs" width={150} />
          <Tabs.Root defaultValue="tab1">
            <Tabs.List className="flex flex-row gap-2">
              <Tabs.Trigger value="tab1" className="ease-in duration-300 px-2 py-1 flex rounded-full items-center justify-center text-sm font-semibold leading-none text-zinc-400 select-none hover:text-blue-700 data-[state=active]:text-blue-500 data-[state=active]:bg-blue-200 outline-none">
                Pagina inicial
              </Tabs.Trigger>
              <Tabs.Trigger value="tab2" className="ease-in duration-300 px-2 py-1 flex rounded-full items-center justify-center text-sm font-semibold leading-none text-zinc-400 select-none hover:text-blue-700 data-[state=active]:text-blue-500 data-[state=active]:bg-blue-200 outline-none">
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
                  <button className="flex w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Cadastre-se
                  </button>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content value="tab2">

            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div className="flex mt-10 ml-10 h-[540px] w-[540px] justify-center items-center">
          <div className="flex z-0 hover:z-10 bg-zinc-200 rounded-md ease-in duration-300 h-[520px] w-[520px] hover:h-[530px] hover:w-[530px] drop-shadow-md justify-center items-center">
            flyer aqui
          </div>
        </div>

      </div>


      <footer className="flex w-full h-28 absolute bottom-0 bg-zinc-800 justify-center items-center text-zinc-400">
        <span>©2023 Yolanda Ferreira. Todos os direitos reservados</span>
      </footer>

    </div>
  )
}

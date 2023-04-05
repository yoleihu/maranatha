import Image from "next/image";
import Link from "next/link";
import logojs from "public/logojs.svg";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-10 py-28 px-36">
        <Image src={logojs} alt="logojs" width={150} />
        <div className="flex flex-col gap-6 pl-2 w-2/5 justify-start">
          <h1 className="text-5xl font-bold text-zinc-800">
            Maranathá
          </h1>
          <span>
            Maranathá é um retiro das missões Jovens Sarados Elias Fausto e Monte Mor, onde Deus vem ao nosso encontro e transforma nossas vidas e reescreve as nossas histórias.
          </span>
          <div className="flex justify-between items-center">
            <span>
              Quer fazer parte disso?
            </span>
            <button className="flex w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Cadastre-se
            </button>
          </div>
        </div>
      </div>
      <footer className="flex w-full h-28 absolute bottom-0 bg-zinc-800 justify-center items-center text-zinc-400">
        <span>©2023 Yolanda Ferreira. Todos os direitos reservados</span>
      </footer>
    </div>
  )
}

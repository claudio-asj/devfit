import { FaArrowRight } from "react-icons/fa"
import Ilutration from "../../assets/ilustration/img-main.svg"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="">
            <main className="pt-32">
                <img className="mx-auto" src={Ilutration} alt="ilustração de uma pessoa " />
                <img className="mx-auto my-8" src="/logo.svg" alt="Logo do DevFit" />
                <Link to="/menu">
                    <button className="flex items-center mx-auto mt-32 bg-azul-escuro px-8 py-2 rounded text-slate-50 gap-2"> <span>Vamos</span> <FaArrowRight /> </button>
                </Link>
            </main>

            <section className="py-32 text-slate-50">
                <h1 className="text-center text-xl font-bold text-laranja">Boas vindas ao DevFit</h1>
                <h2 className="text-center text-sm mb-4 text-creme">Feito de ❤ por CláudioJr</h2>
                <p className="mb-2">Estamos em desenvolvimento, mas queremos te mostrar como o DevFit funciona! Aqui, todas as informações são seguras e acessíveis apenas por você, usuário.</p>
                <p><strong>1 - Cadastrar Exercício:</strong> Comece registrando seus exercícios, incluindo o nome, o músculo alvo e um link de uma imagem.</p>
                <p><strong>2 - Criar Treino:</strong> Em seguida, monte seu treino escolhendo os exercícios cadastrados e definindo a quantidade de séries, repetições e cargas.</p>
                <p><strong>3 - Treinar:</strong> Por fim, transforme o resto do café em energia para o treino!</p>
            </section>

        </div>
    )
}
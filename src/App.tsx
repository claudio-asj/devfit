import { FaGithub } from "react-icons/fa"
import RouterApp from "./RouterApp"
import DialogHome from "./components/DialogHome"

function App() {

  return (
    <div className="bg-slate-50 dark:bg-slate-800 min-h-screen">
      <div className="max-w-sm mx-auto">
        <RouterApp />

        <DialogHome />
        <footer className="max-w-sm mx-auto flex justify-around p-4 bg-azul-escuro rounded-t-xl">
          <img className="w-24" src="/icon.svg" alt="logo marca do DevFit" />
          <div className="text-slate-50">
            <div className="text-lg font-bold">DevFit</div>
            <div>É um projeto de <a className="underline" href="https://claudiojr.vercel.app" target="_blank">ClaudioJr</a></div>
            <button className="flex items-center gap-2 p-2 bg-slate-200 rounded mt-4 text-slate-900 font-semibold">
              <FaGithub className="text-laranja text-2xl" />
              <span>Github do DevFit</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

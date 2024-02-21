import "./styles.css"
import { useState } from "react"
const AddGame = () => {

    const [form , setForm] = useState({
        "nome": "",
        "categoria": "",
        "url": "",
        "descricao": ""
    })
    // const handleInputs = e => setInputs(prevState => ({...prevState, [e.target.name]: e.target.value}))
    const handleChange = e => setForm(prevState => ({...prevState, [e.target.name]: e.target.value}))
    function handleSubmit(evt) {
        evt.preventDefault()
        if(localStorage.games){
            // to do, optimizar isso
            let games = JSON.parse(localStorage.getItem("games"))
            console.log(games)
            localStorage.setItem("games", [games, JSON.stringify(form)])

        }else{
            localStorage.setItem("games", JSON.stringify(form))
        }
        alert(`cadastrado com sucesso: 
            ${JSON.stringify(form)}`)
    }
    return (
        <section>
            <article>
                 <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome">
                            Nome do Jogo:
                            <input type="text" name="nome" id="nome" onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="categoria">
                            Categoria do Jogo: 
                            <select name="categoria" id="categoria" onChange={handleChange}>
                                <option value="strategy"> Strategy </option>
                                <option value="shooter">Shooter</option>
                                <option value="puzzle">Puzzle</option>
                                <option value="arcade">Arcade</option>
                                <option value="rpg">Role Playing Game (RPG)</option>
                                <option value="sports">Sports</option>
                                <option value="action">Action</option>
                                <option value="adventure">Adventure</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="url">
                            Url de acesso ao jogo:
                            <input type="url" name="url" id="url" onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="descricao">
                            <textarea name="descricao" id="descricao" cols="30" rows="10" onChange={handleChange}>
                               Digite aqui a descrição do jogo
                            </textarea>
                        </label>
                    </div>

                    <button type="submit">Adicionar jogo</button>
                 </form>
            </article>
        </section>
    )
}

// nome, categoria, descrição , 
// extras, url de acesso ao jogo, url do video de demonstração, imagem ilustrativa  
export { AddGame}
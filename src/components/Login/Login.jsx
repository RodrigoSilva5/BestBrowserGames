import "./styles.css"
import { useState, useEffect } from "react"

const Login = () => {
    const [logged, setLogged] = useState(false)
    const [inputs, setInputs] = useState({
        "email": "",
        "senha": ""
    })
    const handleInputs = e => setInputs(prevState => ({...prevState, [e.target.name]: e.target.value}))

    function handleSubmit(evt) {
        evt.preventDefault()
        if(
            // verififica se o login nao existe
            JSON.parse(localStorage.getItem("cadastros")).filter((cadastro) => cadastro.Email === inputs.email && cadastro.Senha === inputs.senha).length === 0
        ){
            // credenciais não existem
            alert("Impossivel logar: verifique login e senha")
        }else{
            // credenciais encontradas 
            setLogged(true)
            alert("Login realizado com sucesso")
        }

        console.log(
            JSON.parse(localStorage.getItem("cadastros")).filter((cadastro) => cadastro.Email === inputs.email && cadastro.Senha === inputs.senha).length
        )
        console.log('wz')
    }
    return (
        <section>
            {logged ? <>Ja Logado</>: 
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">
                        Email:
                        <input type="text" name="email" id="email" onChange={handleInputs} />
                    </label>
                </div>
                <div>
                    <label htmlFor="senha">
                        Senha:
                        <input type="password" name="senha" id="senha" onChange={handleInputs} />
                    </label>
                </div>

                <button type="submit">Login</button>
            </form>
            }
        </section>
    )
}

export { Login }
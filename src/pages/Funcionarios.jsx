import { Link } from 'react-router'

function Funcionarios() {
    return (
        <div className="pagina-funcionarios">
            <h1>Gerenciamento de Funcionarios</h1>
            <p>Escolha uma das opções:</p>
            <div className="opcoes-funcionarios">
                <Link to="/funcionarios/listar">
                    Listar funcionarios
                </Link>
                <Link to="/funcionario/cadastrar">
                    Cadastrar novo funcionario
                </Link>
            </div>
            <Link to="/">
                Voltar para a página inicial
            </Link>
        </div>
    )
}

export default Funcionarios
import { Link } from 'react-router'

function ListaFuncionarios() {
    const funcionarios = [
        {
            id: 1,
            nome: 'Guilherme Santos',
            cpf: '76421598314',
            telefone: '11-964509525',
            email: 'gui@email.com',
        },
        {
            id: 2,
            nome: 'João Pedro',
            cpf: '46597813245',
            telefone: '11-998521164',
            email: 'joao@email.com',
        },
        {
            id: 3,
            nome: 'Bruna Pires',
            cpf: '46752198423',
            telefone: '11-9/596642',
            email: 'bruna@email.com',
        },
    ]
    return (
        <main className="pagina-funcionarios">
            <h1>Lista de Funcionarios</h1>
            <ul className="lista-funcionarios">
                {funcionarios.map((funcionario) => (
                    <li key={funcionario.id}>
                        <strong>{funcionario.nome}</strong>
                        <span>CPF: {funcionario.cpf}</span>
                        <span>Telefone: {funcionario.telefone}</span>
                        <span>E-mail: {funcionario.email}</span>
                    </li>
                ))}
            </ul>
            <Link to="/funcionarios">Voltar para Gerenciamento de
                Funcionarios</Link>
        </main>
    )
}

export default ListaFuncionarios
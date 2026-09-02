import { Link } from 'react-router'

function ListaClientes() {
    const clientes = [
        {
            id: 1,
            nome: 'Ana Souza',
            cpf: '12345678901',
            telefone: '11-998764231',
            email: 'ana@email.com',
        },
        {
            id: 2,
            nome: 'Bruno Lima',
            cpf: '23456789012',
            telefone: '11-985497621',
            email: 'bruno@email.com',
        },
        {
            id: 3,
            nome: 'Carla Mendes',
            cpf: '34567890123',
            telefone: '11-974312598',
            email: 'carla@email.com',
        },
    ]
    return (
        <main className="pagina-clientes">
            <h1>Lista de Clientes</h1>
            <ul className="lista-clientes">
                {clientes.map((cliente) => (
                    <li key={cliente.id}>
                        <strong>{cliente.nome}</strong>
                        <span>CPF: {cliente.cpf}</span>
                        <span>E-mail: {cliente.email}</span>
                    </li>
                ))}
            </ul>
            <Link to="/clientes">Voltar para Gerenciamento de
                Clientes</Link>
        </main>
    )
}

export default ListaClientes
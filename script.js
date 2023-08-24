const listaCarros = [];

function create() {
    let idVeiculo = 1;
    do {
        const modelo = prompt('Qual o modelo do veículo?');
        const marca = prompt('Qual a marca do veículo?');
        const ano = Number(prompt('Qual o ano do veículo?'));
        const cor = prompt('Qual a cor do veículo?');
        const preco = parseFloat(prompt('Qual o preço do veículo?')).toFixed(2);

        listaCarros.push({
            id: idVeiculo,
            modelo,
            marca,
            ano,
            cor,
            preco
        });

        idVeiculo++;
    } while (confirm('Deseja cadastrar um novo veículo?'));
}

function listarVeiculos() {
    if (listaCarros.length === 0) {
        console.log("Nenhum veículo cadastrado.");
        return;
    }

    console.log("Lista de veículos:");

    listaCarros.forEach(veiculo => {
        console.log(`ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Marca: ${veiculo.marca} | Ano: ${veiculo.ano} | Cor: ${veiculo.cor} | Preço: R$${veiculo.preco}`);
    });
}

function filtrarCarrosMarca() {
    const escolhaMarca = prompt('Qual a marca que você deseja filtrar?');
    const veiculosFiltrados = listaCarros.filter(carro => carro.marca.toLowerCase().includes(escolhaMarca.toLowerCase()));

    if (veiculosFiltrados.length === 0) {
        console.log("Nenhum veículo da marca especificada.");
        return;
    }

    console.log(`Veículos da marca ${escolhaMarca}:`);

    veiculosFiltrados.forEach(veiculo => {
        console.log(`ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Cor: ${veiculo.cor} | Preço: R$${veiculo.preco}`);
    });
}

function atualizarVeiculo() {
    const idVeiculoAtualizar = Number(prompt('Qual o ID do veículo que deseja atualizar?'));
    const veiculo = listaCarros.find(veiculo => veiculo.id === idVeiculoAtualizar);

    if (!veiculo) {
        console.log("Veículo não encontrado.");
        return;
    }

    const novaCor = prompt('Qual a nova cor?');
    const novoPreco = parseFloat(prompt('Qual o novo preço?')).toFixed(2);

    veiculo.cor = novaCor;
    veiculo.preco = novoPreco;

    console.log('Veículo atualizado com sucesso:');
    console.log(veiculo);
}

function removerVeiculo() {
    const idVeiculoDeletar = Number(prompt('Qual o ID do veículo que deseja remover?'));
    const index = listaCarros.findIndex(veiculo => veiculo.id === idVeiculoDeletar);

    if (index !== -1) {
        listaCarros.splice(index, 1);
        console.log("Veículo removido com sucesso.");
    } else {
        console.log("Veículo não encontrado.");
    }
}

function sairDoSistema() {
    console.log("Saindo do sistema.");
    process.exit(); // Encerra o programa
}

while (true) {
    const sistemaCRUD = prompt(`Bem-vindo ao sistema de CRUD de veículos:\nNo momento, o sistema tem ${listaCarros.length} carros cadastrados.\nEscolha uma das opções para interagir com o sistema:\n1 - Cadastrar veículo;\n2 - Listar todos os veículos;\n3 - Filtrar veículos por marca;\n4 - Atualizar veículo;\n5 - Remover veículo;\n6 - Sair do sistema.`);

    switch (sistemaCRUD) {
        case '1':
            create();
            break;
        case '2':
            listarVeiculos();
            break;
        case '3':
            filtrarCarrosMarca();
            break;
        case '4':
            atualizarVeiculo();
            break;
        case '5':
            removerVeiculo();
            break;
        case '6':
            sairDoSistema();
            break;
        default:
            console.log("Opção inválida. Digite um número de 1 a 6.");
    }
}

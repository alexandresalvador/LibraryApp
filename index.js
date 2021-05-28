const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


//Aqui é onde é organizado o cadastro
app.get('/login', function(req, res) {
    res.render('login');
});

//Aqui é onde lista todos os itens da livraria (livros, revistas e gibis
app.get('/', function(req, res) {
    res.render('home');
});

//Aqui é onde lista todos os livros disponiveis, generos.
app.get('/livros', function(req, res) {
    res.render('livros');
});

//Aqui é onde seria quando queremos clicar e comprar o livro escolhido
app.get('/livros/id', function(req, res) {
    res.render('livro1');
});

app.get('/pedidos', function(req, res) {
    res.send('Olá, listar o pedido/carrinho de compras');
});


app.listen(9010, (erro) => {
    if(erro) {
        console.log(erro, 'Erro');
    } else {
        console.log('Servidor esta rodando: http://localhost:9010');
    }
});


app.post('/realizar-pedido')  //-> salvar as informações no banco'


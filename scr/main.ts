console.log("Felipe");

// LIVE SERVER é do FRONT-END
// QUEM È O LIVE SERVER DO BACK=END?

// 1 - Para construir um servidor back-end e responder
// Vamos utilizar o express.
import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'
//Criar um objeto do tipo express.
const app = express()
//incluir para ele receber json
app.use(express.json())  //MIddleware
//incluir o CORS -> QUANDO AGENTE TEM OUTRA PORTA 
app.use(cors())
//ROTAS
app.get("/produtos",async (req,res)=>{
try{
    //O que eu tenho que fazer aqui dentro?
    //PASSO 1: Criar o banco de dados
    //PASSO 2: Usar a lib mysql2 para conectar com o banco
    const conexao = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "banco1022b",
        port: 3306
    })
    //PASSO 3: QUERY -> SELECT * FROM produtos
    const [result,fields] = await conexao.query("SELECT * from produtos")
    //PASSO 4: Colocar os dados do banco no response
    res.send(result)
    }catch(e){
        res.status(500).send("Erro do servidor")
    }
})

//INICIAR O SERVIDOR
app.listen(8000,()=>{
    console.log("SERVIDOR INICIADO NA PORTA 8000")
})
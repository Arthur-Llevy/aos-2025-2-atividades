import express from "express"
import cors from "cors"

const app = express();

app.use(cors());

const getRandomPhrase = () => {
    const pharses = [
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Acredite em si mesmo e todo o resto virá naturalmente.",
        "Não tenha medo de ser grande, tenha medo de não tentar.",
        "A única maneira de fazer um excelente trabalho é amar o que você faz.",
        "O único limite para o nosso sucesso de amanhã são as nossas dúvidas de hoje.",
        "Grandes coisas nunca vêm de zonas de conforto.",
        "Não importa o quão devagar você vá, desde que não pare.",
        "A persistência é o caminho do êxito.",
        "O fracasso é apenas o condimento que dá sabor ao sucesso.",
        "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
        "Se você quer alcançar a grandeza, pare de pedir permissão.",
        "A única maneira de prever o futuro é criá-lo.",
        "Acredite no poder dos seus sonhos e faça acontecer.",
        "Nunca é tarde para ser o que você poderia ter sido.",
        "O segredo para seguir em frente é começar."
    ];

    const index = Math.floor(Math.random() * 14);
    return pharses[index];
}

app.get("/random", (req, res) => {
    let randomNumber = Math.floor(Math.random() * 9999);

    return res.json( {randomNumber} );
})


app.get("/inspiration", (req, res) => {
    const pharse = getRandomPhrase();
    
   return res.json({ quote: getRandomPhrase })
})




app.listen(3000, () => {
    console.log("Server on 3000 port");
})
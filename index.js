const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Servidor de Automação dos Triciclos está Online!');
});

app.post('/webhook-pix', async (req, res) => {
    const paymentData = req.body;
    console.log("Notificação recebida do Mercado Pago:", paymentData);

    // Aqui processaremos o pagamento e enviaremos o comando para a ESP32

    res.status(200).send('Webhook recebido com sucesso');
});

app.listen(PORT, () => {
    console.log(`Servidor a rodar na porta ${PORT}`);
});

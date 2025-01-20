// server.js (Backend)
const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the third slide (start game)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'slide3.html'));
});

// Route for the fourth slide (tutorial introduction)
app.post('/tutorial', (req, res) => {
    const userName = req.body.name;
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slide 4 - Tutorial</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <h1>Bem-vindo, ${userName}!</h1>
    <p>França: Um país da europa conhecida pela sua torre eiffel, sua comida típica é o croissant e sua capital é Paris.</p>
    <div class="images">
        <img src="/images/france_flag.png" alt="Bandeira da França">
        <img src="/images/eiffel_tower.png" alt="Torre Eiffel">
        <img src="/images/croissant.png" alt="Croissant">
    </div>
    <button onclick="window.location.href='/tutorial/italy'">Avançar</button>
</body>
</html>`);
});

// Route for the fifth slide (Italy)
app.get('/tutorial/italy', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slide 5 - Italy</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <p>Itália: Um país da europa conhecida pela sua torre de Pisa e sua comida típica é a pizza.</p>
    <div class="images">
        <img src="/images/italy_flag.png" alt="Bandeira da Itália">
        <img src="/images/pisa_tower.png" alt="Torre de Pisa">
        <img src="/images/pizza.png" alt="Pizza">
    </div>
    <button onclick="window.location.href='/tutorial/france'">Voltar</button>
    <button onclick="window.location.href='/tutorial/brazil'">Avançar</button>
</body>
</html>`);
});

// Route for the sixth slide (Brazil)
app.get('/tutorial/brazil', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slide 6 - Brazil</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <p>Brasil: Um país da América conhecido pelo seu Cristo Redentor e uma de suas comidas típicas é a feijoada.</p>
    <div class="images">
        <img src="/images/brazil_flag.png" alt="Bandeira do Brasil">
        <img src="/images/christ_redeemer.png" alt="Cristo Redentor">
        <img src="/images/feijoada.png" alt="Feijoada">
    </div>
    <button onclick="window.location.href='/tutorial/italy'">Voltar</button>
    <button onclick="window.location.href='/tutorial/usa'">Avançar</button>
</body>
</html>`);
});

// Route for the seventh slide (USA)
app.get('/tutorial/usa', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slide 7 - USA</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <p>Estados Unidos: Um país da América conhecido pela sua Estátua da Liberdade e sua comida típica é o hambúrguer.</p>
    <div class="images">
        <img src="/images/usa_flag.png" alt="Bandeira dos EUA">
        <img src="/images/statue_of_liberty.png" alt="Estátua da Liberdade">
        <img src="/images/burger.png" alt="Hambúrguer">
    </div>
    <button onclick="window.location.href='/tutorial/brazil'">Voltar</button>
    <button onclick="window.location.href='/game/phase1/round1'">Avançar</button>
</body>
</html>`);
});

// Route for the eighth slide (Start game)
app.get('/game/start', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slide 8 - Start Game</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <h1>Prepare-se para começar o jogo!</h1>
    <button onclick="window.location.href='/game/phase1/round1'">Começar a Fase 1</button>
</body>
</html>`);
});

// Phase 1 - Round 1: Question about France
app.get('/game/phase1/round1', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fase 1 - Rodada 1</title>
    <link rel="stylesheet" href="/style.css">
    <script>
        function selectOption(correct) {
            if (correct) {
                document.body.style.backgroundColor = 'rgba(0, 255, 0, 0.4)';
                setTimeout(() => window.location.href = '/game/phase1/round2', 1000);
            } else {
                document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
                setTimeout(() => document.body.style.backgroundColor = '', 1000);
            }
        }
    </script>
</head>
<body>
    <h1>Qual é o país conhecido pela Torre Eiffel?</h1>
    <button onclick="selectOption(true)">França</button>
    <button onclick="selectOption(false)">Itália</button>
    <button onclick="selectOption(false)">Brasil</button>
    <button onclick="selectOption(false)">Estados Unidos</button>
</body>
</html>`);
});

// Phase 1 - Round 2: Question about Italy
app.get('/game/phase1/round2', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fase 1 - Rodada 2</title>
    <link rel="stylesheet" href="/style.css">
    <script>
        function selectOption(correct) {
            if (correct) {
                document.body.style.backgroundColor = 'rgba(0, 255, 0, 0.4)';
                setTimeout(() => window.location.href = '/game/phase1/round3', 1000);
            } else {
                document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
                setTimeout(() => document.body.style.backgroundColor = '', 1000);
            }
        }
    </script>
</head>
<body>
    <h1>Qual é o país conhecido pela Torre de Pisa?</h1>
    <button onclick="selectOption(false)">França</button>
    <button onclick="selectOption(true)">Itália</button>
    <button onclick="selectOption(false)">Brasil</button>
    <button onclick="selectOption(false)">Estados Unidos</button>
</body>
</html>`);
});

// Phase 1 - Round 3: Question about Brazil
app.get('/game/phase1/round3', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fase 1 - Rodada 3</title>
    <link rel="stylesheet" href="/style.css">
    <script>
        function selectOption(correct) {
            if (correct) {
                document.body.style.backgroundColor = 'rgba(0, 255, 0, 0.4)';
                setTimeout(() => window.location.href = '/game/phase1/round4', 1000);
            } else {
                document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
                setTimeout(() => document.body.style.backgroundColor = '', 1000);
            }
        }
    </script>
</head>
<body>
    <h1>Qual é o país conhecido pelo Cristo Redentor?</h1>
    <button onclick="selectOption(false)">França</button>
    <button onclick="selectOption(false)">Itália</button>
    <button onclick="selectOption(true)">Brasil</button>
    <button onclick="selectOption(false)">Estados Unidos</button>
</body>
</html>`);
});

// Route for the fourth round of Phase 1
app.get('/game/phase1/round4', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fase 1 - Rodada 4</title>
    <link rel="stylesheet" href="/style.css">
    <script>
        function selectOption(correct) {
            if (correct) {
                document.body.style.backgroundColor = 'rgba(0, 255, 0, 0.4)';
                setTimeout(() => window.location.href = '/game/phase1/completed', 1000);
            } else {
                document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
                setTimeout(() => document.body.style.backgroundColor = '', 1000);
            }
        }
    </script>
</head>
<body>
    <h1>Qual é o país conhecido pela Estátua da Liberdade?</h1>
    <button onclick="selectOption(false)">França</button>
    <button onclick="selectOption(false)">Itália</button>
    <button onclick="selectOption(false)">Brasil</button>
    <button onclick="selectOption(true)">Estados Unidos</button>
</body>
</html>`);
});


// Route for Phase 1 Completion Screen
app.get('/game/phase1/completed', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fase 1 Concluída</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <h1>Parabéns, você terminou a primeira fase!</h1>
    <button onclick="window.location.href='/game/phase2/round1'">Ir para a Fase 2</button>
</body>
</html>`);
});


// Phase 2 - Round 1: Drag and Drop Landmarks
app.get('/game/phase2/round1', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fase 2 - Rodada 1</title>
    <link rel="stylesheet" href="/style.css">
    <script>
        function allowDrop(event) {
            event.preventDefault();
        }

        function drag(event) {
            event.dataTransfer.setData("text", event.target.id);
        }

        function drop(event, targetId) {
            event.preventDefault();
            const data = event.dataTransfer.getData("text");
            if (data === targetId) {
                const element = document.getElementById(data);
                event.target.appendChild(element);
                element.draggable = false;
            }
        }
    </script>
    <style>
        img {
            width: 200px;
            height: 140px;
        }

        .flags-container {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
        }

        .flag-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        .flag, .drop-area {
            width: 220px;
            height: 160px;
            border: 2px dashed #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .drop-area {
            background-color: #f9f9f9;
        }

        .landmarks {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
            padding: 20px;
            background-color: #eaeaea;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <h1>ARRASTE E SOLTE AS IMAGENS DOS PONTOS TURÍSTICOS NA CAIXA DO PAÍS CORRESPONDENTE</h1>
    <div class="flags-container">
        <div class="flag-box">
            <img class="flag" src="/images/usa_flag.png" alt="EUA">
            <div class="drop-area" ondrop="drop(event, 'usa')" ondragover="allowDrop(event)"></div>
        </div>
        <div class="flag-box">
            <img class="flag" src="/images/brazil_flag.png" alt="Brasil">
            <div class="drop-area" ondrop="drop(event, 'brazil')" ondragover="allowDrop(event)"></div>
        </div>
        <div class="flag-box">
            <img class="flag" src="/images/italy_flag.png" alt="Itália">
            <div class="drop-area" ondrop="drop(event, 'italy')" ondragover="allowDrop(event)"></div>
        </div>
        <div class="flag-box">
            <img class="flag" src="/images/france_flag.png" alt="França">
            <div class="drop-area" ondrop="drop(event, 'france')" ondragover="allowDrop(event)"></div>
        </div>
    </div>
    <div class="landmarks">
        <img id="usa" src="/images/statue_of_liberty.png" alt="Estátua da Liberdade" draggable="true" ondragstart="drag(event)">
        <img id="brazil" src="/images/christ_redeemer.png" alt="Cristo Redentor" draggable="true" ondragstart="drag(event)">
        <img id="italy" src="/images/pisa_tower.png" alt="Torre de Pisa" draggable="true" ondragstart="drag(event)">
        <img id="france" src="/images/eiffel_tower.png" alt="Torre Eiffel" draggable="true" ondragstart="drag(event)">
    </div>
    <button onclick="window.location.href='/game/phase2/round2'">Próxima Rodada</button>
</body>
</html>`);
});

// Phase 2 - Round 1: Drag and Drop Landmarks
app.get('/game/phase2/round1', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fase 2 - Rodada 1</title>
    <link rel="stylesheet" href="/style.css">
    <script>
        function allowDrop(event) {
            event.preventDefault();
        }

        function drag(event) {
            event.dataTransfer.setData("text", event.target.id);
        }

        function drop(event, targetId) {
            event.preventDefault();
            const data = event.dataTransfer.getData("text");
            if (data === targetId) {
                const element = document.getElementById(data);
                event.target.appendChild(element);
                element.draggable = false;
            }
        }
    </script>
    <style>
        img {
            width: 200px;
            height: 140px;
        }

        .flags-container {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
        }

        .flag-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        .flag, .drop-area {
            width: 220px;
            height: 160px;
            border: 2px dashed #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .drop-area {
            background-color: #f9f9f9;
        }

        .landmarks {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
            padding: 20px;
            background-color: #eaeaea;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <h1>ARRASTE E SOLTE AS IMAGENS DOS PONTOS TURÍSTICOS NA CAIXA DO PAÍS CORRESPONDENTE</h1>
    <div class="flags-container">
        <div class="flag-box">
            <img class="flag" src="/images/usa_flag.png" alt="EUA">
            <div class="drop-area" ondrop="drop(event, 'usa')" ondragover="allowDrop(event)"></div>
        </div>
        <div class="flag-box">
            <img class="flag" src="/images/brazil_flag.png" alt="Brasil">
            <div class="drop-area" ondrop="drop(event, 'brazil')" ondragover="allowDrop(event)"></div>
        </div>
        <div class="flag-box">
            <img class="flag" src="/images/italy_flag.png" alt="Itália">
            <div class="drop-area" ondrop="drop(event, 'italy')" ondragover="allowDrop(event)"></div>
        </div>
        <div class="flag-box">
            <img class="flag" src="/images/france_flag.png" alt="França">
            <div class="drop-area" ondrop="drop(event, 'france')" ondragover="allowDrop(event)"></div>
        </div>
    </div>
    <div class="landmarks">
        <img id="usa" src="/images/statue_of_liberty.png" alt="Estátua da Liberdade" draggable="true" ondragstart="drag(event)">
        <img id="brazil" src="/images/christ_redeemer.png" alt="Cristo Redentor" draggable="true" ondragstart="drag(event)">
        <img id="italy" src="/images/pisa_tower.png" alt="Torre de Pisa" draggable="true" ondragstart="drag(event)">
        <img id="france" src="/images/eiffel_tower.png" alt="Torre Eiffel" draggable="true" ondragstart="drag(event)">
    </div>
    <button onclick="window.location.href='/game/phase2/round2'">Próxima Rodada</button>
</body>
</html>`);
});

// Phase 2 - Round 2: Drag and Drop Foods
app.get('/game/phase2/round2', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fase 2 - Rodada 2</title>
    <link rel="stylesheet" href="/style.css">
    <script>
        function allowDrop(event) {
            event.preventDefault();
        }

        function drag(event) {
            event.dataTransfer.setData("text", event.target.id);
        }

        function drop(event, targetId) {
            event.preventDefault();
            const data = event.dataTransfer.getData("text");
            if (data === targetId) {
                const element = document.getElementById(data);
                event.target.appendChild(element);
                element.draggable = false;
            }
        }
    </script>
    <style>
        img {
            width: 200px;
            height: 140px;
        }

        .flags-container {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
        }

        .flag-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        .flag, .drop-area {
            width: 220px;
            height: 160px;
            border: 2px dashed #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .drop-area {
            background-color: #f9f9f9;
        }

        .foods {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
            padding: 20px;
            background-color: #eaeaea;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <h1>ARRASTE E SOLTE AS IMAGENS DAS COMIDAS NA CAIXA DO PAÍS CORRESPONDENTE</h1>
    <div class="flags-container">
        <div class="flag-box">
            <img class="flag" src="/images/usa_flag.png" alt="EUA">
            <div class="drop-area" ondrop="drop(event, 'burger')" ondragover="allowDrop(event)"></div>
        </div>
        <div class="flag-box">
            <img class="flag" src="/images/brazil_flag.png" alt="Brasil">
            <div class="drop-area" ondrop="drop(event, 'feijoada')" ondragover="allowDrop(event)"></div>
        </div>
        <div class="flag-box">
            <img class="flag" src="/images/italy_flag.png" alt="Itália">
            <div class="drop-area" ondrop="drop(event, 'pizza')" ondragover="allowDrop(event)"></div>
        </div>
        <div class="flag-box">
            <img class="flag" src="/images/france_flag.png" alt="França">
            <div class="drop-area" ondrop="drop(event, 'croissant')" ondragover="allowDrop(event)"></div>
        </div>
    </div>
    <div class="foods">
        <img id="burger" src="/images/burger.png" alt="Hambúrguer" draggable="true" ondragstart="drag(event)">
        <img id="feijoada" src="/images/feijoada.png" alt="Feijoada" draggable="true" ondragstart="drag(event)">
        <img id="pizza" src="/images/pizza.png" alt="Pizza" draggable="true" ondragstart="drag(event)">
        <img id="croissant" src="/images/croissant.png" alt="Croissant" draggable="true" ondragstart="drag(event)">
    </div>
    <button onclick="window.location.href='/game/phase3/start'">Avançar</button>
</body>
</html>`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
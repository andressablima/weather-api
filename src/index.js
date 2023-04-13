const express = require("express")
const weatherData  = require('./weatherData')

const app = express()
app.use(express.json())

app.get("/", (request, response) => {
    return response.status(201).send("API está no ar!")
});

app.get("/listCity", (request, response) => {
    const data = weatherData;
    return response.json(data);
});

//temperature
app.get("/temperature", (request, response) => {
    const idpassado = request.body.id;
    const data = weatherData;

    const cidadeId = data.find((item) => item.id === idpassado);

    return response.json(cidadeId);
});

app.put("/temperatureAddOne/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const weatherItem = weatherData.find((item) => item.id === id);

    if (weatherItem) {
        weatherItem.temperature += 1;
        res.send(`Temperatura do ${weatherItem.city} é ${weatherItem.temperature}`);
    } else {
        res.status(404).send("Cidade não localizada");
    }
});

app.listen(3005, () => {
    console.log("listening on port 3005")
});





//temperature
/*app.get("/temperature", (request, response) => {
    const idpassado = request.body.id;
    const data = weatherData

    for(let i = 0; i < data.length; i++) {
        if (data[i].id === idpassado){
            return console.log(data[i]);
        }
    }

    return response.json(id);
});*/
import app from "./clase_back.js";
const PORT = 4001

app.get("/", (req, res) => {
    const htmlResponse = '<html><head><title>Backend</title></head><body>api levantada</body></html>';
    res.send(htmlResponse);
  });

  app.listen(PORT, () => {
    console.log(`Servidor iniciado en: http://localhost:${PORT}`);
  });
const http = require("http");
const fs = require("fs");
const path = require("path");

const host = "127.0.0.1";
const port = 7000;
const filePath = path.join(__dirname, "deliveries.json");

const sendResponse = (res, statusCode, body) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.end(JSON.stringify(body));
};

const readData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

const writeData = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

  switch (req.method) {
    case "GET":
      switch (parsedUrl.pathname) {
        case "/deliveries":
          try {
            let data = await readData();

            const filter = parsedUrl.searchParams.get("filter");
            const searchValue = parsedUrl.searchParams.get("searchValue");

            if (filter && searchValue) {
              const lowerCaseSearchValue = searchValue.toString().toLowerCase();

              data = data.filter((item) =>
                item[filter]
                  .toString()
                  .toLowerCase()
                  .includes(lowerCaseSearchValue)
              );
            }

            sendResponse(res, 200, data);
          } catch (error) {
            sendResponse(res, 500, {message: "Internal Server Error"});
          }
          break;
        default:
          sendResponse(res, 404, {message: "Not found"});
          break;
      }
      break;

    case "DELETE":
      if (req.url.startsWith("/deliveries/")) {
        const id = req.url.split("/").pop();

        try {
          const data = await readData();
          const index = data.findIndex((item) => item.id === Number(id));

          if (index === -1) {
            sendResponse(res, 404, {message: "Delivery not found"});
          } else {
            data.splice(index, 1);
            await writeData(data);

            sendResponse(res, 200, data);
          }
        } catch (error) {
          sendResponse(res, 500, {message: "Internal Server Error"});
        }
      } else {
        sendResponse(res, 404, {message: "Not Found"});
      }
      break;

    case "POST":
      if (req.url === "/deliveries") {
        let body = "";

        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", async () => {
          try {
            const newDelivery = JSON.parse(body);
            const data = await readData();

            data.push(newDelivery);
            await writeData(data);

            sendResponse(res, 200, data);
          } catch (error) {
            sendResponse(res, 400, {message: "Invalid JSON"});
          }
        });
      } else {
        sendResponse(res, 404, {message: "Not Found"});
      }
      break;

    case "PUT":
      if (req.url === "/deliveries") {
        let body = "";

        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", async () => {
          try {
            const updatedDelivery = JSON.parse(body);
            const data = await readData();

            const index = data.findIndex(
              (item) => item.id === updatedDelivery.id
            );

            if (index === -1) {
              sendResponse(res, 404, {message: "Delivery not found"});
            } else {
              data[index] = {...data[index], ...updatedDelivery};
              await writeData(data);
              sendResponse(res, 200, data);
            }
          } catch (error) {
            sendResponse(res, 400, {message: "Invalid JSON"});
          }
        });
      } else {
        sendResponse(res, 404, {message: "Not Found"});
      }
      break;

    default:
      sendResponse(res, 404, {message: "Not Found"});
      break;
  }
});

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});

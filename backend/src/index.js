import * as http from 'http';

import { deleteDeliveries } from './responses/deleteDeliveries.js';
import { getDeliveries } from './responses/getDeliveries.js';
import { postDeliveries } from './responses/postDeliveries.js';
import { putDeliveries } from './responses/putDeliveries.js';

import { sendResponse } from './helpers/sendResponse.js';
import { NOT_FOUND } from './constants/errors.js';
import { STATUS_CODE } from './constants/statusCode.js';

const host = '127.0.0.1';
const port = 7000;

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  switch (req.method) {
    case 'GET':
      getDeliveries(req, res);
      break;

    case 'DELETE':
      deleteDeliveries(req, res);
      break;

    case 'POST':
      postDeliveries(req, res);
      break;

    case 'PUT':
      putDeliveries(req, res);
      break;

    default:
      sendResponse(res, STATUS_CODE.notFound, { message: NOT_FOUND });
      break;
  }
});

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});

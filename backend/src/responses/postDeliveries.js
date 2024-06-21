import { readData } from '../helpers/readData.js';
import { sendResponse } from '../helpers/sendResponse.js';
import { writeData } from '../helpers/writeData.js';

import { NOT_FOUND, INVALID_JSON } from '../constants/errors.js';
import { STATUS_CODE } from '../constants/statusCode.js';

export const postDeliveries = async (req, res) => {
  if (req.url === '/deliveries') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const newDelivery = JSON.parse(body);
        const data = await readData();

        data.push(newDelivery);
        await writeData(data);

        sendResponse(res, STATUS_CODE.successPost, data);
      } catch (error) {
        sendResponse(res, STATUS_CODE.invalidJson, { message: INVALID_JSON });
      }
    });
  } else {
    sendResponse(res, STATUS_CODE.notFound, { message: NOT_FOUND });
  }
};

import { readData } from '../helpers/readData.js';
import { sendResponse } from '../helpers/sendResponse.js';
import { writeData } from '../helpers/writeData.js';

import {
  NOT_FOUND,
  INVALID_JSON,
  NOT_FOUND_DELIVERY,
} from '../constants/errors.js';
import { STATUS_CODE } from '../constants/statusCode.js';

export const putDeliveries = async (req, res) => {
  if (req.url === '/deliveries') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const updatedDelivery = JSON.parse(body);
        const data = await readData();

        const index = data.findIndex((item) => item.id === updatedDelivery.id);

        if (index === -1) {
          sendResponse(res, STATUS_CODE.notFound, {
            message: NOT_FOUND_DELIVERY,
          });
        } else {
          data[index] = { ...data[index], ...updatedDelivery };
          await writeData(data);
          sendResponse(res, STATUS_CODE.success, data);
        }
      } catch (error) {
        sendResponse(res, STATUS_CODE.invalidJson, { message: INVALID_JSON });
      }
    });
  } else {
    sendResponse(res, STATUS_CODE.notFound, { message: NOT_FOUND });
  }
};

import { readData } from '../helpers/readData.js';
import { sendResponse } from '../helpers/sendResponse.js';
import { writeData } from '../helpers/writeData.js';

import {
  NOT_FOUND,
  NOT_FOUND_DELIVERY,
  SERVER_ERROR,
} from '../constants/errors.js';
import { STATUS_CODE } from '../constants/statusCode.js';

export const deleteDeliveries = async (req, res) => {
  if (req.url.startsWith('/deliveries/')) {
    const id = req.url.split('/').pop();

    try {
      const data = await readData();
      const index = data.findIndex((item) => item.id === Number(id));

      if (index === -1) {
        sendResponse(res, STATUS_CODE.notFound, {
          message: NOT_FOUND_DELIVERY,
        });
      } else {
        data.splice(index, 1);
        await writeData(data);

        sendResponse(res, STATUS_CODE.successDelete, data);
      }
    } catch (error) {
      sendResponse(res, STATUS_CODE.serverError, { message: SERVER_ERROR });
    }
  } else {
    sendResponse(res, STATUS_CODE.notFound, { message: NOT_FOUND });
  }
};

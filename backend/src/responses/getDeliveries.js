import { readData } from '../helpers/readData.js';
import { sendResponse } from '../helpers/sendResponse.js';

import { NOT_FOUND, SERVER_ERROR } from '../constants/errors.js';
import { STATUS_CODE } from '../constants/statusCode.js';

export const getDeliveries = async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

  switch (parsedUrl.pathname) {
    case '/deliveries':
      try {
        let data = await readData();

        const filter = parsedUrl.searchParams.get('filter');
        const searchValue = parsedUrl.searchParams.get('searchValue');

        if (filter && searchValue) {
          const lowerCaseSearchValue = searchValue.toString().toLowerCase();

          data = data.filter((item) =>
            item[filter].toString().toLowerCase().includes(lowerCaseSearchValue)
          );
        }

        sendResponse(res, STATUS_CODE.success, data);
      } catch (error) {
        sendResponse(res, STATUS_CODE.serverError, { message: SERVER_ERROR });
      }
      break;
    default:
      sendResponse(res, STATUS_CODE.notFound, { message: NOT_FOUND });
      break;
  }
};

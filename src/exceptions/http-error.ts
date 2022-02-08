import { HTTP_DEFAULT_ERROR_MESSAGE } from '../common/constants';
import { CustomExceptionName, HttpCode } from '../common/enums';

class HttpError extends Error {
  status: HttpCode;

  constructor({
    status = HttpCode.INTERNAL_SERVER_ERROR,
    message = HTTP_DEFAULT_ERROR_MESSAGE,
  } = {}) {
    super(message);

    this.status = status;
    this.name = CustomExceptionName.HTTP_ERROR;
  }
}

export { HttpError };

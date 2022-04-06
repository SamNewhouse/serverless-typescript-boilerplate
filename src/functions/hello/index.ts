import { AWS_ACCESS_KEY_ID, AWS_ACCESS_SECRET_KEY, AWS_REGION, ENV } from 'env';
import * as response from 'utils/lambda/response';

export const handler = async (event: any = {}): Promise<any> => {

  if(ENV !== 'local') return false;

  event.body = {
    "message": "Hello",
  }
  console.log(`
    ------------ ENV VARIABLES ------------

    ENV: ${ENV}
    AWS_REGION: ${AWS_REGION}
    AWS_ACCESS_KEY_ID: ${AWS_ACCESS_KEY_ID}
    AWS_ACCESS_SECRET_KEY: ${AWS_ACCESS_SECRET_KEY}

    ---------------------------------------
  `);
  return response.success(event);
};

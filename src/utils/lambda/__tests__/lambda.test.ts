import { APIGatewayProxyEvent } from 'aws-lambda';
import * as response from '../response';

describe('Test for lambda response', function () {
  test('verifies successful response', async () => {
    const event: APIGatewayProxyEvent = {
      body: {},
    } as any;
    const result = await response.success(event);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toContain('body');
  });

  test('verifies bad request response', async () => {
    const result = await response.badRequest();
    expect(result.statusCode).toEqual(400);
  });

  test('verifies not authorised response', async () => {
    const result = await response.notAuthorised();
    expect(result.statusCode).toEqual(403);
  });
});

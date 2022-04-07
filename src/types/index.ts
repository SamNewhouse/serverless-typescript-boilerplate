export interface Response {
  statusCode: number;
  isBase64Encoded: boolean;
  headers?: { [key: string]: any };
  body: string;
}

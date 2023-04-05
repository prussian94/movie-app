import { SQSClient } from "@aws-sdk/client-sqs";
import config from "../config.js";
const REGION = "eu-central-1";

const sqsClient = new SQSClient({
  region: REGION,
  credentials: {
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  },
});
export { sqsClient };

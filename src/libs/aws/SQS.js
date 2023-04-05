import { sqsClient } from "../../clients/SQSClient.js";
import { SendMessageCommand } from "@aws-sdk/client-sqs";
import config from "../../config.js";

export const send = async ({ message }) => {
  try {
    const params = {
      DelaySeconds: 10,
      MessageBody: JSON.stringify(message),
      QueueUrl: config.AWS_QUEUE_URL,
    };
    const data = await sqsClient.send(new SendMessageCommand(params));

    return data;
  } catch (err) {
    console.log("Error", err);
  }
};

import { send } from "../../libs/aws/SQS.js";
import { formatSqsData } from "../../helpers/DataFormatHelper";

export const sendMessage = async (message) => {
  try {
    const formattedMessage = formatSqsData(message);
    const data = await send({ message: formattedMessage });
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};

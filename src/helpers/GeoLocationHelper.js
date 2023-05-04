import ipify from "ipify";

export async function getIpAddress() {
  const ipAddress = await ipify();

  return ipAddress;
}

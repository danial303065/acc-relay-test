import { HTTPClient } from "../../src/HttpClient";

import URI from "urijs";
import { Helper } from "../utils";

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const shopInfo = Helper.loadShopInfo();

    console.log("상점 정보를 요청합니다.");
    const client = new HTTPClient();
    const url = URI(RELAY_ENDPOINT).directory(`/v1/shop/info/${shopInfo.shopId}`).toString();
    const response = await client.get(url);

    console.log("처리결과입니다.");
    console.log(response.data.code);
    console.log(response.data.data);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

import { IShopData } from "../../src";
import { HTTPClient } from "../../src/HttpClient";

import URI from "urijs";
import * as fs from "fs";

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const shopData: IShopData[] = [];

    console.log("상점데이타를 로딩합니다.");
    shopData.push(...(JSON.parse(fs.readFileSync("./data/shops.json", "utf8")) as IShopData[]));

    console.log("파라메타를 생성합니다.");
    const shopIndex = 5;
    const shopId = shopData[shopIndex].shopId;

    console.log("상점 정보를 요청합니다.");
    const client = new HTTPClient();
    const url = URI(RELAY_ENDPOINT).directory(`/v1/shop/info/${shopId}`).toString();
    const response = await client.get(url);

    console.log("처리결과입니다.");
    console.log(response.data.code);
    console.log(response.data.data);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

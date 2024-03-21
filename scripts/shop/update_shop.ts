import { IShopData, IUserData } from "../../src";
import { HTTPClient } from "../../src/HttpClient";

const URI = require("urijs");
import * as fs from "fs";

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const ACCESS_KEY = process.env.RELAY_ACCESS_KEY || "";
    const shopData: IShopData[] = [];

    console.log("상점데이타를 로딩합니다.");
    shopData.push(...(JSON.parse(fs.readFileSync("./data/shops.json", "utf8")) as IShopData[]));

    console.log("파라메타를 생성합니다.");
    const shopIndex = 5;
    const shopId = shopData[shopIndex].shopId;
    const newCurrency = "krw";
    const newName = "New Name 5";
    const param = {
        shopId,
        name: newName,
        currency: newCurrency,
    };

    console.log("상점 데이타의 변경을 요청합니다.");
    const client = new HTTPClient({
        headers: {
            Authorization: ACCESS_KEY,
        },
    });
    const url = URI(RELAY_ENDPOINT).directory("/v1/shop/update/create").toString();
    const response = await client.post(url, param);

    console.log("처리결과입니다.");
    console.log(response.data.code);
    console.log(response.data.data);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

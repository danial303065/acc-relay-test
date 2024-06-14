import { HTTPClient } from "../../src/HttpClient";
import { Helper } from "../utils";
import URI from "urijs";

const beautify = require("beautify");

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const shopInfo = Helper.loadShopInfo();

    const client = new HTTPClient();
    const url = URI(RELAY_ENDPOINT)
        .directory("/v1/shop/history")
        .filename(shopInfo.shopId)
        .addQuery("pageNumber", 1)
        .addQuery("pageSize", 100)
        .addQuery("actions", "1,2,3")
        .toString();
    const response = await client.get(url);
    if (response.data.code !== 0) {
        console.error("Error!", response.data.error.message);
        process.exit(response.data.code);
    }

    console.log("처리결과입니다.");
    console.log(response.data.code);
    console.log(beautify(JSON.stringify(response.data.data), { format: "json" }));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

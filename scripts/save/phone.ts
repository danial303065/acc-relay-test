import { INewPurchaseData, INewPurchaseDetails, IProductData, IProducts, IShopData, IUserData } from "../../src";
import { ContractUtils } from "../../src/ContractUtils";
import { HTTPClient } from "../../src/HttpClient";

import URI from "urijs";
import * as fs from "fs";
import { Helper } from "../utils";
const beautify = require("beautify");

let purchaseSequence = 0;
function getPurchaseId(): string {
    const res = "P" + new Date().getTime().toString().padStart(10, "0") + purchaseSequence.toString().padStart(5, "0");
    purchaseSequence++;
    return res;
}

async function main() {
    const STORE_PURCHASE_ENDPOINT = process.env.STORE_PURCHASE_ENDPOINT || "";
    const ACCESS_KEY = process.env.STORE_PURCHASE_ACCESS_KEY || "";
    const shops: IShopData[] = [];
    const userInfo = Helper.loadUserInfo();

    console.log("데이타를 로딩합니다.");
    shops.push(...(JSON.parse(fs.readFileSync("./data/shops.json", "utf8")) as IShopData[]));

    const shopId = shops[0].shopId;

    const makeTransactions = async (): Promise<INewPurchaseData> => {
        const purchaseId = getPurchaseId();
        const details: INewPurchaseDetails[] = [
            {
                productId: "2020051310000000",
                amount: 100_000_000,
                providePercent: 10,
            },
        ];
        let totalAmount: number = 0;
        for (const elem of details) {
            totalAmount += elem.amount;
        }
        const cashAmount = totalAmount;

        const res: INewPurchaseData = {
            purchaseId,
            timestamp: ContractUtils.getTimeStamp().toString(),
            totalAmount,
            cashAmount,
            currency: process.env.CURRENCY || "php",
            shopId: shopId,
            waiting: 10,
            userAccount: "",
            userPhone: userInfo.phone,
            details,
        };
        return res;
    };

    console.log("파라메타를 생성합니다.");
    const tx = await makeTransactions();
    console.log(tx);

    console.log("구매정보를 전달합니다.");
    const client = new HTTPClient({
        headers: {
            Authorization: ACCESS_KEY,
        },
    });
    const url = URI(STORE_PURCHASE_ENDPOINT).directory("/v1/tx/purchase").filename("new").toString();
    const response = await client.post(url, tx);

    console.log("처리결과입니다.");
    console.log(response.data.code);
    console.log(beautify(JSON.stringify(response.data.data), { format: "json" }));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

import { INewPurchaseData, INewPurchaseDetails, IProductData, IProducts, IShopData, IUserData } from "../../src";
import { ContractUtils } from "../../src/ContractUtils";
import { HTTPClient } from "../../src/HttpClient";

const URI = require("urijs");
import * as fs from "fs";
const beautify = require("beautify");

let purchaseId = 0;
function getPurchaseId(): string {
    const res = "P" + new Date().getTime().toString().padStart(10, "0") + purchaseId.toString().padStart(5, "0");
    purchaseId++;
    return res;
}

async function main() {
    const STORE_PURCHASE_ENDPOINT = process.env.STORE_PURCHASE_ENDPOINT || "";
    const ACCESS_KEY = process.env.STORE_PURCHASE_ACCESS_KEY || "";
    const shops: IShopData[] = [];
    const users: IUserData[] = [];

    console.log("데이타를 로딩합니다.");
    users.push(...(JSON.parse(fs.readFileSync("./data/users.json", "utf8")) as IUserData[]));
    users.push(...(JSON.parse(fs.readFileSync("./data/users.json", "utf8")) as IUserData[]));
    shops.push(...(JSON.parse(fs.readFileSync("./data/shops.json", "utf8")) as IShopData[]));

    const makeProductInPurchase = (): IProducts[] => {
        const res: IProducts[] = [
            {
                product: {
                    productId: "2020051310000000",
                    amount: 100000000,
                    providerPercent: 10,
                },
                count: 1,
            },
        ];
        return res;
    };

    const makeTransactions = async (userIndex: number): Promise<INewPurchaseData> => {
        const purchaseId = getPurchaseId();
        const products2 = makeProductInPurchase();
        let totalAmount: number = 0;
        for (const elem of products2) {
            totalAmount += elem.product.amount * elem.count;
        }
        const details: INewPurchaseDetails[] = products2.map((m) => {
            return {
                productId: m.product.productId,
                amount: m.product.amount * m.count,
                providePercent: m.product.providerPercent,
            };
        });
        const cashAmount = totalAmount;

        const shopIndex = Math.floor(Math.random() * shops.length);

        const res: INewPurchaseData = {
            purchaseId,
            timestamp: ContractUtils.getTimeStampBigInt().toString(),
            totalAmount,
            cashAmount,
            currency: "krw",
            shopId: shops[shopIndex].shopId,
            waiting: 10,
            userAccount: users[userIndex].address,
            userPhone: "",
            details,
        };
        return res;
    };

    for (let userIndex = 0; userIndex < users.length; userIndex++) {
        console.log("파라메타를 생성합니다.");
        const tx = await makeTransactions(userIndex);
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

        await ContractUtils.delay(2000);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

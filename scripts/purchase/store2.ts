import { INewPurchaseData, INewPurchaseDetails, IProductData, IProducts, IShopData, IUserData } from "../../src";
import { ContractUtils } from "../../src/ContractUtils";
import { HTTPClient } from "../../src/HttpClient";

const URI = require("urijs");
import * as fs from "fs";
const beautify = require("beautify");

async function main() {
    const STORE_PURCHASE_ENDPOINT = process.env.STORE_PURCHASE_ENDPOINT || "";
    const ACCESS_KEY = process.env.STORE_PURCHASE_ACCESS_KEY || "";
    const shops: IShopData[] = [];
    const products: IProductData[] = [];
    const users: IUserData[] = [];

    console.log("데이타를 로딩합니다.");
    users.push(...(JSON.parse(fs.readFileSync("./data/users.json", "utf8")) as IUserData[]));
    shops.push(...(JSON.parse(fs.readFileSync("./data/shops.json", "utf8")) as IShopData[]));
    products.push(...(JSON.parse(fs.readFileSync("./data/products.json", "utf8")) as IProductData[]));

    const makeProductInPurchase = (): IProducts[] => {
        const res: IProducts[] = [];
        const count = Math.floor(Math.random() * 10 + 1);
        for (let idx = 0; idx < count; idx++) {
            const i = Math.floor(Math.random() * products.length);
            const l = Math.floor(Math.random() * 2 + 1);
            res.push({
                product: products[i],
                count: l,
            });
        }
        return res;
    };

    const makeTransactions = async (): Promise<INewPurchaseData> => {
        const purchaseId = "91313" + new Date().getTime().toString();
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

        const userIndex = Math.floor(Math.random() * users.length);
        const shopIndex = Math.floor(Math.random() * shops.length);

        const res: INewPurchaseData = {
            purchaseId,
            timestamp: ContractUtils.getTimeStampBigInt().toString(),
            totalAmount,
            cashAmount,
            currency: "krw",
            shopId: shops[shopIndex].shopId,
            waiting: 10,
            userAccount: "",
            userPhone: users[userIndex].phone,
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

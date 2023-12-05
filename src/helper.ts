import * as fs from "fs";

export function getPaymentId(): number {
    const data = JSON.parse(fs.readFileSync("./data/storage.json", "utf-8"));
    if (data.paymentId !== undefined) return data.paymentId;
    else throw new Error("이전의 paymentId 를 찾을 수 없습니다.");
}

export function setPaymentId(paymentId: string) {
    const data = {
        paymentId,
    };
    fs.writeFileSync("./data/storage.json", JSON.stringify(data), "utf-8");
}

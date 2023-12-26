export interface IShopData {
    shopId: string;
    name: string;
    currency: string;
    providePercent: number;
    address: string;
    privateKey: string;
}

export interface IUserData {
    idx: number;
    phone: string;
    address: string;
    privateKey: string;
    loyaltyType: number;
}

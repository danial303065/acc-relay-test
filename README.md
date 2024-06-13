# DMS Relay Test

A server that receives transactions and then stores it in a blockchain

## Install NodeJS
https://nodejs.org/en/download

## Install yarn

```shell
npm install -g yarn
```

## Install Program

```shell
git clone https://github.com/MichaelKim20/dms-relay-test.git
cd dms-relay-test
yarn install
cp env/.env.sample env/.env
yarn build
```

## Add Shop

```shell
yarn run add_shop
```


## 테스트를 위한 각종 명령어들

### 1. 전화번호 & 지갑주소 등록

#### - (1) 등록

```shell
npx hardhat run scripts/phone/register.ts --network sidechain_devnet
```

#### - (2) 확인

```shell
npx hardhat run scripts/phone/get.ts --network sidechain_devnet
```

#### - (3) 사용가능 포인트로 전환

```shell
npx hardhat run scripts/phone/change.ts --network sidechain_devnet
```

### 2. 잔고확인

#### - (1) 지갑주소로 잔고 확인

```shell
npx hardhat run scripts/balance/account.ts --network sidechain_devnet
```

#### - (2) 전화번호로 잔고 확인

```shell
npx hardhat run scripts/balance/phone.ts --network sidechain_devnet
```


### 3. 포인트 적립

#### - (1) 지갑주소로 적립할 경우 (키오스크)

```shell
npx hardhat run scripts/save/account.ts --network sidechain_devnet
```

#### - (2) 전화번호로 적립할 경우 (키오스크)

```shell
npx hardhat run scripts/save/phone.ts --network sidechain_devnet
```

### 4. 포인트 사용

#### - (1) 임시 주소 발급 (사용자앱)

```shell
npx hardhat run scripts/account/temporary.ts --network sidechain_devnet
```

#### - (2) 결제 시작 (키오스크)

```shell
npx hardhat run scripts/use/new/open.ts --network sidechain_devnet
```

#### - (3) 결제 승인 (사용자용 앱)

```shell
npx hardhat run scripts/use/new/approve.ts --network sidechain_devnet
```

#### - (4) 결제 종료 (키오스크)

```shell
npx hardhat run scripts/use/new/close.ts --network sidechain_devnet
```

### 5. 포인트 사용취소

#### - (1) 취소 시작 (키오스크)

```shell
npx hardhat run scripts/use/calcel/open.ts --network sidechain_devnet
```

#### - (2) 취소 승인 (상점용 앱)

```shell
npx hardhat run scripts/use/calcel/approve.ts --network sidechain_devnet
```

#### - (3) 취소 종료 (키오스크)

```shell
npx hardhat run scripts/use/calcel/close.ts --network sidechain_devnet
```

### 6. 상점관련

#### - (1) 상점 추가 (상점용앱)

```shell
npx hardhat run scripts/shop/add.ts --network sidechain_devnet
```
#### - (2) 상점 정보 변경 (키오스크)

```shell
npx hardhat run scripts/shop/update.ts --network sidechain_devnet
```

#### - (3) 상점 영업 시작 / 폐점 (키오스크)

```shell
npx hardhat run scripts/shop/status.ts --network sidechain_devnet
```

#### - (4) 상점 정보

```shell
npx hardhat run scripts/shop/get.ts --network sidechain_devnet
```



## 테스트하기

### 1. 진행절차
상점정보생성 -> 상점추가 -> 사용자정보생성 -> 적립 -> 사용 -> 전화번호&지갑주소 등록 -> 사용가능한 포인트로 전환 

### 2. 상점정보생성

상점아이디 생성은

```shell
npx hardhat run scripts/create_shop_id.ts --network sidechain_devnet
```
지갑주소 생성은

```shell
npx hardhat run scripts/create_wallet.ts --network sidechain_devnet
```
여기서 생성된 상점아이디와 지갑주소를 data/shop_info.json에 기록한다.

### 3. 상점추가

```shell
npx hardhat run scripts/shop/add.ts --network sidechain_devnet
```

### 4. 사용자정보생성

지갑주소 생성은

```shell
npx hardhat run scripts/create_wallet.ts --network sidechain_devnet
```
여기서 생성된 지갑주소를 data/user_info.json에 기록한다.
휴대폰 번호는 본인의 휴대폰으로 한다.

### 5. 적립

#### - (1) 지갑주소로 적립할 경우 (키오스크)

```shell
npx hardhat run scripts/save/account.ts --network sidechain_devnet
```

#### - (2) 전화번호로 적립할 경우 (키오스크)

```shell
npx hardhat run scripts/save/phone.ts --network sidechain_devnet
```


### 6. 사용

#### - (1) 임시 주소 발급 (사용자앱)

```shell
npx hardhat run scripts/account/temporary.ts --network sidechain_devnet
```

#### - (2) 결제 시작 (키오스크)

```shell
npx hardhat run scripts/use/new/open.ts --network sidechain_devnet
```

#### - (3) 결제 승인 (사용자용 앱)

```shell
npx hardhat run scripts/use/new/approve.ts --network sidechain_devnet
```

#### - (4) 결제 종료 (키오스크)

```shell
npx hardhat run scripts/use/new/close.ts --network sidechain_devnet
```

### 7. 전화번호&지갑주소 등록

#### - (1) 등록

```shell
npx hardhat run scripts/phone/register.ts --network sidechain_devnet
```

#### - (2) 확인

```shell
npx hardhat run scripts/phone/get.ts --network sidechain_devnet
```


### 8. 사용가능한 포인트로 전환

```shell
npx hardhat run scripts/phone/change.ts --network sidechain_devnet
```
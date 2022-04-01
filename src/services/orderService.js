import { DOMAIN, STATUS_CODE } from "../utils/contants/serviceContant";
import BaneService from "./baneService";
import { history } from "../utils/libs/history";

class OrderService extends BaneService {
    constructor() {
            super();
        }
        //handle
    postOrder = async(data) => {
        let { listOrder, receiver, sender } = data;

        //xu li total order
        const temp = [];
        const handleTotalOrder = () => {
            listOrder.map((item) => {
                const temp2 = {
                    length: 1,
                    width: 2,
                    height: 3,
                    weight: 4,
                    COD: 100,
                    currency: "VND",
                    packagetype: 3,
                    MerchandiseInfomation: []
                };
                item.map((value) => {
                    let temp3 = {
                        HSCode: value.maSP,
                        VietNameseName: value.nameSP,
                        EnglishName: value.nameEngSP,
                        CountryManufacturedCode: value.maQuocGia,
                        Unit: value.donViTienTe,
                        Currency: value.maSP,
                        Value: parseFloat(value.donGia),
                        Quantity: parseFloat(value.soLuong),
                        Weight: parseFloat(value.canNang),
                    }
                    temp2.MerchandiseInfomation.push(temp3)
                });
                temp.push(temp2)

            });

        };


        handleTotalOrder();


        let dataPostJson = {
            SenderName: sender.sendername,
            SenderPhone: sender.senderphone,
            SenderCountryCode: sender.sendercountry,
            SenderCityCode: sender.sendercity,
            SenderDistrictCode: sender.senderdistrict,
            SenderWardCode: sender.senderward,
            SenderPostalCode: sender.phoneregioncode,
            ReceiverName: receiver.receivername,
            ReceiverPhone: receiver.receiverphone,
            ReceiverAddress: receiver.receiveraddress,
            ReceiverCountryCode: receiver.receivercountry,
            ReceiverCityCode: receiver.receivercity,
            ReceiverDistrictCode: receiver.receiverdistrict,
            ReceiverWardCode: receiver.receiverward,
            ReceiverPostalCode: receiver.phoneregioncode,
            OrderInfomation: [
                ...temp
            ],
        };
        console.log("dataJson", dataPostJson)
            // let res = await this.post(`${DOMAIN}api/OrderShipping/add-orderShipping`, data);
            // console.log(res)
            // if (res.status === STATUS_CODE.SUCCESS) {
            //     res = await res.json();
            //     history.push("/home")
            // }
    };
}

export const orderService = new OrderService();
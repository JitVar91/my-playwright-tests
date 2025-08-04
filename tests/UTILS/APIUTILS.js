class APIUTILS {



    constructor(apiContext, loginPayLoad) {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }
    async getToken() {



        const loginResp = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayLoad
            }

        )



        const loginJson = await loginResp.json();

        const token = loginJson.token;

        console.log(token);

        return token;
    }


    async createOrder(orderPayLoad) {

        let response = {};
        response.token = await this.getToken();

        const orderResp = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",

            {

                data: orderPayLoad,
                headers: {
                    'Authorization': response.token,
                    'Content-Type': 'application/json'
                },

            }
        );

        const orderReJson = await orderResp.json();

        console.log(orderReJson);

        const orderI = orderReJson.orders[0];

        console.log("Order from Checkout: " + orderI);

        response.orderI = orderI;

        return response;



    }

}

module.exports = { APIUTILS };
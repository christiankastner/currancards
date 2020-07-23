const jsonResp = {
    data: [
        {
            name: "astute",
            price: 49,
            image: "https://www.sisalcarpet.com/images/weaves/200/astute_curry.jpg"
        },
        {
            name: "barcelona",
            price: 135,
            image: "https://www.sisalcarpet.com/images/weaves/200/barcelona_timber.jpg"
        },
        {
            name: "basque",
            price: 52,
            image: "https://www.sisalcarpet.com/images/weaves/200/basque_cognac.jpg"
        },
        {
            name: "belfast",
            price: 78,
            image: "https://www.sisalcarpet.com/images/weaves/200/belfast_clove.jpg"
        }
    ]
}

const getRugs = () => (new Promise()).then(() => jsonResp)
const jsonResp = {
    data: [
        {
            name: "astute",
            price: 49,
            image: "https://www.sisalcarpet.com/images/weaves/200/astute_curry.jpg",
            types: [
                {
                    color: "curry",
                    image: "https://www.sisalcarpet.com/images/weaves/200/astute_curry.jpg"
                },
                {
                    color: "friendly tan",
                    image: "https://www.sisalcarpet.com/images/weaves/200/astute_friendlytan.jpg"
                },
                {
                    color: "intuition grey",
                    image: "https://www.sisalcarpet.com/images/weaves/200/astute_intuitiongrey.jpg"
                },
                {
                    color: "stone",
                    image: "https://www.sisalcarpet.com/images/weaves/200/astute_stone.jpg"
                },
                {
                    color: "traveler brown",
                    image: "https://www.sisalcarpet.com/images/weaves/200/astute_stone.jpg",
                    swatchColor:
                }
            ]
        },
        {
            name: "barcelona",
            price: 135,
            image: "https://www.sisalcarpet.com/images/weaves/200/barcelona_timber.jpg",
            colors: [
                
            ]
        },
        {
            name: "basque",
            price: 52,
            image: "https://www.sisalcarpet.com/images/weaves/200/basque_cognac.jpg",
            colors: [
                
            ]
        },
        {
            name: "belfast",
            price: 78,
            image: "https://www.sisalcarpet.com/images/weaves/200/belfast_clove.jpg",
            colors: [
                
            ]
        }
    ]
}

const getRugs = () => {
    return Promise.resolve(jsonResp);
}

export const api = {
    getRugs
}
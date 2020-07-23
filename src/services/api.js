const jsonResp = {
    data: [
        {
            name: "astute",
            price: 49,
            image: "https://www.sisalcarpet.com/images/weaves/200/astute_curry.jpg",
            colors: [
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
                },
            ]
        },
        {
            name: "barcelona",
            price: 135,
            image: "https://www.sisalcarpet.com/images/weaves/200/barcelona_timber.jpg",
            colors: [
                {
                    color: "canvas",
                    image: "https://www.sisalcarpet.com/images/weaves/200/barcelona_canvas.jpg",
                },
                {
                    color: "oat",
                    image: "https://www.sisalcarpet.com/images/weaves/200/barcelona_oat.jpg",
                },
                {
                    color: "pearl",
                    image: "https://www.sisalcarpet.com/images/weaves/200/barcelona_pearl.jpg",
                },
                {
                    color: "sandstone",
                    image: "https://www.sisalcarpet.com/images/weaves/200/barcelona_sandstone.jpg",
                },
                {
                    color: "silver",
                    image: "https://www.sisalcarpet.com/images/weaves/200/barcelona_silver.jpg",
                },
                {
                    color: "timber",
                    image: "https://www.sisalcarpet.com/images/weaves/200/barcelona_timber.jpg",
                },
            ]
        },
        {
            name: "basque",
            price: 52,
            image: "https://www.sisalcarpet.com/images/weaves/200/basque_cognac.jpg",
            colors: [
                {
                    color: "canyon",
                    image: "https://www.sisalcarpet.com/images/weaves/200/basque_cognac.jpg",
                },
                {
                    color: "caramel",
                    image: "https://www.sisalcarpet.com/images/weaves/200/basque_caramel.jpg",
                },
                {
                    color: "cognac",
                    image: "https://www.sisalcarpet.com/images/weaves/200/basque_cognac.jpg",
                },
                {
                    color: "honey",
                    image: "https://www.sisalcarpet.com/images/weaves/200/basque_honey.jpg",
                },
                {
                    color: "sand",
                    image: "https://www.sisalcarpet.com/images/weaves/200/basque_sand.jpg",
                },
                {
                    color: "slate",
                    image: "https://www.sisalcarpet.com/images/weaves/200/basque_slate.jpg",
                },
                {
                    color: "stone",
                    image: "https://www.sisalcarpet.com/images/weaves/200/basque_stone.jpg",
                },
                {
                    color: "tan",
                    image: "https://www.sisalcarpet.com/images/weaves/200/basque_tan.jpg",
                },
            ]
        },
        {
            name: "belfast",
            price: 78,
            image: "https://www.sisalcarpet.com/images/weaves/200/belfast_clove.jpg",
            colors: [
                {
                    color: "basket",
                    image: "https://www.sisalcarpet.com/images/weaves/200/belfast_basket.jpg",
                },
                {
                    color: "clove",
                    image: "https://www.sisalcarpet.com/images/weaves/200/belfast_clove.jpg",
                },
                {
                    color: "mink",
                    image: "https://www.sisalcarpet.com/images/weaves/200/belfast_mink.jpg",
                },
                {
                    color: "nutmeg",
                    image: "https://www.sisalcarpet.com/images/weaves/200/belfast_nutmeg.jpg",
                },
                {
                    color: "pewter",
                    image: "https://www.sisalcarpet.com/images/weaves/200/belfast_pewter.jpg",
                },
                {
                    color: "pumice",
                    image: "https://www.sisalcarpet.com/images/weaves/200/belfast_pumice.jpg",
                },
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
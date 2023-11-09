   const restaurant_data = [{
            "id": 0,
            "name": "Vegan Junk Food Bar",
            "img": "swipe1.png",
            "price": "€25+",
        },
        {
            "id": 1,
            "name": "Mana Mana",
            "img": "swipe2.png",
            "price": "€35+",
        },
        {
            "id": 2,
            "name": "The Sunny Burger co.",
            "img": "swipe3.png",
            "price": "€45+",
        }, 
        {
            "id": 3,
            "name": "Vegan Temple Bar",
            "img": "swipe4.png",
            "price": "€45+",
        }
    ]

    const like_button = document.getElementById("like_button");
    const dislike_button = document.getElementById("dislike_button");
    const main_swipe_img = document.getElementById("main-swipe-img");
    const head1 = document.getElementById("head1");
    const price = document.getElementById("price");

    let currentId = 0;

    like_button.onclick = () => {
        currentId = (currentId + 1) % restaurant_data.length;
        updateRestaurantData();
    }

    dislike_button.onclick = () => {
        currentId = (currentId - 1 + restaurant_data.length) % restaurant_data.length;
        updateRestaurantData();
    }

    function updateRestaurantData() {
        main_swipe_img.src = `img/${restaurant_data[currentId].img}`;
        head1.innerText = restaurant_data[currentId].name;
        price.innerText = restaurant_data[currentId].price;
    }
import {Box,Grid,GridItem,Text,Image} from "@chakra-ui/react";
import {Link} from "react-router-dom";

let data = [
    {
        id:1,
        image:"https://img.gkbcdn.com/p/2019-09-27/tronsmart-element-t6-mini-bluetooth-5-0-speaker---black-1571994046957._w280_p1_.jpg",
        title:"Portronic Speaker",
        price:`$ ${23.39}`
    },
    {
        id:2,
        image:"https://img.gkbcdn.com/p/2017-10-21/c120-6-axis-gyro-2-4g-mini-air-mouse-1571989094158._w280_p1_.jpg",
        title:"Remote",
        price:`$ ${8.42}`
    },
    {
        id:3,
        image:"https://img.gkbcdn.com/p/2019-08-27/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588089._w280_p1_.jpg",
        title:"Tronsmart",
        price:`$ ${61.77}`
    },
    {
        id:4,
        image:"https://img.gkbcdn.com/p/2019-11-15/mifo-o7-bluetooth-5-0-tws-qualcomm-qcc3020-earphones-black-1574132882676._w280_p1_.jpg",
        title:"Earbuds",
        price:`$ ${12.16}`
    },
    {
        id:5,
        image:"https://img.gkbcdn.com/p/2018-02-07/jvmac-jm-p5-magnetic-wristband-1571977987322._w280_p1_.jpg",
        title:"JVMAC JM-P5 Magnetic",
        price:`$ ${8.42}`
    },
    {
        id:6,
        image:"https://img.gkbcdn.com/p/2019-02-28/xiaomi-wireless-car-charger-20w-power-blcak-1571991489443._w280_p1_.jpg",
        title:"Xiaomi Wireless Car",
        price:`$ ${37.43}`
    },
    {
        id:7,
        image:"https://img.gkbcdn.com/p/2021-04-12/4inch-32GB-Handheld-Portable-Game-Console-5000-Games-458415-1._w280_p1_.jpg",
        title:"32GB Hnadheld Game",
        price:`$ ${74.88}`
    },
    {
        id:8,
        image:"https://img.gkbcdn.com/p/2018-10-25/xiaomi-aqara-smart-window-door-sensor-white-1574132921215._w280_p1_.jpg",
        title:"Xiaomi Aqara Smart",
        price:`$ ${13.10}`
    }
];

function Product(){

    return (
        <Box maxW="55%">

            <Grid border="1px solid #E2E8F0" templateColumns="repeat(4,1fr)">

                {
                    data.map((el)=> (
                        <GridItem key={el.id} textAlign="center">
                            <Link to={"/product"}>
                            <Image maxW="100%"src={el.image}/>
                            </Link>
                            <Text>{el.price}</Text>
                            <Text>{el.title}</Text>
                        </GridItem>
                    ))
                }
            </Grid>
            </Box>
    )
}

export default Product;
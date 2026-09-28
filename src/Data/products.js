import mac from "../Asset/mac/mac.webp";
import iphone from "../Asset/iphone/Iphone.webp";
import accessory from "../Asset/accessory/Accessory.webp";
import ipad from "../Asset/ipad/Ipad.webp";
import iphone18 from "../Asset/iphone/Iphone18pro.jpg";
import iphoneDuo from "../Asset/iphone/Iphone_duo.jpg";
import appleWatch from "../Asset/accessory/applewatch.webp";
import ipadmini from "../Asset/ipad/ipad_mini.png"

export const products = [
    {
        id: 1,
        name: "Mac",
        image: mac,
        path: "/mac",
    },

    {
        id: 2,
        name: "iPhone",
        image: iphone,
        path: "/iphone",
    },

    {
        id: 3,
        name: "iPad",
        image: ipad,
        path: "/ipad",
    },
    {
        id: 4,
        name: "Accessories",
        image: accessory,
        path: "/accessory",
    },

];

// LATEST PRODUCTS


export const latestProducts = [
    {
        id: 1,
        title: "iPhone 18 Pro",
        description: "The ultimate performance and camera of any iPhone.",
        price: "From ₹1,64,900",
        image: iphone18,
        bg: "bg-black",
        text: "text-white",
        path: "/iphone",
    },

    {
        id: 2,
        title: "iPhone Duo",
        description: "Hello, hello.",
        price: "From ₹2,99,900",
        image: iphoneDuo,
        bg: "bg-white",
        text: "text-black",
        path: "/iphone",
    },

    {
        id: 3,
        title: "Apple Watch Series 12",
        description: "The most accurate heart rate sensing in a wearable.",
        price: "From ₹56,900",
        image: appleWatch,
        bg: "bg-black",
        text: "text-white",
        path: "/watch",
    },
    {
        id: 4,
        title: "Apple Ipad",
        description: "The most Liked by children and useful for them",
        price: "From ₹49,900",
        image: ipadmini,
        bg: "bg-black",
        text: "text-white",
        path: "/ipad",
    },
    {
        id: 5,
        title: "Apple Airpods",
        description: "The best sound and wearable earbuds.",
        price: "From ₹56,900",
        image: accessory,
        bg: "bg-black",
        text: "text-white",
        path: "/watch",
    },
];
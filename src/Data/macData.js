import imac from "../Asset/mac/imac.jpg";
import mac from "../Asset/mac/mac.webp";
import macbookNeo from "../Asset/mac/Macbook Neo.jpg";
import macbookAir from "../Asset/mac/macbook-air.webp";
import macbookPro from "../Asset/mac/mcb pro.jpg";
import studioDisplay from "../Asset/mac/studio_display.jpg";

export const macModels = [
    {
        id: 1,
        name: "MacBook Air",
        description: "Supercharged by Apple silicon.",
        price: 99900,
        image: macbookAir,
    },

    {
        id: 2,
        name: "MacBook Pro",
        description: "Mind-blowing. Head-turning.",
        price: 159900,
        image: macbookPro,
    },

    {
        id: 3,
        name: "MacBook Neo",
        description: "Powerful. Beautiful. Surprisingly affordable.",
        price: 89900,
        image: macbookNeo,
    },

    {
        id: 4,
        name: "iMac",
        description: "All-in-one. All you.",
        price: 129900,
        image: imac,
    },

    {
        id: 5,
        name: "Mac",
        description: "Powerful performance in a compact design.",
        price: 59900,
        image: mac,
    },

    {
        id: 6,
        name: "Studio Display",
        description: "A stunning display for your Mac.",
        price: 159900,
        image: studioDisplay,
    },
];
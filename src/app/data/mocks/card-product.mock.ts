


/* 
import { Product } from "../interfaces/iproduct.metadata";
export const cardProductMock: Product[] = [
    {
        image: '../../assets/images/news/image_0.jpg',
        name: 'Heron Preston',
        description: 'Censored Tee',
        price: 45300.00,
        type: 'male',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_1.jpg',
        name: 'Heron Preston',
        description: 'Censored Tee',
        price: 45300.00,
        type: 'male',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_2.jpg',
        name: 'Margiela Denim',
        description: 'Jacket',
        price: 190500.00,
        type: 'male',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_3.jpg',
        name: 'New Balance',
        description: 'Made In Usa Marathon Tee',
        price: 9700.00,
        type: 'male',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_4.jpg',
        name: 'Margiela',
        description: 'Denim 5 Pocket Jeans',
        price: 125400.00,
        type: 'male',
        news: true,
        tshirt: false,
        pant: true,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_5.jpg',
        name: '1017 ALYX 9SM',
        description: 'Formal Shirt',
        price: 54300.00,
        type: 'male',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_6.jpg',
        name: 'New Balance',
        description: 'Made In Usa Heritage Hoodie',
        price: 25000.00,
        type: 'male',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_7.jpg',
        name: 'Rick Owens',
        description: 'Bela Pants',
        price: 120800.00,
        type: 'male',
        news: true,
        tshirt: false,
        pant: true,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_8.jpg',
        name: 'Kith HQ Tee',
        price: 9050.00,
        type: 'male',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_9.jpg',
        name: 'Maharishi',
        description: 'Maha Eagle Vs Snake Tee',
        price: 16700.00,
        type: 'male',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_10.jpg',
        name: 'John Elliott',
        description: 'Cupro Mid Rise Work Pant',
        price: 69000.00,
        type: 'female',
        news: true,
        tshirt: false,
        pant: true,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_11.jpg',
        name: 'John Elliott',
        description: 'Silk Cotton Rib Cardigan',
        price: 41300.00,
        type: 'female',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_12.jpg',
        name: 'Agolde',
        description: 'Cherie Jean',
        price: 27500.00,
        type: 'female',
        news: true,
        tshirt: false,
        pant: true,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_13.jpg',
        name: 'Rick Owens',
        description: 'Funnel Neck Down Jacket',
        price: 296500.00,
        type: 'female',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_14.jpg',
        name: 'Kith Women Amalia Silk Blouse',
        price: 25000.00,
        type: 'female',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_15.jpg',
        name: 'Kith Women Flynn Medallion Print Half Zip',
        price: 29100.00,
        type: 'female',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_16.jpg',
        name: 'Kith Women Medallion Jordyn Short',
        price: 20800.00,
        type: 'female',
        news: true,
        tshirt: false,
        pant: true,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_17.jpg',
        name: 'Kith for Vault by Vans Vintage Floral OG Classic Slip-On',
        price: 15300.00,
        type: 'female',
        news: true,
        tshirt: false,
        pant: false,
        shoe: true
    },
    {
        image: '../../assets/images/news/image_18.jpg',
        name: 'Palm Angels',
        description: 'The Palm Over Logo Cropped Tee',
        price: 40900.00,
        type: 'female',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_19.jpg',
        name: 'R13',
        description: 'R-13 Shaggy Oversized Sweater',
        price: 96300.00,
        type: 'female',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_20.jpg',
        name: 'Kith Kids Azulejo Tiles Camp Shirt',
        price: 9050.00,
        type: 'kids',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_21.jpg',
        name: 'Kith Kids Bird Of Paradise Tee',
        price: 7650.00,
        type: 'kids',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_22.jpg',
        name: 'Kith Kids Typography Tee',
        price: 7650.00,
        type: 'kids',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_23.jpg',
        name: 'Ronnie Fieg for New Balance 990v4 Crib',
        price: 8350.00,
        type: 'kids',
        news: true,
        tshirt: false,
        pant: false,
        shoe: true
    },
    {
        image: '../../assets/images/news/image_24.jpg',
        name: 'Kith Kids Aop Coach Jacket',
        price: 16700.00,
        type: 'kids',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_25.jpg',
        name: 'Kith Kids Seersucker Track Jacket',
        price: 16700.00,
        type: 'kids',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_26.jpg',
        name: 'Kith Kids Aop Coach Jacket',
        price: 16700.00,
        type: 'kids',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_27.jpg',
        name: 'Kith Kids Blocked Interlock Polo',
        price: 10400.00,
        type: 'kids',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_28.jpg',
        name: 'Kith Kids Baby Blocked Interlock Polo',
        price: 9050.00,
        type: 'kids',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_29.jpg',
        name: 'Kith Kids Baby Camp Shirt',
        price: 7650.00,
        type: 'kids',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_30.jpg',
        name: 'Kith Kids Tilden Polo',
        price: 11100.00,
        type: 'kids',
        news: true,
        tshirt: true,
        pant: false,
        shoe: false
    },
    {
        image: '../../assets/images/news/image_31.jpg',
        name: 'Kith Kids Baby Swim Trunk',
        price: 7650.00,
        type: 'kids',
        news: true,
        tshirt: false,
        pant: true,
        shoe: false
    }
] */


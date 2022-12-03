export interface Product{
    id:string;
    image: string;
    name: string;
    description?: string;
    price: number;
    type: string;
    news: boolean;
    tshirt: boolean;
    pant: boolean;
    shoe: boolean;
}
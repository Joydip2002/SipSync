export interface CoffeeList {
    id: number;
    name: string;
    image: string;
    price: string;
    rating: string;
    votes: number;
    popular: boolean;
    available: boolean;
}
export interface filterProps{
    name: string;
    onClick: (name: string) => void;
    isActive: boolean;
}

export interface CoffeeModalProps {
    data: CoffeeList;
    onClose: () => void;
}

export interface SignupData {
    name:string,
    email:string,
    address:string,
    password:string,
    cpassword:string
}
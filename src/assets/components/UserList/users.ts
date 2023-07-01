import {IUser} from "../../types/types";

export const users: IUser[] = [
    {
        id: 1,
        name: 'Alex',
        email: 'rememberfox00@gmail.com',
        address: {
            city: 'Kharkiv',
            street: 'Fialkovo',
            zipcode: '123'
        }
    },
    {
        id: 2,
        name: 'Vladik',
        email: 'vladic@gmail.com',
        address: {
            city: 'Polendiond',
            street: 'Kurva',
            zipcode: '333'
        }
    },
]
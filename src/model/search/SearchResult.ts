import { RecommendedUser } from "../RecommendedUser";
import manuel1 from '../../assets/manuel1.webp';
import manuel2 from '../../assets/manuel2.jpeg';
import manuel3 from '../../assets/manuel3.jpeg';
import { SearchResultType } from "./SearchResultType";

export interface SearchResult {
    user: RecommendedUser;
    city: string;
    type: SearchResultType;
}

export const SearchResultExample: SearchResult[] = [
    {
        user: {
            name: "Manuel Turizo",
            friends: 840,
            img: manuel1
        },
        city: "Tandil",
        type: SearchResultType.AMIGOS
    },
    {
        user: {
            name: "Manuel Mendez",
            friends: 1930,
            img: manuel2
        },
        city: "Bahia Blanca",
        type: SearchResultType.AMIGOS
    },
    {
        user: {
            name: "Manuel Gonzalez",
            friends: 113,
            img: manuel3
        },
        city: "Mar del plata",
        type: SearchResultType.PROFESIONALES
    }
]
import { Message } from "./Message";
import { RecommendedUser } from "../RecommendedUser";
import ramon from '../../assets/ramon.jpeg';
import diego from '../../assets/diego.jpeg';
import paula from '../../assets/paula.jpeg';
import patitas from '../../assets/patitas.jpeg';
import robert from '../../assets/robert.jpeg';
export interface Chat {
    user: RecommendedUser;
    messages: Message[];
}

export const DefaultChats: Chat[] = [
    {
        user: {
            name: "Ramon Rodriguez",
            friends: 0,
            img: ramon
        },
        messages: [
            {
                author: false,
                text: "Gracias a vos! Consultame cualquier cosa",
                time: "13:46"
            },
            {
                author: true,
                text: "Listo, un abrazo!",
                time: "14:00"
            },
            {
                author: false,
                text: ":)",
                time: "14:01"
            },
            {
                author: false,
                text: "Hola, como estas? Te consulto por tu publicacion sobre la cruza con un border collie. Tengo un macho de 9 meses",
                time: "17:46"
            }
        ]
    },
    {
        user: {
            name: "Diego Lopez",
            friends: 0,
            img: diego
        },
        messages: [
            {
                author: true,
                text: "Hola Diego, necesito que me digas que pipeta usas para tus perros, nunca les vi una",
                time: "20:06"
            }
        ]
    },
    {
        user: {
            name: "Paula Gomez",
            friends: 0,
            img: paula
        },
        messages: [
            {
                author: true,
                text: "Al final vamos a ir a pasear a los perros?",
                time: "19:06"
            },
            {
                author: false,
                text: "Si no hace frio si, ando media resfriada",
                time: "19:46"
            },
            {
                author: true,
                text: "Bueno dale! Igual un poco de abrigo y listo",
                time: "20:05"
            },
            {
                author: false,
                text: "Jajajaja sii",
                time: "20:06"
            }
        ]
    },
    {
        user: {
            name: "Veterinaria Patitas Felices",
            friends: 0,
            img: patitas
        },
        messages: [
            {
                author: false,
                text: "Hola, te recordamos que el turno es a las 18, que el animalito haya hecho sus necesidades antes de venir por favor :)",
                time: "16:55"
            },
            {
                author: false,
                text: "La direccion es Roca 234!",
                time: "16:55"
            },
            {
                author: false,
                text: "Toca timbre, vamos a estar en el consultorio de atras",
                time: "16:56"
            },
            {
                author: true,
                text: "A eso de las 18 paso, gracias!",
                time: "17:06"
            }
        ]
    },
    {
        user: {
            name: "Roberto Moauro",
            friends: 0,
            img: robert
        },
        messages: [
            {
                author: true,
                text: "Roberto tenes idea acerca de si ya puedo castrar a mi perro?",
                time: "13:32"
            },
            {
                author: false,
                text: "No, no sabria decirte, escribile a la veterinaria patitas felices",
                time: "14:00"
            }
        ]
    }
];
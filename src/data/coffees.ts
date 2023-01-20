
export interface Coffee{
    id: number,
    tags:string[],
    name: string,
    info: string,
    image: string,
    price: number
}





export const coffeesList: Coffee[] = [
    {
      id: 1,
      tags: ["tradicional"],
      name: "Expresso Tradicional",
      info: "O tradicional café feito com água quente e grãos moídos",
      image: "../../public/Coffes/Americano.svg",
      price: 9.9,
    },
    {
      id: 2,
      tags: ["tradicional"],
      name: "Expresso Americano",
      info: "Expresso diluído, menos intenso que o tradicional",
      image: "../../public/Coffes/Americano.svg",
      price: 9.9,
    },
    {
      id: 3,
      tags: ["tradicional"],
      name: "Expresso Cremoso",
      info: "Café expresso tradicional com espuma cremosa",
      image: "../../public/Coffes/Americano.svg",
      price: 9.9,
    },
    {
      id: 4,
      tags: ["tradicional", "gelado"],
      name: "Expresso Gelado",
      info: "Bebida preparada com café expresso e cubos de gelo",
      image: "../../public/Coffes/Americano.svg",
      price: 9.9,
    },
    {
      id: 5,
      tags: ["tradicional", "com leite"],
      name: "Café com Leite",
      info: "Meio a meio de expresso tradicional com leite vaporizado",
      image: "../../public/Coffes/Americano.svg",
      price: 9.9,
    },
    {
      id: 6,
      tags: ["tradicional", "com leite"],
      name: "Latte",
      info: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      image: "../../public/Coffes/Americano.svg",
      price: 9.9,
    },
    {
      id: 7,
      tags: ["tradicional", "com leite"],
      name: "Capuccino",
      info: "Bebida com canela feita de doses iguais de café, leite e espuma",
      image: "../../public/Coffes/Americano.svg",
      price: 9.9,
    },
    {
      id: 8,
      tags: ["tradicional", "com leite"],
      name: "Macchiato",
      info: "Café expresso misturado com um pouco de leite quente e espuma",
      image: "../../public/Coffes/Americano.svg",
      price: 9.9,
    },
    {
      id: 9,
      tags: ["tradicional", "com leite"],
      name: "Mocaccino",
      info: "Café expresso com calda de chocolate, pouco leite e espuma",
      image: "../../public/Coffes/Americano.svg",
      price: 9.9,
    },
    {
      id: 10,
      tags: ["especial", "com leite"],
      name: "Chocolate Quente",
      info: "Bebida feita com chocolate dissolvido no leite quente e café",
      image: "../../public/Coffes/Americano.svg",
      price: 9.9,
    },
    {
      id: 11,
      tags: ["especial", "alcoólico", "gelado"],
      name: "Cubano",
      info: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      image: "../../public/Coffes/Americano.svg",
      price: 9.9,
    },
    {
      id: 12,
      name: 'Havaiano',
      info: 'Bebida adocicada preparada com café e leite de coco',
      price: 19.9,
      tags: ['especial'],
      image: "../../public/Coffes/Americano.svg",
      
    },
    {
      id: 13,
      name: 'Árabe',
      info: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 25.9,
      tags: ['especial'],
      image: "../../public/Coffes/Americano.svg",
      
    },
    {
      id: 14,
      name: 'Irlandês',
      info: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 22.9,
      tags: ['especial', 'alcoólico'],
      image: "../../public/Coffes/Americano.svg",
      
    },
     
  ];
  







  
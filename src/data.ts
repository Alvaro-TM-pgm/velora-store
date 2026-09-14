export type Product = { id:number; name:string; slug:string; category:string; price:number; old?:number; color:string; sizes:string[]; image:string; description:string; stock:number; badge?:string; active?:boolean };
const img=(id:number)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;
export const products:Product[] = [
 {id:1,name:'Essential Tee',slug:'essential-tee',category:'Camisetas',price:89.9,old:109.9,color:'Off-white',sizes:['P','M','G','GG'],stock:18,badge:'Novo',image:img(1521572163474),description:'Algodão premium, caimento essencial e acabamento macio.'},
 {id:2,name:'Oversized Black',slug:'oversized-black',category:'Camisetas',price:119.9,color:'Preto',sizes:['P','M','G'],stock:9,badge:'Mais vendido',image:img(1551488831),description:'Silhueta ampla para compor looks urbanos com conforto.'},
 {id:3,name:'Urban Hoodie',slug:'urban-hoodie',category:'Moletons',price:189.9,old:229.9,color:'Grafite',sizes:['M','G','GG'],stock:7,badge:'Oferta',image:img(1556821840),description:'Moletom encorpado com capuz e interior macio.'},
 {id:4,name:'Straight Jeans',slug:'straight-jeans',category:'Calças',price:199.9,color:'Índigo',sizes:['36','38','40','42'],stock:12,image:img(1541099649105),description:'Jeans de lavagem escura com corte reto atemporal.'},
 {id:5,name:'Linen Midi',slug:'linen-midi',category:'Vestidos',price:219.9,color:'Areia',sizes:['P','M','G'],stock:8,badge:'Novo',image:img(1595777457583),description:'Vestido midi em linho misto, leve para os dias quentes.'},
 {id:6,name:'Tailored Blazer',slug:'tailored-blazer',category:'Jaquetas',price:299.9,color:'Caramelo',sizes:['P','M','G'],stock:4,image:img(1591047139829),description:'Alfaiataria descontraída com estrutura elegante.'},
 {id:7,name:'Rib Tank',slug:'rib-tank',category:'Camisetas',price:69.9,color:'Branco',sizes:['P','M','G'],stock:22,image:img(1503341504253),description:'Regata canelada feita para acompanhar a rotina.'},
 {id:8,name:'Wide Leg Trouser',slug:'wide-leg-trouser',category:'Calças',price:209.9,color:'Preto',sizes:['36','38','40','42'],stock:10,image:img(1594633312681),description:'Calça ampla de cintura alta e movimento fluido.'},
 {id:9,name:'Satin Slip Dress',slug:'satin-slip-dress',category:'Vestidos',price:249.9,color:'Vinho',sizes:['P','M','G'],stock:6,image:img(1539008835657),description:'Cetim leve com alças reguláveis e brilho discreto.'},
 {id:10,name:'Denim Jacket',slug:'denim-jacket',category:'Jaquetas',price:239.9,color:'Azul',sizes:['P','M','G','GG'],stock:11,image:img(1544022613),description:'Jaqueta jeans de modelagem clássica e acabamento lavado.'},
 {id:11,name:'Canvas Tote',slug:'canvas-tote',category:'Acessórios',price:79.9,color:'Natural',sizes:['Único'],stock:30,image:img(1597481499750),description:'Bolsa tote resistente em lona de algodão.'},
 {id:12,name:'Soft Knit',slug:'soft-knit',category:'Moletons',price:179.9,color:'Creme',sizes:['P','M','G'],stock:14,image:img(1576566588028),description:'Tricô de toque suave e modelagem confortável.'},
];
export const categories=['Camisetas','Calças','Vestidos','Moletons','Jaquetas','Acessórios'];
const productKey='velora-products';
export const loadProducts=():Product[]=>{try{return JSON.parse(localStorage.getItem(productKey)||'') as Product[]||products}catch{return products}};
export const saveProducts=(items:Product[])=>localStorage.setItem(productKey,JSON.stringify(items));

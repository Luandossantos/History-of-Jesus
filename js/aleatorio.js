const nomes = ["Cleiton", "Lucas", "Luan", "Geovane", "Eydrian", "Gustavo", "Felipe"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
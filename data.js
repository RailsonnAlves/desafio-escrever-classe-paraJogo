class carro{
    constructor(cor, marca, ano){
        this.ano = ano
        this.cor = cor
        this.marca = marca
    }

    acelerar(){
        console.log('Estou ' + this.ano + ' acelerando')
    }
}

let pegeout = new carro ('vermelho', 'pegeout', 2006)
console.log(pegeout)
pegeout.acelerar()
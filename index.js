class heroi{
    constructor(tipo,idade, nome){
        this.idade = idade
        this.nome = nome
        this.tipo = tipo
        this.ataque = 0
        this.defesa = 0
    }

    atacar(){
        if(this.tipo === "mago" || this.tipo === "Mago"){
            console.log(`O ${this.tipo} atacou usando magia`)
        }
        else if(this.tipo === "guerreiro" || this.tipo === "Guerreiro"){
            console.log(`O ${this.tipo} atacou usando a espada`)
        }
        else if(this.tipo === "monge" || this.tipo === "Monge"){
            console.log(`O ${this.tipo} atacou usando artes maciais`)
        }
        else if(this.tipo == "ninja" || this.tipo === "Ninja"){
            console.log(`O ${this.tipo} atacou usando a shuriken`)
        }
    }
    mudartipo(){
        this.tipo = this.tipo.toLowerCase()
    }
    setaEstatus(){
        this.tipo = this.tipo.toLowerCase()

        switch(this.tipo){
            case "mago":
                this.ataque = 100
                this.defesa = 75
                break
            case "guerreiro":
                this.ataque = 80
                this.defesa = 99
                break
            case "monge":
                this.ataque = 80
                this.defesa = 75
                break
            case "ninja":
                this.ataque = 88
                this.defesa = 60
                break
        }
        return console.log(`${this.ataque}/${this.defesa}`)
    }
}

let maguin = new heroi("MONge", 100, "maguinho op")
maguin.setaEstatus()
maguin.atacar()
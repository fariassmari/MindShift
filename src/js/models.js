// AQUI FICARÁ AS CLASSES USADAS //

// O prof explicou de uma maneira mais dboa, criando um objeto simples, sem classes, 
// mas como a gente sempre vai estar criando novos dados a partir de um "molde", achei melhor deixar logo no formato das classes.





// Usar 'export' para permitir que a classe seja importada em outros arquivos
export class Compromisso {
    constructor(titulo, tipo) {
        this.id = Date.now(); // id baseado na hora
        this.titulo = titulo;
        this.tipo = tipo;
        this.concluido = false;
    }
    marcar_concluido() {
        this.concluido = true;
        console.log(` Compromisso "${this.titulo}" concluído com sucesso! `);
    }
    desmarcar(){
        this.concluido = false;
    }
}
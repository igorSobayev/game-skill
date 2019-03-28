export class Juego {

    idjuego: number;
    imagen: string;
    titulo: string;
    descripcion: string;
    vpositivos: number;
    vnegativos: number;

    constructor(idjuego: number, imagen: string, titulo: string, descripcion: string, vpositivos: number, vnegativos: number) {

        this.idjuego = idjuego;
        this.imagen = imagen;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.vpositivos = vpositivos;
        this.vnegativos = vnegativos;

    }
}
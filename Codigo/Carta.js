//Declaracion Clase CARTA
function Carta() {
	//Propiedades
    this.indice = Math.floor(Math.random() * 52) + 1; //Se genera aleatoriamente el indice de la carta

	//Metodo que devuelve el nombre de la carta
	this.obtenerNombre = function() {
        numero = this.indice % 13;
        switch(numero){
            case 0:
                return "K";
            case 1:
                return "A";
            case 11:
                return "J";
            case 12:
                return "Q";
            default:
                return numero.toString();
        }
    };

	//Metodo que devuelve la pinta de la carta
	this.obtenerPinta = function() {
        if(this.indice<=13)
            return "Trebol";
        else if (this.indice <= 26)
            return "Pica";
        else if (this.indice <= 39)
            return "Corazon";
        else
            return "Diamante";
    };

	//Metodo que entrega la ruta de la imagen de la carta	
	this.obtenerImagen = function() {
        return "imagenes/Cartas/Carta" + this.indice.toString()+".jpg";
    };
	
	this.obtenerIndiceNombre= function() {
		numero = this.indice % 13;
		if(numero == 0)
			return 12;
		else
			return numero-1;
	};	
}
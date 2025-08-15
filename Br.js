/*
  Crea un videojuego que tenga las siguientes clases:
  - personaje: Clase base para todos los personajes del juego.
  - guerrero: Clase que hereda de personaje y representa a un guerrero.
  - mago: Clase que hereda de personaje y representa a un mago.
  - arquero: Clase que hereda de personaje y representa a un arquero.

  personaje tiene las siguientes propiedades y metodos:
  - nombre: Nombre del personaje.
  - vida: Vida del personaje.
  - daño: Daño del personaje.
  - defensa: Defensa del personaje.
  - velocidad: Velocidad del personaje.
  - atacar(): Metodo utilizado para atacar (con los puños).
  - saludar(): Método utilizado para saludar indicando nombre y clase.

  guerrero tiene las siguientes propiedades y metodos:
  - array_de_armas: Armas que puede usar el guerrero.
  - atacar_con_arma(): Método utilizado para atacar con un arma aleatoria del array.

  mago tiene las siguientes propiedades y metodos:
  - array_de_hechizos: Hechizos que puede usar el mago.
  - atacar_con_hechizo(): Método utilizado para atacar con un hechizo aleatorio del array.

  arquero tiene las siguientes propiedades y metodos:
  - array_de_flechas: Flechas que puede usar el arquero.
  - disparar(): Método utilizado para disparar una flecha aleatoria del array.

  Debes de crear al menos 5 personajes, al menos 2 deben de ser guerreros, 2 magos y 1 arquero.

  Al iniciar el juego, cada personaje debe saludar indicando su nombre y clase.

  Luego habrá una ronda de ataques. En cada ronda, cada personaje atacará a otro personaje de forma aleatoria.

  Cada personaje solo puede atacar una vez por ronda.

  Además, el orden de la ronda debe ser determinado de forma aleatoria pero tomando en cuenta la velocidad de cada personaje.

  Para ello debes jugar con las probabilidades de cada personaje, por ejemplo:
  - Si el personaje tiene una velocidad de 10, debes generar un numero aleatorio entre 1 y 10.
  - Según el numero aleatorio generado, será determinado el orden de ataque de cada personaje en esa ronda

  Ejemplo:
  Personaje 1: 5
  Personaje 2: 8
  Personaje 3: 2
  Personaje 4: 10
  Personaje 5: 6

  El personaje 4 atacará primero, luego el personaje 2, luego el personaje 5, luego el personaje 1 y por último el personaje 3.

  Cuando un personaje ataque a otro, se utilizara la siguiente lógica:

  El personaje atacado se intentara defender, este generara un numero aleatorio entre 1 y su defensa.
  Si el numero aleatorio es mayor que el daño del atacante, el ataque falla y no se le resta vida al personaje atacado.
  Si el numero aleatorio es menor o igual al daño del atacante, el ataque tiene éxito y se le resta vida al personaje atacado.

  Al momento de atacar, se debe mostrar un mensaje indicando quién ataca a quién y si el ataque fue exitoso o fallido.

  Además, hay un tercio de posibilidades de que un personaje ataque con sus puños y dos tercios de posibilidades de que ataque con su arma, hechizo o flecha (según su clase).

  Cuando la vida de un personaje llegue a 0, este será eliminado del juego y no podrá atacar más.
  El juego termina cuando solo quede un personaje con vida.

  Es importante que cuando un personaje muera, se muestre un mensaje indicando que ha muerto y que no puede atacar más.
  Además, al final del juego, se debe mostrar un mensaje indicando quién es el ganador.

  El juego es ganado por el personaje que quede con vida al final.

  Nota: es importante imprimir cada numero de ronda
  ejemplo: "Ronda 1", "Ronda 2", etc.

  Puntos opcionales:
  - Implementa un sistema de habilidades especiales para cada clase, estas habilidades solo se pueden ser utilizadas una vez por juego.
  - Implementa un inventario y objetos para cada personaje, los cuales pueden ser utilizados para mejorar sus habilidades o recuperar vida, sin embargo
  Estos consumirán un turno de ataque y tienen un número limitado de usos.
  - Agrega la clase "vampiro" cuyos ataques regenerar un % aleatorio de vida al personaje.
  - Agrega la posibilidad de 1 entre 10 de que un personaje se tropiece y no pueda hacer nada en esa ronda.
*/

class Personaje {
  constructor(nombre, vida, daño, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.daño = daño;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  atacar() {
    return Math.floor(Math.random() * this.daño + 1);
  }
  defenderse() {
    return Math.floor(Math.random() * this.defensa + 1);
  }
}

//clase para aquero

class Arquero extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad) {
    super(nombre, vida, daño, defensa, velocidad);
    this.flechas = ["Flecha de fuego", "Flecha explosiva"];
  }

  disparar() {
    const flecha = this.flechas[Math.floor(Math.random() * this.flechas.length)];
    console.log(`${this.nombre} dispara una ${flecha}.`);
  }
}

// Clase para guerrero
class Guerrero extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad) {
    super(nombre, vida, daño, defensa, velocidad);
    this.armas = ["Espada", "Hacha"];
  }

  usar_arma() {
    const arma = this.armas[Math.floor(Math.random() * this.armas.length)];
    console.log(`${this.nombre} ataca con su ${arma}.`);
  }
}

// Clase para mago
class Mago extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad) {
    super(nombre, vida, daño, defensa, velocidad);
    this.hechizos = ["Bola de fuego", "rayo"];
  }

  lanzar_hechizo() {
    const hechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
    console.log(`${this.nombre} lanza un ${hechizo}.`);
  }
}

let guerrero1 = new Guerrero("Guerrero1", 100, 20, 10, 5);
let guerrero2 = new Guerrero("Guerrero2", 120, 25, 15, 6);
let mago1 = new Mago("Mago1", 80, 15, 5, 7);
let mago2 = new Mago("Mago2", 90, 18, 8, 4);
let arquero1 = new Arquero("Arquero1", 110, 22, 12, 8);

let personajes = [guerrero1, guerrero2, mago1, mago2, arquero1];

personajes.forEach(personaje => {
  console.log(`Hola, soy ${personaje.nombre} y soy un ${personaje.constructor.name}.`);
});

let ronda = 1;

//filtrar personajes que sigan vivos
while (personajes.filter(p => p.vida > 0).length > 1) { 
  console.log(`-=-=-=- RONDA ${ronda} -=-=-=-`);
  let vivos = personajes.filter(p => p.vida > 0);
  vivos.sort((a, b) => b.velocidad - a.velocidad);

  for (let atacante of vivos) {
    if (atacante.vida <= 0) continue;

    let defensor;
    do {
      defensor = vivos[Math.floor(Math.random() * vivos.length)];
    } while (defensor.nombre === atacante.nombre || defensor.vida <= 0);

    let accion = Math.random();
    if (accion < 0.33) {
      console.log(`${atacante.nombre} ataca con sus puños a ${defensor.nombre}.`);
      let daño = atacante.atacar();
      let defensa = defensor.defenderse();
      if (defensa >= daño) {
        console.log(`El ataque de ${atacante.nombre} ha fallado.`);
      } else {
        defensor.vida -= (daño - defensa);
        console.log(`${atacante.nombre} ha infligido ${daño - defensa} de daño a ${defensor.nombre}. Vida restante: ${defensor.vida}`);
        if (defensor.vida <= 0) {
          console.log(`--==+ ${defensor.nombre} ha muerto y no puede atacar más +==--`);
        }
      }
    } else {
      if (atacante instanceof Guerrero) {
        atacante.usar_arma();
      } else if (atacante instanceof Mago) {
        atacante.lanzar_hechizo();
      } else if (atacante instanceof Arquero) {
        atacante.disparar();
      }

      let daño = atacante.atacar() + 10;
      let defensa = defensor.defenderse();
      if (defensa >= daño) {
        console.log(`El ataque de ${atacante.nombre} ha fallado.`);
      } else {
        defensor.vida -= (daño - defensa);
        console.log(`${atacante.nombre} ha infligido ${daño - defensa} de daño a ${defensor.nombre}. Vida restante: ${defensor.vida}`);
        if (defensor.vida <= 0) {
          console.log(`--==+ ${defensor.nombre} ha muerto y no puede atacar más +==--`);
        }
      }
    }
  }
  ronda++;
}
let ganador = personajes.find(p => p.vida > 0);
console.log(`-=!! El ganador es ${ganador.nombre} !!=-`);


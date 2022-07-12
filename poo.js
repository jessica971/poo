class animal {
    constructor(nom,couleur, sante = 100){
        this.nom = nom;
        this.couleur = couleur;
        this.sante = sante;
    }

    dormir(){
        console.log("L'animal" + this.nom + "dort.");
    }

    manger(){
        console.log("L'animal" + this.nom + "mange.");
    }

    attaquer(){
        console.log("L'animal" + this.nom + "attaque.");
    }

    seDeplacer(){
        console.log("L'animal" + this.nom + "se déplace.");
    }

    communiquer(){
        console.log("L'animal" + this.nom + "communique..");
    }
}

class oiseau extends Animal {
    constructor(nom,couleur, sante, longueurDesAiles){
    super(nom, couleur, sante);
    
    this.longueurDesAiles = longueurDesAiles;
}

Voler(){
    super.seDeplacer();
    console.log("L'animal" + this.nom + "vole.");
}

Chanter(){
    super.communiquer();
    console.log("L'oiseau" + this.nom + "chante.");
}























# Ynov Bowling

Bienvenue dans la simulation de bowling en ligne de commande (CLI) en JavaScript. Ce projet simule le déroulement d'une partie de bowling avec plusieurs joueurs.

## Prérequis

- Node.js installé sur votre machine

## Installation

1. Clonez le dépot du projet sur votre machine en utilisant la commande suivante
   `git clone`

2. Installez les dépendances :
    `npm install`


## Comment jouer

Pour démarrer le jeu, exécutez `node index.js`


Vous serez accueilli par un menu :

- Tapez `n` pour démarrer une nouvelle partie.
- Tapez `h` pour afficher l'historique des parties précédentes.
- Tapez `q` pour quitter le jeu.

### Nouvelle Partie

Lorsque vous choisissez de démarrer une nouvelle partie :

1. Entrez le nombre de joueurs (entre 1 et 6).
2. Entrez le nom de chaque joueur.
3. Pour chaque frame, entrez le nombre de quilles abattues par chaque joueur lors de leurs lancers.

### Déroulement du Jeu

Le jeu se déroule sur 10 frames. Pour chaque joueur et pour chaque frame :

- Un joueur peut marquer un strike (toutes les quilles renversées en un seul lancer) ou un spare (toutes les quilles renversées en deux lancers).
- Le score est calculé en fonction du nombre de quilles renversées et des strikes/spares.

### Fin de la Partie

Après la 10ème frame, le score final de chaque joueur est affiché, et le gagnant est déclaré.


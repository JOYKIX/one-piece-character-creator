// Liste des fruits paramecia
const parameciaFruits = ["Gomu Gomu no Mi", "Bara Bara no Mi", "Sube Sube no Mi", "Bomu Bomu no Mi", "Kilo Kilo no Mi", "Hana Hana no Mi", "Doru Doru no Mi", "Baku Baku no Mi", "Mane Mane no Mi", "Supa Supa no Mi", "Toge Toge no Mi", "Ori Ori no Mi", "Bane Bane no Mi", "Ito Ito no Mi", "Noro Noro no Mi", "Doa Doa no Mi", "Awa Awa no Mi", "Beri Beri no Mi", "Sabi Sabi no Mi", "Shari Shari no Mi", "Horo Horo no Mi", "Yomi Yomi no Mi", "Kage Kage no Mi", "Suke Suke no Mi", "Nikyu Nikyu no Mi", "Toshi Toshi no Mi", "Jiki Jiki no Mi", "Ope Ope no Mi", "Shiro Shiro no Mi", "Wara Wara no Mi", "Oto Oto no Mi", "Mero Mero no Mi", "Doku Doku no Mi", "Horu Horu no Mi", "Choki Choki no Mi", "Gura Gura no Mi", "Kira Kira no Mi", "Poke Poke no Mi", "Woshu Woshu no Mi", "Fuwa Fuwa no Mi", "Deka Deka no Mi", "Mato Mato no Mi", "Soru Soru no Mi", "Fuku Fuku no Mi", "Hobi Hobi no Mi", "Buki Buki no Mi", "Guru Guru no Mi", "Beta Beta no Mi", "Zushi Zushi no Mi", "Bari Bari no Mi", "Nui Nui no Mi", "Giro Giro no Mi", "Ato Ato no Mi", "Jake Jake no Mi", "Pamu Pamu no Mi", "Sui Sui no Mi", "Ton Ton no Mi", "Hira Hira no Mi", "Beta Beta no Mi", "Gutsu Gutsu no Mi", "Gocha Gocha no Mi", "Noro Noro no Mi", ];

// Liste des fruits zoan
const zoanFruits = [
  "Ushi Ushi no Mi, modèle Bison", "Hito Hito no Mi, modèle Humain", "Tori Tori no Mi, modèle Faucon", "Inu Inu no Mi, modèle Basset", "Mogu Mogu no Mi", "Inu Inu no Mi, modèle Chacal", "Uma Uma no Mi", "Neko Neko no Mi, modèle Léopard", "Zo Zo no Mi", "Inu Inu no Mi, modèle Loup", "Ushi Ushi no Mi, modèle Girafe", "Hebi Hebi no Mi, modèle Cobra Royal", "Hebi Hebi no Mi, modèle Anaconda", "Kame Kame no Mi", "Tama Tama no Mi", "Sara Sara no Mi, modèle Axolotl", "Mushi Mushi no Mi, modèle Scarabée-Rhinocéros", "Mushi Mushi no Mi, modèle Guêpe", "Tori Tori no Mi, modèle Albatros", "Inu Inu no Mi, modèle Tanuki", "Ryu Ryu no Mi, modèle Allosaurus", "Zo Zo no Mi, modèle Mammouth", "Ryu Ryu no Mi, modèle Spinosaurus", "Ryu Ryu no Mi, modèle Ptéranodon", "Ryu Ryu no Mi, modèle Brachiosaure", "Ryu Ryu no Mi, modèle Pachycephalosaurus", "Ryu Ryu no Mi, modèle Tricératops", "Kumo Kumo no Mi, modèle Rosamygale grauvogeli", "Neko Neko no Mi, modèle Tigre à dents de sabre", "Tori Tori no Mi, modèle Phénix", "Hito Hito no Mi, modèle Bouddha", "Uo Uo no Mi, modèle Dragon azur", "Inu Inu no Mi, modèle Renard à neuf queues", "Hebi Hebi no Mi, modèle Dragon à huit têtes", "Hito Hito no Mi, modèle Onyudo", "Inu Inu no Mi, modèle Loup divin", "Uma Uma no Mi, modèle Pégase", ];

// Liste des fruits logia
const logiaFruits = [
  "Moku Moku no Mi", "Suna Suna no Mi", "Mera Mera no Mi", "Goro Goro no Mi", "Hie Hie no Mi", "Yami Yami no Mi", "Pika Pika no Mi", "Magu Magu no Mi", "Susu Susu no Mi", "Numa Numa no Mi", "Gasu Gasu no Mi", "Yuki Yuki no Mi", "Mori Mori no Mi", ];

// Liste des armes
const weapons = ["Épée", "Pistolet", "Fusil", "Hache", "Fouet", "Katana", /* ... ajoutez d'autres armes ... */];

// Ajoutez ces lignes pour gérer le nombre d'essais
const maxAttempts = 10;

function updateAttemptsRemaining() {
    const attemptsRemaining = localStorage.getItem('attemptsRemaining') || maxAttempts;
    document.getElementById('attempts-remaining').innerText = `Nombre d'essais restants : ${attemptsRemaining}`;
}

function decrementAttempts() {
    let attemptsRemaining = localStorage.getItem('attemptsRemaining') || maxAttempts;
    attemptsRemaining = Math.max(0, attemptsRemaining - 1);
    localStorage.setItem('attemptsRemaining', attemptsRemaining);
    updateAttemptsRemaining();
}

function resetAttempts() {
    localStorage.removeItem('attemptsRemaining');
    updateAttemptsRemaining();
}

// Ajoutez ces lignes pour gérer le code de déverrouillage
const unlockCode = "unlock10";

function checkUnlockCode() {
    const enteredCode = document.getElementById('unlock-code').value;

    if (enteredCode === unlockCode) {
        // Code correct, ajouter 10 essais supplémentaires
        let attemptsRemaining = localStorage.getItem('attemptsRemaining') || maxAttempts;
        attemptsRemaining = Math.min(maxAttempts, parseInt(attemptsRemaining) + 10);
        localStorage.setItem('attemptsRemaining', attemptsRemaining);
        updateAttemptsRemaining();

        // Effacer le champ du code
        document.getElementById('unlock-code').value = '';

        alert("Code correct ! Vous avez gagné 10 essais supplémentaires.");
    } else {
        alert("Code incorrect. Veuillez réessayer.");
    }
}

// Fonctions pour générer le Fruit du Démon, le Haki, et la Volonté du D
function generateFruit() {
    const randomChance = Math.random(); // Générer un nombre aléatoire entre 0 et 1

    if (randomChance <= 0.6) {
        return "Aucun fruit du démon";
    } else if (randomChance <= 0.85) {
        // 25% de chance : Fruit de type paramecia
        const randomParameciaIndex = Math.floor(Math.random() * parameciaFruits.length);
        return `Fruit de type paramecia : ${parameciaFruits[randomParameciaIndex]}`;
    } else if (randomChance <= 0.95) {
        // 10% de chance : Fruit de type zoan
        const randomZoanIndex = Math.floor(Math.random() * zoanFruits.length);
        return `Fruit de type zoan : ${zoanFruits[randomZoanIndex]}`;
    } else {
        // 5% de chance : Fruit de type logia
        const randomLogiaIndex = Math.floor(Math.random() * logiaFruits.length);
        return `Fruit de type logia : ${logiaFruits[randomLogiaIndex]}`;
    }
}

function generateHaki() {
    const randomChance = Math.random(); // Générer un nombre aléatoire entre 0 et 1

    if (randomChance <= 0.57) {
        return "Aucun Haki";
    } else if (randomChance <= 0.82) {
        return "Haki de l'armement";
    } else if (randomChance <= 0.945) {
        return "Haki de l'observation";
    } else if (randomChance <= 0.995) {
        return "Haki de l'armement et Haki de l'observation";
    } else {
        return "Haki de l'armement, Haki de l'observation et Haki des Rois";
    }
}

function generateWillOfD() {
    const randomChance = Math.random(); // Générer un nombre aléatoire entre 0 et 1
    const willOfDResult = randomChance <= 0.1 ? "Oui" : "Non";

    // Afficher le résultat
    const willOfDDiv = document.getElementById('will-of-d');
    willOfDDiv.innerText = `Volonté du D : ${willOfDResult}`;
}

// Fonction pour générer le montant de la prime
function generateRandomBounty() {
    const randomBounty = Math.floor(Math.random() * 6000000001); // Générer un nombre aléatoire entre 0 et 6.000.000.000 B
    return randomBounty.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Fonction pour soumettre le formulaire et générer le personnage
function submitForm() {
    // Récupérer le nombre d'essais restants
    const attemptsRemaining = localStorage.getItem('attemptsRemaining') || 0;

    if (attemptsRemaining > 0) {
        // Récupérer les valeurs du formulaire
        const lastName = document.getElementById('last-name').value;
        const firstName = document.getElementById('first-name').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        // Récupérer les armes sélectionnées
        const selectedWeapons = [];
        const weaponsSelect = document.getElementById('weapon');
        const selectedWeapon = weaponsSelect.options[weaponsSelect.selectedIndex].value;

        // Générer la prime aléatoire
        const bounty = generateRandomBounty();

        // Générer le Haki
        const haki = generateHaki();

        // Générer le Fruit du Démon
        const fruit = generateFruit();

        // Vérifier si la volonté du D est présente
        const willOfDResult = document.getElementById('will-of-d').innerText;
        const hasWillOfD = willOfDResult.includes('Oui');

        // Formater le message en conséquence
        let characterMessage = `Personnage :\n${lastName} ${hasWillOfD ? 'D. ' : ''}${firstName}\nSexe : ${gender}\nArme : ${selectedWeapon}\nHaki : ${haki}\nFruit : ${fruit}\nPrime : ${bounty} B`;

        // Afficher le résultat
        const resultDiv = document.getElementById('result');
        resultDiv.innerText = characterMessage;

        // Mettre à jour le nombre d'essais restants
        decrementAttempts();
    } else {
        alert("Vous n'avez plus d'essais restants.");
    }
}

// Ajoutez ces lignes pour initialiser le nombre d'essais restants lors du chargement de la page
window.onload = function () {
    updateAttemptsRemaining();
};

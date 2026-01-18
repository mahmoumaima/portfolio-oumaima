/**
 * Portfolio Oumaima Mahmoudi
 * Formulaire de contact - Validation et envoi AJAX
 * Développé par Oumaima - 2025
 */

document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // SÉLECTEURS
  // =============================================

  const formulaire = document.querySelector('.formulaire-contact');
  if (!formulaire) return;

  const champs = formulaire.querySelectorAll('input, textarea');
  const boutonEnvoi = formulaire.querySelector('button[type="submit"]');
  const messageStatut = formulaire.querySelector('.form-result');
  const barreProgression = formulaire.querySelector('.barre-progression');
  const remplissageBarre = formulaire.querySelector('.barre-progression-bar');


  // =============================================
  // MESSAGES DE VALIDATION (en français)
  // =============================================

  const messagesErreur = {
    name: "Veuillez entrer votre nom (lettres, espaces et tirets uniquement).",
    email: "Veuillez entrer une adresse email valide (exemple : nom@email.com).",
    subject: "Veuillez entrer un sujet valide (lettres, espaces et tirets uniquement).",
    message: "Veuillez décrire votre demande (minimum 10 caractères)."
  };

  // Expression régulière pour valider les champs alphabétiques
  // Accepte : lettres (avec accents), espaces, tirets, apostrophes
  const regexAlphabetique = /^[a-zA-ZÀ-ÿ\s\-']+$/;


  // =============================================
  // BARRE DE PROGRESSION
  // =============================================

  const afficherProgression = () => {
    if (barreProgression && remplissageBarre) {
      barreProgression.classList.add('is-visible');
      remplissageBarre.style.width = '70%';
    }
  };

  const masquerProgression = (succes) => {
    if (!barreProgression || !remplissageBarre) return;

    remplissageBarre.style.width = succes ? '100%' : '0%';

    if (succes) {
      setTimeout(() => {
        barreProgression.classList.remove('is-visible');
        remplissageBarre.style.width = '0%';
      }, 500);
    } else {
      barreProgression.classList.remove('is-visible');
    }
  };


  // =============================================
  // MESSAGE DE STATUT
  // =============================================

  const afficherMessage = (texte, estSucces) => {
    if (!messageStatut) return;

    messageStatut.textContent = texte;
    messageStatut.classList.remove('is-visible', 'is-success', 'is-error');
    messageStatut.classList.add('is-visible', estSucces ? 'is-success' : 'is-error');
  };

  const reinitialiserMessage = () => {
    if (messageStatut) {
      messageStatut.textContent = '';
      messageStatut.classList.remove('is-visible', 'is-success', 'is-error');
    }
  };


  // =============================================
  // VALIDATION DES CHAMPS
  // =============================================

  champs.forEach((champ) => {
    // Message personnalisé si champ invalide
    champ.addEventListener('invalid', () => {
      const nomChamp = champ.getAttribute('name');
      if (nomChamp && messagesErreur[nomChamp]) {
        champ.setCustomValidity(messagesErreur[nomChamp]);
      }
    });

    // Réinitialiser quand l'utilisateur tape
    champ.addEventListener('input', () => {
      champ.setCustomValidity('');
    });
  });


  // =============================================
  // ENVOI DU FORMULAIRE (Formspree)
  // =============================================

  formulaire.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validation alphabétique pour nom et sujet
    const champNom = formulaire.querySelector('input[name="name"]');
    const champSujet = formulaire.querySelector('input[name="subject"]');

    if (champNom && !regexAlphabetique.test(champNom.value.trim())) {
      champNom.setCustomValidity(messagesErreur.name);
      formulaire.reportValidity();
      return;
    }

    if (champSujet && !regexAlphabetique.test(champSujet.value.trim())) {
      champSujet.setCustomValidity(messagesErreur.subject);
      formulaire.reportValidity();
      return;
    }

    // Vérifier la validité HTML5
    if (!formulaire.checkValidity()) {
      formulaire.reportValidity();
      return;
    }

    // Désactiver le bouton
    if (boutonEnvoi) {
      boutonEnvoi.disabled = true;
      boutonEnvoi.textContent = 'Envoi...';
    }

    reinitialiserMessage();
    afficherProgression();

    try {
      const reponse = await fetch(formulaire.action, {
        method: 'POST',
        body: new FormData(formulaire),
        headers: { Accept: 'application/json' }
      });

      if (reponse.ok) {
        masquerProgression(true);
        afficherMessage('Message envoyé ! Merci pour votre contact.', true);
        formulaire.reset();
      } else {
        masquerProgression(false);
        const donnees = await reponse.json();
        const erreur = donnees.errors
          ? donnees.errors.map((err) => err.message).join(', ')
          : "Oops ! Problème lors de l'envoi.";
        afficherMessage(erreur, false);
      }
    } catch {
      masquerProgression(false);
      afficherMessage('Oops ! Problème réseau ou serveur.', false);
    } finally {
      if (boutonEnvoi) {
        boutonEnvoi.disabled = false;
        boutonEnvoi.textContent = 'Envoyer le message';
      }
    }
  });

});

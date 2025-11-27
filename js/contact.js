document.addEventListener('DOMContentLoaded', () => {
  // --- Sélecteurs principaux
  const form = document.querySelector('.contact-form');
  if (!form) return;
  const fields = form.querySelectorAll('input, textarea');
  const statusEl = form.querySelector('.form-result');
  const submitBtn = form.querySelector('button[type="submit"]');
  const progressEl = form.querySelector('.form-progress');
  const progressBar = form.querySelector('.form-progress-bar');
  if (statusEl) statusEl.classList.remove('is-visible');

  // --- Messages en français
  const messages = {
    name: "Merci d'indiquer un nom entre 2 et 80 caractères.",
    email: "Merci de saisir une adresse email valide (ex: nom@domaine.com).",
    subject: "Le sujet doit contenir au maximum 120 caractères.",
    message: "Merci de détailler votre demande (10 à 1000 caractères)."
  };

  // --- Barre de progression de l'envoi du formulaire
  const showProgress = () => {
    if (progressEl && progressBar) {
      progressEl.classList.add('is-visible');
      progressBar.style.width = '70%';
    }
  };

  const endProgress = (success = false) => {
    if (progressEl && progressBar) {
      progressBar.style.width = success ? '100%' : '0%';
      if (!success) {
        progressEl.classList.remove('is-visible');
      } else {
        setTimeout(() => {
          progressEl.classList.remove('is-visible');
          progressBar.style.width = '0%';
        }, 500);
      }
    }
  };

  // --- Validation : messages custom + reset
  fields.forEach((field) => {
    field.addEventListener('invalid', () => {
      const key = field.getAttribute('name');
      if (key && messages[key]) {
        field.setCustomValidity(messages[key]);
      }
    });

    field.addEventListener('input', () => {
      field.setCustomValidity('');
    });
  });

  // --- Soumission AJAX Formspree
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi...';
    }
    if (statusEl) {
      statusEl.textContent = '';
      statusEl.classList.remove('is-visible', 'is-success', 'is-error');
    }
    showProgress();

    const data = new FormData(form);
    fetch(form.action, {
      method: form.method || 'POST',
      body: data,
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          endProgress(true);
          if (statusEl) {
            statusEl.textContent = 'Message envoyé ! Merci pour votre contact.';
            statusEl.classList.add('is-visible', 'is-success');
          }
          form.reset();
        } else {
          return response.json().then((data) => {
            endProgress(false);
            if (statusEl) {
              if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
                statusEl.textContent = data.errors.map((err) => err.message).join(', ');
              } else {
                statusEl.textContent = 'Oops! Problème lors de l’envoi.';
              }
              statusEl.classList.add('is-visible', 'is-error');
            }
          });
        }
      })
      .catch(() => {
        endProgress(false);
        if (statusEl) {
          statusEl.textContent = 'Oops! Problème réseau ou serveur.';
          statusEl.classList.add('is-visible', 'is-error');
        }
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Envoyer le message';
        }
      });
  });
});

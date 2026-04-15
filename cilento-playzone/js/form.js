// form.js — contact form validation with Italian error messages

const form        = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (form) { // guard if section not present

// ── Validation rules ─────────────────────────────────────────────────────────

const rules = {
  name: {
    validate(value) {
      if (!value.trim()) return 'Il nome è obbligatorio.';
      if (value.trim().length < 2) return 'Il nome deve contenere almeno 2 caratteri.';
      return null;
    },
  },
  email: {
    validate(value) {
      if (!value.trim()) return "L'email è obbligatoria.";
      // Basic RFC-ish check
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        return "Inserisci un indirizzo email valido (es. nome@email.it).";
      }
      return null;
    },
  },
  phone: {
    validate(value) {
      if (!value.trim()) return null; // optional
      // Accept digits, spaces, +, -, ()
      if (!/^[\d\s\+\-\(\)]{6,20}$/.test(value.trim())) {
        return 'Inserisci un numero di telefono valido.';
      }
      return null;
    },
  },
  date: {
    validate(value) {
      if (!value) return null; // optional
      const chosen = new Date(value);
      const today  = new Date();
      today.setHours(0, 0, 0, 0);
      if (chosen < today) return 'La data della festa non può essere nel passato.';
      return null;
    },
  },
  message: {
    validate(value) {
      if (!value.trim()) return 'Il messaggio è obbligatorio.';
      if (value.trim().length < 10) return 'Il messaggio deve contenere almeno 10 caratteri.';
      return null;
    },
  },
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function getField(name) {
  return form.elements[name];
}

function showError(name, message) {
  const field = getField(name);
  const errorEl = document.getElementById(`error-${name}`);
  if (!field || !errorEl) return;
  field.classList.add('is-invalid');
  field.classList.remove('is-valid');
  errorEl.textContent = message;
}

function clearError(name) {
  const field = getField(name);
  const errorEl = document.getElementById(`error-${name}`);
  if (!field || !errorEl) return;
  field.classList.remove('is-invalid');
  errorEl.textContent = '';
}

function markValid(name) {
  const field = getField(name);
  if (!field) return;
  field.classList.remove('is-invalid');
  field.classList.add('is-valid');
}

function validateField(name) {
  const field = getField(name);
  if (!field || !rules[name]) return true;
  const error = rules[name].validate(field.value);
  if (error) {
    showError(name, error);
    return false;
  }
  clearError(name);
  markValid(name);
  return true;
}

function validateAll() {
  const fields = Object.keys(rules);
  return fields.map(validateField).every(Boolean);
}

// ── Live validation on blur ───────────────────────────────────────────────────

Object.keys(rules).forEach((name) => {
  const field = getField(name);
  if (!field) return;

  field.addEventListener('blur', () => validateField(name));

  // Clear error as soon as user starts typing again
  field.addEventListener('input', () => {
    if (field.classList.contains('is-invalid')) {
      clearError(name);
    }
  });
});

// ── Submit ────────────────────────────────────────────────────────────────────

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateAll()) {
    // Focus first invalid field
    const firstInvalid = form.querySelector('.is-invalid');
    firstInvalid?.focus();
    return;
  }

  // ── Replace with real submission logic (e.g. fetch to backend/Formspree) ──
  // For now, show the success state
  form.hidden = true;
  formSuccess.hidden = false;
  formSuccess.querySelector('h3')?.focus();
});

} // end if (form)

// Language toggle for bilingual support (English and Nepali)
const languageSelect = document.getElementById('language');
const elementsToTranslate = document.querySelectorAll('[data-en]');

function setLanguage(lang) {
  elementsToTranslate.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  // Change font for Nepali to Noto Sans Devanagari, else Roboto
  if (lang === 'ne') {
    document.body.style.fontFamily = "'Noto Sans Devanagari', sans-serif";
  } else {
    document.body.style.fontFamily = "'Roboto', sans-serif";
  }
}

languageSelect.addEventListener('change', (e) => {
  setLanguage(e.target.value);
});

// Initialize language on page load
setLanguage(languageSelect.value);

// Onboarding form submission
const onboardingForm = document.getElementById('onboardingForm');

function saveFormData(data) {
  localStorage.setItem('jyotishAIUserData', JSON.stringify(data));
}

function loadFormData() {
  const data = localStorage.getItem('jyotishAIUserData');
  return data ? JSON.parse(data) : null;
}

function populateForm(data) {
  if (!data) return;
  onboardingForm.fullName.value = data.fullName || '';
  onboardingForm.dob.value = data.dob || '';
  onboardingForm.tob.value = data.tob || '';
  onboardingForm.pob.value = data.pob || '';
  languageSelect.value = data.language || 'en';
  setLanguage(languageSelect.value);
}

populateForm(loadFormData());

onboardingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Collect form data
  const formData = {
    fullName: onboardingForm.fullName.value.trim(),
    dob: onboardingForm.dob.value,
    tob: onboardingForm.tob.value,
    pob: onboardingForm.pob.value.trim(),
    language: languageSelect.value,
  };
  saveFormData(formData);
  console.log('Onboarding Data:', formData);
  alert(languageSelect.value === 'ne' ? 'तपाईंको विवरण सुरक्षित गरियो।' : 'Your details have been saved.');
  // TODO: Proceed to next step (Home Dashboard)
});

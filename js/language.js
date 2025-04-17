async function setLanguage(lang) {
  try {
    const pathParts = window.location.pathname.split('/');
    const baseParts = pathParts.includes('statute') ? pathParts.slice(0, -2) : pathParts.slice(0, -1);
    const basePath = baseParts.join('/');

    const res = await fetch(`${basePath}/lang/${lang}.json`);
    const translations = await res.json();

    document.title = translations.title;
    document.getElementById('dynamic-description')?.setAttribute('content', translations.description);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) el.textContent = translations[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[key]) el.placeholder = translations[key];
    });

    // ✅ Structured Impressum fields
    const imp = translations.impressum;
    if (imp) {
      const org = document.getElementById('imp-org');
      if (org) org.textContent = imp.org_name;
      const reg = document.getElementById('imp-reg');
      if (reg) reg.textContent = imp.registration;
      const file = document.getElementById('imp-file');
      if (file) file.textContent = imp.file_number;
      const addr = document.getElementById('imp-address');
      if (addr) addr.textContent = imp.address;
      const email = document.getElementById('imp-email');
      if (email) email.textContent = imp.email;
    }

    // Load membership form
    setFormUrl(translations.membership_form_url);

  } catch (err) {
    console.error('❌ Error loading translations or form:', err);
  }
} 

// TOUR VIRTUAL: altere o src do iframe em carla.html.

(() => {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const feedback = document.querySelector('#feedback');

  function saveContact() {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Rodrigues;Carla;;;',
      'FN:Dra. Carla Rodrigues',
      'TITLE:Dentista',
      'TEL;TYPE=CELL:+5531996414928',
      'ADR;TYPE=WORK:;;Av. Augusto de Lima\\, 407;Belo Horizonte;MG;;Brasil',
      'URL:https://www.instagram.com/dra.carlarodrigues_/',
      'NOTE:CRO-MG 54652. Odontologia Clínica\\, Ortodontia e Harmonização Orofacial.',
      'END:VCARD', ''
    ].join('\r\n');
    const url = URL.createObjectURL(new Blob([vcard], { type: 'text/vcard;charset=utf-8' }));
    const download = document.createElement('a');
    download.href = url;
    download.download = 'Dra-Carla-Rodrigues.vcf';
    document.body.append(download);
    download.click();
    download.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
    if (feedback) feedback.textContent = 'Abra o arquivo baixado para salvar na sua agenda.';
  }

  function setupReveal() {
    if (motionPreference.matches || !('IntersectionObserver' in window)) return;
    const elements = document.querySelectorAll('.content header, .contact-actions, .location, .content footer');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    elements.forEach((element, index) => {
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(index * 55, 165)}ms`);
      observer.observe(element);
      // Mantém links acessíveis quando a navegação é feita pelo teclado.
      element.addEventListener('focusin', () => element.classList.add('is-visible'));
    });

    motionPreference.addEventListener('change', (event) => {
      if (!event.matches) return;
      elements.forEach((element) => element.classList.add('is-visible'));
      observer.disconnect();
    });
  }

  function setupButtonEffects() {
    document.querySelectorAll('.button, #save-contact').forEach((button) => {
      button.addEventListener('pointerdown', (event) => {
        if (motionPreference.matches || event.button !== 0) return;
        button.querySelector('.click-wave')?.remove();
        const bounds = button.getBoundingClientRect();
        const diameter = Math.hypot(bounds.width, bounds.height) * 2;
        const wave = document.createElement('span');
        wave.className = 'click-wave';
        wave.setAttribute('aria-hidden', 'true');
        wave.style.width = wave.style.height = `${diameter}px`;
        wave.style.left = `${event.clientX - bounds.left - diameter / 2}px`;
        wave.style.top = `${event.clientY - bounds.top - diameter / 2}px`;
        button.append(wave);
        wave.addEventListener('animationend', () => wave.remove(), { once: true });
        setTimeout(() => wave.remove(), 800);
      });
    });
  }

  document.querySelector('#save-contact')?.addEventListener('click', saveContact);
  setupReveal();
  setupButtonEffects();
})();

function updateFooterContent(language) {
    const elements = {
        'footer-address-title': {
            en: 'Address',
            bn: 'ঠিকানা'
        },
        'footer-address-text': {
            en: 'Poschimgaon<br>Demra-1360<br>Rupgonj<br>Narayangonj',
            bn: 'পশ্চিমগাঁও<br>ডেমরা-১৩৬০<br>রূপগঞ্জ<br>নারায়ণগঞ্জ'
        }
    };

    for (const id in elements) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = elements[id][language];
        }
    }
}

// Listen for global language change event
window.addEventListener('languageChange', function(event) {
    updateFooterContent(event.detail);
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    updateFooterContent(savedLanguage);
    console.log('Footer loaded successfully');
});

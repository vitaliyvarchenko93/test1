// 1. Регистрация Service Worker для PWA (работает на всех экранах)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(() => console.log('Service Worker зарегистрирован'))
    .catch(err => console.error('Ошибка регистрации SW:', err));
}

// 2. Логика Главного меню (Модальное окно для B2)
document.addEventListener('DOMContentLoaded', () => {
  const btnB2 = document.getElementById('btn-b2');
  const modal = document.getElementById('dev-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  // Если эти элементы есть на странице (т.е. мы на index.html)
  if (btnB2 && modal && closeModalBtn) {
    
    // Открыть модальное окно
    btnB2.addEventListener('click', () => {
      modal.classList.add('active');
    });

    // Закрыть по кнопке "Понятно"
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Закрыть по клику вне карточки
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
});
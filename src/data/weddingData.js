export const weddingData = {
  // Hero
  hero: {
    title: 'Wedding day',
    names: 'Андрій та Марина',
  },

  // Invitation
  invitation: {
    heading: 'Дорогі наші рідні та друзі!',
    paragraphs: [
      'Запрошуємо вас розділити з нами особливий день — день створення нашої сім\'ї.',
      'Будемо раді бачити вас на церемонії розпису та святковому обіді.',
    ],
  },

  // Date & Countdown
  date: {
    label: 'Date',
    dateString: '03.07.2026',
    countdownLabel: 'До весілля залишилось',
    targetDate: new Date('2026-07-03T11:30:00'),
  },

  // Timeline
  timeline: {
    heading: 'Весільний таймінг',
    events: [
      {
        time: '11:15',
        title: 'Зустріч',
        description: 'Збираємося біля Подільського ДРАЦСу. Чекаємо на всіх з гарним настроєм!',
      },
      {
        time: '11:30',
        title: 'Церемонія',
        description: 'Урочиста церемонія розпису — момент, на який ми всі чекали.',
      },
      {
        time: '14:00',
        title: 'Святковий обід',
        description: 'Переміщаємося до Бістро Пекаря на вул. Тарасівській, де на вас чекає святковий обід.',
      },
    ],
  },

  // Locations
  locations: [
    {
      eventName: 'Церемонія',
      time: '11:30',
      venue: 'Подільський ДРАЦС',
      address: 'вул. Борисоглібська, 6.',
      mapUrl: 'https://maps.app.goo.gl/fyhY2zJhCq3BdGpr7',
    },
    {
      eventName: 'Святковий обід',
      time: '14:00',
      venue: 'Бістро Пекаря',
      address: 'вул. Тарасівська, 29.',
      mapUrl: 'https://www.google.com/maps/search/Бістро+Пекаря+вул.+Тарасівська,+29,+Київ',
    },
  ],

  // Closing
  closing: 'З нетерпінням чекаємо на Вас, щоб разом розділити цей чарівний день!',

  // Footer
  footer: 'З повагою, Андрій і Марина',
};

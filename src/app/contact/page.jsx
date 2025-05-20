import React from 'react';

const ContactPage = () => (
  <div className="flex flex-col items-center bg-gray-50 p-8 min-h-screen">
    <div className="mt-8 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        Связаться с нами
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        Если у вас есть вопросы по нашим рецептам, предложения или обратная связь,
        вы всегда можете написать нам на почту{' '}
        <a
          href="mailto:recipes@example.com"
          className="text-blue-500 hover:underline"
        >
          recipes@example.com
        </a>{' '}
        или позвонить по телефону{' '}
        <span className="font-medium">+7 (123) 456-78-90</span>.
      </p>
    </div>
    <div className="w-full max-w-lg">
      <img
        src="https://центр-профилактики.рф/wp-content/uploads/2021/09/ketogenic-low-carbs-diet-food-selection-on-white-wall.jpg"
        alt="Связаться с нами"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
);

export default ContactPage;
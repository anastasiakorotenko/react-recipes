import React from 'react';

const AboutPage = () => (
  <div className="flex flex-col items-center bg-white p-8 min-h-screen">
    <div className="w-full max-w-2xl text-center mb-8">
      <h1 className="text-5xl font-bold text-gray-900">О нас</h1>
      <p className="mt-4 text-lg text-gray-700">
        Добро пожаловать на наш сайт рецептов! Мы увлечены кулинарией и хотим
        поделиться с вами интересными идеями и пошаговыми инструкциями.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
      <div className="overflow-hidden rounded-lg shadow-md">
        <img
          src="https://img.freepik.com/premium-photo/chefs-work-shot-chef-putting-final-touches-dinner-plate-professional-kitchen_590464-28077.jpg"
          alt="Шеф-повар за работой"
          className="w-full h-auto"
        />
      </div>
      <div className="overflow-hidden rounded-lg shadow-md">
        <img
          src="https://www.chefmarket.ru/blog/wp-content/uploads/2019/09/unusual-recipes-e1567927686448.jpg"
          alt="Вкусное блюдо"
          className="w-full h-auto"
        />
      </div>
    </div>
    <div className="mt-10 max-w-3xl text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Наша команда</h2>
      <p className="text-base text-gray-600 leading-relaxed">
        Мы – команда профессиональных поваров, фуд-фотографов и кулинарных блогеров.
        Каждый из нас вносит частичку своей страсти и опыта в сотни рецептов, которые
        вы видите на сайте. Наша цель – вдохновлять вас творить на кухне и радовать
        близких вкусными блюдами.
      </p>
    </div>
  </div>
);

export default AboutPage;
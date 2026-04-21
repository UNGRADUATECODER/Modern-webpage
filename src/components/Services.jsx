import React from 'react'
import assets from '../assets/assets'
import title from './title'

const Services = () => {
  const serviceData = [
    {
      title: 'Advertising',
      description:
        'We turn bold ideas into powerful digital solutions that connect and engage...',
      icon: assets.ads_icon,
    },
    {
      title: 'Marketing',
      description:
        'We turn bold ideas into powerful digital solutions that connect and engage...',
      icon: assets.marketing_icon,
    },
  ]

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-24 pt-32 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-10 dark:hidden"
      />

      <title
        title="How can we help?"
        desc="From strategy to execution."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-900"
          >
            <img src={service.icon} alt={service.title} className="w-12 mb-4" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services

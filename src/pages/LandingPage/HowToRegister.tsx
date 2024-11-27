const HowToRegister = () => {
  const steps = [
    {
      title: "Register Your Account",
      description:
        "Create your seller account with basic details and start your journey.",
      image:
        "https://loopin.netlify.app/static/media/register.fd866785b3b7da8f004486b3dfde0bfa.svg"
    },
    {
      title: "Choose Storage & Shipping",
      description:
        "Select how you want to store and ship your products to customers.",
      image:
        "https://loopin.netlify.app/static/media/storage.e0e8482f98e125eec55831326e11f878.svg"
    },
    {
      title: "List Your Products",
      description:
        "Add your products with details like price, description, and images.",
      image:
        "https://loopin.netlify.app/static/media/list-product.f6b4c4073f146338c808bee5fb97a806.svg"
    },
    {
      title: "Complete Orders & Get Paid",
      description:
        "Fulfill orders, delight customers, and receive your earnings directly.",
      image:
        "https://loopin.netlify.app/static/media/orders.c72e0ae35a8017652bc926f218a00262.svg"
    }
  ]
  return (
    <div className="container mx-auto py-16 bg-black-2 px-2">
      <div className="text-center">
        <h2 className="text-2xl lg:text-5xl font-bold text-orange-500 mb-10">
          How to Register a Seller Account
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <img src={step.image} alt={step.title} className="w-30 h-20 mb-6" />
            <h3 className="text-xl font-semibold mb-4">
              {index + 1}. {step.title}
            </h3>
            <p className="text-gray-400 tracking-widest">{step.description}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-400 mt-12 tracking-wider">
        Selling on our platform is easy and profitable. Start today to unlock
        endless possibilities for your business.
      </p>
    </div>
  )
}

export default HowToRegister

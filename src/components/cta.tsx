import { useState, useEffect } from "react";

export default function CTASection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 40,
    hours: 20,
    minutes: 35,
    seconds: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        // Calculate new time
        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        // Stop the countdown if all values reach 0
        if (
          newDays <= 0 &&
          newHours <= 0 &&
          newMinutes <= 0 &&
          newSeconds <= 0
        ) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative text-white py-10  ">
      
      <div className="max-w-7xl min-w-screen mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-bold mb-2">
          Transform Your Amazon Business with
          <br />
          Data-Driven Decisions
        </h2>

        <p className="text-xl mb-8">
          Unlock powerful insights and grow your Amazon business with our
          analytics platform.
        </p>

        <div className="space-x-2">
          <a href="/book-demo">
            <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition duration-300 mb-4 md:mb-0 md:mr-4">
              Get Started
            </button>
          </a>
          <a href="/try-demo">
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
              Learn More
            </button>
          </a>
        </div>

        <div className="mt-16">
          <h3 className="text-4xl font-semibold mb-6 tracking-wider">
            THE COUNT DOWN HAS STARTED
          </h3>

          <div className="flex justify-center place-items-center space-x-4 md:space-x-8">
            <div className="text-center">
              <div className="text-4xl md:text-8xl font-bold">
                {timeLeft.days}
              </div>
              <div className="text-sm uppercase tracking-wider">Days</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold">
                {timeLeft.hours}
              </div>
              <div className="text-sm uppercase tracking-wider">Hours</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold">
                {timeLeft.minutes}
              </div>
              <div className="text-sm uppercase tracking-wider">Min</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold">
                {timeLeft.seconds}
              </div>
              <div className="text-sm uppercase tracking-wider">Sec</div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

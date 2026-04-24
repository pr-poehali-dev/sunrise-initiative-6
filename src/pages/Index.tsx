import GradientBlinds from "@/components/GradientBlinds"
import Navbar from "@/components/Navbar"
import Icon from "@/components/ui/icon"

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Animated Gradient Background */}
      <div className="fixed inset-0 w-full h-full flex items-center justify-center">
        <GradientBlinds
          gradientColors={["#0f1a2e", "#1a3a5c", "#1e5f8a", "#2176ae"]}
          angle={15}
          noise={0.25}
          blindCount={13}
          blindMinWidth={50}
          spotlightRadius={0.38}
          spotlightSoftness={1.6}
          spotlightOpacity={0.42}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="overlay"
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center justify-center min-h-screen w-full px-5 sm:px-20">
            <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
                <Icon name="Award" size={14} />
                Профессиональная бухгалтерия и налоговый учёт
              </div>

              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl text-balance drop-shadow-2xl">
                Налоговый консультант
                <br />
                <span className="text-blue-300">онлайн — 24/7</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl text-pretty drop-shadow-lg">
                Консультации по налогообложению. Решаем сложные вопросы быстро.
              </p>



              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent shadow-2xl">
                  <Icon name="Calendar" size={20} />
                  Записаться на консультацию
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent shadow-xl">
                  Расписание конференций
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>

              {/* Services chips */}
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm text-white/80 backdrop-blur">
                  <Icon name="FileText" size={14} />
                  Налоговые декларации
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm text-white/80 backdrop-blur">
                  <Icon name="Monitor" size={14} />
                  Обучение 1С
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm text-white/80 backdrop-blur">
                  <Icon name="Users" size={14} />
                  Онлайн-конференции
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm text-white/80 backdrop-blur">
                  <Icon name="Shield" size={14} />
                  УСН / ОСН / ИП
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Index
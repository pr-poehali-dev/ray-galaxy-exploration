import Icon from "@/components/ui/icon";
import { CTAForm } from "@/components/CTAForm";

function App() {
  return (
    <main className="min-h-screen bg-background">

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Icon name="Scale" size={16} className="text-white" />
            </div>
            <span className="font-serif text-lg font-semibold text-foreground">Аудит·Налоги·Право</span>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Получить консультацию
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Icon name="Award" size={14} />
                <span>Профессиональный аудит с 2012 года</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                Надёжная защита <span className="text-accent-gradient">вашего бизнеса</span>
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Аудит, налоговый консалтинг и юридическое сопровождение. Помогаем предпринимателям Дальнего Востока работать уверенно и без рисков.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Получить консультацию
                  <Icon name="ArrowRight" size={18} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3.5 rounded-lg font-medium hover:bg-accent transition-colors"
                >
                  Наши услуги
                </a>
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "лет на рынке", icon: "Clock" },
                { value: "500+", label: "довольных клиентов", icon: "Users" },
                { value: "100%", label: "конфиденциальность", icon: "Shield" },
                { value: "0", label: "проигранных споров с ФНС", icon: "CheckCircle" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                  <Icon name={stat.icon as "Clock"} size={24} className="text-primary mb-3" />
                  <p className="font-serif text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Что мы делаем</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Комплексная защита бизнеса</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Три направления, которые работают вместе — так вы получаете полную защиту с любой стороны.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "ClipboardCheck",
                title: "Аудит",
                color: "bg-orange-50",
                iconColor: "text-orange-500",
                items: [
                  "Обязательный аудит",
                  "Инициативный аудит",
                  "Аудит отчётности по МСФО",
                  "Налоговый аудит",
                ],
              },
              {
                icon: "Calculator",
                title: "Налоговый консалтинг",
                color: "bg-blue-50",
                iconColor: "text-blue-500",
                items: [
                  "Налоговое планирование",
                  "Сопровождение проверок",
                  "Споры с ИФНС",
                  "Оптимизация налоговой нагрузки",
                ],
              },
              {
                icon: "Scale",
                title: "Юридическое сопровождение",
                color: "bg-green-50",
                iconColor: "text-green-500",
                items: [
                  "Корпоративные споры",
                  "Арбитражные дела",
                  "Экспертиза договоров",
                  "Регистрация и ликвидация",
                ],
              },
            ].map((service) => (
              <div key={service.title} className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                  <Icon name={service.icon as "Scale"} size={24} className={service.iconColor} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-4">{service.title}</h3>
                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-muted-foreground text-sm">
                      <Icon name="Check" size={14} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Почему выбирают нас</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Мы знаем специфику Дальнего Востока
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Наши специалисты работают в регионе более 10 лет. Мы понимаем местную специфику, знаем инспекторов и знаем, как защитить ваш бизнес эффективно.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "UserCheck", text: "Персональный менеджер для каждого клиента" },
                  { icon: "Clock", text: "Ответ на запрос в течение 2 часов" },
                  { icon: "Lock", text: "Полная конфиденциальность данных" },
                  { icon: "Banknote", text: "Фиксированная стоимость без скрытых доплат" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as "Clock"} size={18} className="text-primary" />
                    </div>
                    <p className="text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => (
                  <Icon key={i} name="Star" size={18} className="text-primary fill-primary" />
                ))}
              </div>
              <blockquote>
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  «Благодаря специалистам компании мы успешно прошли выездную налоговую проверку. Всё чётко, профессионально и в срок. Теперь работаем только с ними.»
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Icon name="User" size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Руководитель строительной компании</p>
                    <p className="text-muted-foreground text-sm">Хабаровск</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-secondary">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Бесплатная консультация</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Разберём вашу ситуацию</h2>
          <p className="text-muted-foreground mb-10">
            Оставьте заявку — эксперт свяжется с вами в течение рабочего дня и ответит на все вопросы бесплатно.
          </p>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm text-left">
            <CTAForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <Icon name="Scale" size={13} className="text-white" />
            </div>
            <span className="font-serif text-foreground">ООО «Аудит-Налоги-Право»</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-muted-foreground text-sm">
            <span>г. Хабаровск</span>
            <a href="mailto:info@аудитдв.рф" className="hover:text-primary transition-colors">info@аудитдв.рф</a>
          </div>
          <p className="text-muted-foreground/60 text-xs">© {new Date().getFullYear()} Все права защищены</p>
        </div>
      </footer>

    </main>
  );
}

export default App;

import { ArtDecoSunburst } from "@/components/ArtDecoSunburst";
import { ArtDecoDivider } from "@/components/ArtDecoDivider";
import { ServiceCard } from "@/components/ServiceCard";
import { CTAForm } from "@/components/CTAForm";

function App() {
  return (
    <main className="min-h-screen bg-background dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <ArtDecoSunburst />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Decorative top element */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-primary" />
              <div className="w-3 h-3 rotate-45 border border-primary" />
              <div className="w-16 h-px bg-primary" />
            </div>
          </div>

          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">Профессиональный аудит с 2012 года</p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            <span className="text-gold-gradient">Аудит·</span>Налоги·Право
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Профессиональная защита вашего бизнеса: аудит, налоговый консалтинг и юридическое сопровождение на Дальнем Востоке.
          </p>

          {/* Decorative bottom element */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-primary" />
              <div className="w-2 h-2 rotate-45 bg-primary" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="stepped" />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Наш подход</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight text-balance">
                Надёжность, проверенная практикой
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Мы сопровождаем бизнес комплексно: от обязательного аудита и налоговой оптимизации до защиты интересов в судах и проверках. Наши специалисты — практики с многолетним опытом работы в условиях Дальнего Востока.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Каждый клиент получает персональную команду экспертов: аудиторов, налоговых консультантов и юристов, которые работают слаженно, чтобы вы были защищены на всех уровнях.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Наши услуги</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Комплексная защита бизнеса</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Аудит"
              description="Обязательный и инициативный аудит бухгалтерской отчётности. Проверка достоверности данных, выявление рисков и рекомендации по их устранению."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" />
                </svg>
              }
            />
            <ServiceCard
              title="Налоговый консалтинг"
              description="Налоговое планирование, оптимизация налоговой нагрузки, сопровождение налоговых проверок, споры с ИФНС и защита в досудебном порядке."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                  <path d="M6 15h4M14 15h4" />
                </svg>
              }
            />
            <ServiceCard
              title="Юридическое сопровождение"
              description="Правовая экспертиза договоров, представление интересов в арбитраже, корпоративные споры, регистрация и ликвидация компаний."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" />
                  <path d="M12 22V12M3 7l9 5 9-5" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ArtDecoDivider variant="fan" />

          <div className="grid grid-cols-3 gap-8 text-center py-12">
            <div>
              <p className="font-serif text-5xl md:text-6xl text-gold-gradient mb-3">10+</p>
              <p className="text-muted-foreground uppercase tracking-[0.15em] text-sm">лет на рынке</p>
            </div>
            <div>
              <p className="font-serif text-5xl md:text-6xl text-gold-gradient mb-3">500+</p>
              <p className="text-muted-foreground uppercase tracking-[0.15em] text-sm">клиентов</p>
            </div>
            <div>
              <p className="font-serif text-5xl md:text-6xl text-gold-gradient mb-3">100%</p>
              <p className="text-muted-foreground uppercase tracking-[0.15em] text-sm">конфиденциальность</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="relative text-center py-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/20 font-serif text-9xl leading-none">
              &ldquo;
            </div>

            <blockquote className="relative z-10">
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic mb-8">
                Благодаря специалистам компании мы успешно прошли выездную налоговую проверку и сэкономили значительные средства. Профессионализм и внимание к деталям — на высшем уровне.
              </p>
              <footer className="text-muted-foreground">
                <span className="text-primary">—</span> Руководитель строительной компании,{" "}
                <span className="text-primary">Хабаровск</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ArtDecoSunburst />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <ArtDecoDivider variant="chevron" />
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Получить консультацию</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">Защитите свой бизнес</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Оставьте заявку, и наш эксперт свяжется с вами в течение рабочего дня для бесплатной первичной консультации.
            </p>
          </div>

          <div className="relative p-8 md:p-12 border border-border">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />

            <CTAForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="font-serif text-xl text-foreground">ООО «Аудит·Налоги·Право»</span>
              <div className="w-12 h-px bg-primary" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 text-muted-foreground text-sm">
              <span>г. Хабаровск</span>
              <span className="hidden md:block text-primary">·</span>
              <a href="tel:+74212000000" className="hover:text-primary transition-colors">+7 (4212) ХХХ-ХХ-ХХ</a>
              <span className="hidden md:block text-primary">·</span>
              <a href="mailto:info@аудитдв.рф" className="hover:text-primary transition-colors">info@аудитдв.рф</a>
            </div>

            <p className="text-muted-foreground/50 text-xs tracking-widest uppercase">
              © {new Date().getFullYear()} ООО «Аудит-Налоги-Право». Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;

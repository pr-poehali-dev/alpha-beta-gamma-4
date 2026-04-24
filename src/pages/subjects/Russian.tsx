import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const topics = [
  {
    title: "Структура экзамена 2027",
    content:
      "ЕГЭ по русскому языку состоит из двух частей: 26 заданий с кратким ответом и одно сочинение (задание 27). Время — 3,5 часа (210 минут). Максимальный первичный балл — 54, из них 24 балла за сочинение.",
  },
  {
    title: "Задания 1–26",
    content:
      "Задания проверяют знание орфографии, пунктуации, лексики, морфологии и синтаксиса. Особое внимание: задание 8 (ошибки в построении предложений) — одно из самых сложных. Регулярно тренируйтесь на вариантах с сайта ФИПИ.",
  },
  {
    title: "Сочинение (задание 27)",
    content:
      "Нужно написать сочинение-рассуждение по тексту: сформулировать проблему, прокомментировать её с двумя примерами из текста, указать позицию автора, выразить своё отношение и обосновать его. Объём — не менее 150 слов. Критерии К1–К12.",
  },
  {
    title: "Типичные ошибки",
    content:
      "Самые частые потери баллов: неверная постановка запятых в сложных предложениях (задания 16–21), ошибки в паронимах (задание 5), неправильная расстановка ударений (задание 4) и слабая аргументация в сочинении (критерий К4).",
  },
  {
    title: "Изменения в КИМ 2027",
    content:
      "В 2027 году скорректированы критерии оценивания сочинения: усилено требование к фактической точности. Также обновлён список паронимов и орфоэпический словник. Следи за официальными демоверсиями на сайте ФИПИ.",
  },
  {
    title: "Как готовиться",
    content:
      "Каждый день по 30 минут: 15 минут — задания 1–26 (акцент на сложных темах), 15 минут — работа над сочинением. За 2 месяца до ЕГЭ переходи к прорешиванию полных вариантов на время. Записывай свои ошибки и разбирай их.",
  },
]

export default function Russian() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Назад
          </Link>

          <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">Предмет</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6">
            Русский язык
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-20 max-w-2xl">
            Один из двух обязательных предметов. Сдают все выпускники без исключения. При правильной подготовке реально набрать 90+ баллов.
          </p>

          <div className="space-y-0">
            {topics.map((topic, index) => (
              <div key={index} className="group py-10 lg:py-14 border-t border-border last:border-b">
                <div className="flex gap-8 lg:gap-12">
                  <span className="font-serif text-4xl lg:text-5xl text-stone/30 shrink-0 group-hover:text-sage transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{topic.title}</h2>
                    <p className="text-muted-foreground leading-relaxed max-w-xl">{topic.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

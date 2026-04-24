import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const topics = [
  {
    title: "Структура экзамена",
    content:
      "ЕГЭ по обществознанию — 25 заданий, время 3,5 часа (210 минут). Часть 1 — 16 заданий с кратким ответом. Часть 2 — 9 заданий с развёрнутым ответом, включая план, эссе и задачи по праву и экономике. Максимум — 57 первичных баллов.",
  },
  {
    title: "5 блоков знаний",
    content:
      "Экзамен охватывает: 1) Человек и общество (философия, познание, духовная сфера), 2) Экономика (рынок, фирма, ВВП, банки), 3) Социология (стратификация, семья, нации), 4) Политология (государство, партии, избирательные системы), 5) Право (КРФ, гражданское, трудовое, уголовное, семейное).",
  },
  {
    title: "Задание 24: план",
    content:
      "Нужно составить развёрнутый план по заданной теме. Оценивается наличие минимум 3 пунктов, раскрытых в подпунктах. Пункты должны быть конкретными: «Виды безработицы: фрикционная, структурная, циклическая» — хорошо. «Безработица» — плохо.",
  },
  {
    title: "Задание 25: эссе",
    content:
      "Мини-эссе по высказыванию из одного из блоков. Нужно: раскрыть смысл цитаты, выразить своё отношение, привести два аргумента из разных источников (факты, примеры из жизни, науки). Объём — не менее 6 предложений. Ключевой критерий — теоретическое обоснование.",
  },
  {
    title: "Право: самое важное",
    content:
      "Конституция РФ — права и свободы граждан, структура власти. Гражданское право — сделки, договоры, собственность. Трудовое право — права работника, трудовой договор, увольнение. Уголовное право — виды преступлений, наказания. Это проверяется в 5–7 заданиях.",
  },
  {
    title: "Как готовиться",
    content:
      "Составь шпаргалки по каждому блоку — это поможет систематизировать знания. Ежедневно читай Конституцию и кодексы в части, которая проверяется на ЕГЭ. Разбирай задания части 2 по критериям. Используй задачники Котовой и Лисковой.",
  },
]

export default function Social() {
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
            Обществознание
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-20 max-w-2xl">
            Самый популярный предмет по выбору. Охватывает сразу пять дисциплин: философию, экономику, социологию, политологию и право.
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

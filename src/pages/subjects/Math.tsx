import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const topics = [
  {
    title: "База или профиль?",
    content:
      "Базовый уровень (90 минут, 20 заданий) — для тех, кому математика не нужна в вузе. Профильный уровень (235 минут, 19 заданий) — обязателен для технических и экономических направлений. Внимательно проверь требования выбранного вуза.",
  },
  {
    title: "Структура профильного ЕГЭ",
    content:
      "Часть 1 — 12 заданий с кратким ответом (алгебра, геометрия, теория вероятностей). Часть 2 — 7 заданий с развёрнутым решением: уравнения, неравенства, геометрия (планиметрия и стереометрия), задача с параметром, доказательство.",
  },
  {
    title: "Ключевые темы",
    content:
      "Обязательно освой: степени и логарифмы, тригонометрия, производная и первообразная, прогрессии, вероятность и статистика. В геометрии: площади и объёмы фигур, теорема косинусов/синусов, вписанные и описанные окружности.",
  },
  {
    title: "Часть 2: как получить баллы",
    content:
      "Задания 13–19 оцениваются от 2 до 4 баллов. Даже неполное решение даёт баллы — записывай все шаги. Начинай с задач 13–15 (они проще), потом переходи к 16–19. Задача с параметром (18) — самая сложная, но 1 балл за частный случай взять реально.",
  },
  {
    title: "Типичные ошибки",
    content:
      "Самые частые потери: арифметические ошибки в вычислениях, потеря корней при решении уравнений, неверная ОДЗ, ошибки при работе с тригонометрическими формулами. Всегда проверяй ответ подстановкой.",
  },
  {
    title: "Как готовиться",
    content:
      "Начни с диагностики: реши вариант прошлых лет и выяви слабые темы. Работай по теме блоками: 1 неделя = 1 тема. Используй задачники Прокофьева, Ященко. Последние 2 месяца — только полные варианты на время.",
  },
]

export default function Math() {
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
            Математика
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-20 max-w-2xl">
            Второй обязательный предмет. Можно сдавать базовый или профильный уровень — зависит от выбранного направления в вузе.
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

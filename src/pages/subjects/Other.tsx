import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const subjects = [
  {
    title: "История",
    description:
      "35 заданий, 3,5 часа. Период охвата — с древности до наших дней. Ключевые темы: реформы, войны, культура. Задание 25 — историческое сочинение (эссе) по одному из трёх предложенных периодов. Рекомендуем атлас и хронологические таблицы.",
  },
  {
    title: "Физика",
    description:
      "30 заданий, 3 часа 55 минут. Механика, термодинамика, электродинамика, оптика, квантовая физика. Часть 2 включает задачи с развёрнутым решением. Без формул не обойтись — выучи все основные. Разрешены непрограммируемый калькулятор и линейка.",
  },
  {
    title: "Химия",
    description:
      "34 задания, 3,5 часа. Неорганическая и органическая химия, реакции, расчётные задачи. Задание 34 — цепочка превращений. Обязательно знай таблицу растворимости и ряд активности металлов. Периодическая система и электрохимический ряд дают на экзамене.",
  },
  {
    title: "Биология",
    description:
      "29 заданий, 3,5 часа. Ботаника, зоология, анатомия человека, генетика, экология, эволюция. Задания на рисунки и схемы. Генетика — самая сложная тема, требует отдельной проработки. Используй атлас анатомии для запоминания терминов.",
  },
  {
    title: "Информатика",
    description:
      "27 заданий, 3 часа 55 минут. С 2023 года экзамен проводится за компьютером. Алгоритмы, базы данных, электронные таблицы, программирование (Python или Pascal). Задания 23–27 требуют написания кода. Тренируйся в реальной среде.",
  },
  {
    title: "Иностранные языки",
    description:
      "Английский, немецкий, французский, испанский, китайский. Письменная часть — 4 раздела: аудирование, чтение, грамматика и лексика, письмо. Устная часть (говорение) — отдельно, за компьютером. Максимум — 100 баллов без перевода шкалы.",
  },
  {
    title: "География",
    description:
      "34 задания, 3 часа. Природа России и мира, население, хозяйство, часовые пояса, картография. На экзамене разрешён атлас за 10–11 класс — умей им пользоваться. Типичные ошибки: путаница в часовых поясах и климатических поясах.",
  },
  {
    title: "Литература",
    description:
      "7 заданий, 3 часа 55 минут. Анализ лирики и прозы, сопоставление произведений, развёрнутые ответы и итоговое сочинение. Знание текстов обязательно — цитирование приветствуется. Список произведений — на сайте ФИПИ. Без чтения подготовиться невозможно.",
  },
]

export default function Other() {
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

          <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">Предметы по выбору</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6">
            Другие предметы
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-20 max-w-2xl">
            Краткий обзор всех предметов ЕГЭ по выбору — структура, ключевые темы и советы по подготовке.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="group bg-background p-10 lg:p-12 hover:bg-card transition-colors duration-500"
              >
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 group-hover:text-sage transition-colors duration-500">
                  {subject.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

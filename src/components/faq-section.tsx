import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Кто может записаться на курс?",
      answer:
        "Курс открыт для всех студентов университета вне зависимости от специальности и курса обучения. Никакой предварительной подготовки не требуется — принимаем всех желающих.",
    },
    {
      question: "Как проходят занятия?",
      answer:
        "Занятия проходят в формате практических тренингов в малых группах (до 15 человек). Каждое занятие включает теорию, разбор примеров и живую практику выступлений.",
    },
    {
      question: "Сколько длится курс?",
      answer:
        "Курс рассчитан на один семестр. Занятия проводятся дважды в неделю. По окончании выдаётся сертификат, который можно приложить к портфолио.",
    },
    {
      question: "Нужно ли иметь опыт публичных выступлений?",
      answer:
        "Нет, опыт не нужен. Курс построен с нуля: мы начинаем с базовых техник и постепенно переходим к сложным форматам. Главное — желание развиваться.",
    },
    {
      question: "Засчитывается ли курс в учебный план?",
      answer:
        "Да, курс является частью образовательной программы и засчитывается как факультатив. Уточните у своего куратора о возможности зачёта дополнительных кредитов.",
    },
    {
      question: "Как записаться?",
      answer:
        "Нажмите кнопку «Записаться на курс» на этой странице, заполните форму — и мы свяжемся с вами для уточнения деталей и расписания.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о технологии SynapseAI, безопасности и опыте пациентов.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
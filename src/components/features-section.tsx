import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Уверенность перед аудиторией",
    description: "Практические техники преодоления страха сцены и волнения. Студенты учатся выступать спокойно и уверенно перед любой аудиторией.",
    icon: "brain",
    badge: "Психология",
  },
  {
    title: "Структура речи",
    description: "Как строить убедительные выступления: вступление, основная часть, заключение. Логика аргументации и работа с тезисами.",
    icon: "lock",
    badge: "Риторика",
  },
  {
    title: "Голос и дикция",
    description: "Постановка голоса, работа с темпом и интонацией. Упражнения для чёткой дикции и выразительного произношения.",
    icon: "globe",
    badge: "Голос",
  },
  {
    title: "Язык тела",
    description: "Жесты, мимика, контакт глаз и правильная поза. Невербальная коммуникация, которая усиливает слова.",
    icon: "zap",
    badge: "Жесты",
  },
  {
    title: "Работа с аудиторией",
    description: "Техники удержания внимания, управления вопросами и взаимодействия со слушателями в режиме реального времени.",
    icon: "link",
    badge: "Контакт",
  },
  {
    title: "Презентации и слайды",
    description: "Создание визуальной поддержки выступления. Как использовать слайды, чтобы усилить, а не заменить речь.",
    icon: "target",
    badge: "Визуал",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Чему вы научитесь</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Комплексная программа, которая превращает скромного студента в уверенного оратора
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Мария Соколова",
    role: "Студентка 3-го курса, факультет права",
    avatar: "/professional-woman-scientist.png",
    content:
      "До курса я не могла выступить даже перед группой. Теперь защитила диплом на отлично и веду дискуссионный клуб. Это изменило всё.",
  },
  {
    name: "Артём Волков",
    role: "Студент 4-го курса, экономический факультет",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Преподаватели дают живую обратную связь и разбирают каждое выступление. За семестр мой уровень вырос так, как за годы самостоятельной работы.",
  },
  {
    name: "Лариса Ким",
    role: "Аспирантка, кафедра педагогики",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Курс обязателен для тех, кто хочет строить академическую карьеру. Техники работы с аудиторией применяю на каждой конференции.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят студенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные истории тех, кто прошёл курс и открыл в себе уверенного оратора
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
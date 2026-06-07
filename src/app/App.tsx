import image_Group_1 from '@/imports/Group_1.png'
import image_18 from '@/imports/image_18.png'
import { Countdown } from "./components/Countdown";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import imgCouple from "../imports/Reference/cc8afb0f9ccb6a1bf256ec815091d00b25bfd2bf.png";
import imgFrame from "../imports/Reference/202253c3d94f01eb08970b48e69e601c960f0f1f.png";
import imgLocation from "../imports/Reference/ce662cc1532298258da1c5dfa75742225eb207c2.png";
import imgBgTop from "../imports/Reference/2821e9de789b46e3b305fda16ae6b0c8a29ad9b1.png";

const SERIF = "'Cormorant', serif";
const SCRIPT = "'Kapakana', cursive";
const SANS = "'Montserrat', sans-serif";

function SectionTitle({ ru, en, enOffset = 0 }: { ru: string; en: string; enOffset?: number }) {
  return (
    <div className="relative text-center mb-10">
      <h2
        className="uppercase text-[#343434] relative z-10"
        style={{ fontFamily: SERIF, fontWeight: 300, fontSize: "clamp(36px, 7vw, 62px)", lineHeight: 1.1 }}
      >
        {ru}
      </h2>
      {en && (
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            top: `calc(50% + ${enOffset}px)`,
            fontFamily: SCRIPT,
            fontSize: "clamp(56px, 10vw, 100px)",
            color: "rgba(166,45,52,0.5)",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          {en}
        </div>
      )}
    </div>
  );
}

const dressColors = [
  { name: "Бежевый", color: "#e8c39e" },
  { name: "Бордо", color: "#a62d34" },
  { name: "Вишнёвый", color: "#6e2632" },
  { name: "Чёрный", color: "#101010" },
  { name: "Зелёный", color: "#29573d" },
  { name: "Шоколад", color: "#5c4032" },
];

const timing = [
  { time: "14:30", label: "Фуршет" },
  { time: "15:00", label: "Выездная церемония" },
  { time: "15:40", label: "Банкет" },
  { time: "22:30", label: "Завершение вечера" },
];

export default function App() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: "#faf7f4", fontFamily: SANS, color: "#343434" }}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-center bg-cover pointer-events-none"
          style={{ backgroundImage: `url(${imgBgTop})` }}
        />
        <div className="relative max-w-[680px] mx-auto px-6 py-16 sm:py-24 text-center">
          <ImageWithFallback
            src={image_18}
            alt="Wedding day 22/08/2026"
            className="mx-auto w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* GUESTS */}
      <section className="max-w-[760px] mx-auto px-6 py-12 sm:py-16 text-center">
        <SectionTitle ru="дорогие гости" en="Invitation" enOffset={-6} />
        <p
          className="mx-auto"
          style={{ fontFamily: SANS, fontWeight: 300, fontSize: 18, lineHeight: "28px", maxWidth: 560 }}
        >
          Вы получили это приглашение, потому что совсем скоро состоится наша свадьба и мы будем счастливы разделить
          этот радостный момент вместе с вами!
        </p>
        <div className="mt-12 mx-auto rounded-md overflow-hidden" style={{ maxWidth: 520 }}>
          <ImageWithFallback src={image_Group_1} alt="Жених и невеста" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="max-w-[760px] mx-auto px-6 py-12 sm:py-16 text-center">
        <SectionTitle ru="до свадьбы осталось" en="" />
        <Countdown />
      </section>

      {/* LOCATION */}
      <section className="max-w-[760px] mx-auto px-6 py-12 sm:py-16 text-center">
        <SectionTitle ru="локация" en="Location" enOffset={-6} />
        <p
          className="mx-auto"
          style={{ fontFamily: SANS, fontWeight: 300, fontSize: 18, lineHeight: "28px", maxWidth: 560 }}
        >Место проведения торжества: «Времена года». Адрес: Курортный посёлок Зелёный Город, посёлок Дом отдыха Кудьма, 15</p>
        <div className="mt-10 mx-auto rounded-md overflow-hidden" style={{ maxWidth: 588 }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A5451692a03002667e919257732194f1bd44abf8e1f68ff81db9f93bf39d417a8&source=constructorLink"
            title="Локация — Кусково"
            className="w-full block border-0"
            style={{ height: "clamp(280px, 50vw, 440px)" }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

      {/* TIMING */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div
          className="max-w-[1100px] mx-auto rounded-[28px] sm:rounded-[40px] px-6 sm:px-10 py-14 sm:py-20"
          style={{ backgroundColor: "#a62d34" }}
        >
          <div className="text-center mb-12 relative">
            <h2
              className="uppercase text-white relative z-10"
              style={{ fontFamily: SERIF, fontWeight: 300, fontSize: "clamp(36px, 7vw, 62px)", lineHeight: 1.1 }}
            >
              тайминг
            </h2>
            <div
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                top: "calc(50% - 6px)",
                fontFamily: SCRIPT,
                fontSize: "clamp(56px, 10vw, 100px)",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1,
              }}
            >
              Timing
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6 mx-auto w-full max-w-[420px]">
            {timing.map((t) => (
              <div
                key={t.time}
                className="rounded-[15px] px-6 py-5 text-center"
                style={{ backgroundColor: "#faf7f4", border: "0.8px solid #a62d34" }}
              >
                <div style={{ fontFamily: SERIF, fontWeight: 700, color: "#a62d34", fontSize: 48, lineHeight: 1.1 }}>
                  {t.time}
                </div>
                <div
                  className="mt-2"
                  style={{ fontFamily: SANS, fontWeight: 300, fontSize: 16, lineHeight: "24px", color: "#343434" }}
                >
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRESS CODE */}
      <section className="max-w-[1100px] mx-auto px-6 py-12 sm:py-16 text-center">
        <SectionTitle ru="дресс-код" en="Dress code" enOffset={-6} />
        <p
          className="mx-auto"
          style={{ fontFamily: SANS, fontWeight: 300, fontSize: 18, lineHeight: "28px", maxWidth: 560 }}
        >
          Мы со всей душой подходим к подготовке нашего праздника, поэтому нам будет приятно, если вы поддержите нас
          своими улыбками, объятиями и нарядами в оттенках предложенных ниже.
        </p>
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-4 justify-items-center">
          {dressColors.map((c) => (
            <div key={c.name} className="flex flex-col items-center">
              <div
                className="rounded-full"
                style={{
                  width: "clamp(64px, 14vw, 112px)",
                  height: "clamp(64px, 14vw, 112px)",
                  backgroundColor: c.color,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                }}
              />
              <div
                className="mt-4 uppercase"
                style={{ fontFamily: SANS, fontSize: 11, letterSpacing: "0.2em", color: "#343434" }}
              >
                {c.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILS */}
      <section className="max-w-[760px] mx-auto px-6 py-12 sm:py-16">
        <SectionTitle ru="детали" en="Details" enOffset={-6} />

        <div className="space-y-4">
          {[
            {
              t: "Подарки",
              d: "Счастье за деньги не купишь, а медовый месяц — оплатишь! Будем благодарны за инвестицию в важный этап в становлении новой ячейки общества",
            },
            {
              t: "Подтверждение",
              d: "Просим подтвердить ваше присутствие через анкету ниже.",
            },
            {
              t: "Организационные вопросы",
              d: "По любым организационным вопросам, до мероприятия и в день его проведения можете обращаться к нашим организаторам.\nДаша: +7(920)002-87-70.\nНаташа: +7(910)123-18-80",
            },
          ].map((b) => (
            <div
              key={b.t}
              className="rounded-[15px] px-6 py-6 text-center"
              style={{ border: "0.8px solid #a62d34", backgroundColor: "#faf7f4" }}
            >
              <div
                className="uppercase mb-2"
                style={{ fontFamily: SERIF, fontWeight: 700, color: "#a62d34", fontSize: 22 }}
              >
                {b.t}
              </div>
              <p className="whitespace-pre-line" style={{ fontFamily: SANS, fontWeight: 300, fontSize: 16, lineHeight: "24px" }}>{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SURVEY */}
      <section className="max-w-[760px] mx-auto px-6 py-12 sm:py-20 text-center">
        <h2
          className="uppercase text-[#343434] mb-8"
          style={{ fontFamily: SERIF, fontWeight: 300, fontSize: "clamp(36px, 7vw, 62px)", lineHeight: 1.1 }}
        >
          опрос
        </h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeTfPdAJeeiCF75RWc4QyDEDVtqSJ2OTMMS0V_eHwRiXLjZ8Q/viewform?embedded=true"
          title="Опрос гостей"
          className="w-full block border-0 mx-auto"
          style={{ height: 1434, maxWidth: 640 }}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Загрузка…
        </iframe>
      </section>
    </div>
  );
}

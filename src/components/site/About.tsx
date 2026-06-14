import { Link } from "@tanstack/react-router";
import about from "@/assets/about-photographer.jpg";

export function About() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="relative lg:col-span-6">
          <div className="absolute -left-3 -top-3 hidden h-24 w-24 border border-gold/50 md:block" />
          <img
            src={about}
            alt="Behind the scenes — the photographer at work"
            loading="lazy"
            className="relative aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-3 -right-3 hidden h-24 w-24 border border-gold/50 md:block" />
        </div>

        <div className="lg:col-span-6 lg:pt-10">
          <div className="flex items-center gap-3">
            <span className="hairline" />
            <span className="eyebrow">About the Studio</span>
          </div>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            Turning moments into
            <br />
            <em className="gold-gradient-text not-italic">timeless memories</em>.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
             I am Rahul Roy Professional Cinematographer. Photography was a hobby for me earlier but now it has become a career.
            That is why I do this work with al my heart. I have been doing photography for 1 years and I have gained a lot of
            experience. 
            </p>
            <p>
               I have also shot for INDUSTRIAL(Reality Shows) Serials like Balika Vadhu, Doli Armaan, actress Neha Marda and
              actress of Nimki Mukhiya serial. I have shot for many Bhojpuri stars like Pawan Singh, Khesari Lal and many more. <br /><br />
              Presently I am the Professional and Personal photographer of IG Vikas Vaibhav Sir Founder of (LETS INSPIRE BIHAR) and
              Neha Marda. I do not consider clients as clients but as family
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-y border-border/60 py-6">
            {[
              { k: "Editorial", v: "Bihar Expo" },
              { k: "Featured in", v: "WedMeGood" },
              { k: "Awards", v: "Rising Celebrity Photographer of Bihar" },
            ].map((i) => (
              <div key={i.k}>
                <dt className="eyebrow">{i.k}</dt>
                <dd className="mt-2 font-display text-lg text-foreground">{i.v}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-gold px-7 py-4 text-xs uppercase tracking-[0.3em] text-ink transition-all hover:bg-cream"
          >
            Let's Work Together
          </Link>
        </div>
      </div>
    </section>
  );
}

import { experienceData } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'

const ExperienceSection = () => {
  return (
    <section id="experience" className="my-14">
      <SectionHeading
        title="// Experience"
        subtitle="Production experience building multi-tenant web systems used by real business teams."
      />

      <div className="mt-8 space-y-6 md:mt-12">
        {experienceData.map((experience) => (
          <article key={`${experience.company}-${experience.role}`} className="bg-secondary border-border rounded-[14px] border p-6 md:p-8">
            <div className="flex flex-col gap-2 border-b border-border pb-5 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-secondary-content text-xl font-semibold">{experience.role}</h3>
                <p className="text-accent mt-1 font-medium">{experience.company}</p>
              </div>
              <p className="text-tertiary-content text-sm md:text-right">
                {experience.period}
                <span className="mx-2 hidden md:inline">•</span>
                <span className="block md:inline">{experience.location}</span>
              </p>
            </div>
            <ul className="text-primary-content mt-5 list-disc space-y-3 pl-5 text-sm leading-6 md:text-base">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection

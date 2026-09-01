import { educationData } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'

const EducationSection = () => {
  return (
    <section id="education" className="my-14">
      <SectionHeading title="// Education" />

      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12">
        {educationData.map((education) => (
          <article key={education.institution} className="bg-secondary border-border rounded-[14px] border p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-secondary-content text-xl font-semibold">{education.degree}</h3>
                <p className="text-accent mt-1 font-medium">{education.institution}</p>
              </div>
              <p className="text-tertiary-content text-sm md:text-right">
                {education.period}
                <span className="mx-2 hidden md:inline">•</span>
                <span className="block md:inline">{education.location}</span>
              </p>
            </div>
            <p className="text-primary-content mt-5 text-sm md:text-base">{education.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EducationSection

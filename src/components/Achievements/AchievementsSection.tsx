import { achievementData } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'

const AchievementsSection = () => {
  return (
    <section id="achievements" className="my-14">
      <SectionHeading
        title="// Achievements"
        subtitle="Recognition for technical excellence and community leadership."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2">
        {achievementData.map((achievement) => (
          <article
            key={achievement.title}
            className="bg-secondary border-border rounded-[14px] border p-6 md:p-8">
            <p className="text-accent mb-3 text-sm font-medium">Achievement</p>
            <h3 className="text-secondary-content text-xl font-semibold">{achievement.title}</h3>
            <p className="text-primary-content mt-4 text-sm leading-6 md:text-base">
              {achievement.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AchievementsSection

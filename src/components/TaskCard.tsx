import type { CSSProperties } from 'react'
import type { TaskCardData } from '@/content/types'
import { Icon } from './Icons'
import { Chip, GlassCard } from './ui'

interface TaskCardProps {
  task: TaskCardData
  index: number
}

/** One concrete mission inside an experience. */
export function TaskCard({ task, index }: TaskCardProps) {
  return (
    <GlassCard
      as="li"
      className="reveal group relative flex flex-col overflow-hidden p-6 sm:p-7"
      style={{ '--reveal-delay': `${Math.min(index, 6) * 70}ms` } as CSSProperties}
    >
      {/* Index watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 right-4 font-display text-[4.5rem] leading-none font-bold text-white/[0.045] transition-colors duration-500 group-hover:text-white/[0.09]"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative flex items-center gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/6 text-dragonfruit-soft transition-all duration-500 group-hover:border-dragonfruit/45 group-hover:bg-dragonfruit/16 group-hover:text-white">
          <Icon name={task.icon} size={19} />
        </span>
        <Chip tone="accent">{task.tag}</Chip>
      </div>

      <h4 className="relative mt-5 font-display text-[1.08rem] leading-snug font-semibold tracking-tight text-white text-balance">
        {task.title}
      </h4>

      <p className="relative mt-3 flex-1 text-[0.93rem] leading-[1.7] text-white/58">
        {task.detail}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-1.5 border-t border-white/8 pt-5">
        {task.keywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded-md bg-white/5 px-2 py-1 text-[0.72rem] font-medium tracking-tight text-white/50 transition-colors duration-300 group-hover:bg-white/8 group-hover:text-white/70"
          >
            {keyword}
          </span>
        ))}
      </div>
    </GlassCard>
  )
}

export default TaskCard

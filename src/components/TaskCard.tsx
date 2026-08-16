import { useState, type CSSProperties } from 'react'
import type { TaskCardData } from '@/content/types'
import { Icon } from './Icons'

interface TaskCardProps {
  task: TaskCardData
  index: number
}

/**
 * One mission, as a hairline accordion row.
 *
 * A grid of cards breaks the moment the mission count is odd or a body runs
 * long — uneven heights, empty cells. Rows sidestep both, and dropping the
 * glass panel keeps the emphasis on the text: at seven missions per role, the
 * borders were doing more work than the content.
 */
export function TaskCard({ task, index }: TaskCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <li
      className="reveal border-b border-white/8 first:border-t"
      style={{ '--reveal-delay': `${Math.min(index, 6) * 50}ms` } as CSSProperties}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-center gap-4 py-4 text-left"
      >
        <span className="w-6 shrink-0 font-mono text-[0.72rem] text-white/25">
          {String(index + 1).padStart(2, '0')}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-display text-[1.02rem] font-medium tracking-tight text-white/85 transition-colors duration-300 group-hover:text-white">
            {task.title}
          </span>
        </span>

        <span className="hidden shrink-0 font-mono text-[0.68rem] tracking-[0.12em] text-violet-soft/70 uppercase sm:block">
          {task.tag}
        </span>

        <span
          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/12 text-white/40 transition-all duration-300 group-hover:border-white/30 group-hover:text-white ${
            open ? 'rotate-180' : ''
          }`}
        >
          <Icon name="arrowDown" size={13} />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 sm:pl-10">
            {task.bullets ? (
              <ul className="space-y-2.5 text-[0.92rem] leading-[1.7] text-white/55">
                {task.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.68em] h-px w-3 shrink-0 bg-violet/50"
                    />
                    <span className="text-pretty">{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[0.92rem] leading-[1.7] text-white/55">{task.detail}</p>
            )}

            {task.keywords && task.keywords.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {task.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-md bg-white/5 px-2 py-1 text-[0.72rem] font-medium tracking-tight text-white/45"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  )
}

export default TaskCard

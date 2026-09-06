import type { JSX } from 'react'

/**
 * Renders a string containing **bold** segments, turning them into <b> tags.
 * Keeps content data in data.ts free of JSX while still allowing emphasis.
 */
export function renderBold(text: string): JSX.Element {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <b key={i}>{part.slice(2, -2)}</b>
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

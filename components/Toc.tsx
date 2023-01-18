import { useEffect, useState } from 'react'
import { useStore } from 'store'
import { Toc } from 'types/types'

const Toc = () => {
  const { darkMode } = useStore()
  const [toc, setToc] = useState<Toc[]>([])

  useEffect(() => {
    // 読み込み時トップにスクロール
    // const top = document.getElementById('forscroll')
    // top?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    const elements = document.querySelectorAll('h2, h3')
    const targets = Array.from(elements)

    targets.map((target) => {
      target.id = target.innerHTML
      if (target.id) {
        setToc((prev) => [
          // スプレッド構文のは重複排除
          ...prev,
          { id: target.id, tag: target.tagName },
        ])
        setToc((prev) => [
          ...Array.from(new Map(prev.map((p) => [p.id, p])).values()),
        ])
      }
    })
  }, [darkMode])

  // 目次クリック時の処理
  const handleOnClick = (t: string) => {
    if (t === 'mokuji') {
      const top = document.getElementById('forscroll')
      top?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    const target = document.getElementById(t)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <button className="flex">
        <h4
          id="mokuji"
          className="text-xl mb-4"
          onClick={(e) => handleOnClick(e.currentTarget.id)}
        >
          目次👻
        </h4>
      </button>
      <ul className="steps steps-vertical pl-7 gap-2">
        {toc.map((t) => {
          if (t.tag === 'H2') {
            return (
              <li className="list-decimal" key={t.id}>
                <label
                  className="cursor-pointer"
                  onClick={() => handleOnClick(t.id)}
                >
                  {t.id}
                </label>
              </li>
            )
          } else {
            return (
              <ul key={t.id}>
                <li className="list-disc opacity-80 ml-3">
                  <button onClick={() => handleOnClick(t.id)}>{t.id}</button>
                </li>
              </ul>
            )
          }
        })}
      </ul>
    </>
  )
}

export default Toc

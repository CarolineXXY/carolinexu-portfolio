import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export interface CaseStudyBlock {
  title: string
  content?: string
  outro?: string
  link?: { text: string; url: string }
  subSections?: {
    title?: string
    subtitle?: string
    content?: string
    listType?: 'number' | 'bullet'
    items?: string[]
    image?: { src: string; caption?: string; size?: 'small' | 'medium' | 'large' }
    images?: (string | { src: string; caption?: string; size?: 'small' | 'medium' | 'large' })[]
  }[]
  persona?: {
    avatarInitials: string
    name: string
    tagLine: string
    bio: { label: string; value: string }[]
    quote: string
    sections: { title: string; items: string[] }[]
  }
  cardsTitle?: string
  cards?: { title: string; content: string }[]
  itemsTitle?: string
  items?: string[] | { title: string; description: string }[] | { value: string; label: string; subNote?: string; highlight?: boolean }[]
  images?: (string | { src: string; caption?: string; size?: 'small' | 'medium' | 'large' })[]
  videoUrl?: string
}

export function GenericCaseStudyBlock({ block }: { block: CaseStudyBlock }) {
  const isMetrics = block.items && typeof block.items[0] === 'object' && 'value' in block.items[0];

  return (
    <section className="section-y border-b border-border">
      <h2 className="font-serif mb-6">{block.title}</h2>

      {block.content && (
        <div className={`flex flex-col gap-6 max-w-3xl ${block.link ? 'mb-8' : 'mb-12'}`}>
          {block.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-foreground-muted leading-[1.75]">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {block.link && (
        <a
          href={block.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-[8px] font-sans font-medium text-[14px] md:text-[15px] tracking-[0.04em] text-foreground border-[1.5px] border-foreground rounded-[2px] px-[24px] py-[10px] bg-transparent transition-colors duration-300 hover:border-warm-orange hover:text-warm-orange no-underline mb-12"
        >
          {block.link.text}
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}

      {/* Images if any */}
      {block.images && block.images.length > 0 && (
        <div className="flex flex-col items-center gap-10 mt-4 mb-16 w-full">
          {block.images.map((img, index) => {
            const src = typeof img === 'string' ? img : img.src;
            const caption = typeof img === 'string' ? null : img.caption;
            const size = typeof img === 'object' && 'size' in img ? img.size : 'large';
            const widthClass = size === 'small' ? 'max-w-md' : size === 'medium' ? 'max-w-2xl' : 'max-w-4xl';

            return (
              <div key={index} className={`w-full ${widthClass} flex flex-col items-center`}>
                <div className="w-full overflow-hidden rounded-sm bg-muted mb-4 shadow-sm border border-border flex justify-center">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`${block.title} image ${index + 1}`}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain"
                  />
                </div>
                {caption && <p className="text-sm font-medium text-foreground-muted text-center max-w-xl">{caption}</p>}
              </div>
            )
          })}
        </div>
      )}

      {/* Video if any */}
      {block.videoUrl && (
        <div className="flex flex-col items-center gap-10 mt-4 mb-16 w-full">
          <div className="w-full max-w-4xl flex flex-col items-center">
            <div className="w-full aspect-[16/9] overflow-hidden rounded-sm bg-muted shadow-sm border border-border">
              <iframe
                src={block.videoUrl}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      {/* Sub sections if any */}
      {block.subSections && block.subSections.length > 0 && (
        <div className="w-full flex flex-col gap-10 mb-12">
          {block.subSections.map((sub, idx) => (
            <div key={idx} className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-4 max-w-3xl w-full">
                {sub.title && <h3 className="font-serif text-foreground">{sub.title}</h3>}
                {sub.subtitle && <h4 className="font-medium tracking-[0.08em] uppercase text-foreground mb-1">{sub.subtitle}</h4>}
                {sub.content && <p className="text-foreground-muted leading-[1.75]">{sub.content}</p>}

                {sub.items && sub.items.length > 0 && sub.listType === 'number' && (
                  <ol className="list-decimal pl-5 space-y-3">
                    {sub.items.map((item, i) => (
                      <li key={i} className="text-foreground-muted leading-[1.75] pl-1">{item}</li>
                    ))}
                  </ol>
                )}

                {sub.items && sub.items.length > 0 && sub.listType === 'bullet' && (
                  <ul className="space-y-3">
                    {sub.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="text-accent text-lg leading-none mt-0.5 flex-shrink-0">•</span>
                        <span className="text-foreground-muted leading-[1.75]">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {(sub.image || (sub.images && sub.images.length > 0)) && (() => {
                const imagesToRender = sub.images || (sub.image ? [sub.image] : []);
                return (
                  <div className="w-full flex flex-col gap-8 items-center mt-2 mb-4">
                    {imagesToRender.map((img, imgIdx) => {
                      const src = typeof img === 'string' ? img : img.src;
                      const caption = typeof img === 'string' ? null : img.caption;
                      const size = typeof img === 'object' && 'size' in img ? img.size : 'large';
                      const widthClass = size === 'small' ? 'max-w-md' : size === 'medium' ? 'max-w-2xl' : 'max-w-4xl';
                      return (
                        <div key={imgIdx} className={`w-full flex flex-col items-center ${widthClass}`}>
                          <div className="w-full overflow-hidden rounded-sm bg-muted mb-3 shadow-sm border border-border flex justify-center">
                            <Image
                              src={src || "/placeholder.svg"}
                              alt={caption || "Subsection image"}
                              width={1920}
                              height={1080}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                          {caption && <p className="text-sm font-medium text-foreground-muted text-center max-w-xl">{caption}</p>}
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          ))}
        </div>
      )}

      {/* Persona Card */}
      {block.persona && (
        <div className="w-full bg-white border border-border rounded-sm p-[24px] md:p-[36px] lg:p-[48px] my-12 flex flex-col md:flex-row">

          {/* Left Column */}
          <div className="w-full md:w-[35%] flex flex-col pr-0 md:pr-[24px] lg:pr-[32px] border-b md:border-b-0 md:border-r border-border pb-[32px] md:pb-0 mb-[32px] md:mb-0">
            <div className="w-[72px] h-[72px] md:w-[88px] md:h-[88px] bg-muted rounded-sm flex items-center justify-center mb-0 md:mb-2 text-foreground">
              <span className="font-serif text-2xl md:text-3xl font-medium tracking-wide">{block.persona.avatarInitials}</span>
            </div>

            <h3 className="font-serif font-medium text-foreground mt-[16px]">{block.persona.name}</h3>
            <p className="italic text-foreground-muted mt-[4px]">{block.persona.tagLine}</p>

            <hr className="border-t border-border my-[20px]" />

            <div className="flex flex-col gap-[10px]">
              {block.persona.bio.map((bioItem, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <span className="text-sm uppercase tracking-[0.08em] text-foreground-muted pt-[2px]">{bioItem.label}</span>
                  <span className="text-foreground text-right">{bioItem.value}</span>
                </div>
              ))}
            </div>

            <hr className="border-t border-border my-[20px]" />

            <blockquote className="border-l-2 border-accent pl-[14px] py-[2px]">
              <p className="italic text-foreground-muted leading-[1.6]">"{block.persona.quote}"</p>
            </blockquote>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[65%] flex flex-col pl-0 md:pl-[24px] lg:pl-[32px]">
            {block.persona.sections.map((section, idx) => (
              <div key={idx} className={`${idx !== block.persona!.sections.length - 1 ? 'border-b border-border' : ''} py-[20px] first:pt-0 last:pb-0`}>
                <h4 className="text-sm uppercase tracking-[0.12em] text-foreground-muted mb-[12px] font-semibold">{section.title}</h4>
                <ul className="flex flex-col gap-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-[12px]">
                      <span className="text-accent text-lg leading-[1.75] flex-shrink-0">—</span>
                      <span className="text-foreground-muted leading-[1.75] font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Cards array */}
      {block.cardsTitle && block.cards && block.cards.length > 0 && (
        <h4 className="font-medium tracking-[0.08em] uppercase text-foreground mb-6">{block.cardsTitle}</h4>
      )}
      {block.cards && block.cards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full">
          {block.cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-border p-6 rounded-sm flex flex-col">
              <span className="text-accent font-serif text-4xl mb-3">{(idx + 1).toString().padStart(2, '0')}</span>
              <h4 className="text-foreground text-base mb-2 leading-tight">{card.title}</h4>
              <p className="text-foreground-muted leading-[1.6]">{card.content}</p>
            </div>
          ))}
        </div>
      )}

      {/* List items if any */}
      {block.itemsTitle && block.items && block.items.length > 0 && (
        <h4 className="font-medium tracking-[0.08em] uppercase text-foreground mb-6">{block.itemsTitle}</h4>
      )}
      {block.items && block.items.length > 0 && (
        <div className={isMetrics ? "grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12" : "mb-12 max-w-3xl"}>
          {!isMetrics ? (
            <ul className="space-y-6">
              {block.items.map((item, index) => {
                if (typeof item === 'string') {
                  return (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 border-[1.5px] border-foreground text-foreground text-sm font-medium flex items-center justify-center rounded-full">
                        {index + 1}
                      </span>
                      <span className="text-foreground-muted leading-[1.75] pt-1">{item}</span>
                    </li>
                  )
                } else if ('title' in item && 'description' in item) {
                  return (
                    <li key={index} className="flex flex-col gap-1">
                      <strong className="text-foreground font-medium">{item.title}</strong>
                      <span className="text-foreground-muted leading-[1.75]">{item.description}</span>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          ) : (
            block.items.map((item, index) => {
              if (typeof item === 'object' && 'value' in item) {
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <span className="font-serif text-4xl md:text-5xl text-accent">{item.value}</span>
                    <span className="text-sm font-medium text-foreground tracking-[0.04em] uppercase">{item.label}</span>
                    {item.subNote && (
                      <span className="text-sm text-foreground-muted leading-[1.5] mt-1">{item.subNote}</span>
                    )}
                  </div>
                )
              }
              return null;
            })
          )}
        </div>
      )}

      {/* Outro content if any */}
      {block.outro && (
        <div className="flex flex-col gap-6 mt-12 mb-12 max-w-3xl">
          {block.outro.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-foreground-muted leading-[1.75]">
              {paragraph}
            </p>
          ))}
        </div>
      )}

    </section>
  )
}

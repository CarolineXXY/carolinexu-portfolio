"use client"


interface SkillsMarqueeProps {
  skills: string[]
}

export function SkillsMarquee({ skills }: SkillsMarqueeProps) {
  // Repeat to ensure it's wide enough for ultrawide screens
  const content = [...skills, ...skills, ...skills, ...skills]

  return (
    <div className="relative w-full overflow-hidden border-y border-[#E8E3DC] h-[40px] bg-[#FAF9F6] flex items-center">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

      <div
        className="flex w-max animate-marquee-right"
        style={{ animationDuration: "120s" }}
      >
        <div className="flex items-center">
          {content.map((skill, index) => (
            <div key={`set1-${index}`} className="flex items-center">
              <span className="font-sans font-medium text-[12px] md:text-[13px] tracking-[0.12em] uppercase text-[#1A1A1A] whitespace-nowrap mr-[28px]">
                {skill}
              </span>
              <span className="text-[#E8602C] text-[8px] leading-none select-none flex items-center mr-[28px]">
                ✦
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          {content.map((skill, index) => (
            <div key={`set2-${index}`} className="flex items-center">
              <span className="font-sans font-medium text-[12px] md:text-[13px] tracking-[0.12em] uppercase text-[#1A1A1A] whitespace-nowrap mr-[28px]">
                {skill}
              </span>
              <span className="text-[#E8602C] text-[8px] leading-none select-none flex items-center mr-[28px]">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

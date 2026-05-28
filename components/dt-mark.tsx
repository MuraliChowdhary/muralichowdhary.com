
export function DTMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      {/* Pixel-art "M" */}
      <rect fill="currentColor" x="0" y="0" width="32" height="256" />
      <rect fill="currentColor" x="128" y="0" width="32" height="256" />
      <rect fill="currentColor" x="32" y="32" width="32" height="64" />
      <rect fill="currentColor" x="64" y="64" width="32" height="64" />
      <rect fill="currentColor" x="96" y="32" width="32" height="64" />

      {/* Pixel-art "S" */}
      <rect fill="currentColor" x="256" y="0" width="192" height="32" />
      <rect fill="currentColor" x="256" y="32" width="32" height="80" />
      <rect fill="currentColor" x="256" y="112" width="192" height="32" />
      <rect fill="currentColor" x="416" y="144" width="32" height="80" />
      <rect fill="currentColor" x="256" y="224" width="192" height="32" />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256">
    <!-- M -->
    <rect fill="${color}" x="0" y="0" width="32" height="256"/>
    <rect fill="${color}" x="128" y="0" width="32" height="256"/>
    <rect fill="${color}" x="32" y="32" width="32" height="64"/>
    <rect fill="${color}" x="64" y="64" width="32" height="64"/>
    <rect fill="${color}" x="96" y="32" width="32" height="64"/>

    <!-- S -->
    <rect fill="${color}" x="256" y="0" width="192" height="32"/>
    <rect fill="${color}" x="256" y="32" width="32" height="80"/>
    <rect fill="${color}" x="256" y="112" width="192" height="32"/>
    <rect fill="${color}" x="416" y="144" width="32" height="80"/>
    <rect fill="${color}" x="256" y="224" width="192" height="32"/>
  </svg>`
}


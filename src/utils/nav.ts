export function sectionLink(id: string) {
  // Si estás en home, usa solo #id (scroll sin navegación)
  if (typeof window !== "undefined" && window.location.pathname === "/") return `#${id}`;
  // Si estás en otra página, manda a home + anchor
  return `/#${id}`;
}

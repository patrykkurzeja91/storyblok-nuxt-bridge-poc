export const scrollTo = (hash = '#form-section', offset = 0) => {
  if (document.querySelector(hash)) {
    const element = document.querySelector(hash)
    const position = element.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: position, behavior: 'smooth' })
    // location.hash = '#' + hash

    return
  }
  console.error('No selector provided')
}

export const slugify = positionName => positionName.replace(/\s+/g, '-').toLowerCase()

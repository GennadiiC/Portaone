

export const rareFirstLetter = (phrase: string): string => {
  
  let splitted: string[] = phrase.toLowerCase().split(/[^A-Z]/ig)
    .filter(word => word !== '')
    .map(str => {
      let splsort = str
        .split('')
        .filter((item, i, arr) => arr.lastIndexOf(item) === arr.indexOf(item))
        .join('')
      return splsort
    })
    .filter((w, i, arr) => arr.indexOf(w) === i)
    .map(item => item.slice(0, 1))
    .filter((item, i, arr) => arr.lastIndexOf(item) === arr.indexOf(item))
  return splitted[0]
}

export default function sortBy(prop: string) {
  return function (a: any, b: any) {
    if (!a || !a[prop]) return 1
    if (!b || !b[prop]) return -1
    if (+a[prop] === +b[prop]) return 0
    if (+a[prop] > +b[prop]) return 1
    return -1
  }
}

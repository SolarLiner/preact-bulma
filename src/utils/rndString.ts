export function chr4() {
  return Math.random()
    .toString(36)
    .slice(-4);
}

export default function randomString(length?: number) {
  const chrs = [...new Array(Math.ceil(length / 4))].map(_ => chr4()).join("");
  if (length % 4 === 0) return chrs;
  else return chrs.slice(-length);
}

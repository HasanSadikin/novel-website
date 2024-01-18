export function toPascalCase(str: string) {
  return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
  });
}

export function whiteSpaceToDash(str: string) {
  return str.replaceAll(" ", "-");
}

export function dashToWhiteSpace(str: string) {
  return str.replaceAll("-", " ");
}

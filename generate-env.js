const assert = require("assert");

const zws = [
  "\u200c",
  "\u200d",
  "\u{e0061}",
  "\u{e0062}",
  "\u{e0063}",
  "\u{e0064}",
  "\u{e0065}",
  "\u{e0066}",
  "\u{e0067}",
  "\u{e0068}",
  "\u{e0069}",
  "\u{e006a}",
  "\u{e006b}",
  "\u{e006c}",
  "\u{e006d}",
  "\u{e006e}",
  "\u{e006f}",
  "\u{e0070}",
  "\u{e0071}",
  "\u{e0072}",
  "\u{e0073}",
  "\u{e0074}",
  "\u{e0075}",
  "\u{e0076}",
  "\u{e0077}",
  "\u{e0078}",
  "\u{e0079}",
  "\u{e007a}",
  "\u{e007f}",
];

/**
 * Encode an array of strings.
 * @param {Array<string>} input
 */
function encode(input) {
  let result = [];

  for (const element of input) {
    let str = "";

    for (let i = 0; i < element.length; i++) {
      str += `\\u${element[i].codePointAt(0).toString(16)}`;
    }

    result.push(str);
  }

  return JSON.stringify(result).replaceAll("\\\\", "\\");
}

// https://tools.ietf.org/id/draft-ietf-json-rfc4627bis-09.html#rfc.section.7.p.4:~:text=To%20escape%20an%20extended%20character%20that,(U%2B1D11E)%20may%20be%20represented%20as%20%22%5CuD834%5CuDD1E%22.
assert.strictEqual(encode(["\u{1D11E}"]), '["\\ud834\\udd1e"]');
console.log(encode(zws));

/**
 * @desc 用于校验身份证是否有效
 * @param string
 * @return boolean
 */
export function isIDCard(string: string): boolean {
  const lengthEqual18 = lengthEqual(18);
  const lengthEqual15 = lengthEqual(15);
  const no_space_str = getNoSpaceStr(string);
  if (lengthEqual18(no_space_str)) {
    const iDCardReg = /^\d{6}\d{8}\d{3}[0-9xX]$/;
    const match = no_space_str.match(iDCardReg);
    console.log(match);
    return !!match;

  }

  return lengthEqual15(no_space_str);
}

/**
 * @desc 计算最后一位校验駶
 * @param { string } string
 * @return { string }
 */
export function calcValidator(string: string): string {
  const weighted = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const validator = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
  const sum = string.split("").map((value: string, i: number) => {
    return Number(value) * weighted[i];
  }).reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const mod = sum % 11;
  return `${validator[mod]}`;
}
/**
 * @desc 获取没有空格后的字符串
 * @param { string } string
 * @desc { string }
 */
function getNoSpaceStr(string: string): string {
  return string.replace(/\s+/, "");
}

function lengthEqual(length: number) {
  return (string: string) => {
    return string.length === length;
  };
}

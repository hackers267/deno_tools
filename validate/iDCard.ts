/**
 * @desc 用于校验身份证是否有效
 * @param string
 * @return boolean
 */
export function isIDCard(string: string): boolean {
  const lengthEqual18 = lengthEqual(18);
  const lengthEqual15 = lengthEqual(15);
  if (lengthEqual18(string)) {
    return true;
  }
  return lengthEqual15(string);

}

function lengthEqual(length: number) {
  return (string: string) => {
    return string.length === length;
  };
}

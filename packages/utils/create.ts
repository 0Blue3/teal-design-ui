/* BEM规范 block代码块 element元素 modifier装饰 state 状态*/
// t-button
// t-button__element
// t-button__element--disabled
// is-checked is-enabled

/**
 *
 * @param prefixName 前缀名
 * @param block 代码块
 * @param element 元素
 * @param modifier 装饰
 */
function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  blockSuffix && (prefixName += `-${blockSuffix}`);
  element && (prefixName += `__${element}`);
  modifier && (prefixName += `--${modifier}`);
  return prefixName;
}

function createBEM(prefixName: string) {
  const b = (blockSuffix: string = "") => _bem(prefixName, blockSuffix, "", "");
  const e = (element: string = "") =>
    element ? _bem(prefixName, "", element, "") : "";
  const m = (modifier: string = "") =>
    modifier ? _bem(prefixName, "", "", modifier) : "";

  const be = (blockSuffix: string = "", element: string = "") =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, "") : "";
  const bm = (blockSuffix: string = "", modifier: string = "") =>
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, "", modifier) : "";
  const em = (element: string = "", modifier: string = "") =>
    element && modifier ? _bem(prefixName, "", element, modifier) : "";
  const bem = (
    blockSuffix: string = "",
    element: string = "",
    modifier: string = ""
  ) =>
    blockSuffix && element && modifier
      ? _bem(prefixName, blockSuffix, element, modifier)
      : "";

  const is = (name: string, state: string | boolean) =>
    state ? `is-${name}` : "";

  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  };
}

export function createNamespace(name: string) {
  const prefixName = `t-${name}`;
  return createBEM(prefixName);
}

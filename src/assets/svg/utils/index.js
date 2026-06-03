function styleToStringToObject(style) {
  // 空值判断
  if (!style) return {};

  const styleObj = {};

  // 按 ; 分割，并过滤空字符串（处理末尾分号、连续分号）
  style.split(';')
    .filter(item => item.trim() !== '')
    .forEach(item => {
      // 只分割第一个 :，解决 value 里带冒号的场景
      const index = item.indexOf(':');
      if (index === -1) return; // 没有冒号，跳过

      const key = item.slice(0, index).trim();
      const value = item.slice(index + 1).trim();

      if (key && value) {
        styleObj[key] = value;
      }
    });

  return styleObj;
}

export default styleToStringToObject;
const f = ({
  uid: o,
  uploadUrl: a,
  selectedFile: n,
  onSuccess: p,
  onError: s,
  onProgress: c
}) => {
  const e = new XMLHttpRequest(), r = new FormData();
  r.append("file", n);
  try {
    e.open("POST", a, !0);
  } catch {
    s(o, "上传失败、请求地址有误");
  }
  return e.upload.onprogress = (t) => {
    if (t.lengthComputable) {
      const l = t.loaded / t.total * 100;
      c(o, l);
    }
  }, e.onload = function() {
    if (e.status === 200)
      try {
        const t = JSON.parse(e.responseText);
        t.error || t.err ? s(o, t) : p(o, t);
      } catch {
        s(o, "无效的 JSON 数据");
      }
  }, e.onerror = function() {
    s(o, e.responseText);
  }, e.send(r), {
    abort() {
      e.abort();
    }
  };
};
export {
  f as UploadRequest
};

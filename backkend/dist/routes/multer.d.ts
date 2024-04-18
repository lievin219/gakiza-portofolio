/// <reference types="qs" />
/// <reference types="express" />
declare const upload: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export default upload;

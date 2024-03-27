type ParseResult<T> =
   | { parsed: T; hasError: false; error?: undefined }
   | { parsed?: undefined; hasError: true; error?: unknown }
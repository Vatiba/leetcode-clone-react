import SecureLS from "secure-ls";

let ls: SecureLS | undefined;
const init = () => {
   ls = new SecureLS({
      encodingType: 'aes',
      isCompression: false,
      encryptionSecret: '-*prokod*-',
   });
};
if (localStorage) init();

export interface PersistentStorage {
   getItem<T>(key: string, typeChecker: (o: any) => o is T): unknown | null;
   setItem(key: string, value: any): void;
}

class LocalStorageWorker implements PersistentStorage {
   private static instance: LocalStorageWorker;

   private constructor() { }

   public static getInstance(): LocalStorageWorker {
      if (!LocalStorageWorker.instance) {
         LocalStorageWorker.instance = new LocalStorageWorker();
      }
      return LocalStorageWorker.instance;
   }

   public static safeJsonParse = <T>(guard: (o: any) => o is T) =>
      (text: string): ParseResult<T> => {
         const parsed = JSON.parse(text);
         return guard(parsed) ? { parsed, hasError: false } : { hasError: true }
      }

   public getItem<T>(key: string, typeChecker: (o: any) => o is T) {
      const item = ls?.get(key);

      if (item === null) return null;
      if (item === 'null') {
         this.setItem(key);
         return null;
      }
      if (item === 'undefined') {
         this.setItem(key);
         return null;
      }
      if (item)
         try {
            const parsedData = LocalStorageWorker.safeJsonParse(typeChecker)(item);
            if (!parsedData.hasError && parsedData.parsed)
               return parsedData.parsed;
            return null;
         } catch (e) {
            return null;
         }

      return null
   }

   public setItem(key: string, value?: any) {
      if (value === undefined) {
         ls?.remove(key);
      } else {
         ls?.set(key, JSON.stringify(value));
      }
   }
}

export default LocalStorageWorker;
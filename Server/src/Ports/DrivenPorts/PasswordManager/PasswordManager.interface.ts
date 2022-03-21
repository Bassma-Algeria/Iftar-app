export interface IPasswordManager {
  hash(key: string): Promise<string>;
}

import { IPushHandler } from './abstraction';

/**
 * Add them like this:
 * - Create a new file `mynot.push-handler.ts`
 * - Inside this file create a class that `implements IPushHandler<MyType>`
 * - Add an instance of the class to this array:
 */
const pushHandlers: IPushHandler[] = [];

export type { IPushHandler };
export default pushHandlers;

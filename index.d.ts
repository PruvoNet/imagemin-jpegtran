import {type Plugin} from 'imagemin';

export interface Options {
	/** Use arithmetic coding. @default false */
	arithmetic?: boolean;
	/** Create progressive JPEG file. @default false */
	progressive?: boolean;
}

declare const imageminJpegtran: (options?: Options) => Plugin;

export default imageminJpegtran;

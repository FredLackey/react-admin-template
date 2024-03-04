import { Buffer as _buffer } from 'buffer';

export const Buffer = window.Buffer || _buffer;

export default Buffer;
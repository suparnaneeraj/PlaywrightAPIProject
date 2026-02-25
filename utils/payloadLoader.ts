import fs from 'fs';
import path from 'path';

export function loadPayload(fileName: string) {
  const payloadPath = path.join(process.cwd(), 'payloads', fileName);
  return JSON.parse(fs.readFileSync(payloadPath, 'utf-8'));
}
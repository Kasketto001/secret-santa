import { db } from './db';
import { randomBytes, pbkdf2Sync } from 'crypto';

export function hashPassword(password: string): { hash: string; salt: string } {
  const salt = randomBytes(16).toString('hex');
  const hash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return { hash, salt };
}

export function verifyPassword(password: string, hash: string, salt: string): boolean {
  const verifyHash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash === verifyHash;
}

export function createUser(email: string, name: string, password: string) {
  const { hash, salt } = hashPassword(password);
  const id = randomBytes(16).toString('hex');
  
  const stmt = db.prepare(`
    INSERT INTO users (id, email, name, password)
    VALUES (?, ?, ?, ?)
  `);
  
  return stmt.run(id, email, name, `${hash}.${salt}`);
}

export function getUserByEmail(email: string) {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
  return stmt.get(email);
}
import { UserSession } from './session.entities';
import sessionStorage from './session.storage';

export function setSession(sessionToken: string, userId: UserSession): void {
  sessionStorage[sessionToken] = userId;
}

export function removeSession(sessionToken: string): void {
  delete sessionStorage[sessionToken];
}

export function getCurrentUserSession(sessionToken: string): UserSession {
  return sessionStorage[sessionToken];
}

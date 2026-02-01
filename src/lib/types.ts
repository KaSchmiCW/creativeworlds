import { dictionaries } from "../i18n/index.js";
export interface User {
    id: string;
    displayName: string;
    accountName: string;
    email: string;
    createdAt: Date;
    languagePreference?: Language;
    systemLanguage?: string;
}

export interface Post {
    id: string;
    author: User;
    content: string;
    character: Character
    createdAt: Date;
    updatedAt: Date;
}

export interface Character {
    id: string;
    name: string;
    description?: string;
    portraitUrl?: string;
    details?: CharacterDetailValue[];
    age?: number;
    gender: Gender
    createdAt: Date;
}

export interface CharacterDetailValue {
    id: string;
    label: string;
    value: string;
    displayedAsTag: boolean;
}

// GENDER section
export const GENDERS = [
  "unspecified",
  "female",
  "male",
  "non-binary",
  "other",
] as const;

export type Gender = typeof GENDERS[number];

export function parseGender(value: unknown): Gender {
    if (typeof value === "string" && (GENDERS.includes(value as Gender))) {
        return value as Gender;
    }

    return "unspecified";
}

// LANGUAGE section
export const LANGUAGES = Object.keys(dictionaries) as readonly string[];
export type Language = keyof typeof dictionaries;

export function parseLanguage(value: unknown): Language {
    if (typeof value === "string" && LANGUAGES.includes(value as Language)) {
        return value as Language;
    }

    return "en"
}
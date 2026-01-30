import type { Language } from "../i18n/index.js";
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

export type Gender = 
    | "unspecified"
    | "female"
    | "male"
    | "non-binary"
    | "other"
;

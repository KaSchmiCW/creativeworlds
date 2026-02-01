import usersRaw from "@/src/mock/user.json";
import charactersRaw from "@/src/mock/characters.json";
import postsRaw from "@/src/mock/posts.json";
import { type User, type Character, type Post, parseGender, parseLanguage } from "../types";

export const usersById: Record<string, User> = Object.fromEntries(
    usersRaw.map((user) => [
        user.id,
        {
            ...user,
            languagePreference: parseLanguage(user.languagePreference),
            createdAt: new Date(user.createdAt)
        },
    ]));

export const charactersById: Record<string, Character> = Object.fromEntries(
    charactersRaw.map((character) => [
        character.id,
        {
            ...character,
            createdAt: new Date(character.createdAt),
            gender: parseGender(character.gender)
        },
    ]));

export const posts: Post[] = postsRaw.map((p) => {
    const author = usersById[p.authorId];
    const character = charactersById[p.characterId];

    if (!author) {
        throw new Error(`Post ${p.id} references unknown author ${p.authorId}`);
    }

    if (!character) {
        throw new Error(`Post ${p.id} references unknown character ${p.characterId}`);
    }
    return {
        id: p.id,
        content: p.content,
        author: usersById[p.authorId],
        character: charactersById[p.characterId],
        createdAt: new Date(p.createdAt),
        updatedAt: new Date(p.updatedAt),
    }
});

 
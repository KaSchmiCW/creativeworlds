import en from "./en.json";
import de from "./de.json";
import { Gender } from "../lib/types";
import { isObject } from "../lib/utils/guards";

export const dictionaries = {
  en,
  de,
};

export type Language = keyof typeof dictionaries;

/** 
 * Translates a key into the specified language using the loaded dictionaries.
 * If the key is not found, it returns the key itself as a fallback.
 * @param key The translation key, e.g., "reader.title"
 * @param language The target language code, e.g., "en" or "de"
 * @returns The translated string or the key if not found.
**/
export function translate(
  key: string,
  language: Language
): string {
  const keyParts = key.split("."); //e.g. split "reader.title" into ["reader", "title"]

  let currentNode: unknown = dictionaries[language];

  for (const part of keyParts) {
    //check if language dictionary has this part
    if(isObject(currentNode) && part in currentNode) { 
      currentNode = (currentNode as Record<string, unknown>)[part]; //return the next node
    } else {
      return key; //fallback to key if not found, aborting the loop
    }
  }

  return typeof currentNode === "string" ? currentNode : key;
}

/** 
 * Gets the localized label for a given gender. 
 * @param gender The gender value to translate.
 * @param language The target language code.
 * @returns The localized gender label.
**/
export function getGenderLabel(
  gender: Gender,
  language: Language
): string {
  return translate(`gender.${gender}`, language);
}


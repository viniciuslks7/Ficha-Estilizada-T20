import { CLASSES_DETAIL } from "../components/consts/classes";

export function getClassDetail(className: string) {
    return CLASSES_DETAIL.find(cls =>
        cls.name.toLowerCase() === (className || '').trim().toLowerCase()
    ) || null;
}
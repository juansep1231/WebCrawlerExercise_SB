export function countWords(title: string): number {
    const titleLenght = title
    .split(' ')
    .map(word => word.replace(/[^\w-]/g, ''))
    .filter(Boolean)
    .length
    
    return titleLenght;
}
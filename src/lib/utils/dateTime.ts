
export function dateString(date: string): string {
    const datestr = new Date(date);
    const formatter = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    const humanReadable = formatter.format(datestr);
    return humanReadable;
}

export function getThefirstFiveSentences(text: string): string {
	if (text) {
		const sentences = text.split(".");
		const firstFiveSentences = sentences.slice(0, 3).join(".");
		return firstFiveSentences;
	}
	return "";
}

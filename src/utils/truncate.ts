const truncateText = (text: string | undefined | null, limit: number): string => {
  if (!text || typeof text !== "string") {
    return ""; // Return an empty string if text is null, undefined, or not a string
  }

  if (text.length <= limit) {
    return text; // No need to truncate
  }

  // Truncate by letters/characters
  let truncatedText = text.substring(0, limit);

  // Find the last space to avoid cutting a word in the middle (optional)
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");

  // If we want to cut at the last complete word
  if (lastSpaceIndex > 0) {
    truncatedText = truncatedText.substring(0, lastSpaceIndex);
  }

  // Add ellipsis
  truncatedText += "...";

  return truncatedText;
};

export default truncateText;
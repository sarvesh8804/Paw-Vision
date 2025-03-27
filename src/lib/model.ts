import { toast } from "sonner";

// Define the prediction result type
export interface PredictionResult {
  status: 'healthy' | 'injured';
  confidence: number;
  details?: string;
}

/**
 * Process an image using a CNN model to predict animal health
 * @param imageFile The image file to analyze
 * @returns A promise that resolves to a prediction result
 */
export async function predictAnimalHealth(imageFile: File): Promise<PredictionResult> {
  try {
    const formData = new FormData();
    formData.append("file", imageFile); // Ensure the key matches FastAPI's `file` param

    // 🔹 Update the API URL based on your backend
    const response = await fetch("http://127.0.0.1:8000/predict/", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    return {
      status: data.status as "healthy" | "injured",
      confidence: data.confidence,
      details: data.status === "healthy"
        ? "No visible signs of injury. The animal appears to be in good health."
        : "Potential injury detected. Consider consulting a wildlife expert.",
    };
  } catch (error) {
    console.error("Error predicting animal health:", error);
    throw error;
  }
}

import tensorflow as tf
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import numpy as np

# Load your model
model = tf.keras.models.load_model("injury_classifier.h5")

app = FastAPI()

# Allow CORS for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict/")
async def predict_image(file: UploadFile = File(...)):
    contents = await file.read()
    img = Image.open(io.BytesIO(contents)).convert("RGB")

    img = img.resize((416, 416))
    img_array = np.array(img) / 255.0
    img_tensor = np.expand_dims(img_array, axis=0)

    prediction = model.predict(img_tensor)  # Example output: [[0.9, 0.1]]

    confidence = np.max(prediction)  # Get highest confidence score

    # ✅ If confidence is high, classify as injured
    if confidence > 0.7:
        return {"status": "injured", "confidence": float(confidence)}
    else:
        # ✅ If confidence is low, return "healthy" with high confidence
        return {"status": "healthy", "confidence": float(1 - confidence)}

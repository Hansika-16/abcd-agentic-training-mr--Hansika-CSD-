import pickle

# Load trained model & scaler
with open("student_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("scaler.pkl", "rb") as f:
    scaler = pickle.load(f)

# Take user input
studytime = float(input("Study hours (1–4): "))
absences = float(input("Absences: "))
internal = float(input("Internal marks (G2): "))

# Prepare and scale input
user_data = scaler.transform([[studytime, absences, internal]])

# Predict
prob = model.predict_proba(user_data)[0][1] * 100
result = "PASS" if prob >= 50 else "FAIL"

print("\nPrediction:", result)
print("Confidence:", round(prob, 2), "%")
